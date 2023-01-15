import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import ChatBubble from './chat-bubble.component';
import ChatHeader from './chat-header.component';
import ChatTypebox from './chat-typebox.compnent';
import CHATS from './chats.component';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '120px',
    height: 'auto',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '425px',
    height: '95%',
    margin: '16px 0',
    boxShadow: '0px 0px 20px #888888',
    borderRadius: 48,
    transform: 'translateX(-50%)',
    backgroundImage: "url('/whatsapp-wallpaper.png')",
    // [theme.breakpoints.up('xs')]: {
    //   width: '100%',
    //   height: '100%'
    // },
  },
  chatHeader: {
    position: 'fixed',
    width: '425px',
    background: '#045f53',
    borderRadius: '24px 24px 0 0'
  },
  chatContainer: {
    position: 'absolute', 
    top: 72,
    height: '80%',
    overflow: 'scroll',
  },
}));



function App() {
  const classes = useStyles();
  const [chat, setChat] = useState([CHATS[0]]);

  useEffect(() => {
    console.log('chat', chat)

  }, [chat]);

  return (
    <div className={classes.container}>
      <div className={classes.chatHeader}>
        <ChatHeader name={'Lee'} />
      </div>
      <div className={classes.chatContainer}>
        {chat != null && chat.map(({ text, img, sender }, index) => (
          <ChatBubble text={text} sender={sender} key={index} />
        ))}
      </div>
      <div className={classes.chatTypebox}>
        <ChatTypebox chat={chat} setChat={setChat} />
      </div>
    </div>
  );
}

export default App;
