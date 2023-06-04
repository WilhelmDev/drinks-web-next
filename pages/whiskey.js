import { getWhiskey } from "@/client"
import BottleW from "@/components/bottleW"
import Layout from "@/components/layout"
import stylesGrid from '@/styles/grid.module.css'

export default function Whiskey({whiskeyBottles}) {
    return (
        <Layout tittle={'Whiskey'}
    description={"coleccion de Whiskey Drinks Web"}>

<main className="contenedor">
            <h2 className="heading"> Coleccion de Whiskey </h2>

        <div className={stylesGrid.grid}>
            {whiskeyBottles.map((w) => (
                <BottleW
                key={w._id}
                bottleDataW={w}
                />
            ))}
        </div>

        </main>
        </Layout>
    )
}

export async function getServerSideProps() {
    const whiskeyData = await getWhiskey()

    return {
        props: {
            whiskeyBottles : whiskeyData
        }
    }
}
