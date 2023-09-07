import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Product } from "./pages/Product";
import { Pricing } from "./pages/Pricing";
import { PageNotFound } from "./pages/PageNotFound";
import { AppLayout } from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";

const BASE_URL = './data';

function App() {

    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchCities() {
            try {
                setIsLoading(true);
                const response = await fetch(`${BASE_URL}/cities.json`);
                const data = await response.json();
                console.log(data.cities);
                setCities(data.cities);
            }
            catch {
                alert('There was an error loading data...');
            }
            finally {
                setIsLoading(false);
            }
            
        }
        fetchCities();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/" element={<HomePage />}
                />
                <Route
                    path="product" element={<Product />}
                />
                <Route
                    path="pricing" element={<Pricing />}
                />
                <Route
                    path="app" element={<AppLayout />}
                >
                    <Route index element={<CityList cities={cities} isLoading={isLoading} />}></Route>
                    <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />}></Route>
                    <Route path="countries" element={<p>List of countries</p>}></Route>
                    <Route path="form" element={<p>Form</p>}></Route>
                </Route>
                <Route
                    path="login" element={<Login />}
                />
                <Route
                    path="*" element={<PageNotFound />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
