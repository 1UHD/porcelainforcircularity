import "../style/Info.css";

export interface InfoProperties {
    info: string;
}

const Info = ({ info }: InfoProperties) => {
    return (
        <div className="info">
            <h1 id="info-heading">INFO</h1>
            <p id="info-info">{info}</p>
        </div>
    );
};

export default Info;
