import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Header } from "../../pages/Home/components/Header";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </LayoutContainer>
    )
}