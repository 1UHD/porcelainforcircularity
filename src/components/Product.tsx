import Data from "./Data";
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
}

const Product = ({
    id,
    name,
    footnote,
    image_path,
    data,
    info,
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
        </>
    );
};

export default Product;
