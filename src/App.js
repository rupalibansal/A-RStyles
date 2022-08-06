import "./App.css";
import { Homepage } from "./components/Homepage";
import { AllProducts } from "./components/AllProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Women } from "./components/Women";
import { Men } from "./components/Men";
import { Kids } from "./components/Kids";
import { Baby } from "./components/Baby";
import { ProductDetail } from "./components/ProductDetail";
import { ShoppingBag } from "./components/ShoppingBag";
import { StateContext } from "./context/StateContext";
import { stateReducer, initialState } from "./reducer/stateReducer";
import { useReducer } from "react";
import { SnackbarProvider } from "notistack";
import { SearchResult } from "./components/SearchResult";
import { NoMatch } from "./components/NoMatch";

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/all-products" element={<AllProducts />} />
            <Route
              path="/searchResults/:searchTerm"
              element={<SearchResult />}
            />
            <Route path="/product/:code" element={<ProductDetail />} />
            <Route path="/women" element={<Women />} />
            <Route path="/men" element={<Men />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/baby" element={<Baby />} />
            <Route path="/shoppingBag" element={<ShoppingBag />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </StateContext.Provider>
  );
}

export default App;
