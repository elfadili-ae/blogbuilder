import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client'

export default function Home() {
  const { user } = useUser();
  return <div>
    hompage
    <div>
      {user ?
        <div>
          <p>Welcome {user.given_name}</p>
          <Link href='/api/auth/logout'>
            Logout
          </Link>
        </div>
        :
        <Link href='/api/auth/login'>
          Login
        </Link>
      }
    </div>
  </div>;
}
