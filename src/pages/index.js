import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation des champs
    if (!email || !password || password === confirmPassword) {
      setErrorMessage('Veuillez remplir tous les champs correctement');
      return;
    }

    // Envoi des données au serveur
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setSuccessMessage('Données envoyées avec succès!cliquer sur le logo pour revenir à la page Home');
        // Réinitialiser les champs du formulaire
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setErrorMessage('Erreur lors de l\'envoi des données');
      }
    } catch (error) {
      setErrorMessage('Erreur: Veuillez réessayer ultérieurement');
    }
  };
  // Supposons que cette fonction est appelée après avoir reçu une réponse du backend suite à une requête


  return (
    <main className="s ">
       <div className=" flex  ">
            <a href="/lo/signup" className="w-96">
            <StaticImage className="m-3 " alt="errour " src="../images/LOGO.png"/></a>
        </div>

        <div className="flex justify-end mr-14 -mt-16 -translate-y-5 translate-x-4  -space-x-10">
       
    <a href="/" className="text-black  text-4xl mr-16 border-black border-solide border-4 flex w-62 pr-8 pl-8 h-16 pt-1 ">Sign Up</a>
   
    </div>


         


    
    <div className="flex justify-center items-center  -mt-5">
   
    
   
        
    <div className="w-[690px] h-[500px] p-10  mt-14 font- bg-transparent rounded-r-lg  border-2">
    <div className="w-6 h-6 relative translate-x-96 left-56 bottom-4  ">
  
</div>

  <div className="w-full max-w-md mx-auto">
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-white font-['Qatar2022']">Create an account</h1>
      <p className="text-lg text-white font-['Qatar2022']">Already have an ccount? <a href="/log/signin">Sign in</a></p>

      

      <form onSubmit={handleSubmit}>
      <div  className="font-normal font-['Poppins'] text-white ">
          <label htmlFor="email">Email address</label> <br />
          <input type="text" name="email" className="rounded border-2 w-96 text-white bg-transparent" value={email}
            onChange={(e) => setEmail(e.target.value)}></input>
      </div><br/>

      <div className="font-normal font-['Poppins'] text-white">
          <label htmlFor="password">password</label> <br />
          <input type="password" name="password" className="rounded border-2 w-96 text-white bg-transparent"  value={password}
            onChange={(e) => setPassword(e.target.value)}></input>
      </div> <br />
      <div className="font-normal font-['Poppins'] text-white">
          <label htmlFor="password">Confirm Password</label> <br />
          <input type="password" name="password" className="rounded border-2 w-96 text-white bg-transparent"  value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}></input><br/>

      </div><br/>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <button className="bg-transparent text-white font-bold py-2 px-4 hover:shadow-sm hover:translate-y-1 font-['Qatar2022'] rounded-full w-96 border-2">
      Sign Up
    </button>
    </form>
    
    <div className="flex flex-col justify-center items-center">
      <p className=" text-white font-['Qatar2022'] text-lg">Or, Sign in with <a href="https://www.google.com/" className="font-semibold">Google</a> or <a href="https://www.facebook.com/" class="font-semibold">Facebook</a>   </p></div>
    

    </div>
    
        
    
  </div>
</div>
</div>

    




    
    </main>
  )
}


export const Head = () => <title>signup Page</title>


export default SignupPage
