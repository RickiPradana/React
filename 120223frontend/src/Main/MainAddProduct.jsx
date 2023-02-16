import { useContext } from "react";
import Header from "../Components/HeaderTemplate/Header";
import { ThemeContext } from "../ThemeContext";
import "./MainAddProduct.css";

const MainAddProduct = () => {
    const { DarkTheme } = useContext(ThemeContext);

    return (
        <div className={`main ${DarkTheme && "dark"}`}>
            <Header />
        </div>
    );
};

export default MainAddProduct;
