"use strict";

function sendTelegramOrder(order) {
  var TOKEN, CHAT_ID, text, response, result;
  return regeneratorRuntime.async(function sendTelegramOrder$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          TOKEN = "8955218737:AAGBgWcUHAaepqGmCaHsnRJL4g1gBNi1zVk";
          CHAT_ID = "-1003977383236";
          text = "\n\uD83D\uDCFF New order\n\uD83D\uDC64 Name: ".concat(order.name, "\n\uD83D\uDCDE Phone: ").concat(order.phone, "\n\uD83D\uDCAC Telegram: ").concat(order.telegram, "\n\uD83D\uDCFF Necklace: ").concat(order.necklace, "\n\uD83D\uDCCF Length: ").concat(order.length, " cm\n\uD83D\uDCB0 Price: ").concat(order.price, " \u0433\u0440\u043D\n\uD83D\uDCDD Comment:\n").concat(order.comment, "\n\uD83D\uDD52 ").concat(order.date, "\n");
          _context.next = 5;
          return regeneratorRuntime.awrap(fetch("https://api.telegram.org/bot".concat(TOKEN, "/sendMessage?chat_id=").concat(CHAT_ID, "&text=").concat(encodeURIComponent(text)), {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              chat_id: CHAT_ID,
              text: text
            })
          }));

        case 5:
          response = _context.sent;

          if (!(response.type !== "opaque")) {
            _context.next = 12;
            break;
          }

          _context.next = 9;
          return regeneratorRuntime.awrap(response.json());

        case 9:
          result = _context.sent;

          if (result.ok) {
            _context.next = 12;
            break;
          }

          throw new Error(result.description || "Telegram request failed");

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}