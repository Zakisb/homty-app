import Navbar from "./Navbar"
import Footer from "../elements/Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            { children }
        </div>
    );
}

export default Layout;