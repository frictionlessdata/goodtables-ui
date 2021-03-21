"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("@testing-library/jest-dom/extend-expect");
const react_2 = require("@testing-library/react");
const MessageGroup_1 = require("../MessageGroup");
// Tests
it('should render', () => {
    react_2.render(react_1.default.createElement(MessageGroup_1.MessageGroup, { type: 'warning', title: 'title', messages: ['message'] }));
    expect(react_2.screen.getByText('title')).toBeVisible();
    expect(react_2.screen.getByText('message')).toBeVisible();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZUdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvX190ZXN0c19fL01lc3NhZ2VHcm91cC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBeUI7QUFDekIsbURBQWdEO0FBQ2hELGtEQUF1RDtBQUN2RCxrREFBOEM7QUFFOUMsUUFBUTtBQUVSLEVBQUUsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO0lBQ3ZCLGNBQU0sQ0FBQyw4QkFBQywyQkFBWSxJQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBSSxDQUFDLENBQUE7SUFDaEYsTUFBTSxDQUFDLGNBQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUMvQyxNQUFNLENBQUMsY0FBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO0FBQ25ELENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICdAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tL2V4dGVuZC1leHBlY3QnXG5pbXBvcnQgeyByZW5kZXIsIHNjcmVlbiB9IGZyb20gJ0B0ZXN0aW5nLWxpYnJhcnkvcmVhY3QnXG5pbXBvcnQgeyBNZXNzYWdlR3JvdXAgfSBmcm9tICcuLi9NZXNzYWdlR3JvdXAnXG5cbi8vIFRlc3RzXG5cbml0KCdzaG91bGQgcmVuZGVyJywgKCkgPT4ge1xuICByZW5kZXIoPE1lc3NhZ2VHcm91cCB0eXBlPXsnd2FybmluZyd9IHRpdGxlPXsndGl0bGUnfSBtZXNzYWdlcz17WydtZXNzYWdlJ119IC8+KVxuICBleHBlY3Qoc2NyZWVuLmdldEJ5VGV4dCgndGl0bGUnKSkudG9CZVZpc2libGUoKVxuICBleHBlY3Qoc2NyZWVuLmdldEJ5VGV4dCgnbWVzc2FnZScpKS50b0JlVmlzaWJsZSgpXG59KVxuIl19