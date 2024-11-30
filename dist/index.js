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
    ssl: true, // Ensure SSL connection
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connect to the PostgreSQL server
            yield pgClient.connect();
            console.log("Connected to the database!");
            // Execute a query to fetch the username for id = 5
            const res = yield pgClient.query("SELECT username FROM users WHERE id = 5;");
            console.log("Query result:", res.rows); // Access `rows` to view the data
        }
        catch (err) {
            // Handle errors gracefully
            console.error("Error occurred:", err);
        }
        finally {
            // Ensure the client is properly closed
            yield pgClient.end();
            console.log("Disconnected from the database.");
        }
    });
}
main();
