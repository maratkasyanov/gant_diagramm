import { useDispatch } from "react-redux";
import Form from "./Form"
import { setUser } from "../store/slices/userslice"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch()
function handlerSignUp(email, password) {
  console.log(email,password)
  const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then(({user}) => {
    dispatch(setUser({
      email:user.email,
      id:user.uid,
      token:user.accessToken,
    }))
    navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });

}  
  return (
    <div>
      <Form title={'Зарегестрироваться'} handleclick={handlerSignUp} />
    </div>
  )
}
export default SignUp