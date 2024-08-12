import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import CHATS from '../config/chats';
import { Tooltip } from '@mui/material';
import { Send } from '@mui/icons-material';

const blink = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const blinkSend = keyframes`
  0% {
    background: #52489C;
  }
  50% {
    background: #0ca783;
  }
  100% {
    background: #52489C;
  }
`;

const Container = styled.div`
  position: absolute;
  bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 8%;
  margin: 8px 16px;
  gap: 8px;
`;

const Typebox = styled.div`
  width: 240px;
  padding: 12px 16px;
  border-radius: 24px;
  background: #FAFAFA;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  font-family: Helvetica, Arial, sans-serif;
`;

const TypingPrompt = styled.div`
  color: #7A7A7A;
  opacity: 1;
  display: flex;
  gap: 2px;
  ${({ $animated }) => $animated && css`animation: ${blink} 1000ms infinite;`}
`;

const Button = styled.button`
  background: #0ca783;
  border-radius: 64px;
  padding: 8px 16px;
  border: none;
  ${({ $animated }) => $animated && css`animation: ${blinkSend} 2000ms infinite;`}
`;

function ChatTypebox({ chat, setChat }) {
  const [isTypeDone, setIsTypeDone] = useState(false);
  const [typingLetters, setTypingLetters] = useState('');
  const [countType, setCountType] = useState(0);

  const handleSend = () => {
    let newContent = chat.concat(CHATS[chat.length]);
    setChat(newContent);

    setTimeout(() => {
      let newContent2 = chat.concat(CHATS[chat.length], CHATS[chat.length + 1]); // show reply on delay by 1500s
      setChat(newContent2);
    }, 1500);

    setCountType(0); // reset counter of alphabet to 0
    setTypingLetters(''); // reset chat to empty string
    setIsTypeDone(false);
  };

  const handleChange = () => {
    let newType = typingLetters.concat(CHATS[chat.length].text[countType]);
    if (CHATS[chat.length].text[countType] == undefined) {
      setIsTypeDone(true);
    } else {
      setTypingLetters(newType);
      setCountType(countType + 1);
    }
  };

  useEffect(() => {
    const sentAudio = new Audio('/sounds/whatsapp_sent.mp3');
    const receivedAudio = new Audio('/sounds/whatsapp_received.mp3');

    {
      CHATS[chat.length].sender == 'Ruby' ?
        receivedAudio.play()
        :
        sentAudio.play()
    }
  }, [chat]);

  return (
    <Container>
      <Typebox>
        <input
          type="text"
          onChange={handleChange}
          defaultValue={typingLetters}
          style={{ opacity: 0, zIndex: 11 }}
        />
        <div style={{ position: 'absolute', color: '#333333' }}>
          {typingLetters === '' && (
            <TypingPrompt $animated={!typingLetters}>
              <p>Start typing</p>
              <p>|</p>
            </TypingPrompt>
          )}
          {typingLetters}
        </div>
      </Typebox>
      <Tooltip title="Click to Send" open={isTypeDone}>
        <Button $animated={isTypeDone} onClick={handleSend}>
          <Send sx={{ color: '#FFF', width: 20 }} />
        </Button>
      </Tooltip>
    </Container>
  );
}

export default ChatTypebox;
