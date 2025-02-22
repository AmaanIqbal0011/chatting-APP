import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = "kgwkypqwdf8s";
const api_secret =
  "zmqzdt4hcvqtpfq5bpmksc6faucjhgt55skrupezz7v35gnk7tvxdavuwqzd7jw6";

export async function POST(request) {
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const user = await request.json();

  // Capitalize function
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // User token
  const token = serverClient.createToken(user.data.id);
  console.log("new user has been created", token);
  const client = await clerkClient();
  await serverClient.upsertUser({ id: user.data.id });

  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  });

  // Give access to user to chat in all forums
  const slugs = [
    "python-discuss",
    "javascript-discuss",
    "ts-discuss",
    "react-discuss",
    "css-discuss",
  ];

slugs.forEach(async (items) => {
  const channel = serverClient.channel('messaging', 'custom_channel_id', {
    image: 'https://getstream.io/random_png/?name=react',
    name: capitalize(items),
    created_by_id:user.data.id
  })
  await channel.create()
  channel.addMembers([user.data.id])
    
  }
)

  return Response.json({ message: "hello world" });
}