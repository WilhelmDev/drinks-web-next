import Image from "next/image"
import Link from "next/link"
import styles from '@/styles/bottle.module.css'

export default function Bottle({bottleData}) {
    const {name, price, drink_image_cloud, url_product, presentation} = bottleData
    const url = url_product.current
    return (
        <div className={styles.bottle}>
            <Image src={drink_image_cloud.url} alt={`image ${name}`} width={300} height={300} priority={false}/>
            <div className={styles.content}>
                <h3>{name}</h3>
                <p className={styles.presentation}>{presentation.toFixed(2)} L</p>
                <p className={styles.price} >{price}$</p>
                <Link href={`/drink/${url}`} className={styles.link}>
                Ver Producto
                </Link>
            </div>
        </div>
    )
}
