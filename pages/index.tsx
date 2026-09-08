import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import BranchSelector from '../components/BranchSelector'
import Menu from '../components/Menu'
import BuildMeal from '../components/BuildMeal'
import Cart from '../components/Cart'
import PaymentModal from '../components/PaymentModal'
import OrderTracking from '../components/OrderTracking'
import WhySection from '../components/WhySection'
import HowItWorks from '../components/HowItWorks'

export default function Home(){
  const [selectedBranch, setSelectedBranch] = useState<string | undefined>(undefined)
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState<any[]>([])
  const [paymentOpen, setPaymentOpen] = useState(false)
  const [order, setOrder] = useState<any| null>(null)

  useEffect(()=>{
    const saved = localStorage.getItem('amoke_cart')
    if(saved) setCart(JSON.parse(saved))
    const sb = localStorage.getItem('amoke_branch')
    if(sb) setSelectedBranch(sb)
  },[])
  useEffect(()=> localStorage.setItem('amoke_cart', JSON.stringify(cart)),[cart])
  useEffect(()=> { if(selectedBranch) localStorage.setItem('amoke_branch', selectedBranch) },[selectedBranch])

  function addToCart(item:any){
    setCart(prev => {
      const found = prev.find(p=>p.id===item.id)
      if(found) return prev.map(p=> p.id===item.id ? {...p, quantity: (p.quantity||1)+1} : p)
      return [{...item, quantity:1}, ...prev]
    })
  }
  function inc(id:string){ setCart(prev=> prev.map(p=> p.id===id? {...p, quantity:(p.quantity||1)+1}:p)) }
  function dec(id:string){ setCart(prev=> prev.map(p=> p.id===id? {...p, quantity:Math.max(1,(p.quantity||1)-1)}:p)) }
  function removeItem(id:string){ setCart(prev=> prev.filter(p=> p.id!==id)) }

  function checkout(){ setPaymentOpen(true); setCartOpen(false) }
  function onPaymentSuccess(info:any){
    setPaymentOpen(false)
    setOrder({ orderId: info.orderId, branch: info.branch ?? selectedBranch })
    setCart([])
  }

  return (
    <div>
      <Nav selectedBranch={selectedBranch} onChangeBranch={() => setSelectedBranch(undefined)} />
      <Hero onOrder={() => window.scrollTo({top:600, behavior:'smooth'})} />
      {!selectedBranch && <BranchSelector selected={selectedBranch} onSelect={id => setSelectedBranch(id)} />}
      <Menu onAdd={addToCart} />
      <BuildMeal onAdd={(m:any) => addToCart(m)} />

      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-end">
        <button onClick={() => setCartOpen(true)} className="px-4 py-2 rounded bg-amokeGreen text-white">Open Cart ({cart.length})</button>
      </div>

      <WhySection />
      <HowItWorks />

      <OrderTracking order={order} />

      <Cart open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onInc={inc} onDec={dec} onRemove={removeItem} onCheckout={checkout} branch={selectedBranch} />

      <PaymentModal open={paymentOpen} onClose={() => setPaymentOpen(false)} amount={cart.reduce((s:any,i:any)=> s + (i.quantity||1)*i.price, 0)} onSuccess={(info:any) => onPaymentSuccess({...info, branch: selectedBranch})} branch={selectedBranch} />

      <footer className="mt-12 border-t">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-gray-600">© Amoke Oge — Demo. All visuals and data are demo-only.</div>
      </footer>
    </div>
  )
}
