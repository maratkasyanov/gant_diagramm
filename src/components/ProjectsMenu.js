import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function ProjectsMenu(props) {
  const [projects, SetProjects] = useState([{ name: 'PROJECT NAME', date: '22.03.2024' }])
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    props.close()
  };
  return (
    <>
      <Button
        style={{color:'black', padding:'0', fontWeight:'400', textTransform:'capitalize', boxSizing:'content-box', paddingRight:'90px', paddingLeft:'15px', marginLeft:'-15px', paddingTop:'5px'}}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Мои проекты
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {projects.map((elem) => <MenuItem onClick={handleClose}><Link style={{ textDecoration: 'none', color: 'black', padding: '0', display:'flex', gap:'7px'}} to='/'><p>{elem.name}</p><p>{elem.date}</p></Link></MenuItem>)}
      </Menu>
    </>
  )


}