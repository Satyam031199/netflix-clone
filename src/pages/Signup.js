import React, { useState } from 'react'
import hero from '../assets/login.jpg'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [rememberLogin,setRememberLogin] = useState(true)

  const navigate = useNavigate()
  const {signUp} = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!email || !password){
      toast.error("Email and Password is required")
      return
    }
    try {
      await signUp(email,password)
      navigate('/')
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <div className="w-full h-screen">
        <img src={hero} alt="hero" className='sm:absolute absolute w-full h-full object-cover'/>
        <div className="fixed bg-black/70 top-0 left-0 w-full h-screen">
          <div className="fixed w-full px-4 py-24 z-20">
            <div className='max-w-[450px] h-[500px] mx-auto bg-black/70 rounded-lg'>
              <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-nsans-bold'>Sign Up</h1>
                <form className='w-full flex flex-col py-4'>
                  <input type="email" className='p-3 my-2 bg-gray-700 rounded' placeholder='Email' autoComplete='email' value={email} onChange={(e) => setEmail(e.target.value)} name='email'/>
                  <input type="password" className='p-3 my-2 bg-gray-700 rounded' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} name='password'/>
                  <button className='bg-red-600 py-3 my-6 rounded font-nsans-bold' onClick={handleSubmit}>Sign Up</button>
                  <div className="flex justify-between items-center text-gray-600">
                    <p>
                      <input type="checkbox" className='mr-2' checked={rememberLogin} onChange={(e) => setRememberLogin(!rememberLogin)}/>
                      Remember me
                    </p>
                    <p>
                      Need Help?
                    </p>
                  </div>
                  <p className='my-4'>
                    <span className='text-gray-600 mr-2'>Already subscribed to Netflix?</span>
                    <Link to='/login'>Sign In</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup