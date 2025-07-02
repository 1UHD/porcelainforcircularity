import Data, { type DataEntry } from "./Data";
import Disclaimer from "./Disclaimer";
import History, { type HistoryEvent } from "./History";
import Impressum from "./Impressum";
import Info from "./Info";
import Overview from "./Overview";
import Titlebar, { ProductList } from "./Titlebar";

export interface ProductProperties {
    id: string;
    name: string;
    footnote: string;
    image_path: string;
    data: DataEntry[];
    info: string[];
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
            <ProductList />
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
            <Disclaimer />
            <Impressum />
        </>
    );
};

export default Product;
