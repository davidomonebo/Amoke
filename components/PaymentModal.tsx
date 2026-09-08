import React, { useState } from 'react'

export default function PaymentModal({ open, onClose, amount, onSuccess, branch }: any){
  const [method, setMethod] = useState('Card')
  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-xl rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-lg">Demo Payment Simulation</div>
            <div className="text-sm text-gray-600">{branch}</div>
          </div>
          <button onClick={onClose} className="text-gray-500">Close</button>
        </div>
        <div className="mt-4">
          <div className="text-sm text-gray-600">Amount</div>
          <div className="text-2xl font-bold">₦{amount}</div>
        </div>
        <div className="mt-4">
          <div className="text-sm mb-2">Payment Method</div>
          <div className="flex gap-2">
            <button onClick={() => setMethod('Card')} className={`px-3 py-2 rounded ${method==='Card'? 'bg-amokeGold text-white':'bg-gray-100'}`}>Card</button>
            <button onClick={() => setMethod('Bank')} className={`px-3 py-2 rounded ${method==='Bank'? 'bg-amokeGold text-white':'bg-gray-100'}`}>Bank Transfer</button>
            <button onClick={() => setMethod('USSD')} className={`px-3 py-2 rounded ${method==='USSD'? 'bg-amokeGold text-white':'bg-gray-100'}`}>USSD</button>
          </div>
        </div>
        <div className="mt-6 flex gap-3">
          <button onClick={() => { setTimeout(()=> onSuccess && onSuccess({ orderId: `AMK-${Math.floor(Math.random()*9000)+1000}`, branch }), 1200) }} className="px-6 py-3 bg-amokeGreen text-white rounded">Complete Payment</button>
          <div className="text-sm text-gray-500 flex items-center">This is a demo payment simulation.</div>
        </div>
      </div>
    </div>
  )
}
