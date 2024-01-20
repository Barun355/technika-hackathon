const user = [
    {
        email: 'baruntiwary620@gmail.com',
        password: '123',
        session: null
    }
]


export const registerUser = ({ email, password }) => {
    if (!email) {
        return {
            error: "Email required",
            user: null
        }
    }

    if (!password) {
        return {
            error: "Password required",
            user: null
        }
    }

    user.map(data => {
        if (data?.email === email) {
            console.log(data?.email, email)
            return {
                user: null,
                error: "User already exists.",
                login: true
            }
        }
    })

    user.push({ email, password })

    return {
        user: { email, password },
        error: null
    }
}

export const loginUser = ({ email, password }) => {
    if (!email) {
        return {
            error: "Email required",
            user: null
        }
    }

    if (!password) {
        return {
            error: "Password required",
            user: null
        }
    }

    user.map(data => {
        if (data?.email === email && data?.password === password) {

            data.session = Math.random().toString(16).slice(2);
            console.log('login')
            return {
                user: { email, password },
                error: null,
                login: true,
                session: data?.session,
            }
        }

        return {
            user: null,
            error: "Incorrect email or password",
            login: false
        }
    })
}


export const getCurrentUser = (session) => {
    if (!session) {
        return {
            error: "Session required",
            user: null
        }
    }

    user.map(data => {
        if (data?.session === session) {

            return {
                user: { email: data?.email, password: data?.password }
            }
        }

        return {
            user: null,
            error: "User not logged in."
        }
    })
}


export const logOut = (session) => {
    if (!session) {
        return {
            error: "Session required",
            user: null
        }
    }

    user.map(data => {
        if (data?.session === session) {
            data.session = null;
            return {
                message: "user logged out",
                logOut: true
            }
        }

        return {
            user: null,
            error: "Session not found",
            logOut: false
        }
    })
}