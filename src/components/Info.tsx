import "../style/Info.css";

export interface InfoProperties {
    info: string[];
}

let infoCollapsed = false;

const Info = ({ info }: InfoProperties) => {
    const onInfoButtonClick = () => {
        const infoContent =
            document.querySelector<HTMLElement>(".info-content");
        const infoArrow = document.getElementById("info-arrow");

        if (!infoContent || !infoArrow) {
            return;
        }

        if (infoCollapsed) {
            infoContent.style.position = "inherit";
            infoContent.style.display = "block";

            infoArrow.style.rotate = "270deg";

            infoCollapsed = false;
        } else {
            infoContent.style.position = "absolute";
            infoContent.style.display = "none";

            infoArrow.style.rotate = "180deg";

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
                <img id="info-image" src="info.png" alt="INFO" />
            </div>
        </div>
    );
};

export default Info;
