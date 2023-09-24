// const express = require("express");

import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get('/users', (req, res) => {
    res.json({
        data: 'Raja Kumar Kamal',
    });
});

const port = process.env.PORT;

app.listen(port,  () => {
    console.log(`Node server is running on port ${port}`);
});