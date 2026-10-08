import { useContext } from "react"
import { AuthContext } from "../Auth.context"
import { login, register } from "../services/auth.api"

export const useAuth = () => {
    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context

    async function handleLogin(email, password) {
        setLoading(true)
<<<<<<< HEAD
        const response = await login(email, password)
        setUser(response.user)
        setLoading(false)

=======
        try {
            const response = await login(email, password)
            setUser(response.user)
        } finally {
            setLoading(false)
        }
>>>>>>> 4d8c8a50e9d877dcbe79d470614e9d13e19da21a
    }

    async function handleRegister(username, email, password) {
        setLoading(true)
<<<<<<< HEAD
        const response = await register(username, email, password)
        setUser(response.user)
        setLoading(false)

=======
        try {
            const response = await register(username, email, password)
            setUser(response.user)
        } finally {
            setLoading(false)
        }
>>>>>>> 4d8c8a50e9d877dcbe79d470614e9d13e19da21a
    }

    return {
        user, loading, handleLogin, handleRegister 
    }

}