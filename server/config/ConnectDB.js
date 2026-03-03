"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URL);
        console.log('MongoDB 연결이 성공하였습니다.');
    }
    catch (err) {
        console.error('MongoDB에 연결할 수 없습니다.');
        process.exit(1);
    }
};
exports.connectDB = connectDB;
