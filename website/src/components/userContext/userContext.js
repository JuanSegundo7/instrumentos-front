import React, {useState} from 'react';

const Context = React.createContext({})

export function UserContextProvider ({children}){
    const [jwt, setJWT] = useState(() => JSON.parse(window.sessionStorage.getItem("user")))
    const [favs, setFavs] = useState(([]))

    return (<Context.Provider value={{
        favs, 
        setFavs, 
        jwt, 
        setJWT}}>
    {children}
    </Context.Provider>)
}

export default Context