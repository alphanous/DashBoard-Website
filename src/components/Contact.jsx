import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = "Name is required";
        if (!formData.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email address is invalid";
        }
        if (!formData.mobile) {
            formErrors.mobile = "Mobile number is required";
        } else if (!/^\d{10}$/.test(formData.mobile)) {
            formErrors.mobile = "Mobile number is invalid";
        }
        if (!formData.message) formErrors.message = "Message is required";
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            // Submit form
            console.log("Form submitted successfully", formData);
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="container mt-5 conn">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile No</label>
                    <input
                        type="text"
                        className="form-control"
                        id="mobile"
                        placeholder="Enter your mobile number"
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                    {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows="3"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && <div className="text-danger">{errors.message}</div>}
                </div>
                <button type="submit" className=" last-btn">Submit</button>
            </form>
        </div>
    );
};

export default Contact;