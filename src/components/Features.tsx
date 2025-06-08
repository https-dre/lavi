
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Clock, CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Gestão de Clientes",
      description: "Cadastre e gerencie todos os seus clientes em um só lugar. Histórico completo de pedidos e preferências."
    },
    {
      icon: Clock,
      title: "Agendamento Inteligente",
      description: "Sistema de agendamento automático que otimiza sua agenda e reduz tempos de espera."
    },
    {
      icon: CheckCircle,
      title: "Controle de Pedidos",
      description: "Acompanhe todos os pedidos em tempo real, desde a coleta até a entrega final."
    }
  ];

  const clientFeatures = [
    {
      title: "Encontre Lavanderias Próximas",
      description: "Localize rapidamente lavanderias na sua região com avaliações e preços."
    },
    {
      title: "Agende Serviços",
      description: "Agende coleta e entrega diretamente pelo app, no horário que for melhor para você."
    },
    {
      title: "Acompanhe seu Pedido",
      description: "Receba notificações em tempo real sobre o status do seu pedido."
    },
    {
      title: "Avalie e Comente",
      description: "Compartilhe sua experiência e ajude outros usuários a escolherem o melhor serviço."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Funcionalidades Poderosas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvido pensando nas necessidades reais de empresários e clientes do setor de lavanderias
          </p>
        </div>

        {/* Para Empresários */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Para Empresários
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Para Clientes */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Para Clientes
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
