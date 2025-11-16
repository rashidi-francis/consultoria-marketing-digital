export default async (req, context) => {
  try {
    const body = await req.json();
    const { event_name, event_source_url, user_data } = body;

    const payload = {
      data: [
        {
          event_name: event_name,
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url,
          user_data: {
            client_user_agent: user_data?.client_user_agent || "",
            fbp: user_data?.fbp || undefined,
            fbc: user_data?.fbc || undefined
          }
        }
      ]
    };

    const pixelId = process.env.PIXEL_ID;
    const token = process.env.META_ACCESS_TOKEN;

    const url = `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${token}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    console.log("Meta API Response:", result);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    console.error("Meta API Error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500
    });
  }
};
