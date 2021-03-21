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
    const { table, tableNumber, tablesCount, spec, skipHeaderIndex } = props;
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
        Object.values(errorGroups).map((errorGroup) => (react_1.default.createElement(ErrorGroup_1.ErrorGroup, { key: errorGroup.code, errorGroup: errorGroup, spec: spec || spec_json_1.default, skipHeaderIndex: skipHeaderIndex })))));
}
exports.Table = Table;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9UYWJsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQXlCO0FBQ3pCLDREQUFtQztBQUNuQyw2REFBc0M7QUFDdEMsNkNBQXlDO0FBQ3pDLHdDQUE4RTtBQVc5RSxTQUFnQixLQUFLLENBQUMsS0FBa0I7SUFDdEMsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFDeEUsTUFBTSxTQUFTLEdBQUcsdUJBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDN0MsTUFBTSxjQUFjLEdBQUcsdUJBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMvQyxNQUFNLFdBQVcsR0FBRyw2QkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM5QyxPQUFPLENBQ0wsdUNBQUssU0FBUyxFQUFFLG9CQUFVLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuRixzQ0FBSSxTQUFTLEVBQUMsY0FBYztZQUMxQix1Q0FBSyxTQUFTLEVBQUMsT0FBTztnQkFDcEIscUNBQUcsU0FBUyxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU07b0JBQ3pDLDhDQUFTLGNBQWMsQ0FBQyxJQUFJLENBQVU7b0JBQ3RDLDhDQUFTLGNBQWMsQ0FBQyxHQUFHLENBQVU7b0JBQ3JDLDhDQUFTLGNBQWMsQ0FBQyxJQUFJLENBQVU7b0JBQ3JDLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUNmLHdDQUNFLFNBQVMsRUFBQyxPQUFPLGlCQUNMLFNBQVMsb0JBQ04sT0FBTyxFQUN0QixLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLDhCQUE4QixJQUUzRCxLQUFLLENBQUMsYUFBYSxDQUFDLENBQ2hCLENBQ1IsQ0FDQztnQkFDSix3Q0FBTSxTQUFTLEVBQUMsWUFBWTs7b0JBQ25CLFdBQVc7O29CQUFNLFdBQVcsQ0FDOUIsQ0FDSCxDQUNIO1FBR0osS0FBSyxDQUFDLEtBQUssSUFBSSxDQUNkLHNDQUFJLFNBQVMsRUFBQyxxQkFBcUI7WUFDakM7Z0JBQ0Usd0NBQU0sU0FBUyxFQUFDLHFCQUFxQixrQkFBbUIsQ0FDckQsQ0FDRixDQUNOO1FBR0EsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQzlDLDhCQUFDLHVCQUFVLElBQ1QsR0FBRyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQ3BCLFVBQVUsRUFBRSxVQUFVLEVBQ3RCLElBQUksRUFBRSxJQUFJLElBQUksbUJBQVcsRUFDekIsZUFBZSxFQUFFLGVBQWUsR0FDaEMsQ0FDSCxDQUFDLENBQ0UsQ0FDUCxDQUFBO0FBQ0gsQ0FBQztBQW5ERCxzQkFtREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IGRlZmF1bHRTcGVjIGZyb20gJy4uL3NwZWMuanNvbidcbmltcG9ydCB7IEVycm9yR3JvdXAgfSBmcm9tICcuL0Vycm9yR3JvdXAnXG5pbXBvcnQgeyBnZXRUYWJsZUVycm9yR3JvdXBzLCByZW1vdmVCYXNlVXJsLCBzcGxpdEZpbGVQYXRoIH0gZnJvbSAnLi4vaGVscGVycydcbmltcG9ydCB7IElTcGVjLCBJUmVwb3J0VGFibGUgfSBmcm9tICcuLi9jb21tb24nXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlUHJvcHMge1xuICB0YWJsZTogSVJlcG9ydFRhYmxlXG4gIHRhYmxlTnVtYmVyOiBudW1iZXJcbiAgdGFibGVzQ291bnQ6IG51bWJlclxuICBzcGVjPzogSVNwZWNcbiAgc2tpcEhlYWRlckluZGV4PzogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gVGFibGUocHJvcHM6IElUYWJsZVByb3BzKSB7XG4gIGNvbnN0IHsgdGFibGUsIHRhYmxlTnVtYmVyLCB0YWJsZXNDb3VudCwgc3BlYywgc2tpcEhlYWRlckluZGV4IH0gPSBwcm9wc1xuICBjb25zdCB0YWJsZUZpbGUgPSByZW1vdmVCYXNlVXJsKHRhYmxlLnNvdXJjZSlcbiAgY29uc3Qgc3BsaXRUYWJsZUZpbGUgPSBzcGxpdEZpbGVQYXRoKHRhYmxlRmlsZSlcbiAgY29uc3QgZXJyb3JHcm91cHMgPSBnZXRUYWJsZUVycm9yR3JvdXBzKHRhYmxlKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHsgZmlsZTogdHJ1ZSwgdmFsaWQ6IHRhYmxlLnZhbGlkLCBpbnZhbGlkOiAhdGFibGUudmFsaWQgfSl9PlxuICAgICAgey8qIEhlYWRpbmcgKi99XG4gICAgICA8aDQgY2xhc3NOYW1lPVwiZmlsZS1oZWFkaW5nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmaWxlLW5hbWVcIiBocmVmPXt0YWJsZS5zb3VyY2V9PlxuICAgICAgICAgICAgPHN0cm9uZz57c3BsaXRUYWJsZUZpbGUuYmFzZX08L3N0cm9uZz5cbiAgICAgICAgICAgIDxzdHJvbmc+e3NwbGl0VGFibGVGaWxlLnNlcH08L3N0cm9uZz5cbiAgICAgICAgICAgIDxzdHJvbmc+e3NwbGl0VGFibGVGaWxlLm5hbWV9PC9zdHJvbmc+XG4gICAgICAgICAgICB7IXRhYmxlLnZhbGlkICYmIChcbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYWRnZVwiXG4gICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcbiAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICB0aXRsZT17YCR7dGFibGVbJ2Vycm9yLWNvdW50J119IGVycm9ycyBmb3VuZCBmb3IgdGhpcyB0YWJsZWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGFibGVbJ2Vycm9yLWNvdW50J119XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbGUtY291bnRcIj5cbiAgICAgICAgICAgIFRhYmxlIHt0YWJsZU51bWJlcn0gb2Yge3RhYmxlc0NvdW50fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2g0PlxuXG4gICAgICB7LyogVmFsaWQgbWVzc2FnZSAqL31cbiAgICAgIHt0YWJsZS52YWxpZCAmJiAoXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYXNzZWQtdGVzdHMgcmVzdWx0XCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utc3VjY2Vzc1wiPlZhbGlkIFRhYmxlPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICApfVxuXG4gICAgICB7LyogRXJyb3IgZ3JvdXBzICovfVxuICAgICAge09iamVjdC52YWx1ZXMoZXJyb3JHcm91cHMpLm1hcCgoZXJyb3JHcm91cCkgPT4gKFxuICAgICAgICA8RXJyb3JHcm91cFxuICAgICAgICAgIGtleT17ZXJyb3JHcm91cC5jb2RlfVxuICAgICAgICAgIGVycm9yR3JvdXA9e2Vycm9yR3JvdXB9XG4gICAgICAgICAgc3BlYz17c3BlYyB8fCBkZWZhdWx0U3BlY31cbiAgICAgICAgICBza2lwSGVhZGVySW5kZXg9e3NraXBIZWFkZXJJbmRleH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG4iXX0=