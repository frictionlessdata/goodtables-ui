"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
/**
 * Render a component
 *
 * @param {Component} component - one of provided by the library component e.g. `Report`
 * @param {Object} props - object containing props
 * @param {Element} element - DOM element to render into
 */
function render(component, props, element) {
    react_dom_1.default.render(react_1.default.createElement(component, props, null), element);
}
exports.render = render;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3JlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFDekIsMERBQWdDO0FBRWhDOzs7Ozs7R0FNRztBQUNILFNBQWdCLE1BQU0sQ0FBQyxTQUFjLEVBQUUsS0FBVSxFQUFFLE9BQVk7SUFDN0QsbUJBQVEsQ0FBQyxNQUFNLENBQUMsZUFBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0FBQ3ZFLENBQUM7QUFGRCx3QkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5cbi8qKlxuICogUmVuZGVyIGEgY29tcG9uZW50XG4gKlxuICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudCAtIG9uZSBvZiBwcm92aWRlZCBieSB0aGUgbGlicmFyeSBjb21wb25lbnQgZS5nLiBgUmVwb3J0YFxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzIC0gb2JqZWN0IGNvbnRhaW5pbmcgcHJvcHNcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIERPTSBlbGVtZW50IHRvIHJlbmRlciBpbnRvXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoY29tcG9uZW50OiBhbnksIHByb3BzOiBhbnksIGVsZW1lbnQ6IGFueSkge1xuICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzLCBudWxsKSwgZWxlbWVudClcbn1cbiJdfQ==