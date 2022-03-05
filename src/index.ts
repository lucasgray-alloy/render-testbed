import express from 'express';

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello world!');
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
