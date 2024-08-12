import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 24px;
  max-height: 96px;
  margin: 12px 24px;
  align-items: center;
`;

const Name = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #FFF;
`;

const Status = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #FFF;
`;

function ChatHeader({ name, setMediaDialogIsOpen }) {
  function handleOpenMediaDialog(img) {
    setMediaDialogIsOpen(img);
  }

  return (
    <Container>
      <img src={`/images/Lee.png`} style={{ width: 50, height: 50, pointerEvent: 'auto !important' }} onClick={() => handleOpenMediaDialog('Lee.png')} />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
        <Name>{name}</Name>
        <Status>Online</Status>
      </div>
    </Container>
  );
}

export default ChatHeader;
