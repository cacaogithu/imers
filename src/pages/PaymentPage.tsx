
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEvent } from '../contexts/EventContext';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Telefone inválido" })
});

type FormValues = z.infer<typeof formSchema>;

const PaymentPage = () => {
  const { eventData, loading } = useEvent();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

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
      // Here you would call your API to process the payment
      // For now, we'll just simulate a successful payment
      console.log('Payment data:', values);
      
      // Redirect to payment gateway
      window.open('https://link.fastpaydirect.com/payment-link/67ec4d2b717876ad43a44e8f', '_blank');
      
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Você será redirecionado para a página de pagamento."
      });
      
      // Optional: Navigate back to home after a delay
      setTimeout(() => navigate('/'), 3000);
    } catch (error) {
      console.error('Payment error:', error);
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
              <p className="text-sm text-gray-500 line-through">R${eventData?.price + 100}</p>
              <p className="text-xl font-bold text-purple-700">R${eventData?.price}</p>
            </div>
          </div>
        </div>
        
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
        
        <p className="text-xs text-center text-gray-500 mt-4">
          Suas informações são seguras e não serão compartilhadas.
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;
