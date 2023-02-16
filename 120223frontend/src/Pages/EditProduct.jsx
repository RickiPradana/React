import { useEffect, useState } from "react";
import "./EditProduct.css";
import Navigation from "../Components/NavigationTemplate/Navigation";
import { ThemeContext } from "../ThemeContext";
import { getMe } from '../features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainEditProduct from "../Main/MainEditProduct";

function EditProduct() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate("/");
        }
    }, [isError, navigate]);

    const [DarkTheme, setDarkTheme] = useState(true);
    return (
        <ThemeContext.Provider value={{ DarkTheme, setDarkTheme }}>
            <div className="App">
                <Navigation />
                <MainEditProduct />
            </div>
        </ThemeContext.Provider>
    );
}

export default EditProduct;
