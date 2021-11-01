import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const useStyles = makeStyles({
  containerStyle: {
    marginTop: '20px',
  },
  buttonStyle: {
    height: '55px',
    marginLeft: '20px',
  },
});

const ComponentAdder = ({ addElement }) => {
  const classes = useStyles();

  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    if (value.length > 0) {
      addElement(value);
      setValue('');
    }
  };

  return (
    <div className={classes.containerStyle}>
      <TextField
        variant='outlined'
        value={value}
        placeholder='Add something to your list'
        onChange={handleChange}
      />
      <Button
        variant='contained'
        className={classes.buttonStyle}
        onClick={handleClick}>
        Add!
      </Button>
    </div>
  );
};

export default ComponentAdder;
