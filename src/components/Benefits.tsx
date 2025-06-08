import { Card, CardContent } from "@/components/ui/card";

const Benefits = () => {
	const benefits = [
		{
			title: "Aumento de 300% na Visibilidade",
			description: "Lavanderias parceiras relatam aumento significativo no número de clientes",
			icon: "📈",
		},
		{
			title: "Gestão Simplificada",
			description: "Centralize todas as operações em uma única plataforma intuitiva",
			icon: "🎯",
		},
		{
			title: "Pagamentos Seguros",
			description: "Sistema de pagamento integrado com segurança bancária",
			icon: "🔒",
		},
		{
			title: "Suporte 24/7",
			description: "Nossa equipe está sempre disponível para ajudar você e seus clientes",
			icon: "🛠️",
		},
		{
			title: "Analytics Detalhados",
			description: "Relatórios completos para você entender e otimizar seu negócio",
			icon: "📊",
		},
		{
			title: "Marketing Automático",
			description: "Promovemos sua lavanderia automaticamente para clientes próximos",
			icon: "📢",
		},
	];

	return (
		<section id="benefits" className="py-20 bg-background">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-foreground mb-4">Por que Escolher a Laví?</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Mais que um aplicativo, somos seu parceiro para o crescimento do seu negócio
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{benefits.map((benefit, index) => (
						<Card
							key={index}
							className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-border"
						>
							<CardContent className="p-8 text-center">
								<div className="text-5xl mb-4">{benefit.icon}</div>
								<h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
								<p className="text-muted-foreground">{benefit.description}</p>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
					<h3 className="text-3xl font-bold mb-4">Pronto para Começar?</h3>
					<p className="text-xl mb-8 opacity-90">
						Junte-se a centenas de lavanderias que já transformaram seus negócios
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">
							Cadastrar Lavanderia Grátis
						</button>
						<button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-primary transition-colors">
							Baixar App Cliente
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Benefits;
