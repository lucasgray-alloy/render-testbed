import bodyParser from 'body-parser';
import express from 'express';
import Knex from 'knex';
import { Customer } from './types/Customer/Customer';

export const app = express();
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());
const port = process.env.PORT || 3002;

export const dbConfig = {
    database: process.env.database_name || 'alloy',
    user: process.env.database_user || 'alloy',
    password: process.env.database_password || 'alloy',
    host: process.env.database_host || 'localhost',
    port: 5432,
};

export const knex = Knex({
    client: 'pg',
    connection: dbConfig,
    asyncStackTraces: true, // TODO turn off when running in prod
});

// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.post('/customer', (req, res, next) => {
    console.log('hi this is a customer!');

    const customer = req.body as Customer;

    // validate
    // authenticate

    // save
    knex<Customer>('customer')
        .insert(customer, '*')
        .returning<Customer>('*')
        .then((savedCustomer) => {
            console.log('did the thing');

            // return success
            return res.json(savedCustomer);
        });
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

// TODO old stuff from the starter project

// import { readFile } from 'fs';
// import * as os from 'os';
// import { add } from './foo/foo';

// readFile('./package.json', (err, packageStr) => {
//     if (err) {
//         console.error('There was a problem reading package json', err);
//         return;
//     }
//
//     const json = JSON.parse(packageStr.toString());
//
//     console.log(`Running typescript-node-starter version ${json.version}`);
//     console.info(`Running on ${os.hostname()} with ${os.cpus().length} CPU's and ${os.totalmem()} mem`);
//     console.info(`1 + 1 = ${add(1, 1)}`);
// });
