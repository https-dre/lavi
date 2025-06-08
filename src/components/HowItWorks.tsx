
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Cadastre seu Negócio",
      description: "Registre sua lavanderia no app com informações básicas, serviços oferecidos e localização.",
      image: "📝"
    },
    {
      number: "02", 
      title: "Receba Pedidos",
      description: "Clientes próximos encontram sua lavanderia e fazem pedidos diretamente pelo aplicativo.",
      image: "📱"
    },
    {
      number: "03",
      title: "Gerencie Tudo",
      description: "Use nossa plataforma para organizar agendas, controlar pedidos e se comunicar com clientes.",
      image: "⚙️"
    },
    {
      number: "04",
      title: "Cresça seu Negócio",
      description: "Aumente sua visibilidade, conquiste novos clientes e expanda sua operação.",
      image: "📈"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Em poucos passos simples, sua lavanderia estará conectada a milhares de clientes em potencial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border">
                <div className="text-6xl mb-4">{step.image}</div>
                <div className="text-sm font-bold text-primary mb-2">PASSO {step.number}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-primary"></div>
                  <div className="w-0 h-0 border-l-4 border-l-primary border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
