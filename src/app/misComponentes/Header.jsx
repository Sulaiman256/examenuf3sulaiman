"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function Navbar() {
  return (
    <header className="bg-black text-white w-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="imagen del logo" width={"20px"} height={"20px"} />
            <span className="font-semibold">Pandem</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/docs" className="text-sm hover:text-gray-300 transition-colors">
              Docs
            </Link>
            <Link href="/pricing" className="text-sm hover:text-gray-300 transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-sm hover:text-gray-300 transition-colors">
              Status
            </Link>
            <Link href="#" className="text-sm hover:text-gray-300 transition-colors">
              FAQs
            </Link>
            <Link href="#" className="text-sm hover:text-gray-300 transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Link href="/login" className="text-sm hover:text-gray-300 transition-colors">
              Login
            </Link>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" className="bg-white text-black hover:bg-gray-100 border-none">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
