import { useRef, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const NewProduct = () => {
  const inputref = useRef();
  const history = useHistory();
  const submithandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5050/newproduct", {
        name: inputref.current.value,
      })
      .then((res) => {
        console.log(res.data);
        history.push("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={submithandler}>
        <input type="text" ref={inputref} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewProduct;
