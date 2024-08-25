import './footer.css'
import img from '../../imgs/logo.webp'



function Footer(){
    

    return(
        <footer className='py-5 my-5'>
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 col-md-6 col-sm-12 footer-fir-sec">
                        <div className="img mb-4">
                            <img src={img} alt="" />
                        </div>

                        <p className='text-grey'>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore</p>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h6 className='h5 mb-3'>Quick Links</h6>

                        <ul className='d-flex flex-column gap-2'>
                            <li>
                                <a href="" className='text-decoration-none text-grey'>About</a>
                            </li>
                            <li>
                                <a href="" className='text-decoration-none text-grey'>Features</a>
                            </li>
                            <li>
                                <a href="" className='text-decoration-none text-grey'>Pricing</a>
                            </li>
                            <li>
                                <a href="" className='text-decoration-none text-grey'>Download</a>
                            </li>
                            <li>
                                <a href="" className='text-decoration-none text-grey'>Reviews</a>
                            </li>
                        </ul>
                    </div>   

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h6 className='h5 mb-3'>Support</h6>

                        <ul className='d-flex flex-column gap-2'>
                            <li>
                                <a href="" className='text-decoration-none text-grey'>Report a bug</a>
                            </li>
                            <li>
                                <a href="" className='text-decoration-none text-grey'>Privacy Policy</a>
                            </li>
                            <li>
                                <a href="" className='text-decoration-none text-grey'>Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="" className='text-decoration-none text-grey'>Sitemap</a>
                            </li>
                            <li>
                                <a href="" className='text-decoration-none text-grey'>FAQs</a>
                            </li>
                        </ul>
                    </div>   

                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <h6 className='h5 mb-3'>Have a Questions?</h6>
                        <form action="" className='d-flex'>
                            <input type="email" placeholder='Email Address' className='bg-pink border-0 py-3 px-3'/>
                            <button className='bg-purple py-2 px-4 border-0 footer-button'>
                                <i class="fa-solid fa-paper-plane fs-5"></i>
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            <div className="container mt-5 pt-3">
                <p className='text-grey'>Copyright ©2022 All rights reserved | This template is made with by Colorlib</p>
            </div>
        </footer>
        
    )
}

export default Footer