
import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { EventData } from '@/services/eventService';

interface PayPalButtonProps {
  name: string;
  email: string;
  phone: string;
  eventData: EventData | null;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ name, email, phone, eventData }) => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const initialOptions = {
    clientId: "test", // Replace with your PayPal client ID in production
    currency: "BRL",
    intent: "capture",
  };

  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: eventData?.price?.toString() || "850",
            currency_code: "BRL"
          },
          description: "Workshop em Orlando - 2 e 3 de maio de 2024"
        },
      ],
    });
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then(function (details: any) {
      console.log("Transaction completed by", details.payer.name.given_name);
      console.log("Customer details:", { name, email, phone });
      
      toast({
        title: "Pagamento realizado com sucesso!",
        description: `Obrigado ${name}! Você receberá um email com os detalhes do evento.`
      });
      
      // Redirect to home page after successful payment
      setTimeout(() => navigate('/'), 3000);
    });
  };

  const onError = (err: any) => {
    console.error("PayPal error:", err);
    toast({
      variant: "destructive",
      title: "Erro no pagamento",
      description: "Houve um problema ao processar seu pagamento. Tente novamente mais tarde."
    });
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay" }}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
