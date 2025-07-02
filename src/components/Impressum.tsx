import "../style/Impressum.css";

const Impressum = () => {
    return (
        <div className="impressum">
            <p id="impressum-header">Impressum</p>
            <div className="impressum-info">
                <p>Betreiber: Alice Haubold</p>
                <p>Kontakt: alice.haubold@burg-halle.de</p>
                <p>Anschrift: Neuwerk 7, 06108 Halle, Deutschland</p>
                <p>Website gehosted durch Vercel</p>
            </div>
        </div>
    );
};

export default Impressum;
