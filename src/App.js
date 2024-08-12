import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import ChatBubble from "./components/chat-bubble";
import ChatHeader from "./components/chat-header";
import ChatTypebox from "./components/chat-typebox";
import CHATS from "./config/chats";
import MediaDialog from "./components/media-dialog";

const phoneAnimation = keyframes`
  0% {
    transform: translateX(-50%) rotateX(10deg) rotateY(-18deg) rotateZ(3deg);
  }
  50% {
    transform: translateX(-50%) rotateX(-10deg) rotateY(18deg) rotateZ(-3deg);
  }
  100% {
    transform: translateX(-50%) rotateX(10deg) rotateY(-18deg) rotateZ(3deg);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #d6d6d6;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  perspective: 1500px;
`;

const InnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 360px;
  height: 95%;
  margin: 16px 0;
  box-shadow: 0px 0px 20px #fff3ca;
  border-radius: 48px;
  background-image: url("/images/whatsapp-wallpaper.png");
  z-index: 1;
  transform: translateX(-50%) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  transition: all 500ms;
  animation: ${({ $isHoverInside }) => ($isHoverInside ? "" : phoneAnimation)}
    8s infinite;
`;

const ChatHeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  background: #045f53;
  border-radius: 24px 24px 0 0;
`;

const ChatContainer = styled.div`
  position: absolute;
  top: 84px;
  height: 80%;
  overflow: scroll;
`;

const EncryptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
`;

const Encryption = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  max-width: 70%;
  background-color: #fef5cb;
  color: #7a7a7a;
  font-size: 12px;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function Page() {
  const [chat, setChat] = useState([CHATS[0]]);
  const [mediaDialogIsOpen, setMediaDialogIsOpen] = useState(false);
  const [isHoverInside, setIsHoverInside] = useState(false);

  const handleCloseMediaDialog = () => {
    setMediaDialogIsOpen(false);
  };

  return (
    <Container>
      <InnerContainer
        $isHoverInside={isHoverInside}
        onMouseEnter={() => setIsHoverInside(true)}
        onMouseLeave={() => setIsHoverInside(false)}
      >
        <ChatHeaderContainer>
          <ChatHeader
            name={"Lee"}
            setMediaDialogIsOpen={setMediaDialogIsOpen}
          />
        </ChatHeaderContainer>
        <ChatContainer>
          <EncryptionContainer>
            <Encryption>
              <p>
                🔒 These messages and end-to-end calls of{" "}
                <a
                  href="https://www.instagram.com/bedtimestickman"
                  target="_blank"
                  style={{ color: "#aecbd6", pointerEvents: "cursor" }}
                >
                  Lee
                </a>{" "}
                and{" "}
                <a
                  href="https://www.instagram.com/ruboling"
                  target="_blank"
                  style={{ color: "#aecbd6", pointerEvents: "cursor" }}
                >
                  Ruby Hung
                </a>{" "}
                are encrypted by{" "}
                <a
                  href="https://www.instagram.com/ekezia"
                  target="_blank"
                  style={{ color: "#aecbd6", pointerEvents: "cursor" }}
                >
                  Kezia
                </a>
                .
              </p>
            </Encryption>
          </EncryptionContainer>
          {chat != null &&
            chat.map(({ text, img, imgDesc, sender }, index) => (
              <ChatBubble
                text={text}
                img={img}
                imgDesc={imgDesc}
                sender={sender}
                key={index}
                setMediaDialogIsOpen={setMediaDialogIsOpen}
              />
            ))}
        </ChatContainer>
        <ChatTypebox chat={chat} setChat={setChat} />
        <MediaDialog
          open={mediaDialogIsOpen}
          onClose={handleCloseMediaDialog}
          setMediaDialogIsOpen={setMediaDialogIsOpen}
        />
      </InnerContainer>
    </Container>
  );
}

export default Page;
