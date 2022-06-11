import express, { Express } from "express";

const config = require("../config/variables");
const user = require('./components/user/network');

const app = express();

app.use('/api/user', user);

app.listen(config.api.port, () => {

    console.log(`API is running on port   ${config.api.port}`);

})

