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
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pgClient = new pg_1.Client({
    connectionString: "postgresql://app_owner:Jm4RA1EDiXnt@ep-noisy-rain-a5bx22es.us-east-2.aws.neon.tech/app?sslmode=require",
    ssl: true,
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield pgClient.connect();
            console.log("Connected to the database!");
            const res = yield pgClient.query("SELECT * FROM users WHERE id % 2 = 1;");
            console.log("Query result:", res.rows);
            const names = yield pgClient.query("SELECT username FROM users;");
            const nameRes = names.rows.map(name => name.username);
            console.log("Names:", nameRes);
        }
        catch (err) {
            console.error("Error occurred:", err);
        }
        finally {
            yield pgClient.end();
            console.log("Disconnected from the database.");
        }
    });
}
main();
