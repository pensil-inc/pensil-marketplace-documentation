const express = require("express");
const path = require("path");
const { Remarkable } = require("remarkable");
const fs = require("fs");

const md = new Remarkable();

const readmes = express.Router();

readmes.get("/", renderIndex);

readmes.get("/direct-message-sockets", renderMd("direct-message-sockets"));

function renderIndex(req, res) {
    fs.readdir("docs/v1/readmes/mds", (err, files) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        const readmes = files.map(file => {
            const name = file.split(".")[0];
            const title = name.replace(/-/g, " ");
            return {
                name,
                title,
                url: `/readme/${name}`,
            };
        });
        res.render("readme_index", {
            readmes,
        });
    });
}

function renderMd(fileName) {
    return (req, res) => {
        res.header("Content-Type", "text/html");
        return res.send(`
<!DOCTYPE html>
<html>
    <head>
    <link rel="stylesheet"
href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
    </head>
    <body>
        <a href="/readme">Go back to index</a>
        ${md.render(fs.readFileSync("docs/v1/readmes/mds/" + fileName + ".md", "utf8"))}
    </body>
</html>`);
    }
}

module.exports = readmes;