"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const spec_json_1 = __importDefault(require("../spec.json"));
// Tests
it('should be up-to-date', async () => {
    const url = 'https://raw.githubusercontent.com/frictionlessdata/data-quality-spec/master/spec.json';
    const res = await node_fetch_1.default(url);
    const data = await res.json();
    expect(spec_json_1.default).toEqual(data);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fX3Rlc3RzX18vc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDREQUE4QjtBQUM5Qiw2REFBK0I7QUFFL0IsUUFBUTtBQUVSLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUNwQyxNQUFNLEdBQUcsR0FDUCx1RkFBdUYsQ0FBQTtJQUN6RixNQUFNLEdBQUcsR0FBRyxNQUFNLG9CQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDNUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDN0IsTUFBTSxDQUFDLG1CQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDNUIsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCdcbmltcG9ydCBzcGVjIGZyb20gJy4uL3NwZWMuanNvbidcblxuLy8gVGVzdHNcblxuaXQoJ3Nob3VsZCBiZSB1cC10by1kYXRlJywgYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1cmwgPVxuICAgICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZnJpY3Rpb25sZXNzZGF0YS9kYXRhLXF1YWxpdHktc3BlYy9tYXN0ZXIvc3BlYy5qc29uJ1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gIGV4cGVjdChzcGVjKS50b0VxdWFsKGRhdGEpXG59KVxuIl19