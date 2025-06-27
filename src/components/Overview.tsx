import "../style/Overview.css";

export interface OverviewProperties {
    id: string;
    name: string;
    footnote: string;
    product_img_path: string;
}

const Overview = ({
    id,
    name,
    footnote,
    product_img_path,
}: OverviewProperties) => {
    return (
        <div className="overview">
            <div className="spacer" />
            <div className="overview-split">
                <div className="overview-right">
                    <img
                        id="overview-right-image"
                        src={product_img_path}
                        alt="PRODUCT_IMAGE"></img>
                </div>
                <div className="overview-left">
                    <p id="overview-left-id">Nr. {id}</p>
                    <h1 id="overview-left-name">{name}</h1>
                    <p id="overview-left-footnote">{footnote}</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;
