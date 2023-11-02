
import express from "express";

const server = express();

server.get('/', (req, res) => {

    return res.send('tu é gay cara!')
})

export { server };