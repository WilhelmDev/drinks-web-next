import Layout from "@/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout tittle={'Inicio'}
    description={"Web de bebidas desarrollada con NextJs y Sanity.io"}
    >
      <h1> Holas Mundos</h1>
      <Link href='/about'> nosotros </Link>
    </Layout>
  )
}
