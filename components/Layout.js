import Header from './Header'

const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            {children}
            {/* <p>Footer</p> */}
        </div>
    )
}

export default Layout;