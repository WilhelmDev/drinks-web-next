import Link from "next/link";
import styles from '@/styles/footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`contenedor ${styles.content}`}>
                <nav className={styles.nav}>
                        <Link href='/' >
                                Inicio
                        </Link>
                        <Link href='/about' >
                                Nosotros
                            </Link>
                        <Link href='/rum' >
                                Ron
                            </Link>
                        <Link href='/whiskey' >
                                Whiskey
                            </Link>
                    </nav>
                    <p className={styles.copyright}> Todos los derechos reservados {new Date().getFullYear()} </p>
            </div>
        </footer>
    )
}
