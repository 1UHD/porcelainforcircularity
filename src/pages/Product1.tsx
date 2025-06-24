import Product from "../components/Product";

const Product_1 = () => {
    return (
        <>
            <Product
                id="1275983"
                name="System Plus"
                footnote="Kahla Porzellan"
                image_path="product1.png"
                data={["Neu", "Neuseeland", "deiner Mudda", "21.06.2025"]}
                info="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores "
                history={[
                    {
                        date_start: "01/06/2025",
                        date_end: "03/06/2025",
                        info: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l",
                    },
                    {
                        date_start: "19/06/2025",
                        date_end: "2026",
                        info: "ipsum lorem golem poren foren loren",
                    },
                ]}
            />
        </>
    );
};

export default Product_1;
