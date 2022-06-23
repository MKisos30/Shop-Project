import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigation = useNavigate()
    async function handleRegister(event) {
        event.preventDefault()
    
        const name = event.target.elements.name.value
        const email = event.target.elements.email.value
        const password = event.target.elements.password.value
        const confirmPassword = event.target.elements.confirmPassword.value
    
        console.log(name, email, password, confirmPassword)

        const { data } = await axios.post('/user/register', {name, email, password, confirmPassword})
        const { ok } = data;
        console.log(ok)

        if (ok == true) {
            alert ("user register sucsses")
            navigation('/auth')
        } 
        event.target.reset();
      }
    
      return (
        <div>
            <h3>Register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder="name"/>
                <input type="email" name="email" placeholder="E-mail"/>
                <input type="text" name="password" placeholder="password"/>
                <input type="text" name="confirmPassword" placeholder="confirmPassword"/>
                <button type="submit">Create</button>
            </form>
        </div>
      )
}

export default Register