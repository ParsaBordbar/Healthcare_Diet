import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-8 flex-col items-center p-24">
      <a className="text-blue-700" href="/register/login">
        Login page
      </a>
      <a className="text-blue-700" href="/register/signup">
        Sign up page
      </a>
    </main>
  );
}
