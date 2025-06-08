const Footer = () => {
	return (
		<footer className="bg-primary text-primary-foreground py-12">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-4 gap-8">
					<div className="md:col-span-2">
						<h3 className="text-2xl font-bold mb-4">Laví</h3>
						<p className="text-primary-foreground/80 mb-6 max-w-md">
							Conectando lavanderias e clientes em todo o Brasil. Revolucionamos o mercado com
							tecnologia e inovação.
						</p>
						<div className="flex space-x-4">
							<div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer">
								<span>📘</span>
							</div>
							<div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer">
								<span>📷</span>
							</div>
							<div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors cursor-pointer">
								<span>🐦</span>
							</div>
						</div>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Links Rápidos</h4>
						<ul className="space-y-2 text-primary-foreground/80">
							<li>
								<a href="#features" className="hover:text-primary-foreground transition-colors">
									Funcionalidades
								</a>
							</li>
							<li>
								<a href="#how-it-works" className="hover:text-primary-foreground transition-colors">
									Como Funciona
								</a>
							</li>
							<li>
								<a href="#benefits" className="hover:text-primary-foreground transition-colors">
									Benefícios
								</a>
							</li>
							<li>
								<a href="#contact" className="hover:text-primary-foreground transition-colors">
									Contato
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-semibold mb-4">Suporte</h4>
						<ul className="space-y-2 text-primary-foreground/80">
							<li>
								<a href="#" className="hover:text-primary-foreground transition-colors">
									Central de Ajuda
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary-foreground transition-colors">
									Termos de Uso
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary-foreground transition-colors">
									Política de Privacidade
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-primary-foreground transition-colors">
									FAQ
								</a>
							</li>
						</ul>
					</div>
				</div>

				<hr className="border-primary-foreground/20 my-8" />

				<div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/80">
					<p>&copy; 2024 Laví. Todos os direitos reservados.</p>
					<p className="mt-2 md:mt-0">Desenvolvido com ❤️ para lavanderias brasileiras</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
