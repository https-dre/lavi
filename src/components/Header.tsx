"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<h1 className="text-2xl font-bold text-primary">Laví</h1>
						</div>
					</div>

					<nav className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							<a
								href="#features"
								className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
							>
								Funcionalidades
							</a>
							<a
								href="#how-it-works"
								className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
							>
								Como Funciona
							</a>
							<a
								href="#benefits"
								className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
							>
								Benefícios
							</a>
							<a
								href="#contact"
								className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
							>
								Contato
							</a>
						</div>
					</nav>

					<div className="hidden md:block">
						<Button className="bg-primary hover:bg-primary/90">Baixar App</Button>
					</div>

					<div className="md:hidden">
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
						<a
							href="#features"
							className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
						>
							Funcionalidades
						</a>
						<a
							href="#how-it-works"
							className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
						>
							Como Funciona
						</a>
						<a
							href="#benefits"
							className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
						>
							Benefícios
						</a>
						<a
							href="#contact"
							className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
						>
							Contato
						</a>
						<div className="px-3 py-2">
							<Button className="w-full bg-primary hover:bg-primary/90">Baixar App</Button>
						</div>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
