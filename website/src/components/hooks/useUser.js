import {useCallback, useContext} from 'react';
import Context from "../userContext/userContext"

export default function useUser () {
    const {jwt, setJWT} = useContext(Context)

    const login = useCallback((data) => {
        window.sessionStorage.setItem('user', JSON.stringify(data))
        setJWT(data)
    }, [setJWT])

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('user')
        setJWT(null)
    }, [setJWT])


    return {
        isLogged: Boolean(jwt),
        login,
        logout
    };
}
