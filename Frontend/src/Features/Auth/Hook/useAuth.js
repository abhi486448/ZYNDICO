import { useContext } from "react"
import { AuthContext } from "../Auth.context"
import { login, register } from "../services/auth.api"

export const useAuth = () => {
    const context = useContext(AuthContext)

    const { user, setUser, loading, setLoading } = context

    async function handleLogin(email, password) {
        setLoading(true)

        const response = await login(email, password)

        setUser(response.user)

        setLoading(false)

    }

    async function handleRegister(username, email, password) {
        setLoading(true)

        const response = await register(username, email, password)

        setUser(response.user)

        setLoading(false)

    }

    return {
        user, loading, handleLogin, handleRegister 
    }

}