import "../style/History.css";

export interface HistoryEvent {
    date_start: string;
    date_end: string;
    info: string;
}
export interface HistoryProperties {
    history: HistoryEvent[];
}

const Seperator = () => {
    return <div className="history-seperator" />;
};

const History = ({ history }: HistoryProperties) => {
    return (
        <div className="history">
            <div className="history-container">
                {history.map((history_event) => (
                    <div className="history-event">
                        <div className="history-event-date">
                            <p id="history-event-date-start">
                                {history_event.date_start}
                            </p>
                            <p id="history-event-date-seperator">-</p>
                            <p id="history-event-date-end">
                                {history_event.date_end}
                            </p>
                        </div>
                        <Seperator />
                        <p id="history-event-info">{history_event.info}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default History;
