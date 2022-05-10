import Head from "next/head"
import Layout from "../../components/layout"
import HeadingH1 from "../../components/headingH1"

export default function Maridajes ({ maridajes }) {
    return(
        <>
            <Head>
                <title>Next.js Maridajes</title>
            </Head>
            <Layout>
                <HeadingH1>H1 Maridajes</HeadingH1>
                
                { maridajes.map(maridaje => {
                    return(
                        <div>
                            <h2 style={{ paddingTop:"50px", fontSize:"36px" }}>{ maridaje.nombre }</h2>
                            <h3 style={{ fontSize:"20px" }}><span>Vino recomendado: </span><b>{ maridaje.vino }</b></h3>
                            <img src={ maridaje.imagen } alt={ maridaje.nombre } style={{ borderRadius: "50%", paddingBottom:"50px" }} />
                        </div>
                    )
                })}
            </Layout>
        </>
    )
}


export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/maridajes`)
    const maridajes = await res.json()
    //const data = await JSON.parse(JSON.stringify(res.json()))
    return { props: { maridajes } }
    console.log(data);
}
