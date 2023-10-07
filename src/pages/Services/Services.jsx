import React from 'react'
import Layout from '../../component/Layout/Layout'
import './Services.css'
import { Toolbar, Typography, Box, Card, CardActionArea } from '@mui/material'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Data from '../../data/Data';
import Room1 from '../../images/room1.jpg';
import RoomIcon from '@mui/icons-material/Room';
import { green } from '@mui/material/colors';




const Services = () => {
  const green7 = green[700];
  return (
    <Layout>
      <Toolbar />

      <Typography variant='h3' sx={{ textAlign: 'center', mb: 2, }}>
        Recent Property Listed
      </Typography>
      <div className='cl'>
        <div>
          <Card className='card' sx={{
            maxWidth: "320px",
            m: 2
          }}>
            <CardMedia
              component="img"
              alt="Bed Room"
              height="220"
              image={Room1}
              sx={
                {
                  borderRadius: 2,
                  borderEndEndRadius: 56,
                  borderStartStartRadius: 56
                }
              }
            />
            <CardContent>
              <Button
                type='text'
                variant='text'
                sx={{ color: 'green', bgcolor: '#9cf1b5', fontWeight: 'bold' }}
              >
                For Rent
              </Button>
              <Typography gutterBottom variant="h5" component="div">
                2 BHK
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <RoomIcon />Karond Chauraha Bhopal
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant='contained'
                sx={
                  { ml: 2, fontSize: '20', bgcolor: 'green', fontWeight: 'bold', fontSize: 16 }
                }
              >
                Contact
              </Button>


            </CardActions>

          </Card></div>



        <Card className='card' sx={{
          maxWidth: "320px",
          m: 2
        }}>
          <CardMedia
            component="img"
            alt="Bed Room"
            height="220"
            image={Room1}
            sx={
              {
                borderRadius: 2,
                borderEndEndRadius: 56,
                borderStartStartRadius: 56
              }
            }
          />
          <CardContent>
            <Button
              type='text'
              variant='text'
              sx={{ color: 'green', bgcolor: '#9cf1b5', fontWeight: 'bold' }}
            >
              For Rent
            </Button>
            <Typography gutterBottom variant="h5" component="div">
              2 BHK
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <RoomIcon />Karond Chauraha Bhopal
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant='contained'
              sx={
                { ml: 2, fontSize: '20', bgcolor: 'green', fontWeight: 'bold', fontSize: 16 }
              }
            >
              Contact
            </Button>


          </CardActions>

        </Card>



        <div> <Card className='card' sx={{
          maxWidth: "320px",
          m: 2
        }}>
          <CardMedia
            component="img"
            alt="Bed Room"
            height="220"
            image={Room1}
            sx={
              {
                borderRadius: 2,
                borderEndEndRadius: 56,
                borderStartStartRadius: 56
              }
            }
          />
          <CardContent>
            <Button
              type='text'
              variant='text'
              sx={{ color: 'green', bgcolor: '#9cf1b5', fontWeight: 'bold' }}
            >
              For Rent
            </Button>
            <Typography gutterBottom variant="h5" component="div">
              2 BHK
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <RoomIcon />Karond Chauraha Bhopal
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant='contained'
              sx={
                { ml: 2, fontSize: '20', bgcolor: 'green', fontWeight: 'bold', fontSize: 16 }
              }
            >
              Contact
            </Button>


          </CardActions>

        </Card></div>
      </div>

      {/* <Box  sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center"  }} className='card_Container'>
     
      <Card  className='card'  sx={{ 
        maxWidth: "320px",  
        m: 2 
        }}>
        <CardMedia
          component="img"
          alt="Bed Room"
          height="220"
          image={Room1}
          sx={
            {
              borderRadius: 2, 
              borderEndEndRadius:56, 
              borderStartStartRadius:56
            }
          }
        />
        <CardContent>
          <Button 
          type='text' 
          variant='text' 
          sx={{ color: 'green', bgcolor: '#9cf1b5', fontWeight:'bold' }}
          >
          For Rent
            </Button>
          <Typography gutterBottom variant="h5" component="div">
            2 BHK
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <RoomIcon />Karond Chauraha Bhopal
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant='contained'  
            sx={
              { ml: 2, fontSize: '20', bgcolor: 'green',  fontWeight:'bold', fontSize:16 }
            }
          >
          Contact
          </Button>


        </CardActions>
        
      </Card>
      
      <Card  className='card'  sx={{ 
        maxWidth: "320px",  
        m: 2 
        }}>
        <CardMedia
          component="img"
          alt="Bed Room"
          height="220"
          image={Room1}
          sx={
            {
              borderRadius: 2, 
              borderEndEndRadius:56, 
              borderStartStartRadius:56
            }
          }
        />
        <CardContent>
          <Typography 
          type='text' 
          variant='p' 
          sx={{ color: 'green', bgcolor: '#9cf1b5', p:1, mb:2 }}
          >
          For Rent
            </Typography>
          <Typography gutterBottom variant="h5" component="div">
            2 BHK
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <RoomIcon />Karond Chauraha Bhopal
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant='contained'  
            sx={
              { ml: 2, fontSize: '20', bgcolor: 'green',  fontWeight:'bold', fontSize:16 }
            }
          >
          Contact
          </Button>


        </CardActions>
        
      </Card>
 
      </Box> */}
      {/* 
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {Data.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box> */}
    </Layout>
  )
}

export default Services



