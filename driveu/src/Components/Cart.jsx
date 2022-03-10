import { useContext } from "react";
import {Context} from "../Context/context";
import {Link} from "react-router-dom";
import "./style.css"
import {BsCartX} from "react-icons/bs"

export const Cart=()=>{

    const {cart,deleteData} =useContext(Context);
    console.log(cart);
    return cart.length>0?<div  className="cart">
        
        <div className="cartItems">
            <h3>Cart Items</h3>
            {
                cart.map((e,i)=>
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
                        &nbsp;
                        <button className="dtlbtn" onClick={()=>deleteData(e)}>Delete</button>
                        </div>
                        </div>
                    </div>
                )
            }
        </div>
        <div className="cartItems-right">
        <div style={{width: '20%',padding:"1%",display:"flex",margin:"auto",justifyContent:"center",marginTop:"1%",color:"#fff"}}>
            Total :₹{
               cart.reduce((acc,cur)=> acc+cur.total,0)
            }
        </div>
        <button style={{width: '20%',padding:"1%",display:"flex",margin:"auto",justifyContent:"center",marginTop:"1%"}}className="dtlbtn">
                <Link to="/checkout">Go to Checkout Page</Link>
            </button>
        </div>
    </div>:
    <div className="cartgif">
        <BsCartX/>
    </div>
}



