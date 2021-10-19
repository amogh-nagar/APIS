import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const ProductItem = () => {
  const params = useParams();
  const [product, setproduct] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5050/products/${params.pid}`)
      .then((res) => {
        console.log(res.data);
        setproduct(res.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>{product && product.name}</div>;
};

export default ProductItem;
