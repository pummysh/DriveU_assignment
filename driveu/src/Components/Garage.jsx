import {useEffect,useState} from "react";
import "./style.css";
import {Link} from "react-router-dom";

export const Garage =()=>{

    const [data,setData]=useState([]);

    useEffect(()=>{
        const baseURL = 'https://driveupummy.herokuapp.com/';
        fetch(baseURL)
        .then(resp => resp.json())
        .then(data =>{ 
            setData(data);
        });
    },[])

    const location = (e) => {
        try {
          fetch(`https://driveupummy.herokuapp.com/location/${e.target.value}`)
            .then((d) => d.json())
            .then((res) => {
              setData(res);
            });
        } catch (err) {
          console.log("Error:", err);
        }
      };
    
      const rating = (e) => {
        try {
          fetch(`https://driveupummy.herokuapp.com/rating/${e.target.value}`)
            .then((d) => d.json())
            .then((res) => {
              setData(res);
            });
        } catch (err) {
          console.log("Error:", err);
        }
      };
    
      const mop = (e) => {
        try {
          fetch(`https://driveupummy.herokuapp.com/mop/${e.target.value}`)
            .then((d) => d.json())
            .then((res) => {
              setData(res);
              
            });
        } catch (err) {
          console.log("Error:", err);
        }
      };
    
      const discount = (e) => {
        
        try {
          fetch(`https://driveupummy.herokuapp.com/discount/${e.target.value}`)
            .then((d) => d.json())
            .then((res) => {
              setData(res);
             
            });
        } catch (err) {
          console.log("Error:", err);
        }
      };

      function star(l){
        let arr=[];
        for(let i=0;i<l;i++){
            arr.push("⭐");
        }
        return <div>
            {
                arr.map((e,i)=>
                    <span key={i}>{e}</span>)
            }
        </div>
      }
    return <div className="garage">
        <div className="filterDiv">
        <h1 className="heading">Filter</h1>
        <select  className="filter" onChange={location} >
          <option hidden>Location</option>
          <option value="Bhiwadi">Bhiwadi</option>
          <option value="Alwar">Alwar</option>
          <option value="Delhi">Delhi</option>
          <option value="Gurugram">Gurugram</option>
          <option value="Noida">Noida</option>
        </select>
        <select className="filter" onChange={rating}>
          <option hidden>Rating</option>
          <option value="1">1 ⭐ </option>
          <option value="2">2 ⭐⭐  </option>
          <option value="3">3 ⭐ ⭐ ⭐ </option>
          <option value="4">4 ⭐⭐ ⭐ ⭐  </option>
          <option value="5">5 ⭐ ⭐ ⭐ ⭐ ⭐ </option>
        </select>
        <select className="filter" onChange={mop}>
          <option hidden>Mode of Payment</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
          <option value="online,offline">Both</option>
        </select>
        <select className="filter" onChange={discount} >
          <option hidden>Discount</option>
          <option value={10}>10 Percent</option>
          <option value={20}>20 Percent</option>
          <option value={30}>30 Percent</option>
        </select>
      </div>

        <div className="container">
            {
                data.length>0?
                data.map(e=>
                    <div key={e._id}>
                        <img src={e.image[0]} alt="" /> 
                        <div>{e.name}</div>  
                        <button className="dtlbtn">
                        <Link to={`/shop/${e._id}`}>See Details</Link>
                        </button>
                        <div>
                            Ratings :
                            {e.ratings?
                                e.ratings>0?
                                <div>
                                    {  
                                            star(+e.ratings)
                                    }
                                </div>
                                :0
                                :0
                            }
                        </div>
                    </div>    
                )
                :null
            }
        </div>

    </div>
}