import React from 'react'

export default function Cart({ open, items, onClose, onInc, onDec, onRemove, onCheckout, branch }: any) {
  if(!open) return null
  const subtotal = items.reduce((s:any,i:any)=> s + (i.quantity||1)*i.price, 0)
  return (
    <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-lg z-50">
      <div className="p-4 flex items-center justify-between border-b">
        <div>
          <div className="font-semibold">Your Cart</div>
          <div className="text-sm text-gray-600">{branch ?? 'No branch selected'}</div>
        </div>
        <button onClick={onClose} className="text-gray-500">Close</button>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-160px)]">
        {items.length===0 && <div className="text-gray-600">No items yet. Add meals to start your order.</div>}
        {items.map((it:any)=> (
          <div key={it.id} className="flex items-center gap-3 p-3 border rounded mb-3">
            <div className="flex-1">
              <div className="font-semibold">{it.name}</div>
              <div className="text-sm text-gray-600">₦{it.price}</div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={()=> onDec(it.id)} className="px-2">-</button>
              <div>{it.quantity||1}</div>
              <button onClick={()=> onInc(it.id)} className="px-2">+</button>
              <button onClick={()=> onRemove(it.id)} className="text-red-500">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center justify-between text-lg font-semibold">Subtotal <div>₦{subtotal}</div></div>
        <div className="mt-4">
          <button onClick={onCheckout} className="w-full py-3 bg-amokeGreen text-white rounded">Proceed to Payment</button>
        </div>
      </div>
    </div>
  )
}
