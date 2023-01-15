import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { DoneAll } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
  },
  innerContainer: {
    display: 'inline-flex',
    margin: '16px',
    borderRadius: 4,
    padding: '4px 8px',
  }
}));

function ChatBubble({ text, sender }) {
  const classes = useStyles();

  return (
    <div className={classes.container} style={{ justifyContent: sender == 'Lee' ? 'flex-end' : 'flex-start'}}>
      <div className={classes.innerContainer} style={{  backgroundColor: sender=='Lee' ? '#dcf8c7' : '#fafafa'}}>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>{text}</div>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}><DoneAll style={{color: '#93ab8d'}} /></div>
      </div>
    </div>
  );
}

export default ChatBubble;
