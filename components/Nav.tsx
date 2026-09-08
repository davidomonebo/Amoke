import { branches } from '../data/menu'
import React from 'react'

type Props = {
  selectedBranch?: string
  onChangeBranch?: () => void
}

export default function Nav({ selectedBranch, onChangeBranch }: Props) {
  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-white/60 backdrop-blur-md">
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Amoke Oge logo" className="object-cover w-10 h-10 border rounded-full shadow-sm border-amokeGreen/20" />
          <div>
            <div className="text-lg font-semibold">Amoke Oge</div>
            <div className="text-sm text-gray-600">{selectedBranch ?? 'Select a branch'}</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 font-semibold text-white rounded-md shadow-sm bg-amokeGold">Order Now</button>
          <button onClick={onChangeBranch} className="text-sm text-amokeGreen">Change Branch</button>
        </div>
      </div>
    </nav>
  )
}
