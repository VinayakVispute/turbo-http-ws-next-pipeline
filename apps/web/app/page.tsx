
import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <h2>This is {process.env.env_name} Environment</h2>
      First name (This is Vinayak):
      {user?.username}
      password:
      {user?.password}
    </div>
  );
}
