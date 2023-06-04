import Layout from "@/components/layout";
import stylesCart from '@/styles/cart.module.css'
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Cart({cart, updateQuantity, deleteItem}) {
    const [total, setTotal] = useState(0)

    useEffect(() => {
    const totalCalc =  cart.reduce((total, product) => total + (product.quantity * product.price), 0)
    setTotal(totalCalc)
    
    }, [cart])
    
    return (
        <Layout tittle="Carrito de compras">
            <main className="contenedor">
                <h1 className="heading">Carrito de compras</h1>

                <div className={stylesCart.content}>
                    <div className={stylesCart.cart}>
                        <h2>Articulos</h2>
                            {cart.length === 0 ? 'Carrito Vacio':(
                                cart.map((product) => (
                                    <div key={product.id} className={stylesCart.product}>
                                        <div className="">
                                        <Image width={300} height={300} src={product.image} alt={product.name} />
                                        </div>
                                        <div className="">
                                            <p className={stylesCart.name}>{product.name}</p>
                                            <div className={stylesCart.quantity}>
                                                <p>Cantidad</p>
                                                <select className={stylesCart.select}
                                                onChange={(e) => updateQuantity({
                                                    id: product.id,
                                                    quantity: Number(e.target.value)
                                                })} value={product.quantity} >
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                </select>
                                            </div>
                                            <p className={stylesCart.price}><span>{product.price}</span> $</p>
                                            <p className={stylesCart.subtotal}>Subtotal: <span>{product.quantity * product.price}</span> $</p>
                                            <button className={stylesCart.delete} type="button" onClick={() => deleteItem(product.id)}
                                            > X</button>
                                        </div>
                                    </div>
                                ))
                            )}
                    </div>

                    <aside className={stylesCart.resume}>
                        <h3>Resumen de compra</h3>
                        <p>Total a pagar: {total} $</p>
                    </aside>
                </div>
            </main>
        </Layout>
    )
}
