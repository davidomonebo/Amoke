import React, { useEffect, useState } from 'react'

export default function OrderTracking({ order }: any){
  const [step, setStep] = useState(0)
  useEffect(()=>{
    if(!order) return
    const timers = [2000,3000,4000].map((t,i)=> setTimeout(()=> setStep(i+1), t))
    return () => timers.forEach(t=> clearTimeout(t))
  },[order])

  if(!order) return null
  return (
    <section className="max-w-3xl mx-auto px-6 py-8">
      <div className="bg-white rounded-lg p-6 shadow-card">
        <div className="text-lg font-semibold">Order Tracking — {order.orderId}</div>
        <div className="mt-4 space-y-3">
          <div className={`p-3 rounded ${step>=0? 'bg-green-50':'bg-gray-100'}`}>
            ✅ Order Received
          </div>
          <div className={`p-3 rounded ${step>=1? 'bg-green-50':'bg-gray-100'}`}>
            👨🏾‍🍳 Preparing Your Food
          </div>
          <div className={`p-3 rounded ${step>=2? 'bg-green-50':'bg-gray-100'}`}>
            🍽 Food Ready
          </div>
        </div>
      </div>
    </section>
  )
}
