import { Route, Routes } from "react-router-dom";
import Product_1 from "./pages/Product1";
import Product_2 from "./pages/Product2";
import Product_3 from "./pages/Product3";
import NotFound from "./pages/NotFound";

/*Replacement:
          <Route
                path="*"
                element={<Navigate to="/porcelainforcircularity2" replace />}
            />
*/

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/porcelainforcircularity1" element={<Product_1 />} />
            <Route path="/porcelainforcircularity2" element={<Product_2 />} />
            <Route path="/porcelainforcircularity3" element={<Product_3 />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
