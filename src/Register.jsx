export const Register = (props) => {
    const [email, setEmail]=useState('');
    const [pass, setPass]= useState('');
    cont[name, setName]= useState('');
    const handleSubmit= ()=>{
        email.preventDefault();
        console.log();
    }
    return(
        <>
         <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" id="name" placeholder="Full name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email"/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password"/>

            <button>Login</button>
        </form>
        <button onClick={() => props.onForSwitch('login')}>Already have an account? Login here.</button>
        </>
    )
        
    
}