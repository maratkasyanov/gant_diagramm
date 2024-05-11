import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userslice";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import ProjectsMenu from './ProjectsMenu';
export default function MenuHead() {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        MENU
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
        <MenuItem onClick={()=>{handleClose();navigate('/newproj')}}>Создать новый проект</MenuItem>
        <MenuItem onClick={() => dispatch(removeUser())}>Выйти</MenuItem>
        <MenuItem>
          <ProjectsMenu close={()=>setAnchorEl(null)}></ProjectsMenu>
        </MenuItem>
      </Menu>
    </div>
  )
}