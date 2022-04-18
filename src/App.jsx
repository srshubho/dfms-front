import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import CowList from "./pages/cow/CowList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./utils/dataSource";
import "./style/dark.scss";
import React, { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import CalfList from "pages/calf/CalfList";
import SupplierList from "pages/supplier/SupplierList";
import SingleSupplier from "pages/supplier/SingleSupplier";
import AddSupplier from "pages/supplier/AddSupplier";
import AddCalf from "pages/calf/AddCalf";
import AddShade from "pages/shade/AddShade";
import ShadeList from "pages/shade/ShadeList";
import AddCow from "pages/cow/AddCow";
import InhouseCow from "pages/cow/InhouseCow";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="cow">
              <Route index element={<CowList />} />
              <Route path=":cowId" element={<Single />} />
              <Route path="inhouse" element={<InhouseCow title="Add Cow" />} />
              <Route
                path="new"
                element={<AddCow title="Add Cow" />}
              />
            </Route>
            <Route path="calf">
              <Route index element={<CalfList />} />
              <Route path=":calfId" element={<Single />} />
              <Route
                path="new"
                element={<AddCalf title="Add Calf"></AddCalf>}
              />
            </Route>
            <Route path="supplier">
              <Route index element={<SupplierList />} />
              <Route path=":supplierId" element={<SingleSupplier />} />
              <Route
                path="new"
                element={<AddSupplier title="Add Supplier"></AddSupplier>}
              />
            </Route>
            <Route path="shade">
              <Route index element={<ShadeList />} />
              <Route path=":supplierId" element={<SingleSupplier />} />
              <Route
                path="new"
                element={<AddShade title="Add Shade"></AddShade>}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
