import axios from "axios";


export const hw13API = {
    postSuccess: (success:boolean)=> {
        return axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {success} )
    }
}