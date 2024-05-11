import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { removeUser } from "../store/slices/userslice";
import { useDispatch } from "react-redux";
import Gant from "../components/Gant";
import Button from '@mui/material/Button';
import MenuHead from "../components/Menu";
export default function HomePage() {
  const dispatch = useDispatch()
  const { isAuth, email } = useAuth()
  let navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/login")
    }

  }, [isAuth, navigate])
  return (
    <div className="App">
      <div className="header">
        <MenuHead></MenuHead>
        <h1>HOME PAGE</h1>
        <Button variant="outlined" onClick={() => dispatch(removeUser())}>Log Out from {email}</Button>
      </div>
      <Gant></Gant>
    </div>

  )
}