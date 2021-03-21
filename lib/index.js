"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spec = exports.Form = exports.Report = exports.render = void 0;
const render_1 = require("./render");
Object.defineProperty(exports, "render", { enumerable: true, get: function () { return render_1.render; } });
const Report_1 = require("./components/Report");
Object.defineProperty(exports, "Report", { enumerable: true, get: function () { return Report_1.Report; } });
const Form_1 = require("./components/Form");
Object.defineProperty(exports, "Form", { enumerable: true, get: function () { return Form_1.Form; } });
const spec_json_1 = __importDefault(require("./spec.json"));
exports.spec = spec_json_1.default;
require('./styles/base.css');
// TODO: consider droping this duplication for v3
exports.default = { render: render_1.render, Report: Report_1.Report, Form: Form_1.Form, spec: spec_json_1.default };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUNBQWlDO0FBUXhCLHVGQVJBLGVBQU0sT0FRQTtBQVBmLGdEQUE0QztBQU8zQix1RkFQUixlQUFNLE9BT1E7QUFOdkIsNENBQXdDO0FBTWYscUZBTmhCLFdBQUksT0FNZ0I7QUFMN0IsNERBQThCO0FBS0MsZUFMeEIsbUJBQUksQ0FLd0I7QUFKbkMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUE7QUFFNUIsaURBQWlEO0FBQ2pELGtCQUFlLEVBQUUsTUFBTSxFQUFOLGVBQU0sRUFBRSxNQUFNLEVBQU4sZUFBTSxFQUFFLElBQUksRUFBSixXQUFJLEVBQUUsSUFBSSxFQUFKLG1CQUFJLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4vcmVuZGVyJ1xuaW1wb3J0IHsgUmVwb3J0IH0gZnJvbSAnLi9jb21wb25lbnRzL1JlcG9ydCdcbmltcG9ydCB7IEZvcm0gfSBmcm9tICcuL2NvbXBvbmVudHMvRm9ybSdcbmltcG9ydCBzcGVjIGZyb20gJy4vc3BlYy5qc29uJ1xucmVxdWlyZSgnLi9zdHlsZXMvYmFzZS5jc3MnKVxuXG4vLyBUT0RPOiBjb25zaWRlciBkcm9waW5nIHRoaXMgZHVwbGljYXRpb24gZm9yIHYzXG5leHBvcnQgZGVmYXVsdCB7IHJlbmRlciwgUmVwb3J0LCBGb3JtLCBzcGVjIH1cbmV4cG9ydCB7IHJlbmRlciwgUmVwb3J0LCBGb3JtLCBzcGVjIH1cbiJdfQ==