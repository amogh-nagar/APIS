const products = [];

exports.getallproducts = (req, res, next) => {

  res.status(200).json({
    products,
  });
};

exports.getaproduct = (req, res, next) => {
  const product = products.find((prod) => prod.id === +req.params.pid);

  res.status(200).json({
    product,
  });
};

exports.createproduct = (req, res, next) => {
  products.push({ name: req.body.name, id: Math.random() * 100 });
  res.status(200).json({
    products,
  });
};

exports.updateproduct = (req, res, next) => {
  const product = products.find((prod) => prod.id === +req.body.id);
  const productindex = products.findIndex((prod) => prod.id === +req.body.id);
  product.name = name;
  products[productindex] = product;
  res.status(200).json({
    products,
  });
};

exports.deleteproduct = (req, res, next) => {
  const prods = products.filter((prod) => prod.id === +req.body.id);
  products = prods;
  res.status(200).json({
    products,
  });
};
