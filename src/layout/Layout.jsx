import Footer from '../components/Footer/Footer';
import Header from "../components/Header/Head";

const Layout = ({children}) => (
  <>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </>
)

export default Layout;