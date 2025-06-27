import "../style/Info.css";

export interface InfoProperties {
    info: string[];
}

let infoCollapsed = true;

const Info = ({ info }: InfoProperties) => {
    const onInfoButtonClick = () => {
        const infoContent =
            document.querySelector<HTMLElement>(".info-content");
        const infoArrow = document.getElementById("info-arrow");

        if (!infoContent || !infoArrow) {
            return;
        }

        if (infoCollapsed) {
            infoContent.style.position = "relative";
            infoContent.style.display = "block";

            infoArrow.style.rotate = "-90deg";

            infoCollapsed = false;
        } else {
            infoContent.style.position = "absolute";
            infoContent.style.display = "none";

            infoArrow.style.rotate = "0deg";

            infoCollapsed = true;
        }
    };

    return (
        <div className="info">
            <div className="info-header" onClick={onInfoButtonClick}>
                <h1 id="info-heading">Serviceinfo</h1>
                <img src="less_than_solid.svg" alt="COLLAPSE" id="info-arrow" />
            </div>
            <div className="info-content">
                {info.map((infoitem) => (
                    <p id="info-info">{infoitem}</p>
                ))}
            </div>
        </div>
    );
};

export default Info;
