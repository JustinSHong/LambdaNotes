const express = require("express");
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 3333;

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, "client/build")));

server.get("/", (req, res) => {
    res.json({ message: "hello world" });
});

server.listen(port, err => {
    if (err) console.log(err);
    console.log(`\n === Server listening on ${port} === \n`);
});
