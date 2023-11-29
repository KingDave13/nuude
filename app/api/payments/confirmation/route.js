import axios from 'axios';

export async function POST(req, res) {
  console.log('Request Method:', req.method);
  if (req.method === 'POST') {
    await handlePost(req, res);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

async function handlePost(req, res) {
  const { reference } = req.body;

  try {
    // Make a request to Paystack's verify endpoint
    const response = await axios.post(`https://api.paystack.co/transaction/verify/${reference}`, null, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    });

    const data = response.data;

    console.log('Paystack Response:', data);
    // Check if payment was successful
    if (data.data.status === 'success') {
      // Save user information to the database
      // (You need to implement this based on your database setup)
      // Example: await saveUserData(data.data.customer);

      // Respond with success to the client
      res.json({ success: true });
    } else {
      // Respond with failure to the client
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Error during Paystack verification:', error);
    res.json({ success: false, error: 'Internal Server Error' });
  }
}
