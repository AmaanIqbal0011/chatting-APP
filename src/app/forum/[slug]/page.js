import ChatForum from "../../../components/chatForum";
import { currentUser } from "@clerk/nextjs/server";

export default async function page({ params }) {
  const user = await currentUser();
  const slug = (await params).slug;
  return (
    <ChatForum
      slug={slug}
      clerkUser={{
        id: user.id,
        name: user.firstName,
        token: user.publicMetadata.token,
      }}
    />
  );
}
