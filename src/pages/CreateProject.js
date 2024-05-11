import { useState } from "react"
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
export default function CreateProject(props) {
  let navigate = useNavigate()
  
  const [namePropject, setNamePropject] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="App">
      <form style={{ margin: '20px 20px' }} onSubmit={(e)=>{e.preventDefault();navigate('/')}} className="formAuto">
        <p>Сроки</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '-15px', marginTop: '-27px' }}><p>С</p><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '-15px' }}><p>До</p><DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /></div>
        <TextField id="outlined-basic" label="Название проекта" variant="outlined" className="inputAuto" style={{width:'200px'}} onChange={(e) => setNamePropject(e.target.value)} value={namePropject} type="text"></TextField>
        <Button variant="outlined" className="submitAuto" type="submit">Создать</Button>

      </form>
    </div>
  )
}