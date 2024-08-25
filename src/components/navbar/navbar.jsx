import "./navbar.css"
import logo from '../../imgs/logo.webp'

function Navbar(){


    return(
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top w-100 py-3 shadow">
            <div className="container">
                <div className="d-flex justify-content-between w-100">

                <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-4 align-items-center">
                    <li className="nav-item">
                    <a className=" active fs-cust" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="fs-cust" href="#">Feature</a>
                    </li>
                    <li className="nav-item">
                    <a className="fs-cust" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="fs-cust" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="fs-cust" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                    <a className="fs-cust" href="#">Contact</a>
                    </li>
    
    
</ul>
</div>

                </div>
                
            </div>
        </nav>

    );

}


export default Navbar