import Product from "../components/Product";

const Product_1 = () => {
    return (
        <>
            <Product
                id="1268201"
                name="Colditzer Teller"
                footnote="Porzellanwerk Lettin"
                image_path="01.png"
                data={[
                    {
                        header: "Zustand",
                        info: "Sehr gut",
                    },
                    {
                        header: "Durchmesser",
                        info: "14cm",
                    },
                    {
                        header: "Nutzungszyklen",
                        info: "unbekannt",
                    },
                    {
                        header: "Dekor",
                        info: "Himbeerrot, Gold",
                    },
                    {
                        header: "Produziert",
                        info: "um 1970 - 1990",
                    },
                    {
                        header: "Design",
                        info: "stapelbar, transparente Glasur, Veredlung mit Goldrand",
                    },
                    {
                        header: "Herstellung",
                        info: "Druckguss-Verfahren, Brände bei 900 - 1400 Grad Celcius, Feinschliff",
                    },
                    {
                        header: "Material",
                        info: "Hartporzellan (Kaolin, Feldspat und Quarz, wahrscheinlich abgebaut in Deutschland",
                    },
                    {
                        header: "Modellnummer",
                        info: "21",
                    },
                    {
                        header: "Herkunft",
                        info: "Lettin / Halle (Saale), Sachsen-Anhalt",
                    },
                ]}
                info={[
                    "Dieses Produkt wurde mit einem QR-Code auf der Unterseite versehen. Dieser gibt Auskunft über die Geschichte des Produkts, einzelne Herstellungs- und Nutzungsinformationen.",
                    "Es ist uns ein Anliegen, Porzellan im Kreislauf zu halten, weswegen wir Tafelgeschirr, welches nicht mehr genutzt wird, in unsere Manufaktur zurückführen und unter geringerem Energieverbrauch veredeln.",
                    "Vorteil für dich ist, dass du individuelles Geschirr zum kleinen Preis kaufen kannst und einem Produkt ein neues Leben schenkst. Sollte es dir doch nicht mehr gefallen, kannst du es an uns zurückgeben und wir kümmern uns, damit es schnellstmöglich ein neues Zuhause findet.",
                ]}
                history={[
                    {
                        date_start: "",
                        date_end: "2024",
                        info: "aufgekauft Halle (Saale), Sachsen-Anhalt",
                    },
                ]}
            />
        </>
    );
};

export default Product_1;
