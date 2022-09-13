import axios from "axios";

const URL = 'http://192.168.1.96:3000/signup'


export const authenticateSignup = async (data) =>{
    try{
       return await axios.post(URL,data)
    }catch(error){
        console.log('Error while Signup Api',error)
    }
}