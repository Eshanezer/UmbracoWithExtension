import { UMB_CURRENT_USER_CONTEXT as m } from "@umbraco-cms/backoffice/current-user";
import { LitElement as b, html as n, repeat as p, css as _, state as h, customElement as v } from "@umbraco-cms/backoffice/external/lit";
import { UmbUserCollectionRepository as y } from "@umbraco-cms/backoffice/user";
import { UmbElementMixin as f } from "@umbraco-cms/backoffice/element-api";
var w = Object.defineProperty, U = Object.getOwnPropertyDescriptor, d = (e) => {
  throw TypeError(e);
}, c = (e, t, a, o) => {
  for (var r = o > 1 ? void 0 : o ? U(t, a) : t, s = e.length - 1, u; s >= 0; s--)
    (u = e[s]) && (r = (o ? u(t, a, r) : u(r)) || r);
  return o && r && w(t, a, r), r;
}, D = (e, t, a) => t.has(e) || d("Cannot " + a), C = (e, t, a) => (D(e, t, "read from private field"), a ? a.call(e) : t.get(e)), E = (e, t, a) => t.has(e) ? d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, a), i;
let l = class extends f(b) {
  constructor() {
    super(), this._userData = [], E(this, i, new y(this)), this.consumeContext(m, (e) => {
      this._observeCurrentUser(e);
    }), this._getPagedUserData();
  }
  //Get the current user
  async _observeCurrentUser(e) {
    this.observe(e.currentUser, (t) => {
      this._currentUser = t;
    });
  }
  //Get all users
  async _getPagedUserData() {
    const { data: e } = await C(this, i).requestCollection();
    this._userData = (e == null ? void 0 : e.items) ?? [];
  }
  render() {
    var e;
    return n`
			<uui-box>
				<h1 slot="headline">
					<umb-localize key="welcomeDashboard_heading">Welcome</umb-localize>
					${((e = this._currentUser) == null ? void 0 : e.name) ?? "Unknown"}!
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
                    ${p(this._userData, (t) => t.unique, (t) => this._renderUser(t))}
				</uui-table>
			</uui-box>
		`;
  }
  _renderUser(e) {
    if (e)
      return n`<uui-table-row class="user">
			<uui-table-cell>${e.name}</uui-table-cell>
			<uui-table-cell>${e.email}</uui-table-cell>
			<uui-table-cell>${e.state}</uui-table-cell>
		</uui-table-row>`;
  }
};
i = /* @__PURE__ */ new WeakMap();
l.styles = [
  _`
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
		`
];
c([
  h()
], l.prototype, "_currentUser", 2);
c([
  h()
], l.prototype, "_userData", 2);
l = c([
  v("my-welcome-dashboard")
], l);
const $ = l;
export {
  l as MyWelcomeDashboardElement,
  $ as default
};
//# sourceMappingURL=client.js.map
