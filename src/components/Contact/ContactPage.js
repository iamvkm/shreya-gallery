import React from 'react'
import Fade from 'react-reveal/Fade'
import './contact-page.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <Fade>
                <div className="contact-page py-5 mb-5">
                    <div className="container">
                        <ToastContainer />
                        <h3 className="mb-5">Contact / Feedback</h3>
                        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit}>
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="name">Name</label>
                                        <input type="text" name="name" id="name" class="form-control" value={name} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="email">Email</label>
                                        <input type="email" name="email" id="email" class="form-control" value={email} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12">
                                    <div class="form-outline mb-4">
                                        <label class="form-label" for="message">Message</label>
                                        <textarea name="message" id="message" class="form-control" value={message} onChange={this.handleChange} />
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
}

export default ContactPage
