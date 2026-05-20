import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import CartPage from "./cart";
import CheckoutPage from "./checkout";
import CustomerOrdersPage from "./customerMyOderPage";
import SettingsPage from "./settingsPage";
import BottomNavigationBar from "../components/bottomNavigationBar";
import ProductsPage from "./productPage";
import ProductOverviewPage from "./productOverviewPage";
import NotFoundPage from "./notFoundPage";


export default function HomePage() {
    return (
        <div className="h-full w-screen flex  flex-col">
           
                <Header/>
                <div className="w-full h-[calc(100%-100px)] overflow-y-scroll border">
                    <Routes>
                        <Route path="/" element={<h1 >Welcome to the Home Page</h1>} />
                        <Route path="/products" element={<ProductsPage/>} />
                        <Route path="/contact-us" element={<h1 >Welcome to the Contact Us Page</h1>} />
                        <Route path="/overview/:productId" element={<ProductOverviewPage/>} />
                        <Route path="/cart" element={<CartPage/>} />
                        <Route path="/my-orders" element={<CustomerOrdersPage/>} />
                        <Route path="/settings" element={<SettingsPage/>} />
                        <Route path="/checkout" element={<CheckoutPage/>} />
                        <Route path="/*" element={<NotFoundPage/>} />
                    </Routes>
                    <BottomNavigationBar/>
                </div>
           
        </div>
    )
}