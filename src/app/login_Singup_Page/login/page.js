'use client'
import Link from "next/link"
import signIn from "../../config/login"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const router = useRouter();

    const onClickBtn = async () => {
        setLoading(true)
        if (email != '' || password != '') {
            const { result, error } = await signIn(email, password);
            if (result) {
                router.replace('/');
            }
            else {
                alert(error.message)
                router.replace('/login_Singup_Page/singup');
            }
            setLoading(false);
        } 
        else if(email == '' || password == ''){
          alert('Please Fill The Input');
        }
    }
    
    return (
        <main className="flex min-h-screen flex-col items-center mt-7">
            <h1 className="text-3xl font-bold">Login</h1>
            <section className="mt-3 text-gray-600 body-font relative">
                <div className="container px-5 mx-auto flex">
                    <div className=" bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Login</h2>

                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> </div>
                        <button disabled={loading} onClick={onClickBtn} className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland.
                        <Link href={'/login_Singup_Page/singup'} className="text-indigo-600">Singup?</Link></p>
                    </div>
                </div>
            </section>
        </main>
    )
}
