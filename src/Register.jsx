export const Register = () => {
    return(
        <>
         <form action="">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email"/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password"/>

            <button>Login</button>
        </form>
        <button>Already have an account? Login</button>
        </>
    )
        
    
}