import Layout from '@/components/layout'
import Link from 'next/link'

export default function About() {
    return (
        <Layout tittle={'Nosotros'} description={'Sobre nosotros, Tienda de Bebidas'}>  
            <div>About</div>
            <Link href='/'> inicio </Link>
        </Layout>
    )
}

