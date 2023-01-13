import React from "react";
import ChatWindow from "../../../components/Chat/ChatWindow";
import Chat from "../../../components/Chat/ChatWindow";
import { useProvideAuth } from "../../../hooks/useAuth";

const ChatPage = () => {

    const {
        state: {user},
    } = useProvideAuth();
    console.log(user);
    
  return (
    <div >
      Chat Page
      <ChatWindow />
    </div>
  );
};

export default ChatPage;

