import React, { useState } from 'react'

const swallows = ['Amala','Pounded Yam','Eba','Fufu']
const soups = ['Ewedu','Egusi','Gbegiri','Efo Riro','Okra']
const proteins = ['Goat Meat','Beef','Chicken','Fish','Turkey']
const extras = ['Extra Meat','Extra Soup','Plantain','Egg']

export default function BuildMeal({ onAdd }: { onAdd: (meal:any) => void }) {
  const [swallow, setSwallow] = useState<string>('Amala')
  const [soup, setSoup] = useState<string>('Ewedu')
  const [protein, setProtein] = useState<string>('Goat Meat')
  const [selExtras, setSelExtras] = useState<string[]>([])

  const price = 1200 + (selExtras.length * 150)

  function toggleExtra(e:string){
    setSelExtras(xs => xs.includes(e) ? xs.filter(x=>x!==e) : [...xs,e])
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-8">
      <h3 className="text-2xl font-semibold">Build Your Perfect Meal</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="mb-3">Step 1: Choose Your Swallow</div>
          <div className="flex flex-wrap gap-2">
            {swallows.map(s => <button key={s} onClick={() => setSwallow(s)} className={`px-3 py-2 rounded ${s===swallow? 'bg-amokeGreen text-white':'bg-gray-100'}`}>{s}</button>)}
          </div>

          <div className="mt-4">Step 2: Choose Your Soup</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {soups.map(s => <button key={s} onClick={() => setSoup(s)} className={`px-3 py-2 rounded ${s===soup? 'bg-amokeGreen text-white':'bg-gray-100'}`}>{s}</button>)}
          </div>

          <div className="mt-4">Step 3: Choose Your Protein</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {proteins.map(s => <button key={s} onClick={() => setProtein(s)} className={`px-3 py-2 rounded ${s===protein? 'bg-amokeGreen text-white':'bg-gray-100'}`}>{s}</button>)}
          </div>

          <div className="mt-4">Step 4: Add Extras</div>
          <div className="flex flex-wrap gap-2 mt-2">
            {extras.map(s => <button key={s} onClick={() => toggleExtra(s)} className={`px-3 py-2 rounded ${selExtras.includes(s)? 'bg-amokeGold text-white':'bg-gray-100'}`}>{s}</button>)}
          </div>

          <div className="mt-6">
            <div className="font-semibold">Your Meal:</div>
            <div className="mt-2 p-3 border rounded bg-white">
              <div>🟤 {swallow}</div>
              <div>🟢 {soup}</div>
              <div>🍖 {protein}</div>
              {selExtras.length>0 && <div>➕ {selExtras.join(' + ')}</div>}
              <div className="mt-2 text-amokeGreen font-bold">Total: ₦{price}</div>
              <div className="mt-3">
                <button onClick={() => onAdd({ id: `custom-${Date.now()}`, name: `${swallow} + ${soup} + ${protein}`, price, extras: selExtras })} className="px-4 py-2 bg-amokeGreen text-white rounded">Add Custom Meal to Cart</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-card">
          <div className="text-lg font-semibold">Preview</div>
          <div className="mt-4 h-64 flex items-center justify-center text-gray-400">Beautiful Meal Visual (demo)</div>
        </div>
      </div>
    </section>
  )
}
