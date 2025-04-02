
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { EventData, fetchEventData } from '../services/eventService';
import { useToast } from "@/hooks/use-toast";

interface EventContextType {
  eventData: EventData | null;
  loading: boolean;
  error: string | null;
  refreshEventData: () => Promise<void>;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchEventData();
      setEventData(data);
    } catch (err) {
      setError('Failed to load event information');
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load event information."
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refreshEventData = async () => {
    await fetchData();
  };

  return (
    <EventContext.Provider value={{ eventData, loading, error, refreshEventData }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = (): EventContextType => {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEvent must be used within an EventProvider');
  }
  return context;
};
