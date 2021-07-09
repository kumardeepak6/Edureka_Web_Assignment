import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form class="form">
    <input
      class="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button type="button" class="btn btn-primary" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;