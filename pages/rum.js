import { getRum } from "@/client"
import Layout from "@/components/layout"
import Bottle from "@/components/bottle"
import stylesGrid from '@/styles/grid.module.css'

export default function Rum({rumBottles}) {
    return (
    <Layout tittle={'Ron'}
    description={"Coleccion de Rones Drinks Web"}>

        <main className="contenedor">
            <h2 className="heading"> Coleccion de Ron </h2>

        <div className={stylesGrid.grid}>
            {rumBottles.map((x) => (
                <Bottle
                key={x._id}
                bottleData={x}
                />
            ))}
        </div>

        </main>
    </Layout>
        
    )
}

export async function getServerSideProps() {
    const rumData = await getRum()

    return {
        props: {
            rumBottles : rumData
        }
    }
}