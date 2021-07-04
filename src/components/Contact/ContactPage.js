import { useState, React } from 'react'
import Fade from 'react-reveal/Fade'
import './contact-page.css'

import { sendFormData } from '../../services/shippingService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const STATUS = {
    IDLE: "IDLE",
    SUBMITTED: "SUBMITTED",
    SUBMITTING: "SUBMITTING",
    COMPLETED: "COMPLETED"
}

const emptyData = {
    name: "",
    email: "",
    message: ""
}

function ContactPage() {

    const [data, setData] = useState(emptyData)
    const [status, setStatus] = useState(STATUS.IDLE)
    const [saveError, setSaveError] = useState(null)
    const [touched, setTouched] = useState({})

    // Derived state
    const errors = getErrors(data)
    const isValid = Object.keys(errors).length === 0

    function handleChange(event) {
        event.persist()
        setData((curData) => {
            return {
                ...curData,
                [event.target.id]: event.target.value
            }
        })
    }

    function handleBlur(event) {
        event.persist()
        setTouched((cur) => {
            return { ...cur, [event.target.id]: true }
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setStatus(STATUS.SUBMITTING)

        if (isValid) {
            try {
                const formRes = await sendFormData(data)
                console.log(formRes)
                setStatus(STATUS.COMPLETED)
            } catch (err) {
                setSaveError(err)
            }
        } else {
            setStatus(STATUS.SUBMITTED)
        }
    }

    function getErrors(data) {
        const result = {}
        if (!data.name) result.name = "Name is required!"
        if (!data.email) result.email = "Email is required!"
        if (!data.message) result.message = "Message is required!"
        return result
    }

    if (saveError) throw saveError
    // if (status === STATUS.COMPLETED) {
    //     return <h3 className="success mt-5 pt-5">Thanks! I will contact you soon!</h3>
    // }

    return (
        <Fade>
            <div className="contact-page py-5 mb-5">
                <div className="container">
                    <ToastContainer />
                    <h3 className="mb-4">Contact / Feedback</h3>

                    {!isValid && status === STATUS.SUBMITTED && (
                        <div role="alert">
                            <p style={{ color: 'red' }}>Please fix the following errors: </p>
                            <ul>
                                {Object.keys(errors).map((key) => {
                                    return <li key={key}>{errors[key]}</li>
                                })}
                            </ul>
                        </div>
                    )}

                    <form name="contact" className="mt-4" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div class="form-outline mb-4">
                                    <label class="form-label" htmlFor="name">Name</label>
                                    <span role="alert" className="alert">
                                        {(touched.name || status === STATUS.SUBMITTED) && errors.name}
                                    </span>
                                    <input type="text" name="name" id="name" class="form-control" value={data.name} onBlur={handleBlur} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div class="form-outline mb-4">
                                    <label class="form-label" htmlFor="email">Email</label>
                                    <span role="alert" className="alert">
                                        {(touched.email || status === STATUS.SUBMITTED) && errors.email}
                                    </span>
                                    <input type="email" name="email" id="email" class="form-control" value={data.email} onBlur={handleBlur} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12">
                                <div class="form-outline mb-4">
                                    <label class="form-label" htmlFor="message">Message</label>
                                    <span role="alert" className="alert">
                                        {(touched.message || status === STATUS.SUBMITTED) && errors.message}
                                    </span>
                                    <textarea name="message" id="message" class="form-control" value={data.message} onBlur={handleBlur} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary" disabled={status === STATUS.SUBMITTING} />
                    </form>
                </div>
            </div>
        </Fade >
    )
}

export default ContactPage
