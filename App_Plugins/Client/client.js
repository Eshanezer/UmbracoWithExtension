import { LitElement as c, html as i, css as n, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as d } from "@umbraco-cms/backoffice/element-api";
var h = Object.defineProperty, p = Object.getOwnPropertyDescriptor, y = (s, o, m, l) => {
  for (var e = l > 1 ? void 0 : l ? p(o, m) : o, t = s.length - 1, r; t >= 0; t--)
    (r = s[t]) && (e = (l ? r(o, m, e) : r(e)) || e);
  return l && e && h(o, m, e), e;
};
let a = class extends d(c) {
  render() {
    return i`
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
};
a.styles = [
  n`
      :host {
        display: block;
        padding: 24px;
      }
    `
];
a = y([
  b("my-welcome-dashboard")
], a);
const _ = a;
export {
  a as MyWelcomeDashboardElement,
  _ as default
};
//# sourceMappingURL=client.js.map
