"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Report = void 0;
const react_1 = __importDefault(require("react"));
const jsonschema_1 = require("jsonschema");
const spec_json_1 = __importDefault(require("../spec.json"));
const spec_json_2 = __importDefault(require("../profiles/spec.json"));
const report_json_1 = __importDefault(require("../profiles/report.json"));
const helpers_1 = require("../helpers");
const Table_1 = require("./Table");
function Report(props) {
    const { report, spec, skipHeaderIndex = false } = props;
    console.log('SKIP HEADER INDEX', skipHeaderIndex);
    // Invalid report
    const reportValidation = validateReport(report);
    if (!reportValidation.valid) {
        return (react_1.default.createElement("div", { className: "goodtables-ui-report" },
            react_1.default.createElement("h5", null,
                react_1.default.createElement("strong", null, "Invalid report")),
            react_1.default.createElement("hr", null),
            react_1.default.createElement("div", { style: { whiteSpace: 'pre', fontFamily: 'courier' } }, JSON.stringify(reportValidation.errors, null, 2)),
            react_1.default.createElement("hr", null),
            react_1.default.createElement("div", { style: { whiteSpace: 'pre', fontFamily: 'courier' } }, JSON.stringify(report, null, 2))));
    }
    // Invalid spec
    const specValidation = validateSpec(spec || spec_json_1.default);
    if (!specValidation.valid) {
        return (react_1.default.createElement("div", { className: "goodtables-ui-report" },
            react_1.default.createElement("h5", null,
                react_1.default.createElement("strong", null, "Invalid spec")),
            react_1.default.createElement("hr", null),
            react_1.default.createElement("div", { style: { whiteSpace: 'pre', fontFamily: 'courier' } }, JSON.stringify(specValidation.errors, null, 2)),
            react_1.default.createElement("hr", null),
            react_1.default.createElement("div", { style: { whiteSpace: 'pre', fontFamily: 'courier' } }, JSON.stringify(spec, null, 2))));
    }
    // Valid report/spec
    const processedWarnings = getProcessedWarnings(report);
    const tables = getTables(report);
    return (react_1.default.createElement("div", { className: "goodtables-ui-report" },
        !!processedWarnings.length && (react_1.default.createElement("div", { className: "file warning" },
            react_1.default.createElement("h4", { className: "file-heading" },
                react_1.default.createElement("div", { className: "inner" },
                    react_1.default.createElement("a", { className: "file-name" },
                        react_1.default.createElement("strong", null, "Warnings")))),
            react_1.default.createElement("ul", { className: "passed-tests result" }, processedWarnings.map((warning, index) => (react_1.default.createElement("li", { key: index },
                react_1.default.createElement("span", { className: "badge badge-warning" }, warning))))))),
        tables.map((table, index) => (react_1.default.createElement(Table_1.Table, { key: table.source, table: table, tableNumber: index + 1, tablesCount: tables.length, spec: spec || spec_json_1.default, skipHeaderIndex: skipHeaderIndex })))));
}
exports.Report = Report;
// Helpers
function validateReport(report) {
    return jsonschema_1.validate(report, report_json_1.default);
}
function validateSpec(spec) {
    return jsonschema_1.validate(spec, spec_json_2.default);
}
function getProcessedWarnings(report) {
    // Before `goodtables@1.0` there was no warnings property
    return (report.warnings || []).map((warning) => helpers_1.removeBaseUrl(warning));
}
function getTables(report) {
    return [
        ...report.tables.filter((table) => !table.valid),
        ...report.tables.filter((table) => table.valid),
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvUmVwb3J0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFDekIsMkNBQXFDO0FBQ3JDLDZEQUFzQztBQUN0QyxzRUFBK0M7QUFDL0MsMEVBQW1EO0FBQ25ELHdDQUEwQztBQUUxQyxtQ0FBK0I7QUFRL0IsU0FBZ0IsTUFBTSxDQUFDLEtBQW1CO0lBQ3hDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGVBQWUsR0FBRyxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxlQUFlLENBQUMsQ0FBQTtJQUVqRCxpQkFBaUI7SUFDakIsTUFBTSxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtRQUMzQixPQUFPLENBQ0wsdUNBQUssU0FBUyxFQUFDLHNCQUFzQjtZQUNuQztnQkFDRSwrREFBK0IsQ0FDNUI7WUFDTCx5Q0FBTTtZQUNOLHVDQUFLLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxJQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQzdDO1lBQ04seUNBQU07WUFDTix1Q0FBSyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsSUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUM1QixDQUNGLENBQ1AsQ0FBQTtLQUNGO0lBRUQsZUFBZTtJQUNmLE1BQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxJQUFJLElBQUksbUJBQVcsQ0FBQyxD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Q0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnanNvbnNjaGVtYSdcbmltcG9ydCBkZWZhdWx0U3BlYyBmcm9tICcuLi9zcGVjLmpzb24nXG5pbXBvcnQgcHJvZmlsZVNwZWMgZnJvbSAnLi4vcHJvZmlsZXMvc3BlYy5qc29uJ1xuaW1wb3J0IHByb2ZpbGVSZXBvcnQgZnJvbSAnLi4vcHJvZmlsZXMvcmVwb3J0Lmpzb24nXG5pbXBvcnQgeyByZW1vdmVCYXNlVXJsIH0gZnJvbSAnLi4vaGVscGVycydcbmltcG9ydCB7IElSZXBvcnQsIElTcGVjIH0gZnJvbSAnLi4vY29tbW9uJ1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICcuL1RhYmxlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXBvcnRQcm9wcyB7XG4gIHJlcG9ydDogSVJlcG9ydFxuICBzcGVjPzogSVNwZWNcbiAgc2tpcEhlYWRlckluZGV4PzogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVwb3J0KHByb3BzOiBJUmVwb3J0UHJvcHMpIHtcbiAgY29uc3QgeyByZXBvcnQsIHNwZWMsIHNraXBIZWFkZXJJbmRleCA9IGZhbHNlIH0gPSBwcm9wc1xuICBjb25zb2xlLmxvZygnU0tJUCBIRUFERVIgSU5ERVgnLCBza2lwSGVhZGVySW5kZXgpXG5cbiAgLy8gSW52YWxpZCByZXBvcnRcbiAgY29uc3QgcmVwb3J0VmFsaWRhdGlvbiA9IHZhbGlkYXRlUmVwb3J0KHJlcG9ydClcbiAgaWYgKCFyZXBvcnRWYWxpZGF0aW9uLnZhbGlkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29vZHRhYmxlcy11aS1yZXBvcnRcIj5cbiAgICAgICAgPGg1PlxuICAgICAgICAgIDxzdHJvbmc+SW52YWxpZCByZXBvcnQ8L3N0cm9uZz5cbiAgICAgICAgPC9oNT5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ3ByZScsIGZvbnRGYW1pbHk6ICdjb3VyaWVyJyB9fT5cbiAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkocmVwb3J0VmFsaWRhdGlvbi5lcnJvcnMsIG51bGwsIDIpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ3ByZScsIGZvbnRGYW1pbHk6ICdjb3VyaWVyJyB9fT5cbiAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkocmVwb3J0LCBudWxsLCAyKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyBJbnZhbGlkIHNwZWNcbiAgY29uc3Qgc3BlY1ZhbGlkYXRpb24gPSB2YWxpZGF0ZVNwZWMoc3BlYyB8fCBkZWZhdWx0U3BlYylcbiAgaWYgKCFzcGVjVmFsaWRhdGlvbi52YWxpZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2R0YWJsZXMtdWktcmVwb3J0XCI+XG4gICAgICAgIDxoNT5cbiAgICAgICAgICA8c3Ryb25nPkludmFsaWQgc3BlYzwvc3Ryb25nPlxuICAgICAgICA8L2g1PlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAncHJlJywgZm9udEZhbWlseTogJ2NvdXJpZXInIH19PlxuICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShzcGVjVmFsaWRhdGlvbi5lcnJvcnMsIG51bGwsIDIpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ3ByZScsIGZvbnRGYW1pbHk6ICdjb3VyaWVyJyB9fT5cbiAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoc3BlYywgbnVsbCwgMil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLy8gVmFsaWQgcmVwb3J0L3NwZWNcbiAgY29uc3QgcHJvY2Vzc2VkV2FybmluZ3MgPSBnZXRQcm9jZXNzZWRXYXJuaW5ncyhyZXBvcnQpXG4gIGNvbnN0IHRhYmxlcyA9IGdldFRhYmxlcyhyZXBvcnQpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnb29kdGFibGVzLXVpLXJlcG9ydFwiPlxuICAgICAgey8qIFdhcm5pbmdzICovfVxuICAgICAgeyEhcHJvY2Vzc2VkV2FybmluZ3MubGVuZ3RoICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlIHdhcm5pbmdcIj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZmlsZS1oZWFkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZpbGUtbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+V2FybmluZ3M8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFzc2VkLXRlc3RzIHJlc3VsdFwiPlxuICAgICAgICAgICAge3Byb2Nlc3NlZFdhcm5pbmdzLm1hcCgod2FybmluZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXdhcm5pbmdcIj57d2FybmluZ308L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBUYWJsZXMgKi99XG4gICAgICB7dGFibGVzLm1hcCgodGFibGUsIGluZGV4KSA9PiAoXG4gICAgICAgIDxUYWJsZVxuICAgICAgICAgIGtleT17dGFibGUuc291cmNlfVxuICAgICAgICAgIHRhYmxlPXt0YWJsZX1cbiAgICAgICAgICB0YWJsZU51bWJlcj17aW5kZXggKyAxfVxuICAgICAgICAgIHRhYmxlc0NvdW50PXt0YWJsZXMubGVuZ3RofVxuICAgICAgICAgIHNwZWM9e3NwZWMgfHwgZGVmYXVsdFNwZWN9XG4gICAgICAgICAgc2tpcEhlYWRlckluZGV4PXtza2lwSGVhZGVySW5kZXh9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBIZWxwZXJzXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUmVwb3J0KHJlcG9ydDogSVJlcG9ydCkge1xuICByZXR1cm4gdmFsaWRhdGUocmVwb3J0LCBwcm9maWxlUmVwb3J0KVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVNwZWMoc3BlYzogSVNwZWMpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKHNwZWMsIHByb2ZpbGVTcGVjKVxufVxuXG5mdW5jdGlvbiBnZXRQcm9jZXNzZWRXYXJuaW5ncyhyZXBvcnQ6IElSZXBvcnQpIHtcbiAgLy8gQmVmb3JlIGBnb29kdGFibGVzQDEuMGAgdGhlcmUgd2FzIG5vIHdhcm5pbmdzIHByb3BlcnR5XG4gIHJldHVybiAocmVwb3J0Lndhcm5pbmdzIHx8IFtdKS5tYXAoKHdhcm5pbmcpID0+IHJlbW92ZUJhc2VVcmwod2FybmluZykpXG59XG5cbmZ1bmN0aW9uIGdldFRhYmxlcyhyZXBvcnQ6IElSZXBvcnQpIHtcbiAgcmV0dXJuIFtcbiAgICAuLi5yZXBvcnQudGFibGVzLmZpbHRlcigodGFibGUpID0+ICF0YWJsZS52YWxpZCksXG4gICAgLi4ucmVwb3J0LnRhYmxlcy5maWx0ZXIoKHRhYmxlKSA9PiB0YWJsZS52YWxpZCksXG4gIF1cbn1cbiJdfQ==