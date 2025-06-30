import { useNavigate } from "react-router-dom";
import "../style/Titlebar.css";

let MenuOpen = false;

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

    const blueTheme = () => {
        setColor("--background-secondary", "--background-secondary-blue");
        setColor("--background-topbar", "--background-topbar-blue");
        setMetaColor("--background-topbar-blue");
    };

    const redTheme = () => {
        setColor("--background-secondary", "--background-secondary-red");
        setColor("--background-topbar", "--background-topbar-red");
        setMetaColor("--background-topbar-red");
    };

    return (
        <div className="theme-list">
            <button onClick={beigeTheme}>beige</button>
            <button onClick={blueTheme}>blau</button>
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

let theme = "light";
const ChangeTheme = () => {
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

    const lightTheme = () => {
        setColor("--background", "--background-light");
        setColor("--background-secondary", "--background-secondary-light");
        setColor("--background-topbar", "--background-topbar-light");
        setColor("--text", "--text-light");
        setColor("--seperator", "--seperator-light");
        setMetaColor("--background-topbar-light");
    };

    const darkTheme = () => {
        setColor("--background", "--background-dark");
        setColor("--background-secondary", "--background-secondary-dark");
        setColor("--background-topbar", "--background-topbar-dark");
        setColor("--text", "--text-dark");
        setColor("--seperator", "--seperator-dark");
        setMetaColor("--background-topbar-dark");
    };

    alert("Dark Mode ist derzeit leider nicht verfügbar.");
    /*
    if (theme == "light") {
        darkTheme();
        theme = "dark";
    } else {
        lightTheme();
        theme = "light";
    }
    */
};

const Titlebar = () => {
    const onToggleThemeButtonClick = () => {
        ChangeTheme();
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
                <h1 id="titlebar-logo">porCycle</h1>
                <p id="titlebar-logo-sub">Porcelain For Circularity</p>
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
