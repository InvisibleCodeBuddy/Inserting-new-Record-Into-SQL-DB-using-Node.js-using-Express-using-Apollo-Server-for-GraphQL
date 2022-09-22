import express from 'express';
require('dotenv').config();

const app = express();

app.listen(500, () => {
    console.log('app started')
})
