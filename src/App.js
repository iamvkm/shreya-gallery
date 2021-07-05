import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import Navbar from './components/Navbar/Navbar'
import ShopPage from './components/Shop/ShopPage'
import AboutPage from './components/About/AboutPage'
import CartPage from './components/Cart/CartPage'
import ContactPage from './components/Contact/ContactPage'
import LandingPage from './components/Home/LandingPage'
import Footer from './components/Footer/Footer'
import PaymentDialog from './components/Cart/PaymentDialog'

function App() {

  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) ?? []
    } catch {
      console.error("error")
      return []
    }
  })

  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist")) ?? []
    } catch {
      console.error("error")
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart), [cart])
    localStorage.setItem("wishlist", JSON.stringify(wishlist), [wishlist])
  })

  function addToCart(element) {
    setCart((items) => {
      const itemInCart = items.find((i) => i.id === element.id)
      if (itemInCart) {
        return items.map((i) =>
          i.id === element.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      } else return [...items, { id: element.id, name: element.name, price: element.price, quantity: 1 }]
    })
  }

  function toggleWishlist(element) {
    setWishlist((items) => {
      const itemInWishlist = items.find((i) => i.id === element.id)
      if (itemInWishlist) {
        return items.map((i) =>
          i.id === element.id ? { ...i, exists: !i.exists } : i
        )
      } else return [...items, { id: element.id, name: element.name, image: element.image, price: element.price, quantity: 1, exists: true }]
    })
  }

  function updateQuantity(id, quantity, action) {
    setCart((items) => {
      if (quantity === 0) {
        return items.filter((i) => i.id !== id)
      }
      return items.map((i) =>
        i.id === id
          ? {
            ...i,
            quantity:
              action === "increment"
                ? quantity + 1
                : quantity === 1
                  ? 1
                  : quantity - 1,
          }
          : i
      )
    })
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<ShopPage wishlist={wishlist} addToCart={addToCart} toggleWishlist={toggleWishlist} />} />
        <Route path="/cart" element={<CartPage cart={cart} updateQuantity={updateQuantity} />} />
        <Route path="/payment" element={<PaymentDialog />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
