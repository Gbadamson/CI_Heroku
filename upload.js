const express = require("express");
const multer = require("multer");

const PORT = 1114;

const lev = express();

const stocker = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./filpath");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const imgUp = multer({ storage: stocker });

// lev.post('/imgsin', imgUp.single("avatar"), (req, res)=>{
//     res.status(201).send("Image posted Successfully")
// })

lev.post("/imgmult", imgUp.array("avatar", 12), (req, res) => {
  res.status(201).send("All Images posted successfully");
  console.log("Image has been successfully posted");
});

lev.listen(PORT, () => {
  console.log(`${PORT} is working fine`);
});
