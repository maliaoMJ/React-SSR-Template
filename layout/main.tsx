import Head from 'next/head'
import AppHeader from "../components/AppHeader/"
export default ({ children = {}, title = 'This is the default title' }) => (
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <header>
           <AppHeader/>
        </header>
        { children }
        <footer>
            {'I`m here to stay'}
        </footer>
    </div>
)