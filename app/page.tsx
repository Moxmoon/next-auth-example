"use client"

import { signIn } from "next-auth/react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Login() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      {/* <Image
        src="https://s1.ax1x.com/2023/06/22/pCJTXqS.png"
        width={60}
        height={60}
        alt="avatar"
        priority={true}
        className="mb-4"
      /> */}
      <Avatar className="mb-4 h-16 w-16">
        <AvatarImage src="/avatar.png" alt="avatar" />
      </Avatar>
      <Button
        className="bg-indigo-700 text-white hover:bg-indigo-600 hover:text-white"
        onClick={(e) => {
          e.preventDefault()
          signIn("google", {
            callbackUrl: "/",
          })
        }}
      >
        Sign in with Google
      </Button>
    </div>
  )
}
