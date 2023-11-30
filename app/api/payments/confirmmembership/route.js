import https from 'https';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email, amount } = req.body;

      const options = {
        hostname: 'api.paystack.co',
        port: 443,
        path: '/transaction/initialize',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      };

      const paystackReq = https.request(options, (paystackRes) => {
        let data = '';

        paystackRes.on('data', (chunk) => {
          data += chunk;
        });

        paystackRes.on('end', () => {
          const responseData = JSON.parse(data);

          if (responseData.status && responseData.data && responseData.data.authorization_url) {
            res.status(200).json({ authorization_url: responseData.data.authorization_url });
          } else {
            res.status(500).json({ error: 'Unable to retrieve Paystack authorization URL' });
          }
        });
      });

      paystackReq.on('error', (error) => {
        console.error(error);
        res.status(500).json({ error: 'Error during Paystack API call' });
      });

      const requestData = JSON.stringify({
        email,
        amount,
      });

      paystackReq.write(requestData);
      paystackReq.end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
