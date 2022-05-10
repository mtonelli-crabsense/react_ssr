import Link from "next/link"

const Navigation = () => {
    return(
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/maridajes">
                    <a>Maridajes</a>
                </Link>
            </li>
        </ul>
    )
}

export default Navigation