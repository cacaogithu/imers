
export interface EventData {
  spots: number;
  price: number;
  lote: number;
}

export const fetchEventData = async (): Promise<EventData> => {
  try {
    // Use the provided API endpoint
    const response = await fetch('https://ygfubkmflf.execute-api.us-east-2.amazonaws.com/default/GetSpotsLeft');
    
    if (!response.ok) {
      throw new Error('Failed to fetch event data');
    }
    
    const data = await response.json();
    
    // Validate received data
    if (data && typeof data.count === 'number' && typeof data.price === 'number') {
      // Map the API response to our EventData interface
      return { 
        spots: data.count, 
        price: data.price, 
        lote: 1  // Keeping lote as 1 since it's not in the API response
      };
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

// New function to submit user subscription after payment
export const submitUserSubscription = async (userData: { name: string; email: string; phone: string }): Promise<boolean> => {
  try {
    const response = await fetch('https://ti1yg0jvc2.execute-api.us-east-2.amazonaws.com/default/EventSubscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit user subscription');
    }
    
    return true;
  } catch (error) {
    console.error('Error submitting user subscription:', error);
    return false;
  }
}
