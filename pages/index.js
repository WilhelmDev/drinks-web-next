import { getRum, getWhiskey } from "@/client";
import Bottle from "@/components/bottle";
import BottleW from "@/components/bottleW";
import Layout from "@/components/layout";
import stylesGrid from '@/styles/grid.module.css'
import Link from "next/link";

export default function Home({rum,whiskey}) {
  const rumShort = rum.slice(1,4)
  const whiskeyShort = whiskey.slice(0,3)
  return (
    <Layout tittle={'Inicio'}
    description={"Web de bebidas desarrollada con NextJs y Sanity.io"}>

      <main className="contenedor">
        <h1 className="heading">Nuestra coleccion de Ron</h1>
        <div className={stylesGrid.grid}>
            {rumShort.map((x) => (
                <Bottle
                key={x._id}
                bottleData={x}
                />
            ))}
        </div>
        <Link className={stylesGrid.btnLink} href={'/rum'}
        >Ver Toda la coleccion de Ron disponible</Link>


        <h1 className="heading">Nuestra coleccion de Whiskey</h1>
        <div className={stylesGrid.grid}>
            {whiskeyShort.map((w) => (
                <BottleW
                key={w._id}
                bottleDataW={w}
                />
            ))}
        </div>
        <Link className={stylesGrid.btnLink} href={'/whiskey'}
        >Ver Toda la coleccion de Whiskey disponible</Link>
      </main>
      
    </Layout>
  )
}

export async function getStaticProps() {
  const [rum, whiskey] = await Promise.all([
    getRum(),
    getWhiskey()
  ])
  return {
    props:{
      rum,
      whiskey
    }
  }
}