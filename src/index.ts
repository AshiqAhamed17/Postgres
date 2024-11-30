import { Client } from "pg";

const pgClient = new Client({
  connectionString:
    "postgresql://app_owner:Jm4RA1EDiXnt@ep-noisy-rain-a5bx22es.us-east-2.aws.neon.tech/app?sslmode=require",
  ssl: true,
});

async function main() {
  try {
    await pgClient.connect();
    console.log("Connected to the database!");

    const res = await pgClient.query("SELECT * FROM users WHERE id % 2 = 1;");
    console.log("Query result:", res.rows);
    const names = await pgClient.query("SELECT username FROM users;");
    const nameRes = names.rows.map(name => name.username);
    console.log("Names:", nameRes);
   

    
    
  } catch (err) {
    console.error("Error occurred:", err);
  } finally {
    await pgClient.end();
    console.log("Disconnected from the database.");
  }
}

main();
