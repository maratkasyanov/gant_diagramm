import Form from "./Form"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../store/slices/userslice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handlerLogin(email, password) {
    const auth = getAuth();
    const user = auth.currentUser;
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }))
        // if (user !== null) {
        //   // The user object has basic properties such as display name, email, etc.
        //   const displayName = user.displayName;
        //   const email = user.email;
        //   const photoURL = user.photoURL;
        //   const emailVerified = user.emailVerified;
        
        //   // The user's ID, unique to the Firebase project. Do NOT use
        //   // this value to authenticate with your backend server, if
        //   // you have one. Use User.getToken() instead.
        //   const uid = user.uid;
        //   console.log(email, displayName, emailVerified, uid)
        // }
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      });
  }
  return (
    <div>
      <Form title='Войти' handleclick={handlerLogin} />
    </div>
  )
}
export default Login