"use client"
import Link from "next/link"
export default function Footer() {

  return (
    <footer className="bg-black text-white w-full border-t border-gray-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
            <img src="/logo.png" alt="logo image" width={"20px"} height={"20px"} />
          <span className="font-semibold">Pandem</span>
        </div>

        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            contact us
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
            terms of service
          </Link>
        </div>
      </div>
    </footer>
  )
}
