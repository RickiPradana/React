import { useContext } from "react";
import Header from "../Components/HeaderTemplate/Header";
// import ContentProduct from "../Content/ContentProduct";
import { ThemeContext } from "../ThemeContext";
import "./MainEditProduct.css";

const MainEditProduct = () => {
    const { DarkTheme } = useContext(ThemeContext);

    return (
        <div className={`main ${DarkTheme && "dark"}`}>
            <Header />
            {/* <Content /> */}
            {/* <ContentProduct /> */}
        </div>
    );
};

export default MainEditProduct;
