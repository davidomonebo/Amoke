import React from 'react'
import { categories } from '../data/menu'

function svgPlaceholderDataUri(name: string, bg = '#fdebd3'){
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='${bg}'/><text x='50%' y='45%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='36' fill='#6b3b1f'>${name}</text><text x='50%' y='60%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='20' fill='#8a6a4a'>African Dish (demo)</text></svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export default function Menu({ onAdd }: { onAdd: (item: any) => void }) {
  return (
    <section id="menu" className="max-w-6xl mx-auto px-6 py-8">
      <h3 className="text-2xl font-semibold">Explore Our Menu</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map(cat => (
          <div key={cat.id} className="bg-white rounded-lg p-4 shadow-card">
            <h4 className="font-semibold text-lg">{cat.name}</h4>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cat.items.map((it:any) => (
                <div key={it.id} className="flex gap-3 items-center border p-3 rounded">
                  <img src={it.img} loading="lazy" onError={(e)=>{(e.currentTarget as HTMLImageElement).src='/images/placeholder.png'}} alt={it.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1">
                    <div className="font-semibold">{it.name}</div>
                    <div className="text-sm text-gray-600">{it.desc}</div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="text-amokeGreen font-semibold">₦{it.price}</div>
                      <button onClick={() => onAdd(it)} className="px-3 py-1 rounded bg-amokeGold text-white text-sm">Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
