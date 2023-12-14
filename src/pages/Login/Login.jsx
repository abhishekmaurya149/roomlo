import * as React from 'react';
import { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import LoginPic from '../../images/login.png';

import './Login.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '30px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
const bothside = {
    width: '360px',
    height: '400px'
}
export default function Login() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div>
                <Button onClick={handleOpen}>Login</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>

                        <Typography
                            component={'div'}
                            sx={{ display: "flex", gap: '20px' }}
                        >
                            {/* left side div */}
                            <Typography
                                className='leftside'
                                component={'div'}
                                sx={bothside}>
                                <Typography component={'p'} >
                                    <img
                                        className='loginImg'
                                        src={LoginPic}
                                        alt="" />
                                </Typography>
                            </Typography>

                            {/* right side div */}
                            <Typography
                                className='rightside'
                                component={'div'}
                                sx={bothside}>
                                <Typography
                                    variant='h4'
                                    sx={{mt:4}}
                                >
                                    Sign up with us
                                </Typography>

                                <Typography
                                    component={'div'}
                                    sx={{ mt: 4 }}
                                >
                                    <form action="">                                        
                                        <TextField
                                            variant='outlined'
                                            name='number'
                                            type='text'
                                            size='small'
                                            label='Enter Mobile Number'
                                            sx={{
                                                borderColor:"purple"
                                            }}
                                        /> <br /><br />
                                        <Button 
                                        type='text'
                                        variant='contained'
                                        sx={{bgcolor:'green'}}
                                        >
                                            Send OTP
                                        </Button>
                                    </form>
                                </Typography>



                            </Typography>
                        </Typography>

                    </Box>
                </Modal>
            </div>
        </>
    );
}
