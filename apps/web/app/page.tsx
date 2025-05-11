
import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      <h1>Welcome to {process.env.env_name}</h1>
      First name (This is Vinayak \n):
      {user?.username}
      password:
      {user?.password}
    </div>
  );
}
