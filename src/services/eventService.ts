
export interface EventData {
  spots: number;
  price: number;
  lote: number;
}

export const fetchEventData = async (): Promise<EventData> => {
  try {
    // This is a placeholder URL - replace with your actual API endpoint
    const response = await fetch('https://mocki.io/v1/2574198f-7e16-4f00-bc81-10c4744dbb9d');
    
    if (!response.ok) {
      throw new Error('Failed to fetch event data');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching event data:', error);
    // Return default values if API fails
    return { spots: 40, price: 850, lote: 1 };
  }
}
