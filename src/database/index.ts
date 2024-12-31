import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const databaseUrl = process.env.NODE_ENV === "development" ? process.env.DATABASE_URI! : process.env.DATABASE_URI! + ";sslmode=verify-ca;sslrootcert=ca.pem"
console.log(databaseUrl)

const client = postgres(databaseUrl);
export const db = drizzle(client, { schema: schema, logger: true });