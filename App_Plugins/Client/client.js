import { LitElement as u, html as m, customElement as f } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as d } from "@umbraco-cms/backoffice/element-api";
import { UMB_NOTIFICATION_CONTEXT as C } from "@umbraco-cms/backoffice/notification";
var y = Object.defineProperty, x = Object.getOwnPropertyDescriptor, v = (e) => {
  throw TypeError(e);
}, E = (e, t, r, i) => {
  for (var a = i > 1 ? void 0 : i ? x(t, r) : t, s = e.length - 1, n; s >= 0; s--)
    (n = e[s]) && (a = (i ? n(t, r, a) : n(a)) || a);
  return i && a && y(t, r, a), a;
}, h = (e, t, r) => t.has(e) || v("Cannot " + r), l = (e, t, r) => (h(e, t, "read from private field"), r ? r.call(e) : t.get(e)), c = (e, t, r) => t.has(e) ? v("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), O = (e, t, r, i) => (h(e, t, "write to private field"), t.set(e, r), r), o, p;
let _ = class extends d(u) {
  constructor() {
    super(), c(this, o), c(this, p, () => {
      var e;
      (e = l(this, o)) == null || e.peek("positive", {
        data: { message: "#h5yr" }
      });
    }), this.consumeContext(C, (e) => {
      O(this, o, e);
    });
  }
  render() {
    return m`
          <uui-box headline="Welcome">
              <p>A TypeScript Lit Dashboard</p>
              <uui-button
                  look="primary"
                  label="Click me"
                  @click=${l(this, p)}
              ></uui-button>
          </uui-box>
      `;
  }
};
o = /* @__PURE__ */ new WeakMap();
p = /* @__PURE__ */ new WeakMap();
_ = E([
  f("my-typescript-element")
], _);
export {
  _ as default
};
//# sourceMappingURL=client.js.map
