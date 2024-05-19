import { ReactNode } from 'react'

import Header from './Header'

interface LayoutProps {
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <main>
            <Header />
            <br />

            {children}
        </main>
    )
}

export default Layout
