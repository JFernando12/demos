
import QRCode from 'qrcode';

const generateQR = async () => {
  const text = 'https://fernandocastrejon.com';

  try {
    const qr = await QRCode.toString(text, {
      type: 'terminal',
      small: true
    });
    console.log(qr);

    // Save QR code to a file (optional)
    await QRCode.toFile('qr.png', text);
    console.log('QR code saved as qr.png');
  } catch (err) {
    console.error('Error generating QR code:', err);
  }
};

generateQR();
