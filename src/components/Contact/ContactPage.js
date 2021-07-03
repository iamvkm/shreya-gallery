import React from 'react'
import Fade from 'react-reveal/Fade'
import './contact-page.css'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';

function ContactPage() {

    // const showToast = () => {
    //     return (
    //         toast.dark('Message sent!', {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //         })
    //     )
    // }

    return (
        <Fade>
            <div className="contact-page my-5">
                <div className="container">
                    <h3>Contact / Feedback</h3>
                    <form className="py-4" name="contact" method="POST" data-netlify="true">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="name">Name</label>
                                    <input type="name" id="name" class="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="email">Email</label>
                                    <input type="email" id="email" class="form-control" />
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="message">Message</label>
                                    <textarea type="text" id="message" class="form-control" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </Fade >
    )
}

export default ContactPage
