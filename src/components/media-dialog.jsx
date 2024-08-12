import { Dialog } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`;

function MediaDialog({ open, handleClose, setMediaDialogIsOpen }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      onClick={() => setMediaDialogIsOpen(false)}
    >
      <Container>
        <StyledImage src={`/images/${open}`} />
      </Container>
    </Dialog>
  );
}

export default MediaDialog;
