import Header from "../components/layout/Header";
import MakeItEasy from "../components/layout/MakeItEasy";
import HowItWorks from "../components/layout/HowItWorks";
import Properties from "../components/properties/Properties";
import Footer from "../components/layout/Footer";
import Cta from "../components/layout/Cta";
import Partners from "../components/layout/Partners";
import TenantLayout from '../components/layout/tenant/TenantLayout';

export default function Home () {
    return (
        <TenantLayout>
            <Header />
            <Properties/>
            <Footer />
        </TenantLayout>
    )
}