import React ,{useState} from 'react';
import axios from "axios";
import "./Shoes.css"


const AddShoes = () => {

    const [name,setName] =useState("");
    const [img,setImg] =useState("");
    const[price,setPrice] =useState("");
   
  
    const handleName = (event) => {
        setName(event.target.value );
      };
    
    const handleImg = (event) => {
        setImg(event.target.value );
      };
    
    const handlePrice = (event) => {
        setPrice(event.target.value);
      };
    
    const CreateShoes = async() => {
        const shoes = {
          name: name,
          image: img,
          price: price,
        };
        try{
            const response = await axios.post(
                `https://6374a46048dfab73a4e470dd.mockapi.io/shoes`,
                shoes
              );
            console.log(response);
            setImg("");
            setName("");
            setPrice("");
        }
        catch(e){
            console.log("Error while adding");
        }
      
      };

    return (
        <center>
            <div className="Input">
                <label>Name:</label>
                <input onChange={handleName} value={name} />
                <label>Image:</label>
                <input onChange={handleImg} value={img} />
                <label>Price:</label>
                <input onChange={handlePrice} value={price} />
                <button onClick={CreateShoes}>Add Shoes</button>
            </div>
        </center>
    );
}

export default AddShoes;
