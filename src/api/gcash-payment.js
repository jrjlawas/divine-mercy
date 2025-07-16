export async function createGcashSource(amount) {
  const secretKey = import.meta.env.VITE_PAYMONGO_SECRET_KEY;
  const encodedKey = btoa(`${secretKey}:`);
  console.log(secretKey);
  const response = await fetch('https://api.paymongo.com/v1/merchants/capabilities/payment_methods', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${encodedKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: {
        attributes: {
          amount: amount * 100, // PHP to centavos
          redirect: {
            success: 'https://developers.paymongo.com/',
            failed: 'https://developers.paymongo.com/',
          },
          type: 'gcash',
          currency: 'PHP',
        },
      },
    }),
  });

  return await response.json();
}
