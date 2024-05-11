import { Link } from "react-router-dom";
import SignUp from '../components/SignUp';
export default function RegisterPage() {
  return (
    <div>
      <h1> Register</h1>
      <SignUp/>
      <p>Already have an account <Link to='/login'>Sign up</Link></p>
    </div>
  )
}