import Data from "./Data";
import History, { type HistoryEvent } from "./History";
import Info from "./Info";
import Overview from "./Overview";
import Titlebar from "./Titlebar";

export interface ProductProperties {
    id: string;
    name: string;
    footnote: string;
    image_path: string;
    data: string[];
    info: string;
    history: HistoryEvent[];
}

const Product = ({
    id,
    name,
    footnote,
    image_path,
    data,
    info,
    history,
}: ProductProperties) => {
    return (
        <>
            <Titlebar />
            <Overview
                id={id}
                name={name}
                footnote={footnote}
                product_img_path={image_path}
            />
            <Data data={data} />
            <Info info={info} />
            <History history={history} />
        </>
    );
};

export default Product;
