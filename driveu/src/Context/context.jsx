import { createContext, useState} from "react";

export const Context=createContext();

export const ContextProvider=({children})=>{

    const [cart,setCart]=useState([]);
    const [data,setData]=useState([]);

    const addCart=(data)=>{
        console.log("darSD",data)
        setCart([...cart,data])
        setData([...cart,data]);
        alert("Product Added to the cart")
    }

    const deleteData=(e)=>{
        let a=cart.filter(item=>
            item.id!==e.id
        )      
        setCart(a);
        setData(a);

    }

    return <Context.Provider value={{cart,addCart,deleteData,setCart,data}}>{children}</Context.Provider>

}