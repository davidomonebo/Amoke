import React from 'react'

export default function HowItWorks(){
  const steps = ['Select Your Branch','Choose Your Food','Choose Eat-In or Takeout','Pay Online','Enjoy Your Meal']
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold">How It Works</h3>
      <div className="mt-6 space-y-4">
        {steps.map((s,i)=> (
          <div key={s} className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amokeGreen text-white flex items-center justify-center font-bold">{i+1}️⃣</div>
            <div>
              <div className="font-semibold">{s}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
