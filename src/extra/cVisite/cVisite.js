import {useState} from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ('./cVisite.css');

function CVisite(){
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const correctPassword = process.env.REACT_APP_PASSWORD;

        if (password === correctPassword) {
            setIsAuthenticated(true);
        }else{
            alert('Mot de passe incorrect');
        }
    };
    const generatePDF = () => {
        const confirmed = window.confirm('Voulez-vous vraiment télécharger le .pdf ?');
        if(!confirmed){
            return;
        }
        const pdfButton = document.getElementById('pdfButton');
        const parentNode = pdfButton.parentNode;
        parentNode.removeChild(pdfButton)

        const input = document.getElementById('cVisite-content');
        html2canvas(input).then((canvas)=>{
            const imgData = canvas.toDataURL('imag/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();

            const cVisiteWhidthInPdf = 252;
            const cVisiteHeightInPdf = 144;
            const x = (width - cVisiteWhidthInPdf) / 2;
            const y = (height - cVisiteHeightInPdf) / 2;

            pdf.addImage(imgData, 'PNG', x, y, cVisiteWhidthInPdf, cVisiteHeightInPdf);

            parentNode.insertBefore(pdfButton, null);

            pdf.save('cVisite.pdf');
        })
        .catch((error)=> {
            console.error('Erreur lors de la génération du document');
            parentNode.insertBefore(pdfButton, null);
        });
    }
    return (
        <div className="App">
            {isAuthenticated ? (
                <main className="cVisite" id='cVisite-content'>
                    <div className="fVisite">
                    <h2 className="qrTi mb-3">Ma carte de visite</h2>
                        <div className="fCarte">
                        <img src={`${process.env.PUBLIC_URL}/img/5.png`} alt='carte-visite'></img>
                        </div>
                        <button className="qrPdf mt-3" id="pdf-button" onClick={generatePDF}>
                        <i className="fa-solid fa-file-pdf ms-1"></i>
                        Générer un PDF</button>
                    </div>    
                </main>
            ):(
                <main className="champs">
                    <section className="connect">
                        <header>
                            <h2 className="mb-5">Bienvenue</h2>
                        </header>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input type="password" id='password' placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary my-3">Valider</button>
                        </form>
                    </section>
                </main>
            )}
        </div>
    )
}
export default CVisite;