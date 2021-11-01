import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ComponentAdder from './ComponentAdder';

const useStyles = makeStyles({
  listStyle: {
    background: '#E1E1E1',
    width: '300px',
    borderRadius: '5px',
  },
  textStyle: {
    color: 'black',
  },
});

const MyList = () => {
  const classes = useStyles();

  const [elements, setElements] = useState([]);

  const addElement = (value) => {
    let newList = [...elements, value];
    setElements(newList);
  };

  const handleDelete = (index) => {
    let newArray = [...elements];
    newArray.splice(index, 1);
    setElements(newArray);
  };

  return (
    <div>
      {elements && elements.length && (
        <List className={classes.listStyle}>
          {elements.map((element, index) => (
            <ListItem
              key={element}
              className={classes.textStyle}
              secondaryAction={
                <IconButton
                  edge='end'
                  aria-label='delete'
                  onClick={() => handleDelete(index)}>
                  <DeleteIcon />
                </IconButton>
              }>
              <ListItemText primary={element} />
            </ListItem>
          ))}
        </List>
      )}
      <ComponentAdder addElement={addElement} />
    </div>
  );
};

export default MyList;
