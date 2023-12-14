import React from 'react'
import './Team.css';
import { Toolbar, Typography, Card } from '@mui/material' 
import CardMedia from '@mui/material/CardMedia'; 
import Abhishek from '../../images/Abhishek.png'
import Nitin from '../../images/Nitin.png';
import Amit from '../../images/Amit.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { NavLink } from 'react-router-dom';


const Team = () => {
    return (
        <>
            <Toolbar />

            <Typography variant='h3' sx={{ textAlign: 'center'}}>
                Meet Our Team
            </Typography>
            <Toolbar />
            <div className='team'>
                <div className='m'>
                    <Card className='member1' sx={{
                        maxWidth: "200px"
                    }}>
                        <CardMedia
                            component="img" 
                            height="160"
                            width={160}
                            image={Abhishek}
                             
                        />
                    </Card>
                    <div className='cardContent'>

                        <Typography  
                         variant="h6" 
                         component="div"
                         sx={{textAlign:'center'}}
                         >
                            Abhishek Maurya
                        </Typography>
                        <Typography gutterBottom variant="p" component={"p"} >
                            MERN Stack Developer
                        </Typography>
                        <div className='icons'>
                            <NavLink to="https://www.linkedin.com/in/abhishek-maurya-746761211/">
                                <LinkedInIcon className="icon" sx={{ color: '#0072b1' }} />
                            </NavLink>
                            <NavLink to="https://www.instagram.com/abhishekmaurya491/"><InstagramIcon className="icon" sx={{ color: '#962fbf' }} /></NavLink>
                            <NavLink to="https://twitter.com/mauryaj123123"><TwitterIcon className="icon" sx={{ color: '#00acee' }} /></NavLink>
                        </div>

                    </div>

                </div>

                <div className='m'>
                    <Card className='member2' sx={{
                        maxWidth: "200px"
                    }}>
                        <CardMedia
                            component="img" 
                            height="160"
                            width={160}
                            image={Amit}
                             
                        />
                    </Card>
                    <div className='cardContent'>

                        <Typography   
                        variant="h6" 
                        component="div"
                        sx={{textAlign:'center'}}
                        >
                            Amit Yadav
                        </Typography>
                        <Typography gutterBottom variant="p" component={"p"} >
                            MERN Stack Developer
                        </Typography>
                        <div className='icons'>
                            <NavLink to="https://www.linkedin.com/in/amit-yadav-08a903235/">
                                <LinkedInIcon className="icon" sx={{ color: '#0072b1' }} />
                            </NavLink>
                            <NavLink to="https://www.instagram.com/amityadav_vns/"><InstagramIcon className="icon" sx={{ color: '#962fbf' }} /></NavLink>
                            <NavLink to="#"><TwitterIcon className="icon" sx={{ color: '#00acee' }} /></NavLink>
                        </div>

                    </div>

                </div>
 
                <div className='m'>
                    <Card className='member3' sx={{
                        maxWidth: "200px"
                    }}>
                        <CardMedia
                            component="img" 
                            height="160"
                            width={160}
                            image={Nitin}
                            sx={{
                                backgroundSize: "100% 100%"
                            }}
                             
                        />
                    </Card>
                    <div className='cardContent'>

                        <Typography   
                        variant="h6" 
                        component="div"
                        sx={{textAlign:'center'}}
                        >
                            Nitin Meena
                        </Typography>
                        <Typography gutterBottom variant="p" component={"p"} >
                            MERN Stack Developer
                        </Typography>
                        <div className='icons'>
                            <NavLink to="#">
                                <LinkedInIcon className="icon" sx={{ color: '#0072b1' }} />
                            </NavLink>
                            <NavLink to="https://instagram.com/nitin_meena_official?igshid=MzRlODBiNWFlZA=="><InstagramIcon className="icon" sx={{ color: '#962fbf' }} /></NavLink>
                            <NavLink to="#"><TwitterIcon className="icon" sx={{ color: '#00acee' }} /></NavLink>
                        </div>

                    </div>

                </div>




            </div>

        </>
    )
}

export default Team
