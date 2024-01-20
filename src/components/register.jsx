import { useState } from "react"
import { useNavigate } from "react-router"
import { registerUser } from "../Service/db"

function Register() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function register() {
        const user = registerUser({ email, password })
        console.log(user)
        if(user?.error){
            alert('User not registerd!')
        }
        
        alert(`${user?.user?.email} you register successfully`)

        navigate('/')
    }

    return (
        <div className="h-full w-full bg-slate-200 flex justify-center items-center p-20 gap-10">
            <div className="flex flex-col justify-center items-start w-1/2 h-[30rem] px-5 py-10 gap-3">
                <span className="font-bold text-blue-500 text-6xl">facebook</span>
                <span className="font-semibold text-2xl tracking-wide">Facebook helps you connect and share with the people in your life.</span>
            </div>
            <div className="flex flex-col w-[32rem] gap-2">
                <div className="flex flex-col justify-center items-center bg-white px-3 py-4 pb-4 gap-7 rounded-xl shadow-2xl mb-3">
                    <div className="flex flex-col items-center gap-4 w-full">
                        <input className="border border-slate-300 rounded-md p-4 outline-none w-full text" type="email" name="email-signup" id="email-signup" placeholder="Email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        />
                        <input className="border border-slate-300 rounded-md p-4 outline-none w-full text" type="password" name="password-signup" id="password-signup" placeholder="Password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        className="w-full bg-blue-500 text-white p-3 text-xl rounded-md font-bold"
                        onClick={register}
                    >Create new account</button>
                    <span className="text-blue-600 cursor-pointer hover:underline"onClick={() => navigate('/login')} >Already have an account?</span>
                </div>
                <span className="self-center py-4" ><b>Create a Page </b> for celebrity, brand or business</span>
            </div>
        </div>
    )
}

export default Register
