import * as React from 'react';
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import StartIcon from '@mui/icons-material/Start';
import ListPic from '../../images/list.png';

import './List.css'

const list_style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1100,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: '30px',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
const bothside = {
    width: '460px',
    height: '500px'
}
export default function List() {

    const [city, setCity] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const handleChange = (event) => {
        setCity(event.target.value);
    };



    return (
        <>
            <div>
                <Button onClick={handleOpen} sx={{ color: '#090116' }}>Post Your Properties</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={list_style}>

                        <Typography
                            className='main_div_of_all_div'
                            component={'div'}
                            sx={{ display: "flex", gap: '20px' }}
                        >
                            {/* left side div */}
                            <Typography
                                className='leftside'
                                component={'div'}
                                sx={bothside}>
                                <Typography className='heading' component={'div'} sx={{ mt: 4 }}>
                                    <Typography variant='h4'>
                                        Sell or Rent your Property
                                    </Typography>
                                    <Typography variant='h4'>
                                        faster with roomlo.com
                                    </Typography>
                                </Typography>
                                <Typography className='subHeading' component={'div'} sx={{ ml: 0 }}>
                                    <Typography variant='h6' sx={{ mt: 3 }}>
                                        <StartIcon color='primary' sx={{ mx: 1, textAlign: "left", left: "0" }} />
                                        Advertise for FREE
                                    </Typography>
                                    <Typography variant='h6'>
                                        <StartIcon color='primary' sx={{ mx: 1, textAlign: "left", left: "0" }} />
                                        Free Listing
                                    </Typography>
                                    <Typography variant='h6'>
                                        <StartIcon color='primary' sx={{ mx: 1, textAlign: "left", left: "0" }} />
                                        Effortless Setup
                                    </Typography>
                                    <Typography variant='h6'>
                                        <StartIcon color='primary' sx={{ mx: 1, textAlign: "left", left: "0" }} />
                                        Get Unlimited enquiries
                                    </Typography>
                                </Typography>
                                <Typography component={'div'} sx={{ mt: 1 }}>

                                    <img className='leftsideImg' src={ListPic} alt="" />
                                </Typography>
                            </Typography>

                            {/* right side div */}
                            <Typography
                                className='rightside'
                                component={'div'}
                                sx={bothside}>
                                <Typography
                                    variant='h4'
                                    sx={{ mt: 2 }}
                                >
                                    Sign up with us
                                </Typography>

                                <Typography
                                    component={'div'}
                                    sx={{ mt: 1 }}
                                >
                                    <form action="">
                                        <TextField
                                            variant='standard'
                                            required='required'
                                            name='name'
                                            type='text'
                                            size='small'
                                            label='Enter Your Name'
                                            sx={{
                                                borderColor: "purple",
                                                mt: 2,
                                                minWidth: 300
                                            }}
                                        /> <br />
                                        <TextField
                                            variant='standard'
                                            required='required'
                                            name='number'
                                            type='text'
                                            size='small'
                                            label='Enter Your Contact Number'
                                            sx={{
                                                borderColor: "purple",
                                                mt: 2,
                                                minWidth: 300
                                            }}
                                        /> <br />
                                        <TextField
                                            variant='standard'
                                            required='required'
                                            name='Location'
                                            type='text'
                                            size='small'
                                            label='Enter Your Location'
                                            sx={{
                                                borderColor: "purple",
                                                mt: 2,
                                                minWidth: 300
                                            }}
                                        /> <br />
                                        <Typography
                                            component={'div'}
                                            className='selectBox'
                                            sx={{ mt: 2 }}>
                                            <FormControl
                                                size='small'
                                                sx={{ minWidth: 300 }}
                                            >
                                                <InputLabel id='demo-simple-select-label'>Enter Your City</InputLabel>
                                                <Select
                                                    labelId='demo-simple-select-label'
                                                    id='demo-simple-select'
                                                    label='Enter Your City'
                                                    value={city}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={'Bhopal'}>Bhopal</MenuItem>
                                                    <MenuItem value={'Indor'}>Indor</MenuItem>
                                                    <MenuItem value={'Noida'}>Noida</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Typography>
                                       
                                        <Typography
                                            component={'div'}
                                            className='selectBox'
                                            sx={{ mt: 2 }}>
                                            <FormControl
                                                size='small'
                                                sx={{ minWidth: 300 }}
                                            >
                                                <InputLabel id='demo-simple-select-label'>Select Type of Property</InputLabel>
                                                <Select
                                                    labelId='demo-simple-select-label'
                                                    id='demo-simple-select'
                                                    label='Select Type of Property'
                                                    // value={city}
                                                    // onChange={handleChange}
                                                >
                                                    <MenuItem value={'Single'}>Single</MenuItem>
                                                    <MenuItem value={'2BHK'}>2BHK</MenuItem>
                                                    <MenuItem value={'3BHK'}>3BHK</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Typography>
                                        
                                        <TextField
                                        variant='outlined'
                                        sx={{
                                            minWidth:'300',
                                            minHeight:'200',
                                            mt:2
                                        }}
                                        />
                                        <br />
                                        <Button
                                            type='submit'
                                            variant='contained'
                                            sx={{ bgcolor: 'green', mt:2 }}
                                        >
                                            Request Call Back
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
