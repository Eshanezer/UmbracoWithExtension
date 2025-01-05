import { type UmbCurrentUserModel, UMB_CURRENT_USER_CONTEXT } from "@umbraco-cms/backoffice/current-user";
import { LitElement, css, html, customElement, state, repeat } from "@umbraco-cms/backoffice/external/lit";
import { type UmbUserDetailModel, UmbUserCollectionRepository } from '@umbraco-cms/backoffice/user';
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";

@customElement('my-welcome-dashboard')
export class MyWelcomeDashboardElement extends UmbElementMixin(LitElement) {
    @state()
    private _currentUser?: UmbCurrentUserModel;

    @state()
    private _userData: Array<UmbUserDetailModel> = [];

    #userRepository = new UmbUserCollectionRepository(this);

    constructor() {
        super();
        this.consumeContext(UMB_CURRENT_USER_CONTEXT, (instance) => {
            this._observeCurrentUser(instance);
        });
        this._getPagedUserData();
    }

    //Get the current user
    private async _observeCurrentUser(instance: typeof UMB_CURRENT_USER_CONTEXT.TYPE) {
        this.observe(instance.currentUser, (currentUser) => {
            this._currentUser = currentUser;
        });
    }

    //Get all users
    private async _getPagedUserData() {
        const { data } = await this.#userRepository.requestCollection();
        this._userData = data?.items ?? [];
    }

    render() {
        return html`
			<uui-box>
				<h1 slot="headline">
					<umb-localize key="welcomeDashboard_heading">Welcome</umb-localize>
					${this._currentUser?.name ?? 'Unknown'}!
				</h1>
				<div>
					<p>
						<umb-localize key="welcomeDashboard_bodytext">
							This is the Backoffice. From here, you can modify the content, media, and settings of your website.
						</umb-localize>
					</p>
					<p>
						<umb-localize key="welcomeDashboard_copyright"> © Sample Company 20XX </umb-localize>
					</p>
				</div>

				<uui-table id="users-wrapper">
					<uui-table-row>
						<uui-table-head-cell>Name</uui-table-head-cell>
						<uui-table-head-cell>Email</uui-table-head-cell>
						<uui-table-head-cell>Status</uui-table-head-cell>
					</uui-table-row>
                    ${repeat(this._userData, (user) => user.unique, (user) => this._renderUser(user))}
				</uui-table>
			</uui-box>
		`;
    }

    private _renderUser(user: UmbUserDetailModel) {
        if (!user) return;
        return html`<uui-table-row class="user">
			<uui-table-cell>${user.name}</uui-table-cell>
			<uui-table-cell>${user.email}</uui-table-cell>
			<uui-table-cell>${user.state}</uui-table-cell>
		</uui-table-row>`;
    }

    static styles = [
        css`
			:host {
				display: block;
				padding: var(--uui-size-layout-1);
			}

			uui-table-head-cell {
				font-weight: bold;
			}

			.user:hover,
			.user:focus {
				cursor: pointer;
				background-color: var(--uui-color-surface-alt);
			}
		`,
    ];
}

export default MyWelcomeDashboardElement;

declare global {
    interface HTMLElementTagNameMap {
        'my-welcome-dashboard': MyWelcomeDashboardElement;
    }
}