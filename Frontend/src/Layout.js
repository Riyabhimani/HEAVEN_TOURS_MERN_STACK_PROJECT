import React from "react";
import { Link, Outlet } from "react-router-dom";
function Layout(){
    return(
      <div>
            <div className="container">
                 <div className="row">
                     <div className="col">
                    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#9dd6f3"}}>
                        <div className="container-fluid">
                        <img src="https://tse4.mm.bing.net/th?id=OIP.er14t_yOp0ZKlA9o0Vl_jwHaHa&pid=Api&P=0&h=180" alt="" height={70} width={70} style={{marginLeft:50}}></img>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:550}}>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <Link className="nav-link active" to="/home" style={{fontVariant:'all-small-caps' , fontFamily:'sans-serif' , fontSize:20}}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link active" to="/review" style={{fontVariant:'all-small-caps' , fontFamily:'sans-serif' , fontSize:20}}>Review</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link active" to="/about" style={{fontVariant:'all-small-caps' , fontFamily:'sans-serif' , fontSize:20}}>About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link active" to="/contact" style={{fontVariant:'all-small-caps' , fontFamily:'sans-serif' , fontSize:20}}>Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </nav>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col m-3">
                        <Outlet />
                    </div>
                </div>
            </div>

    </div>
    )
}

export default Layout;