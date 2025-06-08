import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
	return (
		<section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32 overflow-hidden">
			<div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="text-center lg:text-left">
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
							Conecte sua{" "}
							<span className="text-primary bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								lavanderia
							</span>{" "}
							aos clientes
						</h1>

						<p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
							O aplicativo que revoluciona o mercado de lavanderias. Conecte empresários e clientes
							de forma simples, rápida e eficiente.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
								Cadastrar Lavanderia
							</Button>
							<Button size="lg" variant="outline" className="text-lg px-8 py-4">
								Sou Cliente
							</Button>
						</div>
					</div>

					<div className="relative">
						<div className="relative mx-auto w-72 h-96 lg:w-80 lg:h-[480px]">
							<div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl transform rotate-6"></div>
							<div className="absolute inset-0 bg-white rounded-3xl shadow-xl transform -rotate-6 flex items-center justify-center">
								<div className="p-8 text-center">
									<div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-6 flex items-center justify-center">
										<span className="text-2xl text-white">📱</span>
									</div>
									<h3 className="text-2xl font-bold mb-4 text-foreground">Laví</h3>
									<p className="text-muted-foreground mb-6">Seu negócio na palma da mão</p>
									<div className="space-y-2">
										<div className="h-2 bg-secondary rounded"></div>
										<div className="h-2 bg-secondary rounded w-3/4"></div>
										<div className="h-2 bg-secondary rounded w-1/2"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
				<ArrowDown className="text-muted-foreground" size={24} />
			</div>
		</section>
	);
};

export default Hero;
