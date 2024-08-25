import './available.css'
import appStore from '../../imgs/app-store.webp'
import googlePlay from '../../imgs/google-play.webp'
import img from '../../imgs/available.webp'



function Available(){


    return(
        <div className="container-fluid p-5">
            <div className="container py-lg-5">
                <div className="row text-white">
                    <div className="col-lg-5 col-md-12">
                        <h3 className='display-5 fw-normal mb-5'>Our App Available For Any Device Download now</h3>
                        <p className='my-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fug.</p>
                        <div className="img d-flex gap-1">
                            <a href=""><img src={appStore} alt="" className='col-5' /></a>
                            <a href=""><img src={googlePlay} alt="" className='col-5' /></a>
                        </div>
                    </div>

                    <div className="img-ava col-lg-7 col-md-12 my-lg-0 my-md-5 my-sm-5">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Available