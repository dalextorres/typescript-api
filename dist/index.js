"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const character_1 = require("./character");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello from express");
});
app.get("/rm/characters", character_1.characterHandler.getAll);
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port: ${port}`));
