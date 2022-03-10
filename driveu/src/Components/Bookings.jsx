import { useContext } from "react";
import {Context} from "../Context/context";
import {Navigate} from "react-router-dom";
import "./style.css"
import {BsCartX} from "react-icons/bs"

export const Bookings=()=>{

    const {data,cart} =useContext(Context);

    if(cart.length!==0){
        return <Navigate to="/"/>
    }


    return data.length>0?<div  className="cart">
        
        <div className="cartItems">
            <h3>Cart Items</h3>
            {
                data.map((e,i)=>
                    <div  key={i}>

                        <div>
                        <img style={{width:"100%",height:"100px"}} src={e.image[0]} alt=""  />
                        </div>

                        <div>
                        <div>
                            {e.name}
                        </div>
                        <div className="service">
                            <div><b>Services</b></div>
                            <div>
                                {e.service.map(e=>
                                    <div>{e}</div>    
                                )}
                            </div>
                        </div>
                        <div>Total : ₹{e.total}
                        </div>
                        <div style={{display: 'flex'}}>
                        </div>
                        </div>
                    </div>
                )
            }
        </div>
        <div className="cartItems-right">
        <div style={{width: '20%',padding:"1%",display:"flex",margin:"auto",justifyContent:"center",marginTop:"1%",color:"#fff"}}>
            Total :₹{
               data.reduce((acc,cur)=> acc+cur.total,0)
            }
        </div>
        </div>
    </div>:
    <div className="cartgif">
        <BsCartX/>
    </div>
}



