import { getAllBottles, getProduct } from "@/client"
import Layout from "@/components/layout"
import styles from '@/styles/bottle.module.css'
import Image from "next/image"
import { useState } from "react"
export default function Product({dataProduct, addTocart}) {
    const [quantity, setQuantity] = useState(0)
    const {alcoholic_grade, drink_image_cloud, drink_type, name, presentation, price, _id:id} = dataProduct

    const handleSubmit = (e) => {
        e.preventDefault()

        if (quantity === 0) {
            alert('Por favor seleccione una cantidad valida')
            return
        }

        //Object Product

        const bottleSelected = {
            id,
            image: drink_image_cloud.url,
            name,
            price,
            quantity,
        }
        //obj to context
        addTocart(bottleSelected)

    }
    return (
        <Layout tittle={`${name}`}>
            <div className={styles.bottle}>
            <Image src={drink_image_cloud.url} alt={`image ${name}`} width={600} height={600} priority={true}/>
            <div className={styles.content}>
                <h3>{name}</h3>
                <p className={styles.presentation}> Presentacion: {presentation.toFixed(2)}L</p>
                <p className={styles.presentation}> Volumen de alcohol: {alcoholic_grade}% </p>
                <p className={styles.price} >{price}$</p>
                <form className={styles.form} onSubmit={handleSubmit} >
                    <label htmlFor="cantidad">Cantidad</label>
                    <select id="cantidad" onChange={(e) => setQuantity(Number(e.target.value))} >
                        <option value="0">--Seleccione--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <input type="submit" value="Agregar al carrito" />
                </form>
            </div>
        </div>
        </Layout>
    )
}
export async function getStaticPaths() {
    const allData = await getAllBottles()
    const paths = allData.map((bottle) => ({
        params: {
            url: bottle.url_product.current
        }
    }))
    return {
        paths,
        fallback:false
    }
}
export async function getStaticProps({params:{url}}) {
    const dataProduct = await getProduct(url)
    
    return{
        props:{
            dataProduct,
            
        }
    }
}
