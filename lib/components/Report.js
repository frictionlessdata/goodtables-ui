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
    console.log("SKIP HEADER INDEX", skipHeaderIndex);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvUmVwb3J0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFDekIsMkNBQXFDO0FBQ3JDLDZEQUFzQztBQUN0QyxzRUFBK0M7QUFDL0MsMEVBQW1EO0FBQ25ELHdDQUEwQztBQUUxQyxtQ0FBK0I7QUFRL0IsU0FBZ0IsTUFBTSxDQUFDLEtBQW1CO0lBQ3hDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGVBQWUsR0FBRyxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxlQUFlLENBQUMsQ0FBQTtJQUVqRCxpQkFBaUI7SUFDakIsTUFBTSxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtRQUMzQixPQUFPLENBQ0wsdUNBQUssU0FBUyxFQUFDLHNCQUFzQjtZQUNuQztnQkFDRSwrREFBK0IsQ0FDNUI7WUFDTCx5Q0FBTTtZQUNOLHVDQUFLLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxJQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQzdDO1lBQ04seUNBQU07WUFDTix1Q0FBSyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsSUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUM1QixDQUNGLENBQ1AsQ0FBQTtLQUNGO0lBRUQsZUFBZTtJQUNmLE1BQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxJQUFJLElBQUksbUJBQVcsQ0FBQyxD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Q0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnanNvbnNjaGVtYSdcbmltcG9ydCBkZWZhdWx0U3BlYyBmcm9tICcuLi9zcGVjLmpzb24nXG5pbXBvcnQgcHJvZmlsZVNwZWMgZnJvbSAnLi4vcHJvZmlsZXMvc3BlYy5qc29uJ1xuaW1wb3J0IHByb2ZpbGVSZXBvcnQgZnJvbSAnLi4vcHJvZmlsZXMvcmVwb3J0Lmpzb24nXG5pbXBvcnQgeyByZW1vdmVCYXNlVXJsIH0gZnJvbSAnLi4vaGVscGVycydcbmltcG9ydCB7IElSZXBvcnQsIElTcGVjIH0gZnJvbSAnLi4vY29tbW9uJ1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICcuL1RhYmxlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXBvcnRQcm9wcyB7XG4gIHJlcG9ydDogSVJlcG9ydFxuICBzcGVjPzogSVNwZWNcbiAgc2tpcEhlYWRlckluZGV4OiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZXBvcnQocHJvcHM6IElSZXBvcnRQcm9wcykge1xuICBjb25zdCB7IHJlcG9ydCwgc3BlYywgc2tpcEhlYWRlckluZGV4ID0gZmFsc2UgfSA9IHByb3BzXG4gIGNvbnNvbGUubG9nKFwiU0tJUCBIRUFERVIgSU5ERVhcIiwgc2tpcEhlYWRlckluZGV4KVxuXG4gIC8vIEludmFsaWQgcmVwb3J0XG4gIGNvbnN0IHJlcG9ydFZhbGlkYXRpb24gPSB2YWxpZGF0ZVJlcG9ydChyZXBvcnQpXG4gIGlmICghcmVwb3J0VmFsaWRhdGlvbi52YWxpZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2R0YWJsZXMtdWktcmVwb3J0XCI+XG4gICAgICAgIDxoNT5cbiAgICAgICAgICA8c3Ryb25nPkludmFsaWQgcmVwb3J0PC9zdHJvbmc+XG4gICAgICAgIDwvaDU+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdwcmUnLCBmb250RmFtaWx5OiAnY291cmllcicgfX0+XG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KHJlcG9ydFZhbGlkYXRpb24uZXJyb3JzLCBudWxsLCAyKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdwcmUnLCBmb250RmFtaWx5OiAnY291cmllcicgfX0+XG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KHJlcG9ydCwgbnVsbCwgMil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgLy8gSW52YWxpZCBzcGVjXG4gIGNvbnN0IHNwZWNWYWxpZGF0aW9uID0gdmFsaWRhdGVTcGVjKHNwZWMgfHwgZGVmYXVsdFNwZWMpXG4gIGlmICghc3BlY1ZhbGlkYXRpb24udmFsaWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb29kdGFibGVzLXVpLXJlcG9ydFwiPlxuICAgICAgICA8aDU+XG4gICAgICAgICAgPHN0cm9uZz5JbnZhbGlkIHNwZWM8L3N0cm9uZz5cbiAgICAgICAgPC9oNT5cbiAgICAgICAgPGhyIC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ3ByZScsIGZvbnRGYW1pbHk6ICdjb3VyaWVyJyB9fT5cbiAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkoc3BlY1ZhbGlkYXRpb24uZXJyb3JzLCBudWxsLCAyKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdwcmUnLCBmb250RmFtaWx5OiAnY291cmllcicgfX0+XG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KHNwZWMsIG51bGwsIDIpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIC8vIFZhbGlkIHJlcG9ydC9zcGVjXG4gIGNvbnN0IHByb2Nlc3NlZFdhcm5pbmdzID0gZ2V0UHJvY2Vzc2VkV2FybmluZ3MocmVwb3J0KVxuICBjb25zdCB0YWJsZXMgPSBnZXRUYWJsZXMocmVwb3J0KVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29vZHRhYmxlcy11aS1yZXBvcnRcIj5cbiAgICAgIHsvKiBXYXJuaW5ncyAqL31cbiAgICAgIHshIXByb2Nlc3NlZFdhcm5pbmdzLmxlbmd0aCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZSB3YXJuaW5nXCI+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZpbGUtaGVhZGluZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmaWxlLW5hbWVcIj5cbiAgICAgICAgICAgICAgICA8c3Ryb25nPldhcm5pbmdzPC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBhc3NlZC10ZXN0cyByZXN1bHRcIj5cbiAgICAgICAgICAgIHtwcm9jZXNzZWRXYXJuaW5ncy5tYXAoKHdhcm5pbmcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS13YXJuaW5nXCI+e3dhcm5pbmd9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogVGFibGVzICovfVxuICAgICAge3RhYmxlcy5tYXAoKHRhYmxlLCBpbmRleCkgPT4gKFxuICAgICAgICA8VGFibGVcbiAgICAgICAgICBrZXk9e3RhYmxlLnNvdXJjZX1cbiAgICAgICAgICB0YWJsZT17dGFibGV9XG4gICAgICAgICAgdGFibGVOdW1iZXI9e2luZGV4ICsgMX1cbiAgICAgICAgICB0YWJsZXNDb3VudD17dGFibGVzLmxlbmd0aH1cbiAgICAgICAgICBzcGVjPXtzcGVjIHx8IGRlZmF1bHRTcGVjfVxuICAgICAgICAgIHNraXBIZWFkZXJJbmRleD17c2tpcEhlYWRlckluZGV4fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gSGVscGVyc1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVJlcG9ydChyZXBvcnQ6IElSZXBvcnQpIHtcbiAgcmV0dXJuIHZhbGlkYXRlKHJlcG9ydCwgcHJvZmlsZVJlcG9ydClcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVTcGVjKHNwZWM6IElTcGVjKSB7XG4gIHJldHVybiB2YWxpZGF0ZShzcGVjLCBwcm9maWxlU3BlYylcbn1cblxuZnVuY3Rpb24gZ2V0UHJvY2Vzc2VkV2FybmluZ3MocmVwb3J0OiBJUmVwb3J0KSB7XG4gIC8vIEJlZm9yZSBgZ29vZHRhYmxlc0AxLjBgIHRoZXJlIHdhcyBubyB3YXJuaW5ncyBwcm9wZXJ0eVxuICByZXR1cm4gKHJlcG9ydC53YXJuaW5ncyB8fCBbXSkubWFwKCh3YXJuaW5nKSA9PiByZW1vdmVCYXNlVXJsKHdhcm5pbmcpKVxufVxuXG5mdW5jdGlvbiBnZXRUYWJsZXMocmVwb3J0OiBJUmVwb3J0KSB7XG4gIHJldHVybiBbXG4gICAgLi4ucmVwb3J0LnRhYmxlcy5maWx0ZXIoKHRhYmxlKSA9PiAhdGFibGUudmFsaWQpLFxuICAgIC4uLnJlcG9ydC50YWJsZXMuZmlsdGVyKCh0YWJsZSkgPT4gdGFibGUudmFsaWQpLFxuICBdXG59XG4iXX0=