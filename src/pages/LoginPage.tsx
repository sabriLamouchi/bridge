import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const LoginPage:React.FC=()=>{
  const [showPassword, setShowPassword] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {register, handleSubmit} = useForm()
  return (
    <div className='w-full h-[100vh] bg-gradient-to-bl from-blue-400 to-slate-200 dark:bg-slate-600'>
      <header className='w-full flex items-center justify-between z-10 px-4'>
        <img src="https://res.cloudinary.com/dvmlcsv3h/image/upload/v1732552348/logo_yikc58.svg"  className='w-24 h-24  '/>
        <ModeToggle/>
      </header>
        <div className='loginPage-container w-full h-[100vh] bg-gradient-to-bl from-blue-400 to-slate-200 flex items-center justify-center p-6'>
      <div className='flex flex-col items-center w-[40%] right-0 h-[100%] bg-white dark:bg-slate-600 rounded-2xl px-[8em] pt-10 gap-10 section-2'>
            <h1 className="text-4xl text-slate-700 dark:text-white font-sans font-extrabold text-wrap text-center mb-5 w-full ">
                Welcom back
            </h1>
            <Button variant={"outline"} className=" flex justify-center items-center p-4 w-full">
                <img src="https://res.cloudinary.com/dvmlcsv3h/image/upload/v1732553454/google_q0rka9.png" alt="google" className='w-6 h-6'/>
                <span className="text-gray-500 dark:text-white">continue with google</span>
            </Button>
            <span className="text-primary text-xl -m-4">-or-</span>
            {/* form  */}
            <form className="flex flex-col items-center justify-center w-full gap-4" onSubmit={handleSubmit((data)=>{
                console.log(data)
            })}>
                <div className="flex flex-col items-start justify-center w-full ">
                    <Label htmlFor="email" className="text-primary text-sm">Email</Label>
                    <Input {...register("email")} type="text" placeholder="Email" className="p-6 dark:text-white dark:border-white" />
                </div>
                <div className="flex flex-col items-start justify-center w-full relative ">
                    <Label htmlFor="password" className="text-primary text-sm">Password</Label>
                    <Input {...register("password")}  type={showPassword ? "text":"password"} placeholder="Password" className="p-6 dark:text-white dark:border-white" />
                    <div  onClick={()=>setShowPassword(!showPassword)}
                     className="text-slate-700 text-sm absolute right-4 top-[50%] cursor-pointer ">
                        {
                            showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />
                        }
                    </div>
                </div>
                <Button type="submit"  className="w-full mt-4 text-xl dark:text-white">Login</Button>
            </form>
            <span className="text-slate-600 self-start dark:text-white">Don't have an account yet?
                <a href="/signup" className="text-primary text-sm font-bold w-full">Sign up for free</a>
            </span>
        </div>
    </div>
    
    </div>

  )
}

export default LoginPage