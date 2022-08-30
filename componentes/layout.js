import Head from 'next/head'
import Navbar from './navbar'

export default function Layout({children,title}){
    return(

        
        <div>
            <Head>
                <title>Reservas FISI {title ? `| ${title}`: "" }</title>
            </Head>
            <Navbar></Navbar>
            <div>{children}</div>
        </div>
       
    )
}