async function sendTelegramOrder(order) {
  const TOKEN = "8955218737:AAGBgWcUHAaepqGmCaHsnRJL4g1gBNi1zVk";
  const CHAT_ID = "-1003977383236";
  const text = `
📿 Нове замовлення
👤 Імʼя: ${order.name}
📞 Телефон: ${order.phone}
💬 Telegram: ${order.telegram}
📿 Намисто: ${order.necklace}
📏 Довжина: ${order.length} cm
💰 Ціна: ${order.price} грн
📝 Коментар:
${order.comment}
🕒 ${order.date}
`;

  const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(text)}`, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text
    })
  });

  if (response.type !== "opaque") {
    const result = await response.json();
    if (!result.ok) {
      throw new Error(result.description || "Telegram request failed");
    }
  }
}