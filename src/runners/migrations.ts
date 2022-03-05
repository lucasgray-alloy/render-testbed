import { migrate } from 'postgres-migrations';
import { dbConfig as baseConfig } from '../index';

const runMigrations = async () => {
    const dbConfig = {
        ...baseConfig,

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
