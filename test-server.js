const http = require("http");
const formidable = require("formidable");

http
  .createServer((req, res) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000,
    };

    if (req.method === "OPTIONS") {
      res.writeHead(204, headers);
      res.end();
      return;
    }

    if (req.url === "/upload") {
      const form = new formidable.IncomingForm();

      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end();
          return;
        }

        res.writeHead(200, headers);
        res.write(`${files.files.originalFilename} ${files.files.size}`);
        res.end();
      });
    } else {
      res.statusCode = 404;
      res.end();
    }
  })
  .listen(3005);
