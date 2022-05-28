import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};


const ListComponent = (props) =>{
  return (
    <List sx={style} component="nav">
        {props.itemData.map((item) => (
            <ListItem button>
                <ListItemText primary={item.name} />
            </ListItem>
        ))}
    </List>
  );
}

export default ListComponent;