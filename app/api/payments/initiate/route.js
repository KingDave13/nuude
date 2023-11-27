import Cors from 'cors';
import initMiddleware from '@lib/init-middleware';

const cors = initMiddleware(
  Cors({
    methods: ['POST'],
    origin: 'http://localhost:3000',
  })
);

export default async function handler(req, res) {
  await cors(req, res);

  if (req.method === 'POST') {
    try {
      // Validate the payment data
      const { reference, email, amount } = req.body;
      if (!reference || !email || !amount) {
        return res.status(400).json({ error: 'Invalid payment data' });
      }

      // Perform additional validation and processing here
      // For simplicity, let's assume the payment is successful

      const paymentData = {
        reference,
        status: 'success',
      };

      // Send a response to the client
      res.status(200).json(paymentData);
    } catch (error) {
      console.error('Payment initiation failed:', error.message);
      res.status(500).json({ error: 'Payment initiation failed' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
