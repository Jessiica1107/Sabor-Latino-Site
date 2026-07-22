import './ContactUs.css';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import React, { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        setIsSubmitted(true);
        
        setTimeout(() => {
            setIsSubmitted(false);
            
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
        }, 5000); 
    };

    return (
        <>
            <section className="location-section">
                <h2>Location:</h2>
                <div className="location-content">
                    <div className="location-info">
                        <p className="business-name">Sabor Latino</p>
                        <p className="city">Elmhurst, NY</p>
                        <ul>
                            <li><span className="label">Address</span>
                                <ul>
                                    <li>95-35 40th Rd</li>
                                    <li>Elmhurst, NY 11373</li>
                                </ul>
                            </li>
                            <li><span className="label">Contacts</span>
                                <ul>
                                    <li><a href="tel:7184573966">(718) 457-3966</a></li>
                                    <li><a href="mailto:info@saborlatinony.com">info@saborlatinony.com</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.6016154281239!2d-73.87015344235407!3d40.74881554331781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25fb75de6502f%3A0xca418960e287aa74!2sSabor%20Latino!5e1!3m2!1sen!2sus!4v1781709664185!5m2!1sen!2sus"
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
            <section className="contact-section">
                <h2>Contact Us:</h2>

                {isSubmitted ? (
                    <div className="form-success-message">
                        <h3>Thank you, {formData.name}!</h3>
                        <p>We've received your message and will get back to you as soon as possible.</p>
                    </div>
                ) : (
                    <div className="contact-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                            <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} />
                            <textarea name="message" placeholder="Message us..." onChange={handleChange} required />
                            <div className="send-row">
                                <button type="submit">Send</button>
                            </div>
                        </form>

                        <div className="contact-img-box">
                            <img src="./images/insideRestaurant2.jpg" alt="inside restaurant" className="contact-img" />
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}