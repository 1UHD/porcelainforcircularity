import "../style/Data.css";

export interface DataEntry {
    header: string;
    info: string;
}

export interface DataProperties {
    data: DataEntry[];
}

const Seperator = () => {
    return <div className="seperator" />;
};

const Data = ({ data }: DataProperties) => {
    return (
        <div className="data">
            <Seperator />
            <div className="data-container">
                {data.map((entry) => (
                    <div className="data-entry">
                        <div className="data-header">
                            <p>{entry.header}</p>
                        </div>
                        <div className="data-values">
                            <p>{entry.info}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Seperator />
        </div>
    );
};

export default Data;
