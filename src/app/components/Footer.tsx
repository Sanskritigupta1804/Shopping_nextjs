
import { Button } from "@/app/components/components/ui/button"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
       
        <div>
          <h2 className="text-xl font-bold text-white">MegaMart</h2>
          <p className="mt-3 text-sm text-gray-400">
            Your one-stop shop for essentials, groceries, and more.  
            Quality products at unbeatable prices.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#hero" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#shop" className="hover:text-white transition">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-3">
            <Button size="icon" variant="secondary" className="rounded-full">
              🌐
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full">
              📞
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full">
              🔗
            </Button>
            <Button size="icon" variant="secondary" className="rounded-full">
              🖇️
            </Button>
          </div>
        </div>
      </div>

    
     
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MegaMart. All rights reserved.
      </div>
    </footer>
  )
}
