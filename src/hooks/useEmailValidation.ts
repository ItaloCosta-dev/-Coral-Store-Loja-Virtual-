import { useState } from "react"

const useEmailValidation = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    }

    const handleSubmit =  (e: React.FormEvent) => {
        e.preventDefault()

        if(!email) {
            alert("Por favor insira um e-mail.")
            setEmail("")
        } else if (!validateEmail(email)) {
            alert("Por favor insira um e-mail válido.")
            setEmail("")
        } else {
            setError("")
            alert("Seu e-mail foi cadastrado")
            setEmail("")
        }
    }

    return {
        email,
        setEmail,
        error,
        handleSubmit
    }
}

export default useEmailValidation