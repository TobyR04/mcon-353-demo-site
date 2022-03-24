import {
  Paper,
  Container,
  Grid,
  Box,
  TextField,
  FormControl,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useInterval } from "./useInterval";

import "./chat.css";
import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";

export function Chat() {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessage] = useState([{}]);
  const [chats, setChats] = useState([{ id: "", name: "" }]);
  const [chatName, setChatName] = useState("");
  const [currentChat, setCurrentChat] = useState({});

  const handleChatName = (event) => {
    setChatName(event.target.value);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  function addChat() {
    const chatNames = {
      name: chatName,
    };

    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
      },
      body: JSON.stringify(chatNames),
    });
  }

  function addMessage() {
    const messageId = {
      chatId: currentChat.id,
      username: user,
      text: message,
    };

    setMessage("");

    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
      },
      body: JSON.stringify(messageId),
    });
  }

  useInterval(() => {
    fetch(`https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats`)
      .then((response) => response.json())
      .then((data) => {
        setChats(data.Items);
      });
  }, 1000);

  useInterval(
    (params) => {
      const chatId = params[0];
      fetch(
        `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
      )
        .then((response) => response.json())
        .then((data) => {
          setChatMessage(data.Items);
        });
    },
    1000, // fast polling
    //60000, // slow polling
    currentChat.id
  );

  return (
    <div className="Chat">
      <header id="header">Chat Rooms</header>

      <Container>
        <Paper elevation={5}>
          <div id="chatRooms"></div>
          <Box p={3}>
            <div>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Pick Chat
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="chat"
                >
                  {chats.map((chat) => (
                    <MenuItem
                      key={chat.id}
                      onClick={() => setCurrentChat(chat)}
                      value={chat.id}
                    >
                      {chat.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <form onSubmit={addChat}>
              <TextField
                id="filled-basic"
                onChange={handleChatName}
                value={chatName}
                placeholder="Add Chat"
              />

              <IconButton aria-label="send" onClick={addChat}>
                {" "}
                <AddIcon id="submit" type="submit"></AddIcon>
              </IconButton>
            </form>
            <div id="messages">
              {chatMessages.map((message) => (
                <MenuItem key={message.id} value={message.id}>
                  {message.username}: {message.text}
                </MenuItem>
              ))}
            </div>
            <Grid container spacing={4} alignItems="center">
              <Grid id="chat-window" xs={12} item></Grid>
              <Grid></Grid>
              <Grid xs={2} item>
                <FormControl fullwidth>
                  <TextField
                    onChange={handleUserChange}
                    value={user}
                    label="Nickname"
                    variant="outlined"
                  />
                </FormControl>
              </Grid>

              <Grid xs={9} item>
                <FormControl fullwidth>
                  <TextField
                    onChange={handleMessageChange}
                    value={message}
                    label="Enter message"
                    variant="outlined"
                  />
                </FormControl>
              </Grid>
              <Grid xs={1} item>
                <IconButton aria-label="send" color="primary">
                  <SendIcon onClick={addMessage}></SendIcon>
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default Chat;
