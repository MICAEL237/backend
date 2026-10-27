"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("./src/features/auth/router/auth.route"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_middleware_1 = require("./src/features/middlewares/auth-middleware");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const user_route_1 = __importDefault(require("./src/features/auth/router/user.route"));
dotenv_1.default.config();
const origin_port = process.env.CORS_ORIGIN;
console.log(origin_port);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: origin_port,
    credentials: true
}));
app.use((0, cookie_parser_1.default)());
app.use('/api/v1/auth', auth_route_1.default);
app.use(auth_middleware_1.VerrifyUser);
app.use('/api/v1/users', user_route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map