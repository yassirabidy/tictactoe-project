import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"


// Step 2: Define your component
const SigninPage = () => {
  return (
    <main className="f">
         <div className=" flex  ">
            <a href="/">
            <StaticImage className="m-3" alt="errour " src="../../images/LOGO.png"/></a>
        </div>

          <div class="text-center -mt-20  ">    

    <a href="/about" class="mx-4 text-[#9cf345] text-3xl ">About</a>
    <a href="/dir/team" class="mx-4 text-[#9cf345] text-3xl font-Montserrat ">Team</a>
    <a href="/ami/FAQ" class="mx-4 text-[#9cf345] text-3xl font-Montserrat ">FAQ</a>
    
  </div>
  <div class="flex justify-end mr-14 -mt-16 translate-y-5 translate-x-4  -space-x-10">
       
    <a href="/log/signin" class="flex w-62  h-16   p-3 text-black text-4xl relativ bg-[#9cf345] border-lime-400 border-2 pl-8 pr-8  pt-1 ">Sign In</a>
    </div>


        <div class="w-[690px] h-[500px] p-10  mt-0 translate-x-96 translate-y-32 ml-12  text-black rounded-r-lg  bg-[#9cf345]">
    <div class="w-6 h-6 relative translate-x-96 left-56 bottom-4 ">
  <div class="absolute w-full h-0.5 bg-black transform rotate-45 origin-center"></div>
  <div class="absolute w-full h-0.5 bg-black transform -rotate-45 origin-center"></div>
</div>

  <div class="w-full max-w-md mx-auto">
    <div class="flex flex-col justify-center items-center ">
      <h1 class="text-4xl font-bold  text-black font-['Qatar2022']">Login to your account</h1>
      <p class="text-lg  text-black font-['Qatar2022']">Don’t have an ccount? <a href="/lo/signup">Sign up</a></p>

      

      
      <div  className="font-normal font-['Poppins'] ">
          <label htmlFor="email">Email address</label> <br />
          <input type="text" name="email" class="rounded border-2 w-96"></input>
      </div>

      <div className="font-normal font-['Poppins']">
          <label htmlFor="password">password</label> <br />
          <input type="password" name="password" class="rounded border-2 w-96"></input>
      </div> <br />

      <button className="bg-white hover:bg-black hover:text-white hover:border-lime-50 text-black font-bold py-2 px-4  font-['Qatar2022'] rounded-full w-96 " type="submit">
      Sign In
    </button>
    <div class="flex flex-col justify-center items-center">
      <p class="  text-black font-['Qatar2022'] text-lg">Or, Sign in with <a href="https://www.google.com/" class="font-semibold">Google</a> or <a href="https://www.facebook.com/" class="font-semibold">Facebook</a>   </p></div>
    
      
    </div>
    </div>
    
    
        
    
  </div>


    
    
    </main>
  )
}
export default SigninPage

export const Head = () => <title>signin Page</title>
