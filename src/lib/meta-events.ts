export const sendMetaEvent = async (eventName: string, eventData?: Record<string, any>) => {
  try {
    // Get Facebook pixel cookies
    const fbp = document.cookie.split(';').find(c => c.trim().startsWith('_fbp='))?.split('=')[1];
    const fbc = document.cookie.split(';').find(c => c.trim().startsWith('_fbc='))?.split('=')[1];

    const payload = {
      event_name: eventName,
      event_source_url: window.location.href,
      user_data: {
        client_user_agent: navigator.userAgent,
        fbp: fbp || undefined,
        fbc: fbc || undefined
      },
      ...eventData
    };

    await fetch('/.netlify/functions/meta-events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    console.error('Error sending Meta event:', error);
  }
};
