import type { MetaFunction } from "@remix-run/node";
import { Message, MessagePosition } from "stories/Message";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Message timestamp={new Date()} sender={{id: 1, avatarUrl: 'test'}} content="0000000000000000 000000000 0000000000000 0000000000000000" messagePosition={MessagePosition.Island} isCurrentUser />
    </div>
  );
}
