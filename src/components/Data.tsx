import "../style/Data.css";

export interface DataProperties {
    data: string[];
}

const Seperator = () => {
    return <div className="seperator" />;
};

const Data = ({ data }: DataProperties) => {
    return (
        <div className="data">
            <Seperator />
            <div className="data-container">
                <div className="data-header">
                    <p id="data-header-zustand">Zustand:</p>
                    <p id="data-header-veredelt">Veredelt in:</p>
                    <p id="data-header-prod-in">Produziert in:</p>
                    <p id="data-header-prod-am">Produziert am:</p>
                </div>
                <div className="data-values">
                    <p id="data-value-zustand">{data[0]}</p>
                    <p id="data-value-veredelt">{data[1]}</p>
                    <p id="data-value-prod-in">{data[2]}</p>
                    <p id="data-value-prod-am">{data[3]}</p>
                </div>
            </div>
            <Seperator />
        </div>
    );
};

export default Data;
