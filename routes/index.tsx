import { Head } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";

export default function Home() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="/logo.svg"
          class="w-32 h-32"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class="my-6">
          Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <div class="flex gap-2 w-full">
          <p class="flex-grow-1 font-bold text-xl">{count}</p>
          <button onClick={() => setCount(count - 1)}>-1</button>
          <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
      </div>
    </>
  );
}
