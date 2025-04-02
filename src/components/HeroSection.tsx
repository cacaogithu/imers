
import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { EventData } from '@/services/eventService';

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome é obrigatório" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Telefone inválido" })
});

type FormValues = z.infer<typeof formSchema>;

interface HeroSectionProps {
  eventData: EventData | null;
}

const HeroSection: React.FC<HeroSectionProps> = ({ eventData }) => {
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

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Você será redirecionado para completar sua inscrição."
    });
    navigate('/payment');
  };

  const handleButtonClick = () => {
    navigate('/payment');
  };

  return (
    <div className="hero-gradient min-h-[90vh] px-4 md:px-6 pt-20 pb-16 flex flex-col justify-center">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-4">
              2 e 3 de maio • Orlando, FL
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Transforme</span> seu negócio com IA e estratégias digitais
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
              Workshop exclusivo para empreendedores brasileiros em Orlando que desejam acelerar seus negócios com aplicações práticas de IA e transformação digital.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full font-semibold px-8 py-6"
                onClick={handleButtonClick}
              >
                Garantir minha vaga
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full font-semibold border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conhecer mais
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <div className="flex items-center gap-2 text-gray-600">
                <CalendarDays className="h-5 w-5 text-purple-600" />
                <span>2 e 3 de maio de 2024</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-5 w-5 text-purple-600" />
                <span>Orlando, Flórida</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Garanta sua vaga agora:</h3>
            <p className="text-gray-500 mb-6">
              Apenas {eventData?.spots || 40} vagas disponíveis para este evento exclusivo.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
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
                      <FormControl>
                        <Input type="email" placeholder="Seu melhor e-mail" {...field} />
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
                      <FormControl>
                        <Input placeholder="Seu WhatsApp" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-lg font-semibold py-4">
                  Quero participar
                </Button>
              </form>
            </Form>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              Suas informações são seguras e não serão compartilhadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
