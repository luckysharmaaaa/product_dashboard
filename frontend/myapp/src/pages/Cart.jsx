import React from "react";
import { useCart } from "../context/CartContext";
import {
  IndianRupee,
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
} from "lucide-react";

function Cart() {

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-10">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-10">
          <ShoppingCart className="text-blue-500" size={30} />
          <h1 className="text-3xl font-black">
            Shopping Cart
          </h1>
        </div>

        {/* EMPTY CART */}
        {cart.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-slate-800 rounded-2xl">
            <p className="text-slate-500 text-lg">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <div className="space-y-6">

            {/* CART ITEMS */}
            {cart.map((item) => (
              <div
                key={item._id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col md:flex-row gap-5 items-center justify-between"
              >

                {/* LEFT */}
                <div className="flex items-center gap-5 w-full">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-xl"
                  />

                  <div className="space-y-2">

                    <h2 className="text-xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-slate-400 text-sm">
                      {item.category}
                    </p>

                    <div className="flex items-center text-emerald-400 font-bold text-lg">
                      <IndianRupee size={16} />
                      {item.price}
                    </div>

                  </div>

                </div>

                {/* RIGHT */}
                <div className="flex flex-col items-end gap-4">

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQuantity(item._id)}
                      className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-bold text-lg">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item._id)}
                      className="bg-slate-800 hover:bg-slate-700 p-2 rounded-lg"
                    >
                      <Plus size={16} />
                    </button>

                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="flex items-center gap-2 text-rose-500 hover:text-rose-400 text-sm font-semibold"
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>

                </div>

              </div>
            ))}

            {/* TOTAL */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">

              <div>
                <p className="text-slate-400 text-sm">
                  Total Amount
                </p>

                <div className="flex items-center text-3xl font-black text-emerald-400">
                  <IndianRupee size={26} />
                  {totalPrice.toLocaleString("en-IN")}
                </div>
              </div>

              <button className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                Checkout
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;