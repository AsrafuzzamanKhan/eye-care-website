import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="row g-4 p-5">
                    <div className="col-lg-6">
                        <div className=" h-100">
                            <h4 className="mb-4">Have queries before the appointment?</h4>

                            <div className="mb-5">
                                <h3>Let's Talk</h3>
                                <p>Phone: +123 45 678</p>
                                <p>Email: info@gmail.com</p>
                            </div>
                            <div className="mb-5">
                                <h3>Our Timing</h3>
                                <p>Mon-Fri 9:00 am to 6:00 pm</p>
                                <p>Sat: 9:00 am to 2:00 pm</p>
                                <p>Sunday: Closed</p>
                            </div>
                            <div className="mb-5">
                                <h3>Our Address</h3>
                                <p>Sumi Tower, 66 Zoo Road, Mirpur-2, Dhaka-1216</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-6">

                        <div className="row g-3 mb-3">
                            <div className="col">

                                <input type="text" className="form-control" placeholder="First name" aria-label="Name" />
                            </div>
                            <div className="col">

                                <input type="email" className="form-control" placeholder="Email" aria-label="Email" />
                            </div>
                        </div>
                        <div className="col mb-3">

                            <input type="text" className="form-control" placeholder="Topic" aria-label="Name" />
                        </div>

                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                            <label htmlFor="floatingTextarea2">Comments</label>
                        </div>
                        <button className="btn btn-success my-3">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;