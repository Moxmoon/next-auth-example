"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menus } from "@/constants/config"

import { Button } from "@/components/ui/button"

export const Sider = () => {
  const pathname = usePathname()
  return (
    <div className="gopher__sider-container flex flex-col border-r border-solid p-8">
      {Menus.map((menu) => {
        const className =
          pathname === menu.url
            ? "bg-indigo-700 text-white hover:bg-indigo-600 hover:text-white"
            : "border-indigo-700 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-700 active:bg-indigo-700 active:text-white"
        return (
          <Button
            className={`mb-2 flex w-40 p-0 ${className}`}
            variant="outline"
            key={menu.id}
          >
            <Link href={menu.url} className="flex-1">
              {menu.name}
            </Link>
          </Button>
        )
      })}
    </div>
  )
}
