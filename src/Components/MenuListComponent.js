import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListIcon from '@mui/icons-material/List';
import { Outlet, Link } from "react-router-dom";

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};


const MenuListComponent = (props) =>{
  return (
        <List component="nav">
            {props.itemData.map((item) => (
           <Link to={item.path}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListIcon/>
              </ListItemIcon>
              <ListItemText primary={item.name}/>
            </ListItemButton>
          </ListItem>
          </Link>
              ))}
      </List>
    
  );
}

export default MenuListComponent;