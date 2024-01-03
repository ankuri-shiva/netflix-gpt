import { useState } from "react"
import Header from "./Header"

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);

  const handleForm = () => {
    setIsSignIn(!isSignIn)
  }
  return (
    <>
        <Header />
        <div className="absolute">
        <img src = "https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_medium.jpg" 
        alt = "background" className="" />
        </div>
        <div className="flex justify-center align-middle">
        <form className="absolute bg-black bg-opacity-75 py-12 px-6 my-20  text-white w-3/12 rounded-lg">
          <h1 className="font-bold text-3xl my-4">
            {isSignIn ? "Sign In" : "Sign Up"}
            </h1>
            {isSignIn && <input type = "text" className="w-full my-4 p-3 rounded-md" placeholder="Enter Full Name" /> }
          <input type = "text" className="w-full my-4 p-3 rounded-md" placeholder="Enter e-mail" />
          <input type = "password" className="w-full my-4 p-3 rounded-md" placeholder="Enter password" />
          <button className="p-3 my-6 bg-red-700 w-full rounded-md">
          {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          <p className="p-4 cursor-pointer" onClick={handleForm}>
            {isSignIn ? "New to Netflix? Sign Up Now" : "Already Registered! Sign In Now" }
            </p>
        </form>
        </div>
    </>
  )
}

export default Login