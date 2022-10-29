import Content from "./Content"
import NavBar from "./NavBar"

const Layout = ({ children }) => {
   return (
      <>
         <NavBar />
         <Content>
            {children}
         </Content>
      </>
   )
}

export default Layout
