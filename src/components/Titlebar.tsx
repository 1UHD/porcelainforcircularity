import { useNavigate } from "react-router-dom";
import "../style/Titlebar.css";

let MenuOpen = false;
let ThemeOpen = false;

export const ThemeList = () => {
    const setColor = (variable: string, color: string) => {
        document.documentElement.style.setProperty(variable, `var(${color})`);
    };

    const setMetaColor = (color: string) => {
        const meta = document.querySelector(
            'meta[name="theme-color"]'
        ) as HTMLMetaElement | null;

        if (meta) {
            meta.content = getComputedStyle(
                document.documentElement
            ).getPropertyValue(color);
        }
    };

    const beigeTheme = () => {
        setColor("--background-secondary", "--background-secondary-beige");
        setColor("--background-topbar", "--background-topbar-beige");
        setMetaColor("--background-topbar-beige");
    };

    const greenTheme = () => {
        setColor("--background-secondary", "--background-secondary-green");
        setColor("--background-topbar", "--background-topbar-green");
        setMetaColor("--background-topbar-green");
    };

    const redTheme = () => {
        setColor("--background-secondary", "--background-secondary-red");
        setColor("--background-topbar", "--background-topbar-red");
        setMetaColor("--background-topbar-red");
    };

    return (
        <div className="theme-list">
            <button onClick={beigeTheme}>beige</button>
            <button onClick={greenTheme}>grün</button>
            <button onClick={redTheme}>rot</button>
        </div>
    );
};

export const ProductList = () => {
    const navigate = useNavigate();

    const onButtonP1Click = () => {
        navigate("/porcelainforcircularity1");
    };
    const onButtonP2Click = () => {
        navigate("/porcelainforcircularity2");
    };
    const onButtonP3Click = () => {
        navigate("/porcelainforcircularity3");
    };

    return (
        <div className="product-list">
            <button id="product-list-button-p1" onClick={onButtonP1Click}>
                Nr. 1268201
            </button>
            <button id="product-list-button-p2" onClick={onButtonP2Click}>
                Nr. 1275983
            </button>
            <button id="product-list-button-p3" onClick={onButtonP3Click}>
                Nr. 1236723
            </button>
        </div>
    );
};

const Titlebar = () => {
    const onToggleThemeButtonClick = () => {
        const thememenu = document.querySelector<HTMLElement>(".theme-list");

        if (!thememenu) {
            return;
        }

        if (!ThemeOpen) {
            thememenu.style.top = "44px";
            ThemeOpen = true;
        } else {
            thememenu.style.top = "-100px";
            ThemeOpen = false;
        }
    };

    const onMenuButtonClick = () => {
        const menu = document.querySelector<HTMLElement>(".product-list");

        if (!menu) {
            return;
        }

        if (!MenuOpen) {
            menu.style.top = "44px";
            MenuOpen = true;
        } else {
            menu.style.top = "-100px";
            MenuOpen = false;
        }
    };

    return (
        <div className="titlebar">
            <div className="titlebar-search">
                <img
                    id="titlebar-top-search"
                    src="magnifying-glass-solid.svg"
                    alt="SEARCH"></img>
                <input type="text" placeholder="Suchen"></input>
            </div>
            <div className="titlebar-buttons">
                <img
                    id="titlebar-top-menu"
                    src="bars-solid.svg"
                    alt="MENU"
                    onClick={onMenuButtonClick}></img>
                <img
                    id="titlebar-top-theme"
                    src="sun-solid.svg"
                    alt="THEME"
                    onClick={onToggleThemeButtonClick}></img>
            </div>
        </div>
    );
};

export default Titlebar;
