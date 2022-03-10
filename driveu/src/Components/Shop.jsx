import { useContext, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import {Context} from "../Context/context";
import {v4 as uuid} from "uuid";

export const Shop=()=>{
    const [data,setData]=useState({});
    const [service,setService]=useState([]);
    let {id}=useParams();
    const {addCart} =useContext(Context);
    const [total,setTotal]=useState(0)

    useEffect(()=>{
        const baseURL = `http://localhost:2345/shop/${id}`;
        fetch(baseURL)
        .then(resp => resp.json())
        .then(a =>{ 
            console.log("a",a);
            setData(a);
        });
    },[id])

    console.log(data.service);

    const handleChange = (e) => {
        const { name } = e.target;
        setTotal((prev)=>prev+data.rate);
        setService([
          ...service,name
        ]);
    };

    const addData = () => {

        if(Object.keys(service).length===0){
            alert("Please select a service");
            return;
        }

        let payload={...data,id:uuid(),"service":service,"total":total};
        console.log(payload);
        addCart(payload)
    }

    function checkBox(arr){
        let a=[];
        for(let i=0;i<arr.length;i++){
            a.push(i);
        }

        return <div className="offerings-box">
            <div><b>Service Provide</b></div>
            {
                a.map((e,i)=>
                    <div className="offerings" key={i}>
                        <label>{data.service[e]}</label>
                        <input name={data.service[e]} onChange={handleChange}  type="checkbox"/>  
                    </div>
                )
            
            }
        </div>
    }

    return <div className="shopBox">

        <div>
            {
                
                data.service===undefined ?
                null :
                <div className="shop">
                    <div className="shop-left">
                        <img src={data.image[0]} alt="" />
                        <img src={data.image[1]} alt="" />
                    </div>
                    <div className="shop-right">
                        <div><b>{data.name}</b></div>
                        <div>
                            <b>LOCATION</b> : {data.location}
                        </div>
                        {checkBox(data.service)}
                        <div>
                            <b>Mode of payment</b>: {data.mop}
                        </div>
                        <div><b>Ratings</b> : {data.ratings}</div>
                        <button className="dtlbtn" onClick={addData}>
                            Add to Cart
                        </button>
                        <button className="dtlbtn" >
                        <Link to="/cart">Go to cart</Link>
                        </button>
                    </div>
                </div>
                
            }
        </div>

    </div>
}