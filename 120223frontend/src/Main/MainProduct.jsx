import { useContext } from "react";
import Header from "../Components/HeaderTemplate/Header";
import ContentProduct from "../Content/ContentProduct";
import { ThemeContext } from "../ThemeContext";
import "./MainProduct.css";

const MainProduct = () => {
    const { DarkTheme } = useContext(ThemeContext);

    return (
        <div className={`main ${DarkTheme && "dark"}`}>
            <Header />
            {/* <Content /> */}
            <ContentProduct />
        </div>
    );
};

export default MainProduct;
