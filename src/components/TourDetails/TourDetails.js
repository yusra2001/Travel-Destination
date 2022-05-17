import { useParams } from "react-router-dom";
import Header from "../header/Header";
import { Button } from 'react-bootstrap';
import { useState } from "react";
import Footer from "../footer/Footer";
const data = require('../../data/db.json');


export default function TourDetails(){
    
    //Use state for ream more
    const [seeMore, setSeewMore] = useState(false);
    
    function toggleHandler(){
        setSeewMore(!seeMore)
        // console.log(isToggled);
    }
    
    //Use Params 
    //1. getting the country id
    let {id} = useParams();
    //2. filtering for the wanted city
    let result = data.filter(cntry =>{
        return cntry.id === id;
    })
    return(
        <>
        <Header/>
        <div className="city" key={result[0].id}>
        <img src={result[0].image}/>
        <ul>
            <li>{`Name: ${result[0].name}`}</li>
            {/* <li>{`Description: ${result[0].info}`}<Button onClick={toggleHandler} variant="link">Read More</Button></li> */}
            <li>{seeMore?result[0].info:`${result[0].info.substring(0,400)}` }<Button onClick={toggleHandler} variant="link">{!seeMore?'See More':'See Less'}</Button></li>
            <li>{`Price: ${result[0].price}`}</li>
        </ul>
        </div>
        </>
    )
}