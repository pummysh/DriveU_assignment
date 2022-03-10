import "./style.css";
import {Link} from "react-router-dom";

export const Home=()=> {

  return <div>
    <div className="BackImg">
      <button>
        <Link to="/garage">Click Here to go nearby garage</Link>  
      </button>  
    </div>
  </div>
  
}
