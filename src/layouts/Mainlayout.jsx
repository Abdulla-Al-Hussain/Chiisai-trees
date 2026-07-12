import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function MainLayout(){

    return(

        <>

            <Navbar/>

            <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8">

                <Outlet/>

            </main>

            <Footer/>

        </>

    )

}

export default MainLayout;