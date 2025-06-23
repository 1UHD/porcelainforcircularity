import "../style/Titlebar.css";

const onMenuButtonClick = () => {
    //
};

const onToggleThemeButtonClick = () => {
    //
};

const Titlebar = () => {
    return (
        <div className="titlebar">
            <div className="titlebar-search">
                <img
                    id="titlebar-top-search"
                    src="magnifying-glass-solid.svg"
                    alt="SEARCH"
                ></img>
                <input type="text" placeholder="Suchen"></input>
            </div>
            <div className="titlebar-buttons">
                <img
                    id="titlebar-top-menu"
                    src="bars-solid.svg"
                    alt="MENU"
                    onClick={onMenuButtonClick}
                ></img>
                <img
                    id="titlebar-top-theme"
                    src="sun-solid.svg"
                    alt="THEME"
                    onClick={onToggleThemeButtonClick}
                ></img>
            </div>
        </div>
    );
};

export default Titlebar;
