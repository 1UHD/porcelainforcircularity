import { useNavigate } from "react-router-dom";
import Impressum from "./Impressum";
import Titlebar, { ProductList } from "./Titlebar";
import "../style/Homepage.css";

export interface ProductButtonProperties {
    name: string;
    id: string;
    img_path: string;
    redirect_path: string;
}

const ProductButton = ({
    name,
    id,
    img_path,
    redirect_path,
}: ProductButtonProperties) => {
    const navigate = useNavigate();

    return (
        <div
            className="productbutton"
            onClick={() => {
                navigate(redirect_path);
            }}>
            <div className="productbutton-left">
                <img id="productbutton-img" src={img_path} alt="PRODUCT"></img>
            </div>
            <div className="productbutton-right">
                <h1 id="productbutton-name">{name}</h1>
                <p id="productbutton-id">{id}</p>
            </div>
        </div>
    );
};

export interface HomepageProperties {
    products: ProductButtonProperties[];
}

const Homepage = ({ products }: HomepageProperties) => {
    return (
        <>
            <ProductList />
            <Titlebar />

            <div className="spacer" />
            <h1 id="homepage-heading">Wählen Sie ihr Produkt</h1>
            <div className="seperator" />
            {products.map((p) => (
                <ProductButton
                    name={p.name}
                    id={p.id}
                    img_path={p.img_path}
                    redirect_path={p.redirect_path}
                />
            ))}

            <Impressum />
        </>
    );
};

export default Homepage;
