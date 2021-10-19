const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const productroutes = require("./routes/products");
app.use(express.json());
const cors=require('cors')



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,Origin,Authorization,X-Requested-With,Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "PUT,GET,PATCH,DELETE,POST");
  next();
});

app.use(cors())

app.use("/", productroutes);

app.listen(5050,()=>{
  console.log("Connected");
});
