import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Sidebar from '../components/Sidebar'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            {/* <div className="columns mt-6" style={{ minHeight: "100vh" }}> */}
                {/* <div className="column is-2">
                    <Sidebar />
                </div> */}
                {/* <div className="column has-background-light"> */}
                    <main>{children}</main>
                {/* </div> */}
            {/* </div> */}
            <Footer />
        </React.Fragment>
    )
}

export default Layout