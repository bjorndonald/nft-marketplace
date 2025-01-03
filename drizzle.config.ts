import { defineConfig } from "drizzle-kit";
export default defineConfig({
    dialect: "postgresql", 
    schema: "./src/database/schema.ts",
    out: "./src/drizzle",
    dbCredentials: {
        url: `${process.env.DATABASE_URI}${process.env.NODE_ENV === "production" ? ";sslmode=verify-ca;sslrootcert=ca.pem": ""}`,
    },
});
