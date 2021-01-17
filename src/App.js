import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input,setInput] = useState(''); //This is state i.e short term memory...To keep track of what we write in input
  const [messages,setMessages] = useState([{username: 'Shrijana', text:"hey"},{username: 'Shrijanaaaaaaa', text:"what's up"} ]);
  const [username, setUsername] = useState('');

  //useState  = variable in REACT
  //useEffect = run code on a condition in REACT

  useEffect(() => {
   //this is where we run code...
  // [] at last is called dependencies. If its blank inside [], this code runs ONCE when the app conponent loads
  // IF there is something inside [], (for eg [input]) It runs everytime .But we dont want this for now

  setUsername(prompt('fff'))

  }, []) //condition

  const sendMessage = (event) => {
    //all the logic to send message goes here
    event.preventDefault();
    setMessages ([...messages,{username: username, text: input}]);
    setInput('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter  a messges..</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

        {
          messages.map(message => (
            <Message username={message.username} text={message.text} />
          ))
        }

      </header>
    </div>
  );
}

export default App;
