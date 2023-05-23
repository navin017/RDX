import './App.css';
import React, { useEffect, useState } from "react";
import axios from 'axios';

const Api = () =>{
    const[title,setTitle] = useState([]);

   async function fetchData (){
      // fetch("https://jsonplaceholder.typicode.com/users")
      //   .then (response => {
      //     return  response.json();
      //   })
        // 
        try{
        const response =  axios.get("https://jsonplaceholder.typicode.com/users")
      setTitle(response.data)}
      catch(error){
        console.log("error")
      }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div> 
            {title.length > 0 && (
            <ul>
              {title.map(Obj => (
                <li key={Obj.id}>{Obj.email}</li>
              ))}
            </ul>
          )}
          </div>
    )
}
export default Api;  