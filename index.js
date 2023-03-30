var express = require("express");
var app = express();


app.get("/api/", (req, res, next) => {
   res.json({
       time: (new Date()).toString(),
      message: "Hello"
   });
});


app.listen(3000, () => {
   console.log("Server running on port 3000");
});
