"use client"

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import userService from "@/lib/services/user.service";

import { LoginUserInputs } from "../../../../types";
import { LoginUserSchema } from "../../../../lib/validations/user.schema";
import Transition from "../../../../components/animations/transition";

function Login() {
  // const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm<LoginUserInputs>({
    resolver: zodResolver(LoginUserSchema),
    mode: 'onTouched'
  });

  async function LoginUserFunction(credentials: LoginUserInputs) {
    // setLoading(true);

    try {
      const { status } = await userService.apiRegisterUser(credentials);

      if (status === 200 || status === 201) {
        toast.success("Registration successful");
        return router.push("/login");
      }
    } catch (error: unknown) {
      // if (error.response.status === 302) {
      //   return toast.error("User already exist");
      // }

      toast.error("An error occurred");
    } finally {
      // setLoading(false);
    }
  }

  const onSubmit: SubmitHandler<LoginUserInputs> = (data) => LoginUserFunction(data);

  return (
    <main>
      <div className="md:pt-20 md:mt-[70px] mt-[35px] pt-10 mb-16 relative flex flex-col bg-white max-w-full">
        <div className="container xl:px-16 md:px-8 px-4">
          <section className="w-full flex flex-col justify-start items-center max-w-[800px] mx-auto">
            <div className="mb-8 text-center max-w-[500px] w-full">
              <Transition>
                <h2 className="text-black md:text-3xl text-2xl font-semibold">Login</h2>
                <p className="mt-1 md:text-base text-sm">Nice to meet you! Enter your details to login.</p>
              </Transition>
            </div>
              
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-[500px] w-full mt-2">
              <Transition>
                <div className="flex flex-col gap-[30px]">
                  {/* Email Address */}
                  <div>
                    <label 
                      htmlFor="email"
                      className="text-sm pb-1 inline-block text-black"
                    >
                      Email Address*
                    </label>
                    <div className="relative h-[50px] leading-[50px]">
                      <input 
                        type="email"
                        id="email"
                        {...register("email")}
                        className={`auth_form_input border border-solid 
                          ${errors.email?.message ? 'border-error outline-error' : 'border-input_border'}`
                        }
                      />
                    </div>
                    <p className="text-xs pt-1 text-error">{errors.email?.message}</p>
                  </div>

                  {/* Password */}
                  <div>
                    <label 
                      htmlFor="password" 
                      className="text-sm pb-1 inline-block text-black"
                    >
                      Password*
                    </label>
                    <div className="relative h-[50px] leading-[50px]">
                      <input 
                        type="password"
                        id="password"
                        {...register("password")}
                        className={`auth_form_input border border-solid 
                          ${errors.password?.message ? 'border-error outline-error' : 'border-input_border'}`
                        }
                      />
                    </div>
                    <p className="text-xs pt-1 text-error">{errors.password?.message}</p>
                  </div>
                </div>

                <div className="w-full flex items-center justify-between my-[30px]">
                  <div className="flex items-center">
                    <input type="checkbox" id="rememberMe" className="cursor-pointer relative h-4 w-4 shrink-0 appearance-none border-[#c8c6c5] rounded-sm border after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==')] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-black focus:outline-none" />
                    <label htmlFor="rememberMe" className="pl-2 text-[13px] cursor-pointer select-none">
                      Remember me
                    </label>
                  </div>

                  <div className="">
                    <Link className="" href="/auth/forgot-password">
                      <span className="text-[13px] underline">
                        Forgot Password?
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="w-full">
                  <button 
                    type="submit" 
                    className="cta bg-black text-white opacity-100 py-4 px-6 w-full"
                  >
                    Login
                  </button>

                  <p className="text-[13px] text-center mt-6 text-[#696969]">Don&apos;t have an account?
                    <Link href="/auth/register">
                      <span className="text-black underline inline-block ml-1">
                        Register
                      </span>
                    </Link>
                  </p>
                </div>
              </Transition>
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}
  
export default Login