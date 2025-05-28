"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function HeaderMobile() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-black text-white w-full md:hidden">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="imagen del logo" className="h-8 w-8" />
          <span className="font-semibold">Pandem</span>
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-black text-white border-gray-800">
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-2 pb-4 border-b border-gray-800">
                <img src="/logo.png" alt="imagen del logo" className="h-6 w-6" />
                <span className="font-semibold">Pandem</span>
              </div>
              
              <nav className="flex flex-col gap-4">
                <Link 
                  href="/docs" 
                  className="text-lg hover:text-gray-300 transition-colors py-2" 
                  onClick={() => setOpen(false)}
                >
                  Docs
                </Link>
                <Link
                  href="/pricing"
                  className="text-lg hover:text-gray-300 transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  href="/status" 
                  className="text-lg hover:text-gray-300 transition-colors py-2" 
                  onClick={() => setOpen(false)}
                >
                  Status
                </Link>
                <Link 
                  href="/faqs" 
                  className="text-lg hover:text-gray-300 transition-colors py-2" 
                  onClick={() => setOpen(false)}
                >
                  FAQs
                </Link>
                <Link
                  href="/contact"
                  className="text-lg hover:text-gray-300 transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  Contact Us
                </Link>
              </nav>

              <div className="flex flex-col gap-3 pt-4 border-t border-gray-800">
                <Link 
                  href="/login" 
                  className="text-lg hover:text-gray-300 transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
                <Button 
                  variant="outline" 
                  className="bg-white text-black hover:bg-gray-100 border-none"
                  onClick={() => setOpen(false)}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
