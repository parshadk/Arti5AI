/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://AI%20content%20generator_owner:JyX8kPIe4hqp@ep-cool-frog-a17hv20v.ap-southeast-1.aws.neon.tech/AI%20content%20generator?sslmode=require',
  }
};