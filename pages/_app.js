import '@/styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const cartLs = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : []
  const [cart, setCart] = useState(cartLs)
  const [pageReady, setPageReady] = useState(false)
  useEffect(() => {
    setPageReady(true)
  
  
  }, [])
  

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]) 

  // add cart
  const addTocart = (bottle) => {
    if (cart.some(bottleState => bottleState.id === bottle.id)) {
      //change quantity
      const cartUpdated = cart.map( obj => {
        if(obj.id === bottle.id) {
          obj.quantity = bottle.quantity
        }
        return obj
      })
      setCart(cartUpdated)
    } else {
      //new register
      setCart([...cart, bottle])
    }
  }
  //update quantity in cart
  const updateQuantity = (bottle) => {
    const cartUpdated = cart.map((x) => {
      if (x.id === bottle.id) {
        x.quantity = bottle.quantity
      }
      return x
    })
    setCart(cartUpdated)
  }
  //delete of cart
  const deleteItem = (id) => {
    const cartUpdated = cart.filter( bottle => bottle.id !== id)
    setCart(cartUpdated)
  }

  return pageReady ? <Component {...pageProps} cart={cart}
  addTocart={addTocart} updateQuantity={updateQuantity} deleteItem={deleteItem} />
  : null
}
