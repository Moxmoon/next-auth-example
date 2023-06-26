import { signOut, useSession } from "next-auth/react"
import { destroyCookie } from "nookies"

import { siteConfig } from "@/config/site"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/MainNav"
import { ThemeToggle } from "@/components/ThemeToggle"

export function SiteHeader() {
  const { data: session } = useSession()
  const handleSignOut = async (event: any) => {
    event.preventDefault()

    await signOut({
      redirect: false,
    })
    destroyCookie(null, "next-auth.callback-url")
    destroyCookie(null, "next-auth.csrf-token")

    window.location.href = "/" // Redirect to homepage after sign out
  }
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-3">
            <ThemeToggle />
            <Avatar className="h-8 w-8 border">
              <AvatarImage src={session?.user?.image ?? ""} alt="avatar" />
            </Avatar>
            <div className="">{session?.user?.name ?? "Github 用户"}</div>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
