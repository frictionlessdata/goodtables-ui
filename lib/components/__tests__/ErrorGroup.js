"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("@testing-library/jest-dom/extend-expect");
const react_2 = require("@testing-library/react");
const helpers_1 = require("../../helpers");
const ErrorGroup_1 = require("../ErrorGroup");
const report_json_1 = __importDefault(require("./fixtures/report.json"));
// Tests
it('should render', () => {
    react_2.render(react_1.default.createElement(ErrorGroup_1.ErrorGroup, { errorGroup: helpers_1.getTableErrorGroups(report_json_1.default.tables[0])['blank-header'] }));
    expect(react_2.screen.getByRole('button')).toHaveTextContent('Blank Header');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JHcm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL19fdGVzdHNfXy9FcnJvckdyb3VwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUF5QjtBQUN6QixtREFBZ0Q7QUFDaEQsa0RBQXVEO0FBQ3ZELDJDQUFtRDtBQUNuRCw4Q0FBMEM7QUFDMUMseUVBQTJDO0FBRTNDLFFBQVE7QUFFUixFQUFFLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtJQUN2QixjQUFNLENBQUMsOEJBQUMsdUJBQVUsSUFBQyxVQUFVLEVBQUUsNkJBQW1CLENBQUMscUJBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBSSxDQUFDLENBQUE7SUFDekYsTUFBTSxDQUFDLGNBQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQTtBQUN0RSxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAnQHRlc3RpbmctbGlicmFyeS9qZXN0LWRvbS9leHRlbmQtZXhwZWN0J1xuaW1wb3J0IHsgcmVuZGVyLCBzY3JlZW4gfSBmcm9tICdAdGVzdGluZy1saWJyYXJ5L3JlYWN0J1xuaW1wb3J0IHsgZ2V0VGFibGVFcnJvckdyb3VwcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMnXG5pbXBvcnQgeyBFcnJvckdyb3VwIH0gZnJvbSAnLi4vRXJyb3JHcm91cCdcbmltcG9ydCByZXBvcnQgZnJvbSAnLi9maXh0dXJlcy9yZXBvcnQuanNvbidcblxuLy8gVGVzdHNcblxuaXQoJ3Nob3VsZCByZW5kZXInLCAoKSA9PiB7XG4gIHJlbmRlcig8RXJyb3JHcm91cCBlcnJvckdyb3VwPXtnZXRUYWJsZUVycm9yR3JvdXBzKHJlcG9ydC50YWJsZXNbMF0pWydibGFuay1oZWFkZXInXX0gLz4pXG4gIGV4cGVjdChzY3JlZW4uZ2V0QnlSb2xlKCdidXR0b24nKSkudG9IYXZlVGV4dENvbnRlbnQoJ0JsYW5rIEhlYWRlcicpXG59KVxuIl19