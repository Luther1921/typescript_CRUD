"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const bookRoute_1 = __importDefault(require("./routes/bookRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/book", bookRoute_1.default);
(0, db_1.default)();
const Port = process.env.PORT || 3000;
app.listen(Port, () => {
    console.log(`Server is running on Port ${Port}`);
});
