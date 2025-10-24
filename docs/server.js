"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
// ✅ Serve static files (HTML, CSS, JS, images) from the root and dist folders
app.use(express_1.default.static(path_1.default.join(__dirname, "../")));
app.use(express_1.default.static(path_1.default.join(__dirname, "../dist")));
// ✅ Route root (/) to index.html
app.get("/", (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../index.html"));
});
// ✅ Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map