import Productlistitem from "./Productlistitem";

const Productlist = (props) => {
    if(props.item.length===0){
        return <p>No prod found</p>
    }
  return (
    <div>
        <ul>
      {props.item.map((prod) => (
        <Productlistitem key={prod.id} item={prod} />
      ))}
      </ul>
    </div>
  );
};

export default Productlist;
