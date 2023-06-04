import Layout from '@/components/layout'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <Layout tittle={'Nosotros'} description={'Sobre nosotros, Tienda de Bebidas'}>  
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>
                <div className='grid-about'>
                    <Image src='/img/header.jpg' alt='image about' width={500} height={500} className='image'/>
                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste ad, corrupti doloribus 
                            quod consequuntur repellendus porro sint quasi sapiente nulla odit distinctio libero,
                            accusamus itaque! Obcaecati iste itaque animi laboriosam?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae voluptatum maiores perspiciatis? 
                            Illum, sit impedit cum in nisi ex quae veniam officiis perferendis labore adipisci ut dicta 
                            commodi expedita quaerat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima 
                            nesciunt autem exercitationem numquam soluta quia aperiam esse obcaecati atque cupiditate 
                            dolores ratione, eos voluptate ullam veritatis fugit? Suscipit, earum architecto!</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

