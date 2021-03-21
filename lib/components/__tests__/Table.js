"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("@testing-library/jest-dom/extend-expect");
const react_2 = require("@testing-library/react");
const report_json_1 = __importDefault(require("./fixtures/report.json"));
const Table_1 = require("../Table");
// Tests
it('should render', () => {
    react_2.render(react_1.default.createElement(Table_1.Table, { table: report_json_1.default.tables[0], tableNumber: 1, tablesCount: 2 }));
    expect(react_2.screen.getByText('invalid.csv')).toBeVisible();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9fX3Rlc3RzX18vVGFibGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQXlCO0FBQ3pCLG1EQUFnRDtBQUNoRCxrREFBdUQ7QUFDdkQseUVBQTJDO0FBQzNDLG9DQUFnQztBQUVoQyxRQUFRO0FBRVIsRUFBRSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7SUFDdkIsY0FBTSxDQUFDLDhCQUFDLGFBQUssSUFBQyxLQUFLLEVBQUUscUJBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxHQUFJLENBQUMsQ0FBQTtJQUMxRSxNQUFNLENBQUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO0FBQ3ZELENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICdAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tL2V4dGVuZC1leHBlY3QnXG5pbXBvcnQgeyByZW5kZXIsIHNjcmVlbiB9IGZyb20gJ0B0ZXN0aW5nLWxpYnJhcnkvcmVhY3QnXG5pbXBvcnQgcmVwb3J0IGZyb20gJy4vZml4dHVyZXMvcmVwb3J0Lmpzb24nXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJy4uL1RhYmxlJ1xuXG4vLyBUZXN0c1xuXG5pdCgnc2hvdWxkIHJlbmRlcicsICgpID0+IHtcbiAgcmVuZGVyKDxUYWJsZSB0YWJsZT17cmVwb3J0LnRhYmxlc1swXX0gdGFibGVOdW1iZXI9ezF9IHRhYmxlc0NvdW50PXsyfSAvPilcbiAgZXhwZWN0KHNjcmVlbi5nZXRCeVRleHQoJ2ludmFsaWQuY3N2JykpLnRvQmVWaXNpYmxlKClcbn0pXG4iXX0=