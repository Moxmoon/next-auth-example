"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

import { Sider } from "@/components/Sider"
import { SiteHeader } from "@/components/SiteHeader"

type Props = {
  children?: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  const { data: session } = useSession()

  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (!session && pathname !== "/") {
      router.push("/")
    }
    if (!!session && pathname === "/") {
      router.push("/agents")
    }
  }, [session, pathname, router])

  return (
    <>
      {session && <SiteHeader />}
      <div className="flex flex-1">
        {session && <Sider></Sider>}
        <div className="w-full overflow-hidden p-8">{children}</div>
      </div>
    </>
  )
}
