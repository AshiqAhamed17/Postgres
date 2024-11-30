import { Client } from "pg";

const pgClient = new Client({
  connectionString: "postgresql://app_owner:Jm4RA1EDiXnt@ep-noisy-rain-a5bx22es.us-east-2.aws.neon.tech/app?sslmode=require",
  ssl: true, 
});

async function main() {
  try {
    // Connect to the PostgreSQL server
    await pgClient.connect();
    console.log("Connected to the database!");

    // Execute a query to fetch the username for id = 5
    const res = await pgClient.query("SELECT username FROM users WHERE id = 5;");
    console.log("Query result:", res.rows); // Access `rows` to view the data
  } catch (err) {
    // Handle errors gracefully
    console.error("Error occurred:", err);
  } finally {
    // Ensure the client is properly closed
    await pgClient.end();
    console.log("Disconnected from the database.");
  }
}

main();