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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const react_1 = __importStar(require("react"));
const MessageGroup_1 = require("./MessageGroup");
const Report_1 = require("./Report");
function Form(props) {
    const [isSourceFile, setIsSourceFile] = react_1.useState(false);
    const [isSchemaFile, setIsSchemaFile] = react_1.useState(false);
    const [isLoading, setIsLoading] = react_1.useState(!!props.reportPromise);
    const [reportPromise, setReportPromise] = react_1.useState(props.reportPromise || null);
    // TODO: setting default values like doesn't seem to work
    const [source, setSource] = react_1.useState(props.source || '');
    // TODO: setting default values like doesn't seem to work
    const [options, setOptions] = react_1.useState(props.options || {});
    const [report, setReport] = react_1.useState(null);
    const [error, setError] = react_1.useState(null);
    // Event handlers
    const onSourceTypeChange = () => {
        setIsSourceFile(!isSourceFile);
        onSourceChange('');
    };
    const onSchemaTypeChange = () => {
        setIsSchemaFile(!isSchemaFile);
        onOptionsChange('schema', '');
    };
    const onSourceChange = (source) => {
        setSource(source);
    };
    const onOptionsChange = (key, value) => {
        const newOptions = { ...options, [key]: value };
        if (!value)
            delete newOptions[key];
        setOptions(newOptions);
    };
    const onSubmit = () => {
        if (isDataPackage(source))
            options.preset = 'datapackage';
        setReport(null);
        setError(null);
        setIsLoading(true);
        props
            .validate(source, { ...options })
            .then((report) => {
            setReport(report);
            setIsLoading(false);
        })
            .catch((error) => {
            setError(error);
            setIsLoading(false);
        });
    };
    // Load report
    if (reportPromise) {
        reportPromise
            .then((report) => {
            setReport(report);
            setIsLoading(false);
            setReportPromise(null);
        })
            .catch((error) => {
            setError(error);
            setIsLoading(false);
            setReportPromise(null);
        });
    }
    // UI helpers
    const checkOptionsControls = [
        { key: 'blank-row', label: 'Ignore blank rows' },
        { key: 'duplicate-row', label: 'Ignore duplicate rows' },
    ];
    // Render
    return (react_1.default.createElement("form", { className: "goodtables-ui-form card card-default" },
        react_1.default.createElement("div", { className: "row-source" },
            react_1.default.createElement("div", { className: "form-inline" },
                react_1.default.createElement("label", { htmlFor: "source" }, "Source"),
                "\u00A0 [",
                react_1.default.createElement("a", { href: "#", onClick: () => onSourceTypeChange() }, isSourceFile ? 'Provide Link' : 'Upload File'),
                "]",
                react_1.default.createElement("div", { className: "input-group", style: { width: '100%' } },
                    !isSourceFile && (react_1.default.createElement("input", { name: "source", className: "form-control", type: "text", value: source, placeholder: "http://data.source/url", onChange: (ev) => onSourceChange(ev.target.value) })),
                    isSourceFile && (react_1.default.createElement("input", { name: "source", className: "form-control", type: "file", placeholder: "http://data.source/url", onChange: (ev) => !!ev.target.files && onSourceChange(ev.target.files[0]) })),
                    react_1.default.createElement("div", { className: "input-group-append" },
                        react_1.default.createElement("div", { className: "input-group-btn", style: { width: '1%' } },
                            react_1.default.createElement("button", { className: "btn btn-primary", onClick: (ev) => {
                                    ev.preventDefault();
                                    onSubmit();
                                } }, "Validate")))),
                react_1.default.createElement("small", null,
                    react_1.default.createElement("strong", null, "[REQUIRED]"),
                    " Add a data table to validate."))),
        react_1.default.createElement("div", { className: "row-schema" },
            react_1.default.createElement("div", { className: "row" },
                react_1.default.createElement("div", { className: "form-group col-md-8" },
                    react_1.default.createElement("label", { htmlFor: "schema" }, "Schema"),
                    "\u00A0 [",
                    react_1.default.createElement("a", { href: "#", onClick: () => onSchemaTypeChange() }, isSchemaFile ? 'Provide Link' : 'Upload File'),
                    "]",
                    !isSchemaFile && (react_1.default.createElement("input", { type: "text", className: "form-control", name: "schema", value: options.schema, placeholder: "http://table.schema/url", onChange: (ev) => onOptionsChange('schema', ev.target.value) })),
                    isSchemaFile && (react_1.default.createElement("input", { type: "file", className: "form-control", name: "schema", placeholder: "http://table.schema/url", onChange: (ev) => onOptionsChange('schema', ev.target.files[0]) })),
                    react_1.default.createElement("small", null,
                        react_1.default.createElement("strong", null, "[OPTIONAL]"),
                        " Select to validate this data against a Table Schema (",
                        react_1.default.createElement("a", { href: "http://specs.frictionlessdata.io/table-schema/", target: "_blank", rel: "noopener noreferrer" }, "What is it?"),
                        ").")),
                react_1.default.createElement("div", { className: "form-group col-md-2" },
                    react_1.default.createElement("div", { className: "form-group" },
                        react_1.default.createElement("label", { htmlFor: "format" }, "Format"),
                        react_1.default.createElement("select", { name: "format", value: options.format, className: "form-control", onChange: (ev) => onOptionsChange('format', ev.target.value) },
                            react_1.default.createElement("option", { value: "" }, "Auto"),
                            react_1.default.createElement("option", { value: "csv" }, "CSV"),
                            react_1.default.createElement("option", { value: "gsheet" }, "Google Sheet"),
                            react_1.default.createElement("option", { value: "json" }, "JSON"),
                            react_1.default.createElement("option", { value: "ndjson" }, "NDJSON"),
                            react_1.default.createElement("option", { value: "ods" }, "ODS"),
                            react_1.default.createElement("option", { value: "tsv" }, "TSV"),
                            react_1.default.createElement("option", { value: "xls" }, "XLS"),
                            react_1.default.createElement("option", { value: "xlsx" }, "XLSX")))),
                react_1.default.createElement("div", { className: "col-md-2" },
                    react_1.default.createElement("div", { className: "form-group" },
                        react_1.default.createElement("label", { htmlFor: "encoding" }, "Encoding"),
                        react_1.default.createElement("select", { name: "encoding", value: options.encoding, className: "form-control", onChange: (ev) => onOptionsChange('encoding', ev.target.value) },
                            react_1.default.createElement("option", { value: "" }, "Auto"),
                            react_1.default.createElement("option", { value: "utf-8" }, "UTF-8"),
                            react_1.default.createElement("option", { value: "ascii" }, "ASCII"),
                            react_1.default.createElement("option", { value: "iso-8859-2" }, "ISO-8859-2")))))),
        react_1.default.createElement("div", { className: "row-flags mt-3" },
            react_1.default.createElement("div", { className: "row" }, checkOptionsControls.map((item) => (react_1.default.createElement("div", { className: "col-md-6", key: item.key },
                react_1.default.createElement("div", { className: "form-check" },
                    react_1.default.createElement("input", { id: item.key, type: "checkbox", className: "form-check-input", checked: (options.checks || {})[item.key] === false, onChange: (ev) => {
                            const checks = options.checks || {};
                            delete checks[item.key];
                            if (ev.target.checked)
                                checks[item.key] = false;
                            onOptionsChange('checks', checks);
                        } }),
                    react_1.default.createElement("label", { htmlFor: item.key, className: "form-check-label" }, item.label))))))),
        isLoading && (react_1.default.createElement("div", { className: "row-message" },
            react_1.default.createElement("div", { className: "alert alert-info" }, "Loading..."))),
        error && (react_1.default.createElement("div", { className: "row-message" },
            react_1.default.createElement(MessageGroup_1.MessageGroup, { type: "danger", title: 'Error', messages: [error.message] }))),
        report && window.location.search && (react_1.default.createElement("div", { className: "row-message" },
            react_1.default.createElement("div", { className: "alert alert-info" },
                react_1.default.createElement("strong", null, "Permalink:"),
                "\u00A0",
                react_1.default.createElement("a", { href: window.location.href }, window.location.href)))),
        report && (react_1.default.createElement("div", { className: "row-report" },
            react_1.default.createElement(Report_1.Report, { report: report, spec: props.spec })))));
}
exports.Form = Form;
// Helpers
function isDataPackage(source) {
    const path = source instanceof window.File ? source.name : source;
    return path.endsWith('datapackage.json');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0Zvcm0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBdUM7QUFFdkMsaURBQTZDO0FBQzdDLHFDQUFpQztBQVVqQyxTQUFnQixJQUFJLENBQUMsS0FBaUI7SUFDcEMsTUFBTSxDQUFDLFlBQVksRUFBRSxlQUFlLENBQUMsR0FBRyxnQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3ZELE1BQU0sQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN2RCxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxHQUFHLGdCQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUNqRSxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsZ0JBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxDQUFBO0lBQy9FLHlEQUF5RDtJQUN6RCxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxHQUFHLGdCQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQTtJQUN4RCx5REFBeUQ7SUFDekQsTUFBTSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsR0FBRyxnQkFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUE7SUFDM0QsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsR0FBRyxnQkFBUSxDQUFDLElBQXNCLENBQUMsQ0FBQTtJQUM1RCxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLGdCQUFRLENBQUMsSUFBb0IsQ0FBQyxDQUFBO0lBRXhELGlCQUFpQjtJQUVqQixNQUFNLGtCQUFrQixHQUFHLEdBQUcsRUFBRTtRQUM5Qixl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RSxDQUNQO1FBRUEsTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQ25DLHVDQUFLLFNBQVMsRUFBQyxhQUFhO1lBQzFCLHVDQUFLLFNBQVMsRUFBQyxrQkFBa0I7Z0JBQy9CLDJEQUEyQjs7Z0JBQzNCLHFDQUFHLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksSUFBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBSyxDQUNyRCxDQUNGLENBQ1A7UUFFQSxNQUFNLElBQUksQ0FDVCx1Q0FBSyxTQUFTLEVBQUMsWUFBWTtZQUN6Qiw4QkFBQyxlQUFNLElBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksR0FBSSxDQUN4QyxDQUNQLENBQ0ksQ0FDUixDQUFBO0FBQ0gsQ0FBQztBQXRRRCxvQkFzUUM7QUFFRCxVQUFVO0FBRVYsU0FBUyxhQUFhLENBQUMsTUFBZTtJQUNwQyxNQUFNLElBQUksR0FBRyxNQUFNLFlBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFBO0lBQ2pFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0FBQzFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IElTb3VyY2UsIElPcHRpb25zLCBJVmFsaWRhdGUsIElSZXBvcnQsIElTcGVjIH0gZnJvbSAnLi4vY29tbW9uJ1xuaW1wb3J0IHsgTWVzc2FnZUdyb3VwIH0gZnJvbSAnLi9NZXNzYWdlR3JvdXAnXG5pbXBvcnQgeyBSZXBvcnQgfSBmcm9tICcuL1JlcG9ydCdcblxuZXhwb3J0IGludGVyZmFjZSBJRm9ybVByb3BzIHtcbiAgc291cmNlOiBJU291cmNlXG4gIG9wdGlvbnM6IElPcHRpb25zXG4gIHZhbGlkYXRlOiBJVmFsaWRhdGVcbiAgcmVwb3J0UHJvbWlzZT86IFByb21pc2U8SVJlcG9ydD5cbiAgc3BlYz86IElTcGVjXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtKHByb3BzOiBJRm9ybVByb3BzKSB7XG4gIGNvbnN0IFtpc1NvdXJjZUZpbGUsIHNldElzU291cmNlRmlsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lzU2NoZW1hRmlsZSwgc2V0SXNTY2hlbWFGaWxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoISFwcm9wcy5yZXBvcnRQcm9taXNlKVxuICBjb25zdCBbcmVwb3J0UHJvbWlzZSwgc2V0UmVwb3J0UHJvbWlzZV0gPSB1c2VTdGF0ZShwcm9wcy5yZXBvcnRQcm9taXNlIHx8IG51bGwpXG4gIC8vIFRPRE86IHNldHRpbmcgZGVmYXVsdCB2YWx1ZXMgbGlrZSBkb2Vzbid0IHNlZW0gdG8gd29ya1xuICBjb25zdCBbc291cmNlLCBzZXRTb3VyY2VdID0gdXNlU3RhdGUocHJvcHMuc291cmNlIHx8ICcnKVxuICAvLyBUT0RPOiBzZXR0aW5nIGRlZmF1bHQgdmFsdWVzIGxpa2UgZG9lc24ndCBzZWVtIHRvIHdvcmtcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUocHJvcHMub3B0aW9ucyB8fCB7fSlcbiAgY29uc3QgW3JlcG9ydCwgc2V0UmVwb3J0XSA9IHVzZVN0YXRlKG51bGwgYXMgSVJlcG9ydCB8IG51bGwpXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCBhcyBFcnJvciB8IG51bGwpXG5cbiAgLy8gRXZlbnQgaGFuZGxlcnNcblxuICBjb25zdCBvblNvdXJjZVR5cGVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgc2V0SXNTb3VyY2VGaWxlKCFpc1NvdXJjZUZpbGUpXG4gICAgb25Tb3VyY2VDaGFuZ2UoJycpXG4gIH1cblxuICBjb25zdCBvblNjaGVtYVR5cGVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgc2V0SXNTY2hlbWFGaWxlKCFpc1NjaGVtYUZpbGUpXG4gICAgb25PcHRpb25zQ2hhbmdlKCdzY2hlbWEnLCAnJylcbiAgfVxuXG4gIGNvbnN0IG9uU291cmNlQ2hhbmdlID0gKHNvdXJjZTogSVNvdXJjZSkgPT4ge1xuICAgIHNldFNvdXJjZShzb3VyY2UpXG4gIH1cblxuICBjb25zdCBvbk9wdGlvbnNDaGFuZ2UgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHtcbiAgICBjb25zdCBuZXdPcHRpb25zID0geyAuLi5vcHRpb25zLCBba2V5XTogdmFsdWUgfVxuICAgIGlmICghdmFsdWUpIGRlbGV0ZSBuZXdPcHRpb25zW2tleV1cbiAgICBzZXRPcHRpb25zKG5ld09wdGlvbnMpXG4gIH1cblxuICBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICBpZiAoaXNEYXRhUGFja2FnZShzb3VyY2UpKSBvcHRpb25zLnByZXNldCA9ICdkYXRhcGFja2FnZSdcbiAgICBzZXRSZXBvcnQobnVsbClcbiAgICBzZXRFcnJvcihudWxsKVxuICAgIHNldElzTG9hZGluZyh0cnVlKVxuICAgIHByb3BzXG4gICAgICAudmFsaWRhdGUoc291cmNlLCB7IC4uLm9wdGlvbnMgfSlcbiAgICAgIC50aGVuKChyZXBvcnQpID0+IHtcbiAgICAgICAgc2V0UmVwb3J0KHJlcG9ydClcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IpXG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG4gIH1cblxuICAvLyBMb2FkIHJlcG9ydFxuXG4gIGlmIChyZXBvcnRQcm9taXNlKSB7XG4gICAgcmVwb3J0UHJvbWlzZVxuICAgICAgLnRoZW4oKHJlcG9ydCkgPT4ge1xuICAgICAgICBzZXRSZXBvcnQocmVwb3J0KVxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgICAgIHNldFJlcG9ydFByb21pc2UobnVsbClcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHNldEVycm9yKGVycm9yKVxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgICAgIHNldFJlcG9ydFByb21pc2UobnVsbClcbiAgICAgIH0pXG4gIH1cblxuICAvLyBVSSBoZWxwZXJzXG5cbiAgY29uc3QgY2hlY2tPcHRpb25zQ29udHJvbHMgPSBbXG4gICAgeyBrZXk6ICdibGFuay1yb3cnLCBsYWJlbDogJ0lnbm9yZSBibGFuayByb3dzJyB9LFxuICAgIHsga2V5OiAnZHVwbGljYXRlLXJvdycsIGxhYmVsOiAnSWdub3JlIGR1cGxpY2F0ZSByb3dzJyB9LFxuICBdXG5cbiAgLy8gUmVuZGVyXG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJnb29kdGFibGVzLXVpLWZvcm0gY2FyZCBjYXJkLWRlZmF1bHRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXNvdXJjZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzb3VyY2VcIj5Tb3VyY2U8L2xhYmVsPiZuYnNwOyBbXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBvblNvdXJjZVR5cGVDaGFuZ2UoKX0+XG4gICAgICAgICAgICB7aXNTb3VyY2VGaWxlID8gJ1Byb3ZpZGUgTGluaycgOiAnVXBsb2FkIEZpbGUnfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICBdXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICB7IWlzU291cmNlRmlsZSAmJiAoXG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9XCJzb3VyY2VcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzb3VyY2UgYXMgc3RyaW5nfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaHR0cDovL2RhdGEuc291cmNlL3VybFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldikgPT4gb25Tb3VyY2VDaGFuZ2UoZXYudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtpc1NvdXJjZUZpbGUgJiYgKFxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBuYW1lPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHA6Ly9kYXRhLnNvdXJjZS91cmxcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+ICEhZXYudGFyZ2V0LmZpbGVzICYmIG9uU291cmNlQ2hhbmdlKGV2LnRhcmdldC5maWxlc1swXSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWJ0blwiIHN0eWxlPXt7IHdpZHRoOiAnMSUnIH19PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdCgpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFZhbGlkYXRlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgPHN0cm9uZz5bUkVRVUlSRURdPC9zdHJvbmc+IEFkZCBhIGRhdGEgdGFibGUgdG8gdmFsaWRhdGUuXG4gICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctc2NoZW1hXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC04XCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNjaGVtYVwiPlNjaGVtYTwvbGFiZWw+Jm5ic3A7IFtcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gb25TY2hlbWFUeXBlQ2hhbmdlKCl9PlxuICAgICAgICAgICAgICB7aXNTY2hlbWFGaWxlID8gJ1Byb3ZpZGUgTGluaycgOiAnVXBsb2FkIEZpbGUnfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgeyFpc1NjaGVtYUZpbGUgJiYgKFxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2NoZW1hXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5zY2hlbWF9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwOi8vdGFibGUuc2NoZW1hL3VybFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldikgPT4gb25PcHRpb25zQ2hhbmdlKCdzY2hlbWEnLCBldi50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtpc1NjaGVtYUZpbGUgJiYgKFxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2NoZW1hXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImh0dHA6Ly90YWJsZS5zY2hlbWEvdXJsXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiBvbk9wdGlvbnNDaGFuZ2UoJ3NjaGVtYScsIGV2LnRhcmdldC5maWxlcyFbMF0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5bT1BUSU9OQUxdPC9zdHJvbmc+IFNlbGVjdCB0byB2YWxpZGF0ZSB0aGlzIGRhdGEgYWdhaW5zdCBhIFRhYmxlIFNjaGVtYSAoXG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zcGVjcy5mcmljdGlvbmxlc3NkYXRhLmlvL3RhYmxlLXNjaGVtYS9cIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBXaGF0IGlzIGl0P1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICkuXG4gICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmb3JtYXRcIj5Gb3JtYXQ8L2xhYmVsPlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgbmFtZT1cImZvcm1hdFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbnMuZm9ybWF0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldikgPT4gb25PcHRpb25zQ2hhbmdlKCdmb3JtYXQnLCBldi50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkF1dG88L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3N2XCI+Q1NWPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdzaGVldFwiPkdvb2dsZSBTaGVldDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJqc29uXCI+SlNPTjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuZGpzb25cIj5OREpTT048L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwib2RzXCI+T0RTPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRzdlwiPlRTVjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ4bHNcIj5YTFM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwieGxzeFwiPlhMU1g8L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVuY29kaW5nXCI+RW5jb2Rpbmc8L2xhYmVsPlxuICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgbmFtZT1cImVuY29kaW5nXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17b3B0aW9ucy5lbmNvZGluZ31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IG9uT3B0aW9uc0NoYW5nZSgnZW5jb2RpbmcnLCBldi50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkF1dG88L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidXRmLThcIj5VVEYtODwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhc2NpaVwiPkFTQ0lJPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImlzby04ODU5LTJcIj5JU08tODg1OS0yPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LWZsYWdzIG10LTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICB7Y2hlY2tPcHRpb25zQ29udHJvbHMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCIga2V5PXtpdGVtLmtleX0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0ua2V5fVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17KG9wdGlvbnMuY2hlY2tzIHx8IHt9KVtpdGVtLmtleV0gPT09IGZhbHNlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja3MgPSBvcHRpb25zLmNoZWNrcyB8fCB7fVxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hlY2tzW2l0ZW0ua2V5XVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXYudGFyZ2V0LmNoZWNrZWQpIGNoZWNrc1tpdGVtLmtleV0gPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBvbk9wdGlvbnNDaGFuZ2UoJ2NoZWNrcycsIGNoZWNrcylcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17aXRlbS5rZXl9IGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1tZXNzYWdlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+TG9hZGluZy4uLjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LW1lc3NhZ2VcIj5cbiAgICAgICAgICA8TWVzc2FnZUdyb3VwIHR5cGU9XCJkYW5nZXJcIiB0aXRsZT17J0Vycm9yJ30gbWVzc2FnZXM9e1tlcnJvci5tZXNzYWdlXX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7cmVwb3J0ICYmIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1tZXNzYWdlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1pbmZvXCI+XG4gICAgICAgICAgICA8c3Ryb25nPlBlcm1hbGluazo8L3N0cm9uZz4mbmJzcDtcbiAgICAgICAgICAgIDxhIGhyZWY9e3dpbmRvdy5sb2NhdGlvbi5ocmVmfT57d2luZG93LmxvY2F0aW9uLmhyZWZ9PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtyZXBvcnQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdy1yZXBvcnRcIj5cbiAgICAgICAgICA8UmVwb3J0IHJlcG9ydD17cmVwb3J0fSBzcGVjPXtwcm9wcy5zcGVjfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9mb3JtPlxuICApXG59XG5cbi8vIEhlbHBlcnNcblxuZnVuY3Rpb24gaXNEYXRhUGFja2FnZShzb3VyY2U6IElTb3VyY2UpIHtcbiAgY29uc3QgcGF0aCA9IHNvdXJjZSBpbnN0YW5jZW9mIHdpbmRvdy5GaWxlID8gc291cmNlLm5hbWUgOiBzb3VyY2VcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJ2RhdGFwYWNrYWdlLmpzb24nKVxufVxuIl19