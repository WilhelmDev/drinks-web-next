import Image from "next/image"
import Link from "next/link"
import styles from '@/styles/bottle.module.css'

export default function BottleW({bottleDataW}) {
    const {name, price, drink_image_cloud, url_product, presentation} = bottleDataW
    const url = url_product.current
    return (
        <div className={styles.bottle}>
            <Image src={drink_image_cloud.url} alt={`image ${name}`} width={400} height={400} priority={true}/>
            <div className={styles.contentList}>
                <h3>{name}</h3>
                <p className={styles.presentationList}>{presentation.toFixed(2)} Lt</p>
                <p className={styles.price} >{price}$</p>
                <Link href={`/drink/${url}`} className={styles.link}>
                Ver Producto
                </Link>
            </div>
        </div>
    )
}