export const branches = [
  { id: 'ikeja', name: 'Amoke Oge - Ikeja', location: 'Ikeja, Lagos', open: true },
  { id: 'lekki', name: 'Amoke Oge - Lekki', location: 'Lekki Phase 1', open: true },
  { id: 'surulere', name: 'Amoke Oge - Surulere', location: 'Surulere, Lagos', open: false },
  { id: 'vi', name: 'Amoke Oge - Victoria Island', location: 'VI, Lagos', open: true },
]

export const categories = [
  {
    id: 'rice',
    name: 'Rice Meals',
    items: [
      { id: 'jollof', name: 'Jollof Rice', desc: 'Smoky tomato rice with peppers', price: 1800, img: '/images/jollof.png' },
      { id: 'fried', name: 'Fried Rice', desc: 'House fried rice with veggies', price: 2000, img: '/images/fried.png' },
      { id: 'ofada', name: 'Ofada Rice', desc: 'Local ofada rice and shito', price: 2200, img: '/images/ofada.png' }
    ]
  },
  {
    id: 'swallow',
    name: 'Swallow',
    items: [
      { id: 'amala', name: 'Amala', desc: 'Soft amala to pair with soups', price: 800, img: '/images/amala.png' },
      { id: 'pounded', name: 'Pounded Yam', desc: 'Smooth pounded yam', price: 900, img: '/images/pounded.png' },
    ]
  },
  {
    id: 'soups',
    name: 'Soups',
    items: [
      { id: 'egusi', name: 'Egusi', desc: 'Rich melon seed soup', price: 1200, img: '/images/egusi.png' },
      { id: 'ewedu', name: 'Ewedu', desc: 'Smooth green ewedu soup', price: 700, img: '/images/ewedu.png' }
    ]
  },
  {
    id: 'proteins',
    name: 'Proteins',
    items: [
      { id: 'goat', name: 'Goat Meat', desc: 'Slow-cooked spiced goat', price: 2500, img: '/images/goat.png' },
      { id: 'chicken', name: 'Chicken', desc: 'Crispy fried chicken', price: 1800, img: '/images/chicken.png' }
    ]
  },
  {
    id: 'drinks',
    name: 'Drinks',
    items: [
      { id: 'zobo', name: 'Zobo', desc: 'Hibiscus drink', price: 400, img: '/images/zobo.png' },
      { id: 'palm', name: 'Palm Wine', desc: 'Local palm wine', price: 600, img: '/images/palm.png' }
    ]
  }
]
