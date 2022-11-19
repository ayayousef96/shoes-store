import React,{useState} from "react";
import "./Shoes.css";

import axios from "axios";



const Shoes = (props) => {

 
  const [name,setShoesName] =useState(props.name);
  const[img,setShoesImg] =useState(props.img);
  const[price,setShoesPrice]=useState(props.price);
  const [isUpdate,setIsUpdate] =useState(false);

  const handleName = (event) => {
    setShoesName(event.target.value);
   };
 
   const handleImg = (event) => {
    setShoesImg(event.target.value);
   };
 
   const handlePrice = (event) => {
    setShoesPrice(event.target.value );
   };

  const handleDelete = async(id) => {
    try{
      await axios.delete(`https://6374a46048dfab73a4e470dd.mockapi.io/shoes/${id}`);
    }
    catch(e){
      console.log("Error while deleting ");
    } 
  }

  const handleUpdate = () => {
    setIsUpdate((prev) => !prev);
  }

  

  const ToUpdateShoes = async () => {

    const shoes = {
      name: name,
      image: img,
      price: price,
    };

    await axios.put(
      `https://6374a46048dfab73a4e470dd.mockapi.io/shoes/${props.id}`,
      shoes
    );
    setIsUpdate(false);
  };

  const Updatefunc = () => {
    return isUpdate ? (
      <div className="Input">
        <label>Name:</label>
        <input onChange={handleName} value={name} />
        <label>Image:</label>
        <input onChange={handleImg} value={img} />
        <label>Price:</label>
        <input onChange={handlePrice} value={price} />
        <button onClick={ToUpdateShoes}>Update</button>
      </div>
    ) : null;
  };


  return (
    <div>
      <div >
        <div className="shoes-card">
          <img src={props.img} alt="Shoes" className="image" />
          <div className="details">
            <div className="name">{name}</div>
            <div className="name">{price}</div>
            <button onClick={handleUpdate}>Update Shoes</button>
            <button onClick={() => handleDelete(props.id)}>Delete Shoes</button>
          </div>
        </div>
        {Updatefunc()}
      </div>
      
    </div>
  );
}

export default Shoes;
