
export interface EventData {
  spots: number;
  price: number;
  lote: number;
}

export const fetchEventData = async (): Promise<EventData> => {
  try {
    // Use your actual API endpoint here
    const response = await fetch('https://api.example.com/event-details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}) // Empty request body as specified
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch event data');
    }
    
    const data = await response.json();
    
    // Validate received data
    if (data && typeof data.spots === 'number' && typeof data.price === 'number' && typeof data.lote === 'number') {
      return data;
    } else {
      console.warn('API returned invalid data format, using default values');
      return { spots: 40, price: 800, lote: 1 };
    }
  } catch (error) {
    console.error('Error fetching event data:', error);
    // Return default values if API fails: 40 spots and 800 reais
    return { spots: 40, price: 800, lote: 1 };
  }
}
