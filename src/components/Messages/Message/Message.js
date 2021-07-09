import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div class="messageContainer justifyEnd">
          <p class="sentText pr-10">{trimmedName}</p>
          <div class="messageBox backgroundBlue">
            <p class="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div class="messageContainer justifyStart">
            <div class="messageBox backgroundLight">
              <p class="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p class="sentText pl-10 ">{user}</p>
          </div>
        )
  );
}

export default Message;