import React from 'react'
import { branches } from '../data/menu'

export default function BranchSelector({ selected, onSelect }: { selected?: string, onSelect: (id: string) => void }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <h3 className="text-2xl font-semibold">Which Amoke Oge Branch Would You Like to Order From?</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {branches.map(b => (
          <button key={b.id} onClick={() => onSelect(b.id)} className={`p-4 rounded-lg border ${selected===b.id? 'border-amokeGreen bg-green-50':''} text-left` }>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{b.name}</div>
                <div className="text-sm text-gray-600">{b.location}</div>
              </div>
              <div className={`px-2 py-1 rounded-full text-sm ${b.open ? 'bg-green-100 text-green-800':'bg-gray-100 text-gray-500'}`}>{b.open ? 'Open' : 'Closed'}</div>
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}
