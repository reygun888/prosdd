import { useState } from 'react';
import QRCode from 'qrcode.react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import ('./qr.css');


function Qr() {
    const [qrValue, setQrValue] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const correctPassword = process.env.REACT_APP_PASSWORD;

        if (password === correctPassword) {
            setIsAuthenticated(true);
        } else {
            alert('Mot de passe incorrect');
        }
    };

    const generatePDF = () => {
        const confirmed = window.confirm('Voulez-vous vraiment générer le PDF ?');
        if (!confirmed) {
            return;
        }
        // Sélectionner le bouton de génération du PDF et le supprimer du DOM
        const pdfButton = document.getElementById('pdf-button');
        const parentNode = pdfButton.parentNode;
        parentNode.removeChild(pdfButton);

        const qrCodeDiv = document.getElementById('qr-content');
       
        html2canvas(qrCodeDiv, {
            scale: 2 // définir la valeur de scale en fonction de la taille souhaitée pour l'image
          }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();
          
            // Définir la largeur et la hauteur du QR code dans le PDF en fonction de la taille de l'élément .qrCode
            const qrCodeWidthInPdf = 50;
            const qrCodeHeightInPdf = 50;
            const x = (width - qrCodeWidthInPdf) / 2;
            const y = (height - qrCodeHeightInPdf) / 2;
          
            pdf.addImage(imgData, 'PNG', x, y, qrCodeWidthInPdf, qrCodeHeightInPdf);

            // Réinsérer le bouton de génération du PDF dans le DOM
            parentNode.insertBefore(pdfButton, null);

            pdf.save('qr.pdf');
        })
            .catch((error) => {
                console.error('Erreur lors de la génération du fichier');
                // Réinsérer le bouton de génération du PDF dans le DOM en cas d'erreur
                parentNode.insertBefore(pdfButton, null);
            });
    };
    return (
        <div className='App'>
            {isAuthenticated ? (
                <main className='qr'>
                    <section className='qrGen'>
                        <h2 className='qrTi mb-5'>Générer mon QRCode</h2>
                        <div className='qrl'>
                            <h3 className='qrLi'>Entrer le lien</h3>
                            <input type='text' className='qrValue' value={qrValue} onChange={event => setQrValue(event.target.value)} />
                        </div>
                        <div className='qrCode my-5' id='qr-content'>
                            {qrValue && <QRCode value={qrValue} size={200} fgColor="#000000" bgColor="#ffffff" level="Q" />}
                        </div>
                        <button className='qrPdf' id="pdf-button" onClick={generatePDF}>
                            <i className="fa-solid fa-file-pdf ms-1"></i>
                            Générer un PDF
                        </button>
                    </section>
                </main>
            ) : (
                <main className="champs">
                    <section className='connect'>
                        <header>
                            <h2 className='mb-5'>Bienvenue</h2>
                        </header>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input type='password' id='password' placeholder='Mot de passe' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type='submit' className='btn btn-primary my-3'>Valider</button>
                        </form>
                    </section>
                </main>
            )}
        </div>
    )
}

export default Qr;
