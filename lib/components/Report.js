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
        tables.map((table, index) => (react_1.default.createElement(Table_1.Table, { key: table.source, table: table, tableNumber: index + 1, tablesCount: tables.length, spec: spec || spec_json_1.default })))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvUmVwb3J0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFDekIsMkNBQXFDO0FBQ3JDLDZEQUFzQztBQUN0QyxzRUFBK0M7QUFDL0MsMEVBQW1EO0FBQ25ELHdDQUEwQztBQUUxQyxtQ0FBK0I7QUFRL0IsU0FBZ0IsTUFBTSxDQUFDLEtBQW1CO0lBQ3hDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLGVBQWUsR0FBRyxLQUFLLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxlQUFlLENBQUMsQ0FBQTtJQUVqRCxpQkFBaUI7SUFDakIsTUFBTSxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDL0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTtRQUMzQixPQUFPLENBQ0wsdUNBQUssU0FBUyxFQUFDLHNCQUFzQjtZQUNuQztnQkFDRSwrREFBK0IsQ0FDNUI7WUFDTCx5Q0FBTTtZQUNOLHVDQUFLLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxJQUNyRCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQzdDO1lBQ04seUNBQU07WUFDTix1Q0FBSyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsSUFDckQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUM1QixDQUNGLENBQ1AsQ0FBQTtLQUNGO0lBRUQsZUFBZTtJQUNmLE1BQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxJQUFJLElBQUksbUJBQVcsQ0FBQyxD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IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnanNvbnNjaGVtYSdcbmltcG9ydCBkZWZhdWx0U3BlYyBmcm9tICcuLi9zcGVjLmpzb24nXG5pbXBvcnQgcHJvZmlsZVNwZWMgZnJvbSAnLi4vcHJvZmlsZXMvc3BlYy5qc29uJ1xuaW1wb3J0IHByb2ZpbGVSZXBvcnQgZnJvbSAnLi4vcHJvZmlsZXMvcmVwb3J0Lmpzb24nXG5pbXBvcnQgeyByZW1vdmVCYXNlVXJsIH0gZnJvbSAnLi4vaGVscGVycydcbmltcG9ydCB7IElSZXBvcnQsIElTcGVjIH0gZnJvbSAnLi4vY29tbW9uJ1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tICcuL1RhYmxlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElSZXBvcnRQcm9wcyB7XG4gIHJlcG9ydDogSVJlcG9ydFxuICBzcGVjPzogSVNwZWNcbiAgc2tpcEhlYWRlckluZGV4PzogYm9vbGVhblxufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVwb3J0KHByb3BzOiBJUmVwb3J0UHJvcHMpIHtcbiAgY29uc3QgeyByZXBvcnQsIHNwZWMsIHNraXBIZWFkZXJJbmRleCA9IGZhbHNlIH0gPSBwcm9wc1xuICBjb25zb2xlLmxvZyhcIlNLSVAgSEVBREVSIElOREVYXCIsIHNraXBIZWFkZXJJbmRleClcblxuICAvLyBJbnZhbGlkIHJlcG9ydFxuICBjb25zdCByZXBvcnRWYWxpZGF0aW9uID0gdmFsaWRhdGVSZXBvcnQocmVwb3J0KVxuICBpZiAoIXJlcG9ydFZhbGlkYXRpb24udmFsaWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb29kdGFibGVzLXVpLXJlcG9ydFwiPlxuICAgICAgICA8aDU+XG4gICAgICAgICAgPHN0cm9uZz5JbnZhbGlkIHJlcG9ydDwvc3Ryb25nPlxuICAgICAgICA8L2g1PlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAncHJlJywgZm9udEZhbWlseTogJ2NvdXJpZXInIH19PlxuICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShyZXBvcnRWYWxpZGF0aW9uLmVycm9ycywgbnVsbCwgMil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAncHJlJywgZm9udEZhbWlseTogJ2NvdXJpZXInIH19PlxuICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShyZXBvcnQsIG51bGwsIDIpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIC8vIEludmFsaWQgc3BlY1xuICBjb25zdCBzcGVjVmFsaWRhdGlvbiA9IHZhbGlkYXRlU3BlYyhzcGVjIHx8IGRlZmF1bHRTcGVjKVxuICBpZiAoIXNwZWNWYWxpZGF0aW9uLnZhbGlkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29vZHRhYmxlcy11aS1yZXBvcnRcIj5cbiAgICAgICAgPGg1PlxuICAgICAgICAgIDxzdHJvbmc+SW52YWxpZCBzcGVjPC9zdHJvbmc+XG4gICAgICAgIDwvaDU+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdwcmUnLCBmb250RmFtaWx5OiAnY291cmllcicgfX0+XG4gICAgICAgICAge0pTT04uc3RyaW5naWZ5KHNwZWNWYWxpZGF0aW9uLmVycm9ycywgbnVsbCwgMil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aGl0ZVNwYWNlOiAncHJlJywgZm9udEZhbWlseTogJ2NvdXJpZXInIH19PlxuICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShzcGVjLCBudWxsLCAyKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICAvLyBWYWxpZCByZXBvcnQvc3BlY1xuICBjb25zdCBwcm9jZXNzZWRXYXJuaW5ncyA9IGdldFByb2Nlc3NlZFdhcm5pbmdzKHJlcG9ydClcbiAgY29uc3QgdGFibGVzID0gZ2V0VGFibGVzKHJlcG9ydClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdvb2R0YWJsZXMtdWktcmVwb3J0XCI+XG4gICAgICB7LyogV2FybmluZ3MgKi99XG4gICAgICB7ISFwcm9jZXNzZWRXYXJuaW5ncy5sZW5ndGggJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUgd2FybmluZ1wiPlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmaWxlLWhlYWRpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmlsZS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgPHN0cm9uZz5XYXJuaW5nczwvc3Ryb25nPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2g0PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYXNzZWQtdGVzdHMgcmVzdWx0XCI+XG4gICAgICAgICAgICB7cHJvY2Vzc2VkV2FybmluZ3MubWFwKCh3YXJuaW5nLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2Utd2FybmluZ1wiPnt3YXJuaW5nfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIFRhYmxlcyAqL31cbiAgICAgIHt0YWJsZXMubWFwKCh0YWJsZSwgaW5kZXgpID0+IChcbiAgICAgICAgPFRhYmxlXG4gICAgICAgICAga2V5PXt0YWJsZS5zb3VyY2V9XG4gICAgICAgICAgdGFibGU9e3RhYmxlfVxuICAgICAgICAgIHRhYmxlTnVtYmVyPXtpbmRleCArIDF9XG4gICAgICAgICAgdGFibGVzQ291bnQ9e3RhYmxlcy5sZW5ndGh9XG4gICAgICAgICAgc3BlYz17c3BlYyB8fCBkZWZhdWx0U3BlY31cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIEhlbHBlcnNcblxuZnVuY3Rpb24gdmFsaWRhdGVSZXBvcnQocmVwb3J0OiBJUmVwb3J0KSB7XG4gIHJldHVybiB2YWxpZGF0ZShyZXBvcnQsIHByb2ZpbGVSZXBvcnQpXG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU3BlYyhzcGVjOiBJU3BlYykge1xuICByZXR1cm4gdmFsaWRhdGUoc3BlYywgcHJvZmlsZVNwZWMpXG59XG5cbmZ1bmN0aW9uIGdldFByb2Nlc3NlZFdhcm5pbmdzKHJlcG9ydDogSVJlcG9ydCkge1xuICAvLyBCZWZvcmUgYGdvb2R0YWJsZXNAMS4wYCB0aGVyZSB3YXMgbm8gd2FybmluZ3MgcHJvcGVydHlcbiAgcmV0dXJuIChyZXBvcnQud2FybmluZ3MgfHwgW10pLm1hcCgod2FybmluZykgPT4gcmVtb3ZlQmFzZVVybCh3YXJuaW5nKSlcbn1cblxuZnVuY3Rpb24gZ2V0VGFibGVzKHJlcG9ydDogSVJlcG9ydCkge1xuICByZXR1cm4gW1xuICAgIC4uLnJlcG9ydC50YWJsZXMuZmlsdGVyKCh0YWJsZSkgPT4gIXRhYmxlLnZhbGlkKSxcbiAgICAuLi5yZXBvcnQudGFibGVzLmZpbHRlcigodGFibGUpID0+IHRhYmxlLnZhbGlkKSxcbiAgXVxufVxuIl19