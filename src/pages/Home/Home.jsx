import React from 'react'
import Layout from '../../component/Layout/Layout'
import './Home.css'
import { Typography, TextField, Button, Grid, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Room } from '@mui/icons-material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Services from '../Services/Services';




const Home = () => {



  return (
    <Layout >
      <Toolbar />
      <div className=" homePage " >
        <div className='overlay'>

          <Grid className='main_grid' container spacing={3} columns={16}>
            <Grid className='grid_left' xs={14} sm={7.4}>
              <Typography
                variant='h3'
              >
                <span className='h3_span'>Rent</span>
                Your Dream House With Us.
              </Typography>
              <Typography variant='h5'>
                Find Your Perfect Space, Rent with Ease. Discover, Rent, Relax.
              </Typography>

              <Typography
                variant='div'
                className='buttons'
                sx={{ marginLeft: 10 }}
              >
                <Button
                  variant='contained'
                  color='secondary'
                  className='home_btn'
                  sx={{ fontSize: 18 }}
                >
                  Explore
                </Button>
                <Button
                  variant='outlined'
                  sx={{ fontSize: 18, marginLeft: 10 }}
                  className='home_btn-2'
                >
                  List Properties
                </Button>
              </Typography>
            </Grid>
            <Grid className='grid_right' xs={14} sm={8}>
              <div className='right_div'>
                {/* <Typography  variant='h3'>A</Typography> */}
              </div>
            </Grid>
          </Grid>


        </div>




        <Box sx={{ minWidth: 220, mt: 4 }} className="container"  >
          <Typography variant='div' sx={{}} className='searchBar'>


            <Typography variant='div' className='searchBar-child child1'  >
              <Typography variant='div'>
                <TextField id="demo-simple-select-label " variant='outlined' color='secondary' label="Location" />
              </Typography>
              
            </Typography >


            <Typography variant='div' className='searchBar-child'>
              <Typography variant='div'>
                <TextField id="demo-simple-select-label " variant='outlined' color='secondary' label="Property Type" />
              </Typography>
            </Typography >


            <Typography variant='div' className='searchBar-child'>
              <Typography variant='div'>
                <TextField id="demo-simple-select-label " variant='outlined' color='secondary' label="Price Range" />
              </Typography>
            </Typography >
            <Button variant='search' className='searchIcon' ><SearchIcon sx={{ ml: 3, mt: 0 }} /></Button>
          </Typography>
        </Box>


      </div>

      <Services/>

    </Layout>
  )
}

export default Home







{/* <TextField
                      variant="outlined"
                      sx={{ flex: 1 }}
                      placeholder="Search room for rent"
                      inputProps={{ 'aria-label': 'Search room for rent' }}
                    />
                    <Button type="button" variant="contained" color="secondary" aria-label="search">
                      <SearchIcon />
                    </Button> */}
{/* <TextField
                    id="outlined-input"
                    label="search"
                    variant="outlined" 
                    className="searchBox"         
                    type="search" 
                    name="search" 
                    sx={{width:300, padding:0}}
                    />
                    <Button 
                    variant="contained"
                    color="secondary"
                    > 
                    <SearchIcon className="searchi"/>
                    </Button> */}