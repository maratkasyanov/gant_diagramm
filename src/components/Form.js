import { useState } from "react"
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
const Form = (props) => {
  const [pass, setPass] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  if (props.type) {
    return (
      <form onSubmit={(e) => { e.preventDefault(); console.log(userName) }} className="formAuto">
        <input className="inputAuto" onChange={(e) => setUserName(e.target.value)} value={userName} type="text"></input>
        <Button className="submitAuto" type="submit" value={props.title} />
      </form>
    )
  }

  // <TextField id="outlined-basic" label="Outlined" variant="outlined" />
  return (
    <form onSubmit={(e) => { e.preventDefault(); props.handleclick(email, pass) }} className="formAuto">
      <TextField id="outlined-basic" label="email" variant="outlined" className="inputAuto" onChange={(e) => setEmail(e.target.value)} value={email} type="email"></TextField>
      <TextField id="outlined-basic" label="password" variant="outlined" className="inputAuto" autoComplete="password" onChange={(e) => setPass(e.target.value)} value={pass} type="password"></TextField>
      <Button variant="outlined" className="submitAuto" type="submit">{props.title}</Button>
    </form>
  )
}
export default Form