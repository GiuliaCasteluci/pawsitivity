import React from "react";
import ChatWindow from "../../../components/Chat/ChatWindow";
import { useProvideAuth } from "../../../hooks/useAuth";

const ChatPage = () => {
  const {
    state: { user },
  } = useProvideAuth();
  console.log(user);

  return (
    <div>
      <h1 className="emergency-page-h2">Chat</h1>
      <ChatWindow />
    </div>
  );
};

export default ChatPage;
