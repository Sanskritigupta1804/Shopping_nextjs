
"use client";

import { useCart } from "@/app/components/CartContext";
import { Button } from "@/app/components/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/app/components/components/ui/dropdown-menu";

export default function Navbar() {
  const { cart, removeFromCart } = useCart();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 p-4 flex justify-between items-center">
   
      <div className="text-2xl font-bold text-blue-600">MegaMart</div>

      
      <input
        type="text"
        placeholder="Search products..."
        className="border rounded-md px-3 py-1 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

     
      <div className="flex items-center gap-4">
       
        <Button variant="default">Sign Up</Button>

        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Cart ({cart.length})</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 p-2">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-sm">Your cart is empty</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-1"
                >
                  <div className="flex items-center gap-2">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-8 h-8 object-cover rounded"
                      />
                    )}
                    <div>
                      <p className="text-sm">{item.title}</p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✕
                  </Button>
                </div>
              ))
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
