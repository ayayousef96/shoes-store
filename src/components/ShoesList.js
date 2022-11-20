import React ,{useState,useEffect} from 'react';
import Shoes from './Shoes';


import axios from "axios";


const ShoesList = (props) => {
    const [shoesArr,setShoesArr] =useState([]);
   

    useEffect (()=>{
        const fetchData = async ()=>{
            try{
                

                const res = await axios.get(
                    "https://6374a46048dfab73a4e470dd.mockapi.io/shoes"
                );
                
                setShoesArr(res.data);
                
            }
            catch(e){
                console.log(e);
            }
        }   
        fetchData();
    },[]);

    // const handleDelete = async(id) => {
    //     try{
    //       await axios.delete(`https://6374a46048dfab73a4e470dd.mockapi.io/shoes/${id}`);
    //     }
    //     catch(e){
    //       console.log("Error while deleting ");
    //     } 
    //   }

     const handleDelete=(id)=>{
        return (props.onclick(id));
      }
    


    const displayListShoes = () => {
       
        return shoesArr.map((e) => {
        return <Shoes
            key={e.id}
            name={e.name}
            img={e.image} 
            price={e.price}
            id={e.id}
            onclick={() => handleDelete(props.id)} updateitem={props.update}/>;
    });
     };

     
     
   
    
return (
    <div>
        <center>
            
            <div className='shoeslist-container'>{displayListShoes()}</div>
       </center>
    </div>
);


   
}

export default ShoesList;





