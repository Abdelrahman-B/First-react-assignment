import './contact.css'
import img from '../../imgs/contact-us.webp'


function Contact(){


    return(
        
        <div className="container contact ">
            <img src={img} alt="" className="contact-img" />
            <div className="container ">
                <div className='d-flex d-flex justify-content-between align-item-center'>
                    <div className="text w-50">
                        <h3 className='pt-3 h1 '>Say Hello To The Collaboration Hub</h3>
                    </div>
                    <div className="button mt-4">
                        <button className='contact-button'>Contact Us</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default Contact