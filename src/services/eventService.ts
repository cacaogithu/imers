
export interface EventData {
  spots: number;
  price: number;
  lote: number;
}

export const fetchEventData = async (): Promise<EventData> => {
  try {
    // Updated API endpoint (replace with your new endpoint)
    const response = await fetch('https://your-new-api-endpoint.com/GetSpotsLeft');
    
    // For testing, if the API is not available, we can just return mock data
    // You can remove this comment and the if(true) block once the API is working
    if (true) {
      console.log("Using mock data instead of API call");
      return { spots: 40, price: 800, lote: 1 };
    }
    
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

export const submitUserSubscription = async (userData: { name: string; email: string; phone: string }): Promise<boolean> => {
  try {
    // If you also need to update this endpoint, replace it with your new one
    const response = await fetch('https://li2rmsq4q8.execute-api.us-east-2.amazonaws.com/default/EventSubscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null); // Prevents errors if response is not JSON
      console.error('Failed to submit user subscription:', errorData || response.statusText);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error submitting user subscription:', error);
    return false;
  }
};
