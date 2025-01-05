import { UMB_CURRENT_USER_CONTEXT as m } from "@umbraco-cms/backoffice/current-user";
import { LitElement as u, html as c, repeat as _, css as v, state as p, customElement as y } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as f } from "@umbraco-cms/backoffice/element-api";
import { UmbUserCollectionRepository as b } from "@umbraco-cms/backoffice/user";
var U = Object.defineProperty, w = Object.getOwnPropertyDescriptor, h = (e) => {
  throw TypeError(e);
}, d = (e, r, t, o) => {
  for (var s = o > 1 ? void 0 : o ? w(r, t) : r, i = e.length - 1, n; i >= 0; i--)
    (n = e[i]) && (s = (o ? n(r, t, s) : n(s)) || s);
  return o && s && U(r, t, s), s;
}, g = (e, r, t) => r.has(e) || h("Cannot " + t), D = (e, r, t) => (g(e, r, "read from private field"), t ? t.call(e) : r.get(e)), C = (e, r, t) => r.has(e) ? h("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), l;
let a = class extends f(u) {
  constructor() {
    super(), this._userData = [], C(this, l, new b(this)), this.consumeContext(m, (e) => {
      this._observeCurrentUser(e);
    }), this._getPagedUserData();
  }
  async _observeCurrentUser(e) {
    this.observe(e.currentUser, (r) => {
      this._currentUser = r;
    });
  }
  async _getPagedUserData() {
    const { data: e } = await D(this, l).requestCollection();
    this._userData = (e == null ? void 0 : e.items) ?? [];
  }
  render() {
    var e;
    return c`
    	    <h1>
      	        <umb-localize key="welcomeDashboard_heading">Welcome</umb-localize>
       		${((e = this._currentUser) == null ? void 0 : e.name) ?? "Unknown"}!
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
  	<div id="users-wrapper">
        ${_(this._userData, (r) => r.unique, (r) => this._renderUser(r))}
    </div>
    `;
  }
  _renderUser(e) {
    return c`<div class="user">
		<div>${e.name}</div>
		<div>${e.email}</div>
		<div>${e.state}</div>
	</div>`;
  }
};
l = /* @__PURE__ */ new WeakMap();
a.styles = [
  v`
		:host {
			display: block;
			padding: 24px;
		}

		#users-wrapper {
			border: 1px solid lightgray;
		}
		.user {
			padding: 5px 10px;
		}
		.user:not(:first-child) {
			border-top: 1px solid lightgray;
		}
	`
];
d([
  p()
], a.prototype, "_currentUser", 2);
d([
  p()
], a.prototype, "_userData", 2);
a = d([
  y("my-welcome-dashboard")
], a);
const $ = a;
export {
  a as MyWelcomeDashboardElement,
  $ as default
};
//# sourceMappingURL=client.js.map
