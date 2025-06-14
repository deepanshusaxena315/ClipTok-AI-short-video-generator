import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
  dbCredentials:{
    url: "postgresql://neondb_owner:npg_VyPB6CgmdI1u@ep-fragrant-rain-a8x79wob-pooler.eastus2.azure.neon.tech/ai-short-video-generator?sslmode=require"
  }
});
