import { migrate } from 'postgres-migrations';

const runMigrations = async () => {
    const dbConfig = {
        database: process.env.database_name || 'alloy',
        user: process.env.database_user || 'alloy',
        password: process.env.database_password || 'alloy',
        host: process.env.database_host || 'localhost',
        port: 5432,

        // Default: false for backwards-compatibility
        // This might change!
        ensureDatabaseExists: true,

        // Default: "postgres"
        // Used when checking/creating "database-name"
        defaultDatabase: 'alloy',
    };

    await migrate(dbConfig, 'migrations');
};

runMigrations().then(() => {
    console.log('Migrations completed successfully!');
});
