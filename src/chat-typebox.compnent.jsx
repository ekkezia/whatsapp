import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import CHATS from './chats.component';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    bottom: '16px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '425px',
    height: '8%',
    margin: '8px 16px',
    gap: 16
  },
  name: {
    fontFamily: 'Helvetica',
    fontSize: 24,
    fontWeight: 700,
  },
  typebox: {
    width: '300px',
    borderRadius: 24,
    background: '#FAFAFA',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    margin: '8px 16px'
  },
  button: {
    width: '20%',
    background: '#04897b',
    borderRadius:24
  }
}));

function ChatTypebox({ name, img, chat, setChat }) {
  const classes = useStyles();

  const handleSend = () => {
    let newContent = chat.concat(CHATS[chat.length]);
    setChat(newContent);
  }

  return (
    <div className={classes.container}>
      <div className={classes.typebox}>
        <div className={classes.text}>Online</div>
      </div>

      <div>
        <Button variant="contained" startIcon={<Send />} 
        onClick={handleSend}
        sx={{ background:'#04897b', borderRadius: 64 }}
         />
        </div>
    </div>
  );
}

export default ChatTypebox;
