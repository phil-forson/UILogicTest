"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const colors_1 = __importDefault(require("colors"));
// Asynchronous function to connect to MongoDB
const connectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Attempt to establish a connection to MongoDB
        const conn = yield mongoose_1.default.connect(process.env.MONGO_URI);
        // Log success message if connected
        if (conn && conn.connection && conn.connection.host) {
            console.log(colors_1.default.blue.underline("MongoDB Connected: ".concat(conn.connection.host)));
        }
        else {
            console.log("MongoDB connection details are undefined.");
        }
    }
    catch (error) {
        // Log the error if connection fails
        console.error(error);
        // Exit the process with failure code
        process.exit(1);
    }
});
// Export the connectToDB function for use in other files
exports.default = connectToDB;
