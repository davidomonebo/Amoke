import React from 'react'

export default function WhySection(){
  const items = [
    { title: 'Reduce Queues', desc: 'Customers can order and pay before arrival.' },
    { title: 'Faster Payments', desc: 'Online payments accelerate service.' },
    { title: 'Personalized Meals', desc: 'Customize meals to taste.' },
    { title: 'Multi-Branch', desc: 'Order from any Amoke Oge branch.' },
    { title: 'Better CX', desc: 'Convenient, fast, and modern ordering.' },
    { title: 'Increased Efficiency', desc: 'Staff focus on preparation and service.' }
  ]
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold">A Better Way to Serve Customers</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(it => (
          <div key={it.title} className="p-4 bg-white rounded shadow-card">
            <div className="font-semibold">{it.title}</div>
            <div className="text-sm text-gray-600 mt-2">{it.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
