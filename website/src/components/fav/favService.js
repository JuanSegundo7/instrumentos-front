import Axios from 'axios';
import jwtService from "jwt-decode"



const FavService = async (id_fav, jwt) => {
    try{
        const baseUrl = 'http://localhost:5000/usuarios/fav'
        const user = jwtService(jwt.token)
        console.log(user)
        
        let form = {
            id: user.id,
            id_fav: id_fav
        }
        
        Axios.post(baseUrl, form)
        
        return alert("El instrumento ha sido guardado con exito")
    }catch(e){
        console.log(e)
    }

}

export default FavService


