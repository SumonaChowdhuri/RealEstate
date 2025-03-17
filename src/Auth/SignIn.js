import React from "react";
import {Box, Button, TextField} from "@mui/material"

const SignIn=()=>
{
      return (
        <>
          <Box //use as div
            component="form" //define how box will work ,its behaviour etc
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }} //styling property
            noValidate //when a user doesnot fil any thing and  but click on submit button and autocomplete is used for show the saved password in google and it automatically processed
             autoComplete="off" className="register"> 
            <Box className="header_title">Register</Box>     

            <Box className="signin">  

           <TextField
           type="email"
           required
           id="email"
           variant="standard"
           label="Enter Email Id"
        />

         <TextField
          type="password"
          required
           variant="standard"
          id="password"
          label="Enter Password"
        />
            
         <Box className="forgot_password">
            <Box className="forgot">Forgot Password</Box>
         </Box>
          
          <Button className="primary_button">Register</Button>
            
         <Box className="account">
            <Box>Already an account</Box>
            <Box className="forgot">Login</Box>
         </Box>

          </Box> 
        
        </Box> 
        </>
      )
}

export default SignIn;