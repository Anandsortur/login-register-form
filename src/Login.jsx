import React,{useState} from "react"

export const Login = () => {
    const [email, setEmail]=useState('');
    const [pass, setPass]= useState('');
    const handleSubmit= ()=>{
        email.preventDefault();
        console.log();
    }
    return(
        <>
         <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email"/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password"/>

            <button>Login</button>
        </form>
        <button onClick={() => props.onForSwitch('register')}>Don't have an account? Register here.</button>
        </>
       
    )
        
    
}