import { LitElement, css, html, customElement} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";

@customElement('my-welcome-dashboard')
export class MyWelcomeDashboardElement extends UmbElementMixin(LitElement) {

  render() {
    return html`
      <h1>
        <umb-localize key="welcomeDashboard_heading">Welcome</umb-localize>
        Dashboard
      </h1>
      <div>
        <p>
          <umb-localize key="welcomeDashboard_bodytext">
            This is the Backoffice. From here, you can modify the content,
            media, and settings of your website.
          </umb-localize>
        </p>
        <p>
          <umb-localize key="welcomeDashboard_copyright">
            © Sample Company 20XX
          </umb-localize>
        </p>
      </div>
    `;
  }

  static styles = [
    css`
      :host {
        display: block;
        padding: 24px;
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