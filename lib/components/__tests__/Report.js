"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("@testing-library/jest-dom/extend-expect");
const react_2 = require("@testing-library/react");
const report_json_1 = __importDefault(require("./fixtures/report.json"));
const Report_1 = require("../Report");
// Tests
it('should render', () => {
    react_2.render(react_1.default.createElement(Report_1.Report, { report: report_json_1.default }));
    expect(react_2.screen.getByText('Table 1 of 2')).toBeVisible();
    expect(react_2.screen.getByText('Table 2 of 2')).toBeVisible();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvX190ZXN0c19fL1JlcG9ydC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBeUI7QUFDekIsbURBQWdEO0FBQ2hELGtEQUF1RDtBQUN2RCx5RUFBMkM7QUFDM0Msc0NBQWtDO0FBRWxDLFFBQVE7QUFFUixFQUFFLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtJQUN2QixjQUFNLENBQUMsOEJBQUMsZUFBTSxJQUFDLE1BQU0sRUFBRSxxQkFBTSxHQUFJLENBQUMsQ0FBQTtJQUNsQyxNQUFNLENBQUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3RELE1BQU0sQ0FBQyxjQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUE7QUFDeEQsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJ0B0ZXN0aW5nLWxpYnJhcnkvamVzdC1kb20vZXh0ZW5kLWV4cGVjdCdcbmltcG9ydCB7IHJlbmRlciwgc2NyZWVuIH0gZnJvbSAnQHRlc3RpbmctbGlicmFyeS9yZWFjdCdcbmltcG9ydCByZXBvcnQgZnJvbSAnLi9maXh0dXJlcy9yZXBvcnQuanNvbidcbmltcG9ydCB7IFJlcG9ydCB9IGZyb20gJy4uL1JlcG9ydCdcblxuLy8gVGVzdHNcblxuaXQoJ3Nob3VsZCByZW5kZXInLCAoKSA9PiB7XG4gIHJlbmRlcig8UmVwb3J0IHJlcG9ydD17cmVwb3J0fSAvPilcbiAgZXhwZWN0KHNjcmVlbi5nZXRCeVRleHQoJ1RhYmxlIDEgb2YgMicpKS50b0JlVmlzaWJsZSgpXG4gIGV4cGVjdChzY3JlZW4uZ2V0QnlUZXh0KCdUYWJsZSAyIG9mIDInKSkudG9CZVZpc2libGUoKVxufSlcbiJdfQ==