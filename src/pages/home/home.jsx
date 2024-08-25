import './home.css'
import img from '../../imgs/landing-page.webp'

function Home(){


    return(

        

        <>

            <div className="container mt-4  mb-5 px-5">
            <div className="row">
                <div className="img col-lg-5 col-md-12 my-lg-5 py-lg-5">
                    <img src={img} alt="" />
                </div>

                <div className="container d-flex flex-column col-lg-6 col-md-12">
                    <h1 className='display-5 fw-bold'>Some of the best features Of Our App!</h1>

                    <div className="row mt-5">
                        <div class="card col-md-6 d-flex flex-row border-0">
                            <div className="icon mt-3">
                            <i class="fa-solid fa-screwdriver-wrench"></i>
                            </div>
                            <div class="card-body">
                                <h3 class="card-title fw-normal">Easy to Costomize</h3>
                                <p class="card-text">Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                            </div>
                        </div>
                        <div class="card col-md-6 d-flex flex-row border-0">
                            <div className="icon mt-3">
                            <i class="fa-solid fa-screwdriver-wrench"></i>
                            </div>
                            <div class="card-body">
                                <h3 class="card-title fw-normal">Easy to Costomize</h3>
                                <p class="card-text">Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                            </div>
                        </div>
                        <div class="card col-md-6 d-flex flex-row border-0">
                            <div className="icon mt-3">
                            <i class="fa-solid fa-screwdriver-wrench"></i>
                            </div>
                            <div class="card-body">
                                <h3 class="card-title fw-normal">Easy to Costomize</h3>
                                <p class="card-text">Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                            </div>
                        </div>
                        <div class="card col-md-6 d-flex flex-row border-0">
                            <div className="icon mt-3">
                            <i class="fa-solid fa-screwdriver-wrench"></i>
                            </div>
                            <div class="card-body">
                                <h3 class="card-title fw-normal">Easy to Costomize</h3>
                                <p class="card-text">Aorem psum olorsit amet ectetur adipiscing elit, sed dov.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>



        </>

    )
}

export default Home