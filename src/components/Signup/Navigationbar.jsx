import React from "react"
import navigationbar from "./navigationbar.css"
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navigationbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a class="navbar-brand" href="#">
                    <img src={logo} className="logo" alt="" width="70" height="40" />
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <Link  class="nav-link"  to={"/home"}>Home</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/login"}>login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to={"/signup"}>Register</Link>
                        </li>
                    </ul>
                </div>
            </nav >
        </div >
    );
}

export default Navigationbar;


// import React from "react"
// import navigationbar from "./navigationbar.css"
// import logo from "../images/logo.png";
//
// const Navigationbar = () => {
//     return (
//         <div>
//             <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
//                 <a class="navbar-brand" href="#">
//                 <img src={logo} className="logo" alt="" width="70" height="40" />
//                 </a>
//                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//
//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul class="navbar-nav ml-auto">
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">Home</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">About Us</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#">Contact Us</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="/signin">Login</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="/signup">Register</a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav >
//         </div >
//     );
// }
//
// export default Navigationbar;