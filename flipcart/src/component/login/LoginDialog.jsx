import { Button, Dialog, TextField, Typography,styled } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState} from 'react'
import { authenticateSignup } from '../../service/Api'


const Component = styled(Box)`
height: 90vh;
width: 90vh;
display: flex;
` 
const Image = styled(Box)`
background-image: url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png);
background-color: rgb(40, 115, 240);
height: 100%;
width: 28%;
background-repeat: no-repeat;
background-position: center 80%;
padding:40px 35px;
& > p,& > h5 {
    color:#fff;
    font-weight: 600;
}

`
const Inputfilds = styled(Box)`
height: 100%;
width: 65%;
padding:25px 35px;
flex:1;
& > button,& >p,& > div{
    margin-top:20px
}
`
const Loginbutton = styled(Button)`
text-transform: none;
background-color: #fb641b;
color: white;
width:100%;
hight:48px;
border-radius: 2px;
`
const Requestotp = styled(Button)`
text-transform: none;
background-color: white;
color: #2874f0;
width:100%;
hight:48px;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`
const Text = styled(Typography)`
font-size:12px;
color:#878787;
`
const Createaccount = styled(Typography)`
font-size:14px;
text-align:center;
font-weight: 600;
color:#2874f0 ;
cursor: pointer;
`
const Or = styled(Typography)`
text-align:center;
`

const LoginDialog = ({ open, setopen }) => {

    const ToggleinitialState = {
        login:{
            view:'login',
            Heading:"Login",
            subHeading:"Get access to your Orders, Wishlist and Recommendations"
        },
        signup:{
            view:'signup',
            Heading:"Looks like you're new here!",
            subHeading:"Sign up with your mobile number to get started"
        }
    }

    const SignupInitialvalue = {
        firstname:'',
        lastname:'',
        username:'',
        email:'',
        password:'',
        phone:'',

        
    }
    const[account,toggleacount] = useState(ToggleinitialState.login);  //toggle Login/Signup
    const[Signup,setSignup] = useState(SignupInitialvalue);            //SignUp data handle

   //Toggle Login/signUp  

    const SignupBtn = ()=>{
        toggleacount(ToggleinitialState.signup)
    }
    const Login = ()=>{
        toggleacount(ToggleinitialState.login)
    }

    //Slide Click to closed popup

    const handleClose = () => {
        setopen(false)
        toggleacount(ToggleinitialState.login)
    }

    // InputFild Value Change 
    
    const InputChange = (e) =>{
        setSignup({...Signup,[e.target.name]:e.target.value})
        // console.log(Signup)
    }
    const singupUser = async () =>{
       
       const response = await authenticateSignup(Signup)
       if(!response) return;
       handleClose();
      
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}}>
            <Component>
                <Image>
                    <Typography variant='h5'>{account.Heading}</Typography>
                    <Typography style={{marginTop:10}} >{account.subHeading}</Typography>
                </Image>
            
            {  
               account.view === 'login' ?
                <Inputfilds>
                    <TextField label="Enter Email/Mobile number" variant="standard" InputLabelProps={{style: {fontSize: 14}}} />
                    <TextField label="Enter Password" variant="standard" InputLabelProps={{style: {fontSize: 14}}} />
                    <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                    <Loginbutton>Login</Loginbutton>
                    <Or>OR</Or>
                    <Requestotp>Request OTP</Requestotp>
                    <Createaccount onClick={SignupBtn}>New to Flipkart? Create an account</Createaccount>
                </Inputfilds>
               :
                <Inputfilds>
                    <TextField label="Enter FirstName" variant="standard" name='firstname' onChange={InputChange} InputLabelProps={{style: {fontSize: 14}}} />
                    <TextField label="Enter LastName"  variant="standard" name='lastname' onChange={InputChange} InputLabelProps={{style: {fontSize: 14}}} />
                    <TextField label="Enter UserName"  variant="standard" name='username' onChange={InputChange} InputLabelProps={{style: {fontSize: 14}}} />
                    <TextField label="Enter Email"     variant="standard" name='email' onChange={InputChange} InputLabelProps={{style: {fontSize: 14}}} />
                    <TextField label="Enter Password"  variant="standard" name='password' onChange={InputChange} InputLabelProps={{style: {fontSize: 14}}} />
                    <TextField label="Enter Phone"     variant="standard" name='phone' onChange={InputChange} InputLabelProps={{style: {fontSize: 14}}} />
                    <Loginbutton onClick={singupUser}>Continue</Loginbutton>
                    <Requestotp onClick={Login}>Existing user?Log in</Requestotp>                  
                </Inputfilds>
                
           }

            </Component>
        </Dialog>
    )
}

export default LoginDialog