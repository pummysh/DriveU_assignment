import {useState,useContext,useRef} from "react";
import {Navigate} from "react-router-dom";
import {Context} from "../Context/context";

export const Checkout=()=>{
    const [user,setUser]=useState({});
    const {cart,setCart} =useContext(Context);
    const [applied,setApplied]=useState(false);
    const Myref=useRef();

    function val(){
        return cart.reduce((acc,cur)=> acc+cur.total,0)
    }
    
    const handleChange=(e)=>{
        let {name,value}=e.target;
        setUser({...user,[name]:value})
    }

    const promo=(e)=>{
        e.preventDefault();
        if(applied || Myref.current.value!=="driveU10"){
            alert("Coupon is already applied")

            return ;
        }else{
            let div=document.getElementById('tot');
            let total=val();
            total=total-(total)*0.1;
            div.innerText=total
            setApplied(true);
        }
        
    }

    const handleSubmit=(e)=>{
        if(Object.keys(user).length<5){
            alert("Please enter all details");
            return;
        }
        e.preventDefault();
        setCart([])
        let form=document.getElementById("myform");
        form.reset();
        alert("Thanks for visiting ");
        return <Navigate to="/"/>
    }

    return <div>

        
        <form id="myform" className="box">
                    <input className="inputfield"  type="text" name="name"  onChange={handleChange} placeholder="Enter your name" />
                    <br />
                    <br />
                    <input className="inputfield" type="email" name="email" onChange={handleChange} placeholder="Enter your email" />
                    <br />
                    <br />
                    <input className="inputfield" type="text" name="address" onChange={handleChange} placeholder="Enter your address" />
                    <br />
                    <br />
                    <input className="inputfield" type="number" name="number" onChange={handleChange} placeholder="Enter your phone number" />
                    <br />
                    <br />
                    <input className="inputfield" type="time" name="time" placeholder="Enter the time" onChange={handleChange} />
                    <input type="text" placeholder="Enter your promocode" ref={Myref}  />
                    <button style={{padding:"8px",marginLeft:"15px"}} onClick={promo} className="dtlbtn">Apply</button>
                    <br />
                    <br />
                    <div id="tot">Total :₹{
                            val()
                        }</div>
                    <button style={{padding:"10px"}} className="dtlbtn" onClick={handleSubmit}>Submit</button>
        </form>

    </div>
}