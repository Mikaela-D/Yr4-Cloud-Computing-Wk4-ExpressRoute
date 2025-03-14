const express = require("express");
const router = express.Router();

const products = [];

router.get("/", (req, res, next) => {
  res.send("Hi there!");
});

router.get("/addProduct", (req, res, next) => {
  console.log("here");
  res.send(
    '<form action="/addTheProduct" method="POST"> <input type="text" name="title"><input type="text" name="price"> <button type="submit">Add A Product</button> </form>'
  );
});

router.post("/addTheProduct", (req, res, next) => {
  products.push({ title: req.body.title, price: req.body.price });
  console.log(JSON.stringify(products));
  res.redirect("/");
});

router.get("/products/:theId", (req, res, next) => {
  // console.log("req.params: " + req.params);
  console.log("req.params: " + JSON.stringify(req.params)); // Brian added this
  console.log("req.params.theId: " + req.params.theId); // Brian added this
  res.redirect("/");
});

router.get("/showProducts", (req, res, next) => {
  let theResponseHtml = "<h1>The products are listed below</h1>";
  for (let ii = 0; ii < products.length; ii++) {
    theResponseHtml +=
      "<p>Title: " +
      products[ii].title +
      ", Price: " +
      products[ii].price +
      "<p/>";
  }
  res.send(theResponseHtml);
});

exports.routes = router;
exports.products = products;
