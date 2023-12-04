import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const IndexPage = () => {
  
  return (
   
    <main className="pip "> 
   

       <div className=" flex  ">
            <a href="/lo/signup">
            <StaticImage className="m-3" alt="errour " src="../../images/LOGO.png"/></a>
        </div>

       


          <div class="text-center -mt-20  ">    

    <a href="/about" class="mx-4 text-[#9cf345] text-3xl ">About</a>
    <a href="/dir/team" class="mx-4 text-[#9cf345] text-3xl font-Montserrat ">Team</a>
    <a href="/ami/FAQ" class="mx-4 text-[#9cf345] text-3xl font-Montserrat ">FAQ</a>
    
  </div>

  <section className=" text-center mt-20"> 
          <h1 className="text-white text-6xl ">THE OFFICIAL TICTACTOE</h1>
          <h1 className= " text-white text-6xl  ">game by ayo!</h1>
          <h3 className="  text-white mt-5  "> This is the best tic-tac-toe game designed </h3>
          <h3 className=" text-white "> to fit everyone’s need and make it simple and easy to interact with</h3>
  </section>

  <section className=" flex justify-center mt-11 "> 
          <h1 className=" text-white flex  m-11 tracking-widest	" >Start Playing</h1>
  </section>
        
  <div class="flex justify-center ml-9 ">
        <button></button>
    <a href="/cmp/1vs1" class="text-lime-500 rounded-full text-4xl mr-16 border-lime-500 border-solid border-2 w-40 p-5 pl-8 hover:border-white hover:bg-white hover:text-black duration-1000  ">1 vs 1</a>
    <a href="/cmp/vscm" class="flex w-62 rounded-full h-20 pt-4  border-lime-500 p-3 text-black text-4xl relativ bg-lime-500  border-2  hover:border-white border-solid hover:text-lime-500 hover:bg-transparent duration-1000  ">vs computer</a>
    </div>
      
       


   
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
