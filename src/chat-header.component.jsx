import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    gap: 24,
    height: 72,
    padding: '0px 48px',
  },
  name: {
    fontFamily: 'Helvetica',
    fontSize: 24,
    fontWeight: 700,
    color: '#FFF',
  },
  status: {
    fontFamily: 'Helvetica',
    fontSize: 16,
    fontWeight: 400,
    color: '#FFF',
  }
}));

function ChatHeader({ name, img }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <p className={classes.name}>IMG</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'}}>
        <div className={classes.name}>{name}</div>
        <div className={classes.status}>Online</div>
      </div>
    </div>
  );
}

export default ChatHeader;
