
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tem dúvidas? Nossa equipe está pronta para ajudar você a começar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Envie sua Mensagem</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome
                    </label>
                    <Input id="name" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <Input id="subject" placeholder="Como podemos ajudar?" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Descreva sua dúvida ou sugestão..." 
                    rows={5}
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Enviar Mensagem
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">contato@lavanderiaapp.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">WhatsApp</h4>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Horário de Atendimento</h4>
                    <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-muted-foreground">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-3">💡 Dica</h4>
              <p className="text-muted-foreground text-sm">
                Para um atendimento mais rápido, inclua informações sobre sua lavanderia 
                como localização e tipo de serviços oferecidos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
