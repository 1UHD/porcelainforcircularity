import Product from "../components/Product";

const Product_2 = () => {
    return (
        <>
            <Product
                id="1275983"
                name="System Plus"
                footnote="Kahla Porzellan"
                image_path="02.png"
                data={[
                    {
                        header: "Zustand",
                        info: "Sehr gut",
                    },
                    {
                        header: "Füllvolumen",
                        info: "0,20 Liter",
                    },
                    {
                        header: "Nutzungszyklen",
                        info: "3",
                    },
                    {
                        header: "Veredlungstyp",
                        info: "1 Kreis / Monat",
                    },
                    {
                        header: "Produziert",
                        info: "08/2020",
                    },
                    {
                        header: "Design",
                        info: "stapelbar, kantenverstärkt, transparente Glasur, ürsprünglich ohne Veredlung",
                    },
                    {
                        header: "Herstellung",
                        info: "Druckguss-Verfahren, Brände bei 900 und 1400 Grad Celsius, Feinschliff",
                    },
                    {
                        header: "Material",
                        info: "Hartporzellan (Kaolin, Feldspat und Quarz, abgebaut in Deutschland und Tschechien)",
                    },
                    {
                        header: "CO2-Emission",
                        info: "nur von Produktion und Veredlungen circa 6,3kg",
                    },
                    {
                        header: "Herkunft",
                        info: "Kahla, Thüringen",
                    },
                ]}
                info={[
                    "Bei der Produktion dieser Serie wurde jedes Objekt mit einem QR-Code auf der Unterseite versehen. Dieser gibt Auskunft über die Geschichte des Produkts, einzelne Herstellungs- und Nutzungsinformationen.",
                    "Es ist uns ein Anliegen, Porzellan im Kreislauf zu halten, weswegen wir Tafelgeschirr, welches nicht mehr genutzt wird, in unsere Manufaktur zurückführen und unter geringerem Energieverbrauch veredeln. Hierbei steht ein Kreis für einen Monat der Nutzung, eine Lücke für den Beginn eines neuen Nutzungszyklus.",
                    "Vorteil für dich ist, dass du individuelles Geschirr zum kleinen Preis kaufen kannst und einem Produkt ein neues Leben schenkst. Sollte es dir doch nicht mehr gefallen, kannst du es an uns zurückgeben und wir kümmern uns, damit es schnellstmöglich ein neues Zuhause findet.",
                ]}
                history={[
                    {
                        date_start: "2022",
                        date_end: "08/2022",
                        info: "Chemnitz, Sachsen",
                    },
                    {
                        date_start: "2023",
                        date_end: "02/2024",
                        info: "Halle (Saale), Sachsen-Anhalt",
                    },
                    {
                        date_start: "04/2024",
                        date_end: "05/2025",
                        info: "Leipzig, Sachsen",
                    },
                    {
                        date_start: "2025",
                        date_end: "",
                        info: "Rücksendung anfordern",
                    },
                ]}
            />
        </>
    );
};

export default Product_2;
