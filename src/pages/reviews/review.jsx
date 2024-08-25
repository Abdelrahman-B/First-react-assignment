import './review.css'
import img from '../../imgs/review.webp'

function Review(){



    return(
        <div className="container d-flex flex-column align-items-center py-5">
            <div className='w-50 my-5'>
                <h3 className='display-5 fw-bold text-center'> What Our Customers Have to Say</h3>
            </div>

            <div className='container'>
                <div className="row">
                    <div class="card col-lg-4 col-md-12 d-flex flex-row border-0">
                        <div class="card-body">
                            <img src={img} alt="" className="mb-3" />
                            <h4 class="fw-normal text-purple mb-3">Welcome To The Best Model Winner Contest</h4>
                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nemo doloribus iusto repellendus voluptas repudiandae adipisci minus quam officiis aliquid!</p>
                        </div>
                    </div>

                    <div class="card col-lg-4 col-md-12 d-flex flex-row border-0">
                        <div class="card-body">
                            <img src={img} alt="" className="mb-3" />
                            <h4 class="fw-normal text-purple mb-3">Welcome To The Best Model Winner Contest</h4>
                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nemo doloribus iusto repellendus voluptas repudiandae adipisci minus quam officiis aliquid!</p>
                        </div>
                    </div>

                    <div class="card col-lg-4 col-md-12 d-flex flex-row border-0">
                        <div class="card-body">
                            <img src={img} alt="" className="mb-3" />
                            <h4 class="fw-normal text-purple mb-3">Welcome To The Best Model Winner Contest</h4>
                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nemo doloribus iusto repellendus voluptas repudiandae adipisci minus quam officiis aliquid!</p>
                        </div>
                    </div>

                    
                </div>
            </div>
            
        </div>
    )
}


export default Review