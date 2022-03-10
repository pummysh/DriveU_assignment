import {Routes,Route} from "react-router-dom";
import {Home} from "../Components/Home";
import {Checkout} from "../Components/Checkout";
import {Cart} from "../Components/Cart";
import {Garage} from "../Components/Garage";
import { Shop } from "../Components/Shop";
import {Bookings} from "../Components/Bookings";

export const Myroutes=()=>{
    return <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/garage" element={<Garage/>}></Route>
            <Route path="/shop/:id" element={<Shop/>}></Route>
            <Route path="/booking" element={<Bookings/>}></Route>
        </Routes>
    </div>
}