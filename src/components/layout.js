import React from "react"
import Footer from "./footer"
import Navbar from "./navbar"
import styled from "styled-components"

const Layout = ({children}) => {
    return (
        <FontStyle>
            <div class="flex min-h-screen flex-col justify-between bg-neutral-50 text-neutral-900">
                <div>
                    <Navbar/>
                    {children}
                </div>
                <Footer/>
            </div>
            <div id={"modal-root"}/>
        </FontStyle>
    )
}

const FontStyle = styled.div`
  font-family: jost;
`

export default Layout
