"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorGroup = void 0;
const marked_1 = __importDefault(require("marked"));
const classnames_1 = __importDefault(require("classnames"));
const hex_to_rgba_1 = __importDefault(require("hex-to-rgba"));
const react_1 = __importStar(require("react"));
const startCase_1 = __importDefault(require("lodash/startCase"));
const spec_json_1 = __importDefault(require("../spec.json"));
function ErrorGroup(props) {
    const { errorGroup, spec } = props;
    const [isDetailsVisible, setIsDetailsVisible] = react_1.useState(false);
    const [visibleRowsCount, setVisibleRowsCount] = react_1.useState(10);
    const specError = getSpecError(errorGroup, spec || spec_json_1.default);
    const isHeadersVisible = getIsHeadersVisible(specError);
    const description = getDescription(specError);
    const rowNumbers = getRowNumbers(errorGroup);
    return (react_1.default.createElement("div", { className: "result" },
        react_1.default.createElement("div", { className: "d-flex align-items-center" },
            react_1.default.createElement("span", { className: "count" },
                errorGroup.count,
                " x"),
            react_1.default.createElement("a", { role: "button", className: classnames_1.default({
                    badge: true,
                    'badge-error': true,
                    collapsed: !isDetailsVisible,
                }), "data-toggle": "collapse", onClick: () => setIsDetailsVisible(!isDetailsVisible), "aria-expanded": "false", style: { backgroundColor: getRgbaColor(specError) } }, specError.name)),
        react_1.default.createElement("div", { className: classnames_1.default(['collapse', { show: isDetailsVisible }]) },
            react_1.default.createElement("div", { className: "error-details", style: { borderColor: getRgbaColor(specError) } },
                description && (react_1.default.createElement("div", { className: "error-description" },
                    react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: description } }))),
                react_1.default.createElement("div", { className: "error-list", style: { borderTopColor: getRgbaColor(specError) } },
                    react_1.default.createElement("p", { className: "error-list-heading", style: {
                            backgroundColor: getRgbaColor(specError, 0.1),
                            borderBottomColor: getRgbaColor(specError, 0.25),
                        } }, "The full list of error messages:"),
                    react_1.default.createElement("ul", { style: {
                            backgroundColor: getRgbaColor(specError, 0.05),
                        } }, errorGroup.messages.map((message, index) => (react_1.default.createElement("li", { key: index }, message))))))),
        !['source-error'].includes(errorGroup.code) && (react_1.default.createElement("div", { className: "table-view" },
            react_1.default.createElement("div", { className: "inner" },
                react_1.default.createElement(ErrorGroupTable, { specError: specError, errorGroup: errorGroup, visibleRowsCount: visibleRowsCount, rowNumbers: rowNumbers, isHeadersVisible: isHeadersVisible })))),
        visibleRowsCount < rowNumbers.length && (react_1.default.createElement("a", { className: "show-more", onClick: () => setVisibleRowsCount(visibleRowsCount + 10) },
            "Show more ",
            react_1.default.createElement("span", { className: "icon-keyboard_arrow_down" })))));
}
exports.ErrorGroup = ErrorGroup;
function ErrorGroupTable(props) {
    const { specError, errorGroup, visibleRowsCount, rowNumbers, isHeadersVisible } = props;
    return (react_1.default.createElement("table", { className: "table table-sm" },
        react_1.default.createElement("tbody", null,
            errorGroup.headers && isHeadersVisible && (react_1.default.createElement("tr", { className: "before-fail" },
                react_1.default.createElement("td", { className: "text-center" }, "1"),
                errorGroup.headers.map((header, index) => (react_1.default.createElement("td", { key: index }, header))))),
            rowNumbers.map((rowNumber, index) => index < visibleRowsCount && (react_1.default.createElement("tr", { key: index, className: classnames_1.default({ fail: errorGroup.code.includes('row') }) },
                react_1.default.createElement("td", { style: { backgroundColor: getRgbaColor(specError, 0.25) }, className: "result-row-index" }, rowNumber || 1),
                errorGroup.rows[rowNumber].values.map((value, innerIndex) => (react_1.default.createElement("td", { key: innerIndex, style: { backgroundColor: getRgbaColor(specError, 0.25) }, className: classnames_1.default({
                        fail: errorGroup.rows[rowNumber].badcols.has(innerIndex + 1),
                    }) }, value)))))),
            react_1.default.createElement("tr", { className: "after-fail" },
                react_1.default.createElement("td", { className: "result-row-index" }, rowNumbers[rowNumbers.length - 1] ? rowNumbers[rowNumbers.length - 1] + 1 : 2),
                errorGroup.headers && errorGroup.headers.map((_header, index) => react_1.default.createElement("td", { key: index }))))));
}
// Helpers
function getSpecError(errorGroup, spec) {
    // Get code handling legacy codes
    let code = errorGroup.code;
    if (code === 'non-castable-value') {
        code = 'type-or-format-error';
    }
    // Get details handling custom errors
    let details = spec.errors[code];
    if (!details) {
        details = {
            name: startCase_1.default(code),
            type: 'custom',
            context: 'body',
            message: 'custom',
            description: '',
            weight: 0,
        };
    }
    return details;
}
function getRgbaColor(specError, alpha = 1) {
    return specError.hexColor ? hex_to_rgba_1.default(specError.hexColor, alpha) : undefined;
}
function getIsHeadersVisible(specError) {
    return specError.context === 'body';
}
function getDescription(specError) {
    let description = specError.description;
    if (description) {
        description = description.replace('{validator}', '`goodtables.yml`');
        description = marked_1.default(description);
    }
    return description;
}
function getRowNumbers(errorGroup) {
    return Object.keys(errorGroup.rows)
        .map((item) => parseInt(item, 10))
        .sort((a, b) => a - b);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JHcm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Vycm9yR3JvdXAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBMkI7QUFDM0IsNERBQW1DO0FBQ25DLDhEQUFtQztBQUNuQywrQ0FBdUM7QUFDdkMsaUVBQXdDO0FBQ3hDLDZEQUFzQztBQVF0QyxTQUFnQixVQUFVLENBQUMsS0FBdUI7SUFDaEQsTUFBTSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFDbEMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMvRCxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUMsR0FBRyxnQkFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQzVELE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxJQUFJLG1CQUFXLENBQUMsQ0FBQTtJQUMvRCxNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3ZELE1BQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUM3QyxNQUFNLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDNUMsT0FBTyxDQUNMLHVDQUFLLFNBQVMsRUFBQyxRQUFRO1FBRXJCLHVDQUFLLFNBQVMsRUFBQywyQkFBMkI7WUFDeEMsd0NBQU0sU0FBUyxFQUFDLE9BQU87Z0JBQUUsVUFBVSxDQUFDLEtBQUs7cUJBQVU7WUFDbkQscUNBQ0UsSUFBSSxFQUFDLFFBQVEsRUFDYixTQUFTLEVBQUUsb0JBQVUsQ0FBQztvQkFDcEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsYUFBYSxFQUFFLElBQUk7b0JBQ25CLFNBQVMsRUFBRSxDQUFDLGdCQUFn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RUFBRTtRQUNmLFdBQVcsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFBO1FBQ3BFLFdBQVcsR0FBRyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0tBQ2xDO0lBQ0QsT0FBTyxXQUFXLENBQUE7QUFDcEIsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLFVBQXVCO0lBQzVDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1NBQ2hDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNqQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDMUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBoZXhUb1JnYmEgZnJvbSAnaGV4LXRvLXJnYmEnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdGFydENhc2UgZnJvbSAnbG9kYXNoL3N0YXJ0Q2FzZSdcbmltcG9ydCBkZWZhdWx0U3BlYyBmcm9tICcuLi9zcGVjLmpzb24nXG5pbXBvcnQgeyBJU3BlYywgSVNwZWNFcnJvciwgSUVycm9yR3JvdXAgfSBmcm9tICcuLi9jb21tb24nXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUVycm9yR3JvdXBQcm9wcyB7XG4gIGVycm9yR3JvdXA6IElFcnJvckdyb3VwXG4gIHNwZWM/OiBJU3BlY1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JHcm91cChwcm9wczogSUVycm9yR3JvdXBQcm9wcykge1xuICBjb25zdCB7IGVycm9yR3JvdXAsIHNwZWMgfSA9IHByb3BzXG4gIGNvbnN0IFtpc0RldGFpbHNWaXNpYmxlLCBzZXRJc0RldGFpbHNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdmlzaWJsZVJvd3NDb3VudCwgc2V0VmlzaWJsZVJvd3NDb3VudF0gPSB1c2VTdGF0ZSgxMClcbiAgY29uc3Qgc3BlY0Vycm9yID0gZ2V0U3BlY0Vycm9yKGVycm9yR3JvdXAsIHNwZWMgfHwgZGVmYXVsdFNwZWMpXG4gIGNvbnN0IGlzSGVhZGVyc1Zpc2libGUgPSBnZXRJc0hlYWRlcnNWaXNpYmxlKHNwZWNFcnJvcilcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBnZXREZXNjcmlwdGlvbihzcGVjRXJyb3IpXG4gIGNvbnN0IHJvd051bWJlcnMgPSBnZXRSb3dOdW1iZXJzKGVycm9yR3JvdXApXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIj5cbiAgICAgIHsvKiBIZWFkaW5nICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvdW50XCI+e2Vycm9yR3JvdXAuY291bnR9IHg8L3NwYW4+XG4gICAgICAgIDxhXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHtcbiAgICAgICAgICAgIGJhZGdlOiB0cnVlLFxuICAgICAgICAgICAgJ2JhZGdlLWVycm9yJzogdHJ1ZSxcbiAgICAgICAgICAgIGNvbGxhcHNlZDogIWlzRGV0YWlsc1Zpc2libGUsXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNEZXRhaWxzVmlzaWJsZSghaXNEZXRhaWxzVmlzaWJsZSl9XG4gICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGdldFJnYmFDb2xvcihzcGVjRXJyb3IpIH19XG4gICAgICAgID5cbiAgICAgICAgICB7c3BlY0Vycm9yLm5hbWV9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogRXJyb3IgZGV0YWlscyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFsnY29sbGFwc2UnLCB7IHNob3c6IGlzRGV0YWlsc1Zpc2libGUgfV0pfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1kZXRhaWxzXCIgc3R5bGU9e3sgYm9yZGVyQ29sb3I6IGdldFJnYmFDb2xvcihzcGVjRXJyb3IpIH19PlxuICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBkZXNjcmlwdGlvbiB9fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWxpc3RcIiBzdHlsZT17eyBib3JkZXJUb3BDb2xvcjogZ2V0UmdiYUNvbG9yKHNwZWNFcnJvcikgfX0+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlcnJvci1saXN0LWhlYWRpbmdcIlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZ2V0UmdiYUNvbG9yKHNwZWNFcnJvciwgMC4xKSxcbiAgICAgICAgICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogZ2V0UmdiYUNvbG9yKHNwZWNFcnJvciwgMC4yNSksXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRoZSBmdWxsIGxpc3Qgb2YgZXJyb3IgbWVzc2FnZXM6XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGdldFJnYmFDb2xvcihzcGVjRXJyb3IsIDAuMDUpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZXJyb3JHcm91cC5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PnttZXNzYWdlfTwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIFRhYmxlIHZpZXcgKi99XG4gICAgICB7IVsnc291cmNlLWVycm9yJ10uaW5jbHVkZXMoZXJyb3JHcm91cC5jb2RlKSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtdmlld1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cbiAgICAgICAgICAgIDxFcnJvckdyb3VwVGFibGVcbiAgICAgICAgICAgICAgc3BlY0Vycm9yPXtzcGVjRXJyb3J9XG4gICAgICAgICAgICAgIGVycm9yR3JvdXA9e2Vycm9yR3JvdXB9XG4gICAgICAgICAgICAgIHZpc2libGVSb3dzQ291bnQ9e3Zpc2libGVSb3dzQ291bnR9XG4gICAgICAgICAgICAgIHJvd051bWJlcnM9e3Jvd051bWJlcnN9XG4gICAgICAgICAgICAgIGlzSGVhZGVyc1Zpc2libGU9e2lzSGVhZGVyc1Zpc2libGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBTaG93IG1vcmUgKi99XG4gICAgICB7dmlzaWJsZVJvd3NDb3VudCA8IHJvd051bWJlcnMubGVuZ3RoICYmIChcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwic2hvdy1tb3JlXCIgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZVJvd3NDb3VudCh2aXNpYmxlUm93c0NvdW50ICsgMTApfT5cbiAgICAgICAgICBTaG93IG1vcmUgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbi1rZXlib2FyZF9hcnJvd19kb3duXCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBFcnJvckdyb3VwVGFibGUocHJvcHM6IHtcbiAgc3BlY0Vycm9yOiBJU3BlY0Vycm9yXG4gIGVycm9yR3JvdXA6IElFcnJvckdyb3VwXG4gIHZpc2libGVSb3dzQ291bnQ6IG51bWJlclxuICByb3dOdW1iZXJzOiBudW1iZXJbXVxuICBpc0hlYWRlcnNWaXNpYmxlOiBib29sZWFuXG59KSB7XG4gIGNvbnN0IHsgc3BlY0Vycm9yLCBlcnJvckdyb3VwLCB2aXNpYmxlUm93c0NvdW50LCByb3dOdW1iZXJzLCBpc0hlYWRlcnNWaXNpYmxlIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zbVwiPlxuICAgICAgPHRib2R5PlxuICAgICAgICB7ZXJyb3JHcm91cC5oZWFkZXJzICYmIGlzSGVhZGVyc1Zpc2libGUgJiYgKFxuICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZWZvcmUtZmFpbFwiPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+MTwvdGQ+XG4gICAgICAgICAgICB7ZXJyb3JHcm91cC5oZWFkZXJzLm1hcCgoaGVhZGVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8dGQga2V5PXtpbmRleH0+e2hlYWRlcn08L3RkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKX1cbiAgICAgICAge3Jvd051bWJlcnMubWFwKFxuICAgICAgICAgIChyb3dOdW1iZXIsIGluZGV4KSA9PlxuICAgICAgICAgICAgaW5kZXggPCB2aXNpYmxlUm93c0NvdW50ICYmIChcbiAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IGZhaWw6IGVycm9yR3JvdXAuY29kZS5pbmNsdWRlcygncm93JykgfSl9PlxuICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBnZXRSZ2JhQ29sb3Ioc3BlY0Vycm9yLCAwLjI1KSB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzdWx0LXJvdy1pbmRleFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Jvd051bWJlciB8fCAxfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAge2Vycm9yR3JvdXAucm93c1tyb3dOdW1iZXJdLnZhbHVlcy5tYXAoKHZhbHVlLCBpbm5lckluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbm5lckluZGV4fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGdldFJnYmFDb2xvcihzcGVjRXJyb3IsIDAuMjUpIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgICAgZmFpbDogZXJyb3JHcm91cC5yb3dzW3Jvd051bWJlcl0uYmFkY29scy5oYXMoaW5uZXJJbmRleCArIDEpLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgICAgPHRyIGNsYXNzTmFtZT1cImFmdGVyLWZhaWxcIj5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmVzdWx0LXJvdy1pbmRleFwiPlxuICAgICAgICAgICAge3Jvd051bWJlcnNbcm93TnVtYmVycy5sZW5ndGggLSAxXSA/IHJvd051bWJlcnNbcm93TnVtYmVycy5sZW5ndGggLSAxXSArIDEgOiAyfVxuICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAge2Vycm9yR3JvdXAuaGVhZGVycyAmJiBlcnJvckdyb3VwLmhlYWRlcnMubWFwKChfaGVhZGVyLCBpbmRleCkgPT4gPHRkIGtleT17aW5kZXh9IC8+KX1cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKVxufVxuXG4vLyBIZWxwZXJzXG5cbmZ1bmN0aW9uIGdldFNwZWNFcnJvcihlcnJvckdyb3VwOiBJRXJyb3JHcm91cCwgc3BlYzogSVNwZWMpIHtcbiAgLy8gR2V0IGNvZGUgaGFuZGxpbmcgbGVnYWN5IGNvZGVzXG4gIGxldCBjb2RlID0gZXJyb3JHcm91cC5jb2RlXG4gIGlmIChjb2RlID09PSAnbm9uLWNhc3RhYmxlLXZhbHVlJykge1xuICAgIGNvZGUgPSAndHlwZS1vci1mb3JtYXQtZXJyb3InXG4gIH1cblxuICAvLyBHZXQgZGV0YWlscyBoYW5kbGluZyBjdXN0b20gZXJyb3JzXG4gIGxldCBkZXRhaWxzID0gc3BlYy5lcnJvcnNbY29kZV1cbiAgaWYgKCFkZXRhaWxzKSB7XG4gICAgZGV0YWlscyA9IHtcbiAgICAgIG5hbWU6IHN0YXJ0Q2FzZShjb2RlKSxcbiAgICAgIHR5cGU6ICdjdXN0b20nLFxuICAgICAgY29udGV4dDogJ2JvZHknLFxuICAgICAgbWVzc2FnZTogJ2N1c3RvbScsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICB3ZWlnaHQ6IDAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRldGFpbHNcbn1cblxuZnVuY3Rpb24gZ2V0UmdiYUNvbG9yKHNwZWNFcnJvcjogSVNwZWNFcnJvciwgYWxwaGE6IG51bWJlciA9IDEpIHtcbiAgcmV0dXJuIHNwZWNFcnJvci5oZXhDb2xvciA/IGhleFRvUmdiYShzcGVjRXJyb3IuaGV4Q29sb3IsIGFscGhhKSA6IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZXRJc0hlYWRlcnNWaXNpYmxlKHNwZWNFcnJvcjogSVNwZWNFcnJvcikge1xuICByZXR1cm4gc3BlY0Vycm9yLmNvbnRleHQgPT09ICdib2R5J1xufVxuXG5mdW5jdGlvbiBnZXREZXNjcmlwdGlvbihzcGVjRXJyb3I6IElTcGVjRXJyb3IpIHtcbiAgbGV0IGRlc2NyaXB0aW9uID0gc3BlY0Vycm9yLmRlc2NyaXB0aW9uXG4gIGlmIChkZXNjcmlwdGlvbikge1xuICAgIGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb24ucmVwbGFjZSgne3ZhbGlkYXRvcn0nLCAnYGdvb2R0YWJsZXMueW1sYCcpXG4gICAgZGVzY3JpcHRpb24gPSBtYXJrZWQoZGVzY3JpcHRpb24pXG4gIH1cbiAgcmV0dXJuIGRlc2NyaXB0aW9uXG59XG5cbmZ1bmN0aW9uIGdldFJvd051bWJlcnMoZXJyb3JHcm91cDogSUVycm9yR3JvdXApIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGVycm9yR3JvdXAucm93cylcbiAgICAubWFwKChpdGVtKSA9PiBwYXJzZUludChpdGVtLCAxMCkpXG4gICAgLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxufVxuIl19