import { defineConfig } from "prisma/config";

export default defineConfig({
  schemaPath: "prisma/schema.prisma",

  migrate: {
    datasourceUrl: process.env.DATABASE_URL!,
  },
});
