"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageGroup = void 0;
const react_1 = __importDefault(require("react"));
function MessageGroup(props) {
    const { type, title, messages } = props;
    return (react_1.default.createElement("div", { className: `alert alert-${type}`, role: "alert" },
        react_1.default.createElement("span", { className: "title" }, title),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("ul", null, messages.map((message, index) => (react_1.default.createElement("li", { key: index }, message))))));
}
exports.MessageGroup = MessageGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZUdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVzc2FnZUdyb3VwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxrREFBeUI7QUFRekIsU0FBZ0IsWUFBWSxDQUFDLEtBQXlCO0lBQ3BELE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUN2QyxPQUFPLENBQ0wsdUNBQUssU0FBUyxFQUFFLGVBQWUsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFDLE9BQU87UUFDakQsd0NBQU0sU0FBUyxFQUFDLE9BQU8sSUFBRSxLQUFLLENBQVE7UUFDdEMseUNBQU07UUFDTiwwQ0FDRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FDaEMsc0NBQUksR0FBRyxFQUFFLEtBQUssSUFBRyxPQUFPLENBQU0sQ0FDL0IsQ0FBQyxDQUNDLENBQ0QsQ0FDUCxDQUFBO0FBQ0gsQ0FBQztBQWJELG9DQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgaW50ZXJmYWNlIElNZXNzYWdlR3JvdXBQcm9wcyB7XG4gIHR5cGU6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIG1lc3NhZ2VzOiBzdHJpbmdbXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTWVzc2FnZUdyb3VwKHByb3BzOiBJTWVzc2FnZUdyb3VwUHJvcHMpIHtcbiAgY29uc3QgeyB0eXBlLCB0aXRsZSwgbWVzc2FnZXMgfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCBhbGVydC0ke3R5cGV9YH0gcm9sZT1cImFsZXJ0XCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L3NwYW4+XG4gICAgICA8aHIgLz5cbiAgICAgIDx1bD5cbiAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpbmRleH0+e21lc3NhZ2V9PC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0=