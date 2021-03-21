"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const react_1 = __importDefault(require("react"));
const classnames_1 = __importDefault(require("classnames"));
const spec_json_1 = __importDefault(require("../spec.json"));
const ErrorGroup_1 = require("./ErrorGroup");
const helpers_1 = require("../helpers");
function Table(props) {
    const { table, tableNumber, tablesCount, spec } = props;
    const tableFile = helpers_1.removeBaseUrl(table.source);
    const splitTableFile = helpers_1.splitFilePath(tableFile);
    const errorGroups = helpers_1.getTableErrorGroups(table);
    return (react_1.default.createElement("div", { className: classnames_1.default({ file: true, valid: table.valid, invalid: !table.valid }) },
        react_1.default.createElement("h4", { className: "file-heading" },
            react_1.default.createElement("div", { className: "inner" },
                react_1.default.createElement("a", { className: "file-name", href: table.source },
                    react_1.default.createElement("strong", null, splitTableFile.base),
                    react_1.default.createElement("strong", null, splitTableFile.sep),
                    react_1.default.createElement("strong", null, splitTableFile.name),
                    !table.valid && (react_1.default.createElement("span", { className: "badge", "data-toggle": "tooltip", "data-placement": "right", title: `${table['error-count']} errors found for this table` }, table['error-count']))),
                react_1.default.createElement("span", { className: "file-count" },
                    "Table ",
                    tableNumber,
                    " of ",
                    tablesCount))),
        table.valid && (react_1.default.createElement("ul", { className: "passed-tests result" },
            react_1.default.createElement("li", null,
                react_1.default.createElement("span", { className: "badge badge-success" }, "Valid Table")))),
        Object.values(errorGroups).map((errorGroup) => (react_1.default.createElement(ErrorGroup_1.ErrorGroup, { key: errorGroup.code, errorGroup: errorGroup, spec: spec || spec_json_1.default })))));
}
exports.Table = Table;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9UYWJsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQXlCO0FBQ3pCLDREQUFtQztBQUNuQyw2REFBc0M7QUFDdEMsNkNBQXlDO0FBQ3pDLHdDQUE4RTtBQVU5RSxTQUFnQixLQUFLLENBQUMsS0FBa0I7SUFDdEMsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUN2RCxNQUFNLFNBQVMsR0FBRyx1QkFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM3QyxNQUFNLGNBQWMsR0FBRyx1QkFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQy9DLE1BQU0sV0FBVyxHQUFHLDZCQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzlDLE9BQU8sQ0FDTCx1Q0FBSyxTQUFTLEVBQUUsb0JBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRW5GLHNDQUFJLFNBQVMsRUFBQyxjQUFjO1lBQzFCLHVDQUFLLFNBQVMsRUFBQyxPQUFPO2dCQUNwQixxQ0FBRyxTQUFTLEVBQUMsV0FBVyxFQUFDLElBQUksRUFBRSxLQUFLLENBQUMsTUFBTTtvQkFDekMsOENBQVMsY0FBYyxDQUFDLElBQUksQ0FBVTtvQkFDdEMsOENBQVMsY0FBYyxDQUFDLEdBQUcsQ0FBVTtvQkFDckMsOENBQVMsY0FBYyxDQUFDLElBQUksQ0FBVTtvQkFDckMsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQ2Ysd0NBQ0UsU0FBUyxFQUFDLE9BQU8saUJBQ0wsU0FBUyxvQkFDTixPQUFPLEVBQ3RCLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsOEJBQThCLElBRTNELEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FDaEIsQ0FDUixDQUNDO2dCQUNKLHdDQUFNLFNBQVMsRUFBQyxZQUFZOztvQkFDbkIsV0FBVzs7b0JBQU0sV0FBVyxDQUM5QixDQUNILENBQ0g7UUFHSixLQUFLLENBQUMsS0FBSyxJQUFJLENBQ2Qsc0NBQUksU0FBUyxFQUFDLHFCQUFxQjtZQUNqQztnQkFDRSx3Q0FBTSxTQUFTLEVBQUMscUJBQXFCLGtCQUFtQixDQUNyRCxDQUNGLENBQ047UUFHQSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FDOUMsOEJBQUMsdUJBQVUsSUFBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLElBQUksbUJBQVcsR0FBSSxDQUN4RixDQUFDLENBQ0UsQ0FDUCxDQUFBO0FBQ0gsQ0FBQztBQTlDRCxzQkE4Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IGRlZmF1bHRTcGVjIGZyb20gJy4uL3NwZWMuanNvbidcbmltcG9ydCB7IEVycm9yR3JvdXAgfSBmcm9tICcuL0Vycm9yR3JvdXAnXG5pbXBvcnQgeyBnZXRUYWJsZUVycm9yR3JvdXBzLCByZW1vdmVCYXNlVXJsLCBzcGxpdEZpbGVQYXRoIH0gZnJvbSAnLi4vaGVscGVycydcbmltcG9ydCB7IElTcGVjLCBJUmVwb3J0VGFibGUgfSBmcm9tICcuLi9jb21tb24nXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlUHJvcHMge1xuICB0YWJsZTogSVJlcG9ydFRhYmxlXG4gIHRhYmxlTnVtYmVyOiBudW1iZXJcbiAgdGFibGVzQ291bnQ6IG51bWJlclxuICBzcGVjPzogSVNwZWNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhYmxlKHByb3BzOiBJVGFibGVQcm9wcykge1xuICBjb25zdCB7IHRhYmxlLCB0YWJsZU51bWJlciwgdGFibGVzQ291bnQsIHNwZWMgfSA9IHByb3BzXG4gIGNvbnN0IHRhYmxlRmlsZSA9IHJlbW92ZUJhc2VVcmwodGFibGUuc291cmNlKVxuICBjb25zdCBzcGxpdFRhYmxlRmlsZSA9IHNwbGl0RmlsZVBhdGgodGFibGVGaWxlKVxuICBjb25zdCBlcnJvckdyb3VwcyA9IGdldFRhYmxlRXJyb3JHcm91cHModGFibGUpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoeyBmaWxlOiB0cnVlLCB2YWxpZDogdGFibGUudmFsaWQsIGludmFsaWQ6ICF0YWJsZS52YWxpZCB9KX0+XG4gICAgICB7LyogSGVhZGluZyAqL31cbiAgICAgIDxoNCBjbGFzc05hbWU9XCJmaWxlLWhlYWRpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZpbGUtbmFtZVwiIGhyZWY9e3RhYmxlLnNvdXJjZX0+XG4gICAgICAgICAgICA8c3Ryb25nPntzcGxpdFRhYmxlRmlsZS5iYXNlfTwvc3Ryb25nPlxuICAgICAgICAgICAgPHN0cm9uZz57c3BsaXRUYWJsZUZpbGUuc2VwfTwvc3Ryb25nPlxuICAgICAgICAgICAgPHN0cm9uZz57c3BsaXRUYWJsZUZpbGUubmFtZX08L3N0cm9uZz5cbiAgICAgICAgICAgIHshdGFibGUudmFsaWQgJiYgKFxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhZGdlXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIlxuICAgICAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgICAgIHRpdGxlPXtgJHt0YWJsZVsnZXJyb3ItY291bnQnXX0gZXJyb3JzIGZvdW5kIGZvciB0aGlzIHRhYmxlYH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0YWJsZVsnZXJyb3ItY291bnQnXX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsZS1jb3VudFwiPlxuICAgICAgICAgICAgVGFibGUge3RhYmxlTnVtYmVyfSBvZiB7dGFibGVzQ291bnR9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaDQ+XG5cbiAgICAgIHsvKiBWYWxpZCBtZXNzYWdlICovfVxuICAgICAge3RhYmxlLnZhbGlkICYmIChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhc3NlZC10ZXN0cyByZXN1bHRcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1zdWNjZXNzXCI+VmFsaWQgVGFibGU8L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBFcnJvciBncm91cHMgKi99XG4gICAgICB7T2JqZWN0LnZhbHVlcyhlcnJvckdyb3VwcykubWFwKChlcnJvckdyb3VwKSA9PiAoXG4gICAgICAgIDxFcnJvckdyb3VwIGtleT17ZXJyb3JHcm91cC5jb2RlfSBlcnJvckdyb3VwPXtlcnJvckdyb3VwfSBzcGVjPXtzcGVjIHx8IGRlZmF1bHRTcGVjfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ==