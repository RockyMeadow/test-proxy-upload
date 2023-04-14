const http = require("http");
const formidable = require("formidable");

http
  .createServer((req, res) => {
    if (req.url === "/upload" && req.method === "POST") {
      const form = new formidable.IncomingForm();

      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end();
          return;
        }

        res.statusCode = 200;
        res.write(`${files.files.originalFilename} ${files.files.size}`);
        res.end();
      });
    } else {
      res.statusCode = 404;
      res.end();
    }
  })
  .listen(3005);
