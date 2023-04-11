import Image from "next/image";
import logo from '../public/img/logo-black2.jpg'
import Link from "next/link";
import styles from '@/styles/header.module.css'
import { useRouter } from "next/router";

export default function Header() {
    const router =  useRouter()
    return (
        <header className={styles.header}>
            <div className={`container ${styles.navbar}`}>
                <Link href='/'>
                    <Image  src={logo} width={100} height={100} alt="Logo Image" priority={true}/>
                </Link>

                <nav className={styles.nav}>
                    <Link href='/' className={router.pathname === '/' ? styles.active : ''}>
                            Inicio
                    </Link>
                    <Link href='/about' className={router.pathname === '/about' ? styles.active : ''}>
                            Nosotros
                        </Link>
                    <Link href='/rum' className={router.pathname === '/rum' ? styles.active : ''}>
                            Ron
                        </Link>
                    <Link href='/whiskey' className={router.pathname === '/whiskey' ? styles.active : ''}>
                            Whiskey
                        </Link>
                </nav>
            </div>

        </header>
    )
}
