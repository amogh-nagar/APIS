import axios from "axios";
import { useEffect, useState } from "react";
import Productlist from "../components/Productlist";
import Productlistitem from "../components/Productlistitem";
const Products = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    
    axios
      .get("http://localhost:5050/products")
      .then((res) => {
        console.log(res.data);
        setproducts(res.data.products)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
    <Productlist item={products} />
    </>
  );
};

export default Products;
