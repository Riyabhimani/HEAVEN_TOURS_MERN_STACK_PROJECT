import React from 'react';
import '../Style/ContactUs.css';

export function ContactUs() {
    return (
        <>
            <div className="container" >
                <h2 className="text-center m-4">Contact Us</h2>

                <div className="row">
                    <div className="col">
                        <h4>Address</h4>
                        <p>
                            Travel Log Inc.<br />
                            123 Adventure Lane,<br />
                            Wanderlust City,<br />
                            Country, 56780
                        </p>
                    </div>
                    <div className="col">
                        <h4>Phone Numbers:</h4>
                        <p>
                            Customer Support: +1 (800) 123-4567<br />
                            Booking Inquiries: +1 (800) 987-6543<br />
                            Travel Emergencies: +1 (800) 234-5678<br />
                        </p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <h4>Email:</h4>
                        <p>
                            General Inquiries: <a href="mailto:support@heaventours.com">support@heaventours.com</a><br />
                            Feedback: <a href="mailto:feedback@heaventours.com">feedback@heaventours.com</a>
                        </p>
                    </div>

                    <div className='col'>
                        <h4>Working Hours:</h4>
                        <p>
                            Monday to Friday: 9:00 AM - 6:00 PM<br />
                            Saturday: 10:00 AM - 4:00 PM<br />
                            Sunday: Closed<br />
                        </p>
                    </div>
                </div>

                <div className='row text-center mt-3'>
                    <h4>Social Media:</h4>
                    <p>
                        Facebook: <a href="https://facebook.com/HeavenTours" target="_blank" rel="noopener noreferrer">Heaven_Tours</a><br />
                        Twitter: <a href="https://twitter.com/HeavenTours" target="_blank" rel="noopener noreferrer">@Heaven_Tours</a><br />
                        Instagram: <a href="https://instagram.com/HeavenTours" target="_blank" rel="noopener noreferrer">@Heaven_Tours</a>
                    </p>
                </div>
            </div>

            <div className='row p-5'>
                <div className='row mb-2'>
                    <strong>1. Booking Assistance:</strong> To book your next adventure, call our booking team or use our online booking system on our website. We recommend booking in advance to secure your preferred travel dates.
                </div>
                <div className='row mb-2'>
                    <strong>2. Travel Emergencies:</strong> In case of a travel emergency, please call our emergency contact number or reach out via our 24/7 support email.
                </div>
                <div className='row mb-2'>
                    <strong>3. Feedback and Suggestions:</strong> We value your input! If you have suggestions or comments about our services, please share them with us via email or through our feedback form available on our website.
                </div>
                <div className='row mb-2'>
                    <strong>4. Follow Us:</strong> Stay updated with our latest travel tips and promotions by following us on social media!
                </div>
            </div>
        </>
    );
}