import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface SignInData{
  email:string;
  password:string;
}
function SignIn() {
  const navigate=useNavigate();
  const [formData, setFormData] = useState<SignInData>({
    email: '',
    password: ''
  });
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(false);
  function handleChange(event:ChangeEvent<HTMLInputElement>){
    setError(false);
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    });
  };
  async function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    setLoading(true);
    try {
      const res= await fetch('/api/auth/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data =await res.json();
      if (!res.ok){
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(false);
      navigate('/');
    }
     catch (error:any) {
      setLoading(false);
      setError(false);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 text-fourth">Sign In</h1>
      <form action="" method="post" onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" id="email" onChange={handleChange} placeholder="Email..." className="border p-3 rounded-lg focus:border-third focus:border-4 focus:outline-none text-fourth" />
        <input type="password" id="password" onChange={handleChange} placeholder="Password..." className="border p-3 rounded-lg focus:border-third focus:border-4 focus:outline-none text-fourth" />
        <button
          disabled={loading}
          type="submit"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-lg uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-white hover:border-fourth border bottom-4 hover:text-fourth  focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          {loading ? 'Loading...' : 'SignIn'}
        </button>
      </form>
      <div className="flex text-primary justify-center gap-3 mt-4">
        Dont have an account?
        <Link to={"/sign-up"} className="text-center text-fourth">
           Sign Up
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  )
}
export default SignIn