
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import PayPalButton from '@/components/PayPalButton';
import { EventData, fetchEventData } from '@/services/eventService';

const formSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Telefone inválido" })
});

type FormValues = z.infer<typeof formSchema>;

const PaymentPage = () => {
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);
  const [formData, setFormData] = useState<FormValues | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchEventData();
        setEventData(data);
        console.log("Event data fetched in payment page:", data);
      } catch (err) {
        console.error("Error fetching event data:", err);
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Falha ao carregar informações do evento."
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toast]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: ''
    }
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Save form data and show PayPal button
      setFormData(values);
      setShowPayPal(true);
      toast({
        title: "Informações recebidas",
        description: "Por favor, complete o pagamento abaixo."
      });
    } catch (error) {
      console.error('Form error:', error);
      toast({
        variant: "destructive",
        title: "Erro no envio",
        description: "Houve um problema ao processar sua solicitação. Tente novamente mais tarde."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto max-w-md bg-white rounded-xl shadow-md p-6 md:p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Garanta sua vaga</h1>
        
        <div className="bg-purple-50 p-4 rounded-lg mb-6">
          <div className="text-center mb-4">
            <p className="text-lg font-semibold">Workshop em Orlando</p>
            <p className="text-sm text-gray-600">2 e 3 de maio de 2024</p>
          </div>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Lote {eventData?.lote}</p>
              <p className="text-sm text-gray-600">Vagas disponíveis: {eventData?.spots}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 line-through">R${eventData?.price ? eventData.price + 100 : 950}</p>
              <p className="text-xl font-bold text-purple-700">R${eventData?.price || 850}</p>
            </div>
          </div>
        </div>
        
        {!showPayPal ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp</FormLabel>
                    <FormControl>
                      <Input placeholder="+X (XXX) XXX-XXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processando...' : 'Prosseguir para pagamento'}
              </Button>
            </form>
          </Form>
        ) : (
          <div className="space-y-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium mb-2">Suas informações:</h3>
              <p className="text-sm"><span className="font-medium">Nome:</span> {formData?.name}</p>
              <p className="text-sm"><span className="font-medium">Email:</span> {formData?.email}</p>
              <p className="text-sm"><span className="font-medium">WhatsApp:</span> {formData?.phone}</p>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Selecione um método de pagamento:</h3>
              {formData && <PayPalButton name={formData.name} email={formData.email} phone={formData.phone} eventData={eventData} />}
            </div>
            
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={() => setShowPayPal(false)}
            >
              Voltar e editar informações
            </Button>
          </div>
        )}
        
        <p className="text-xs text-center text-gray-500 mt-4">
          Suas informações são seguras e não serão compartilhadas.
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;
