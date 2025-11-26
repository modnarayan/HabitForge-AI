export default () => ({
  app: {
    port: parseInt(process.env.AUTH_PORT || '3002', 10),
    env: process.env.NODE_ENV || 'development',
    serviceName: process.env.SERVICE_NAME || 'Auth-service',
  },
  // Database
  database: {
    host: process.env.DB_HOST ?? 'localhost',
    port: parseInt(process.env.DB_PORT ?? '5432', 10),
    username: process.env.DB_USERNAME ?? 'postgres',
    password: process.env.DB_PASSWORD ?? 'postgres',
    database: process.env.DB_NAME ?? 'postgres',
    synchronize: (process.env.DB_SYNC ?? 'false') === 'true',
    logging: (process.env.DB_LOGGING ?? 'false') === 'true',
    ssl: (process.env.DB_SSL ?? 'false') === 'true',
  },

  logging: {
    level: process.env.LOG_LEVEL ?? 'info',
  },
});
