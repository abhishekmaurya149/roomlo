import { Typography } from '@mui/material'
import React from 'react'
import './Benefits.css'
import Listing from '../../images/listing.png';
import Ad from '../../images/ad.png';
import Enquiries from '../../images/enquiries.png';
import Talk from '../../images/talk.png';


const Benefits = () => {
    return (
        <>
            <div className='mainDiv container'>
                <Typography variant='h3'>
                    Benefits of Listing with us
                </Typography>
                <Typography variant='p' component={'p'} sx={{m:1}}>Don't miss out on the incredible benefits of listing your room with us. Start today and experience the ease and efficiency of connecting with prospectinve tenants, hassle-free! Your perfect tenant may be just a click away.</Typography>

                <div className='box'>
                    <div className='leftBox'>
                        <div className='box1'>
                            <div className='imgDiv'>
                                <img src={Listing} alt="" />
                            </div>
                            <div className='content'>
                                <h2>Free Listing</h2>
                                <p>Save your hard-earned money – we offer a completely free listing service with no hidden fees or charges.</p>
                            </div>
                        </div>
                        <div className='box2'>
                            <div className='imgDiv'>
                                <img src={Ad} alt="" />
                            </div>
                            <div className='content'>
                                <h2> Advertise for FREE  </h2>
                                <p>Don't miss out on the opportunity to Advertise for FREE.</p>
                            </div>
                        </div>
                    </div>
                    <div className='rightBox'>
                        <div className='box3'>
                            <div className='imgDiv'>
                                <img src={Talk} alt="" />
                            </div>
                            <div className='content'>
                            <h2>Verified Users</h2>
                                 <p>Rest assured that our platform verifies users to enhance trust and reliability, creating a safe environment for all.</p>
                            </div>
                        </div>
                        <div className='box4'>
                            <div className='imgDiv'>
                                <img src={Enquiries} alt="" />
                            </div>
                            <div className='content'>
                            <h2>Effortless Setup</h2>
                                <p>Our user-friendly platform allows you to create and manage your room listing effortlessly. In just a few clicks, your room will be live and ready for potential tenants to see.</p>
                            </div>
                        </div>

                        

                         
                    </div>
                </div>
            </div>

        </>
    )
}

export default Benefits






/**
 * Unlock the Benefits of Listing Your Room with Us!

Are you a landlord looking to maximize your room rental experience? Discover the numerous advantages of listing your room with our platform:

    Wide Exposure: Your room listing will reach a vast audience of potential tenants, increasing your chances of finding the perfect match quickly.

    Cost-Free: Save your hard-earned money – we offer a completely free listing service with no hidden fees or charges.

    Effortless Setup: Our user-friendly platform allows you to create and manage your room listing effortlessly. In just a few clicks, your room will be live and ready for potential tenants to see.

    Detailed Listings: Showcase your room with high-quality photos and comprehensive descriptions. Highlight key features and amenities to attract the right tenants.

    Flexibility: You're in control! Update your listing, adjust pricing, or remove it as needed to match your changing requirements.

    Safety First: Your security is our priority. We employ robust security measures to protect your personal information and data.

    Community Engagement: Join a vibrant community of landlords and tenants who trust our platform for their rental needs. Benefit from shared insights and experiences.

    Responsive Support: Our dedicated support team is here to assist you with any questions or issues you may encounter during the listing process.

    Verified Users: Rest assured that our platform verifies users to enhance trust and reliability, creating a safe environment for all.

Don't miss out on the incredible benefits of listing your room with us. Start today and experience the ease and efficiency of connecting with prospective tenants, hassle-free! Your perfect tenant may be just a click away.
 */

