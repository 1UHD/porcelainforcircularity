import Homepage from "../components/Homepage";

const LandingPage = () => {
    return (
        <>
            <Homepage
                products={[
                    {
                        name: "Colditzer Teller",
                        id: "1268201",
                        img_path: "01.png",
                        redirect_path: "/porcelainforcircularity1",
                    },
                    {
                        name: "System Plus",
                        id: "1275983",
                        img_path: "02.png",
                        redirect_path: "/porcelainforcircularity2",
                    },
                    {
                        name: "System Plus",
                        id: "1236723",
                        img_path: "03.png",
                        redirect_path: "/porcelainforcircularity3",
                    },
                ]}
            />
        </>
    );
};

export default LandingPage;
