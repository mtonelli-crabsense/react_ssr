import Head from "next/head";
import Navigation from "./navigation"

const Layout = (props) => (
    <>
        <Head>
            <title>{props.children}</title>
            <link rel="icon" href="/public/images/favicon.ico" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/flatly/bootstrap.min.css" />
            <link rel="stylesheet" href="/public/styles/main.css" />
            <meta name="description" content="" />
            <meta name="robots" content="index, follow" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={'dinamico'} />
            <meta property="og:description" content={'dinamico'} />
            <meta property="og:image" content={'dinamico'} />
            <meta property="og:url" content={'dinamico'} />
            <meta property="og:site_name" content="Bonvivir.com" />
            <meta name="twitter:title" content={'dinamico'} />
            <meta name="twitter:description" content={'dinamico'} />
            <meta name="twitter:image" content={'dinamico'} />
            <meta name="twitter:site" content="@bonvivir" />
            <meta name="twitter:creator" content="@bonvivir" />
        </Head>
        <Navigation/>
        <div className="container">
            {props.children}
        </div>
    </>
)

export default Layout;