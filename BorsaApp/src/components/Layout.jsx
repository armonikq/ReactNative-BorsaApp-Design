
import { Outlet } from "react-router-dom";
import Navbar from "./NavbarCompontes/NavbarComp.jsx";
import NavbarCurr from "../components/NavbarCompontes/NavbarCurrencies.jsx"
export default function Layout() {
    return (
        <>
            <Navbar />
            <NavbarCurr/>
            <Outlet />

        </>
    );
}
/**
 * Outlet views kısmında olan jsx dosyalarının render olacağı kısımdır.
 * App.jsx kısmında belirtiğin path kısmına gittiğinde belirtiğin elemenet dosyası Outlet yerine render olur.
 */