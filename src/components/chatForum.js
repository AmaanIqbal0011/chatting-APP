'use client'

import React from 'react'
import { useState, useEffect } from 'react';
import { useCreateChatClient, Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/v2/index.css'

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const ChatForum = ({clerkUser, slug}) => {
  const apiKey = 'kgwkypqwdf8s';
  const userId = clerkUser.id;
  const userName = clerkUser.name;
  const userToken = clerkUser.token;

  //user
const user= {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?name=${userName}`,
};

const [channel, setChannel] = useState();
const client = useCreateChatClient({
  apiKey,
  tokenOrProvider: userToken,
  userData: user,
});

useEffect(() => {
  if (!client) return;

  const channel = client.channel('messaging', 'custom_channel_id', {
    image: 'https://getstream.io/random_png/?name=react',
    name: capitalize(slug),
    
  });

  setChannel(channel);

}, [client]);

if (!client) return <div>Setting up client & connection...</div>;

return (
  <Chat client={client}>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);
}

export default ChatForum












// "use client"





// const ChatForum = ({clerkUser, slug}) => {




// const [channel, setChannel] = useState();
// const client = useCreateChatClient({
//   apiKey,
//   tokenOrProvider: userToken,
//   userData: user,
// });

// useEffect(() => {
//   if (!client) return;

//   const channel = client.channel('messaging', slug, {
//     image: 'https://getstream.io/random_png/?name=react',
//     name: capitalize(slug),
//     members: [userId],
//   });

//   setChannel(channel);
//   
// }, [client]);
