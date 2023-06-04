import Layout from "@/components/layout";
import Link from "next/link";

export default function Custom404() {
    return (
        <Layout tittle="Pagina no encontrada" >
            <p className="error"> Pagina no Encontrada </p>
            <Link href='/' className="error-link"
            >Ir al inicio</Link>
        </Layout>
    )
    }