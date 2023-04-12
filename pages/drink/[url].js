import { getAllBottles, getProduct } from "@/client"
import Layout from "@/components/layout"
import styles from '@/styles/bottle.module.css'
import Image from "next/image"
export default function Product({dataProduct}) {
    const {alcoholic_grade, drink_image_cloud, drink_type, name, presentation, price} = dataProduct
    return (
        <Layout tittle={`${name}`}>
            <div className={styles.bottle}>
            <Image src={drink_image_cloud.url} alt={`image ${name}`} width={300} height={300} priority={false}/>
            <div className={styles.content}>
                <h3>{name}</h3>
                <p className={styles.presentation}>{presentation.toFixed(2)} L</p>
                <p className={styles.price} >{price}$</p>
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

// export async function getServerSideProps({query:{url}}) {
//     const dataProduct = await getProduct(url)
    
//     return{
//         props:{
//             dataProduct,
            
//         }
//     }
// }