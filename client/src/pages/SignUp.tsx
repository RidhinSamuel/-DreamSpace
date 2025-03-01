// import React from 'react'
import { Link } from "react-router-dom"
function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 text-fourth">SignUp</h1>
      <form action="" method="post" className="flex flex-col gap-4">
        <input type="text" id="username" placeholder="Username..." className="border p-3 rounded-lg border-fourth " />
        <input type="email" id="email" placeholder="Email..." className="border p-3 rounded-lg" />
        <input type="password" id="password" placeholder="Password..." className="border p-3 rounded-lg" />
        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-lg uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-white hover:border-fourth border bottom-4 hover:text-fourth  focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Submit
        </button>
      </form>
      <div className="flex text-primary justify-center gap-3 mt-4">
        Already have an account?
        <Link to={"/sign-in"} className="text-center text-fourth">
           Sign In
        </Link>
      </div>
    </div>
  )
}

export default SignUp