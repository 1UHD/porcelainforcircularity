import "../style/Info.css";

export interface InfoProperties {
    info: string[];
}

const Info = ({ info }: InfoProperties) => {
    return (
        <div className="info">
            <h1 id="info-heading">INFO</h1>
            {info.map((infoitem) => (
                <p id="info-info">{infoitem}</p>
            ))}
        </div>
    );
};

export default Info;
