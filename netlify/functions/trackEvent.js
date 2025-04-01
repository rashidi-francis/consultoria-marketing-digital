export async function handler(event) {
    const FACEBOOK_ACCESS_TOKEN = "EABtZALH4bDwABO8iZASEaDDyjJmtQzyj9mPOrlwQJOzZCMPu2qUpS6SUvpUiugAxxAWNxntMdXrtPENAmv6Baot1HdZAuMkQZBG6ncjlHgHOonXlntmtv0dowIH6fWlIH4OSCxuuKodjFOQ8dsA7VzFaMDfZCGnBCsqL2nN740nK7gEGZANrOHBslZARQTV6oo35IQZDZD"; // Substitua pelo token da API
    const PIXEL_ID = "1197819175381894"; // Substitua pelo ID do seu pixel
  
    const body = JSON.parse(event.body);
    
    const payload = {
      data: [
        {
          event_name: body.event_name || "PageView", 
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          user_data: {
            em: [body.email ? hashData(body.email) : ""], // Hashear e-mails para segurança
            ph: [body.phone ? hashData(body.phone) : ""], 
          },
        }
      ]
    };
  
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${FACEBOOK_ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
  
    return {
      statusCode: 200,
      body: JSON.stringify(await response.json()),
    };
  }
  
  function hashData(data) {
    return require("crypto").createHash("sha256").update(data).digest("hex");
  }
  