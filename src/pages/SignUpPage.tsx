import { Button } from "@/components/ui/button"
import "./signup.css"
import React,{useState} from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import { useForm } from "react-hook-form"
import { ModeToggle } from "@/components/mode-toggle"
const SignUpPage:React.FC=()=>{
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {register, handleSubmit} = useForm()
  return ( 
    <div className='w-full h-[100vh] bg-gradient-to-bl from-blue-400 to-slate-200 flex items-center justify-between signup-container '>
        <div className="absolute top-2 right-2">
            <ModeToggle/>
        </div>
        <div className='flex flex-col items-start justify-start w-[40%] left-0 h-screen bg-blue-400 gap-4 
         section-1 '>
            <header className='flex items-center justify-start w-full z-10 '>
                <img src="https://res.cloudinary.com/dvmlcsv3h/image/upload/v1732552348/logo_yikc58.svg"  className='w-24 h-24  '/>
            </header>
            <div className='flex flex-col items-start justify-center gap-3 w-[80%] mx-4 '>
                <h1 className='text-5xl text-secondary font-sans font-extrabold text-wrap text-left'>Welcome to our
                community</h1>
                <h2 className='text-lg text-left font-semibold text-secondary  z-10'>Starting new Journey with us and join our community</h2>
            </div>
            <div className="earth-container w-full flex  justify-center items-center z-0">
                <img src="https://res.cloudinary.com/dvmlcsv3h/image/upload/v1732552356/earth_language_tcrddg.png" className='w-[80%] object-contain earth-image'/>
            </div>
        </div>
        <div className='flex flex-col items-center w-[60%] right-0 h-[100%] bg-white dark:bg-slate-600 rounded-s-3xl px-[8em]     pt-10 gap-10 section-2'>
            <h1 className="text-4xl text-slate-700 dark:text-slate-50 font-sans font-extrabold text-wrap text-left w-full ">
                Create Account
            </h1>
            <Button variant={"outline"} className=" flex justify-center items-center p-4 w-full">
                <img src="https://res.cloudinary.com/dvmlcsv3h/image/upload/v1732553454/google_q0rka9.png" alt="google" className='w-6 h-6'/>
                <span className="text-gray-500 dark:text-slate-50">continue with google</span>
            </Button>
            <span className="text-primary text-xl -m-4">-or-</span>
            {/* form  */}
            <form className="flex flex-col items-center justify-center w-full gap-4" onSubmit={handleSubmit((data)=>{
                console.log(data)
            })}>
                <div className="flex flex-col items-start justify-center w-full ">
                    <Label htmlFor="email" className="text-primary text-sm">Email</Label>
                    <Input {...register("email")} type="text" placeholder="Email" className="p-6 dark:text-slate-50 dark:border-slate-50" />
                </div>
                <div className="flex flex-col items-start justify-center w-full relative ">
                    <Label htmlFor="password" className="text-primary text-sm">Password</Label>
                    <Input {...register("password")}  type={showPassword ? "text":"password"} placeholder="Password" className="p-6 dark:text-slate-50 dark:border-slate-50" />
                    <div  onClick={()=>setShowPassword(!showPassword)}
                     className="text-slate-700 text-sm absolute right-4 top-[50%] cursor-pointer ">
                        {
                            showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />
                        }
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center w-full relative">
                    <Label htmlFor="confirm password" className="text-primary text-sm">Confirm password</Label>
                    <Input {...register("confirmPassword")}  type={showConfirmPassword ? "text":"password"} placeholder="Password" className="p-6 dark:text-slate-50 dark:border-slate-50" />
                    <div  onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
                     className="text-slate-700 text-sm absolute right-4 top-[50%] cursor-pointer ">
                        {
                            showConfirmPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />
                        }
                    </div>
                </div>
                <Button type="submit"  className="w-full mt-4">Create Account</Button>
            </form>
            <span className="text-slate-600 self-start dark:text-slate-50">Already have an account? 
                <a href="/login" className="text-primary text-sm font-bold">Login</a>
            </span>
        </div>
    </div>
  )
}

export default SignUpPage