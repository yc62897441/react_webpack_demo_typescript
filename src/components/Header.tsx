import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const NavItem = styled.div`
    margin: 0 20px 0 0;
`

interface HeaderProps {}

// 定義一個接口來描述陣列元素的結構
interface UrlObject {
    name: string
    url: string
}
// 將這個接口應用到陣列
const urlArr: UrlObject[] = [
    {
        name: 'HomePage',
        url: '/',
    },
    {
        name: 'Page2',
        url: '/Page2',
    },
]

const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <header>
            <NavWrapper>
                {urlArr.length > 0 &&
                    urlArr.map((urlItem, index) => (
                        <NavItem key={urlItem.url}>
                            <Link to={urlItem.url}>{urlItem.name}</Link>
                        </NavItem>
                    ))}
            </NavWrapper>
        </header>
    )
}

export default Header
