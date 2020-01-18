const sendMail = async () => {
  await fetch('/.netlify/functions/sendMail', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      from: 'yourmusiclessons@gmail.com',
      text: 'Sup friend',
    }),
  });
};
