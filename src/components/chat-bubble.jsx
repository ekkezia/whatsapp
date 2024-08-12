import { Check } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BubbleContainer = styled.div`
  display: flex;
`;

const InnerContainer = styled.div`
  display: inline-flex;
  margin: 16px;
  border-radius: 8px;
  padding: 8px 8px;
  background-color: ${({ $sender }) =>
    $sender === "Ruby" ? "#dcf8c7" : "#fafafa"};
  font-family: Helvetica, Arial, sans-serif;
`;

function ChatBubble({ text, img, imgDesc, sender, setMediaDialogIsOpen }) {
  const [displayImg, setDisplayImg] = useState(false);

  useEffect(() => {
    if (img !== "") {
      setTimeout(() => {
        setDisplayImg(true);
      }, 1500);
    }
  }, [img]);

  function handleOpenMediaDialog(img) {
    setMediaDialogIsOpen(img);
  }

  return (
    <div>
      <BubbleContainer
        style={{
          justifyContent: sender === "Ruby" ? "flex-end" : "flex-start",
        }}
      >
        <InnerContainer $sender={sender}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              color: "#333333",
            }}
          >
            {text}
          </div>
          {sender === "Ruby" && (
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <Check style={{ color: "#93ab8d", marginLeft: 4 }} />
            </div>
          )}
        </InnerContainer>
      </BubbleContainer>
      {img !== "" && displayImg && (
        <BubbleContainer
          style={{
            justifyContent: sender === "Ruby" ? "flex-end" : "flex-start",
          }}
        >
          <InnerContainer
            $sender={sender}
            style={{ display: "block", width: "50%" }}
          >
            <img
              src={`/images/${img}`}
              style={{
                maxWidth: "100%",
                height: "auto",
                pointerEvent: "auto !important",
              }}
              onClick={() => handleOpenMediaDialog(img)}
            />
            <div style={{ color: "#333333" }}>{imgDesc}</div>
            {sender === "Ruby" && (
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Check style={{ color: "#93ab8d", marginLeft: 4 }} />
              </div>
            )}
          </InnerContainer>
        </BubbleContainer>
      )}
    </div>
  );
}

export default ChatBubble;
