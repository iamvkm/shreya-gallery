import React from 'react'
import Fade from 'react-reveal/Fade'
import './contact-page.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function ContactPage() {

    const showToast = () => {
        return (
            toast.dark('Message sent!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        )
    }

    return (
        <Fade>
            <div className="contact-page py-5 mb-5">
                <div className="container">
                    <ToastContainer />
                    <h3 className="mb-5">Contact / Feedback</h3>
                    <form
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={showToast}
                    >
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div class="form-outline mb-4">
                                    <label class="form-label" for="name">Name</label>
                                    <input type="text" id="name" class="form-control" />
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
                                    <textarea id="message" class="form-control" />
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
