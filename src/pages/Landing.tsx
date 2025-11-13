import { useNavigate } from "react-router-dom";
import { ShieldCheck, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Landing() {
  const navigate = useNavigate();

  const handleSelection = (role: 'collaborator' | 'admin') => {
    // Pass the role as a query parameter to the auth page
    navigate(`/auth?role=${role}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Bem-vindo ao Engajamento+
          </h1>
          <p className="text-muted-foreground text-lg">
            Selecione seu perfil para acessar a plataforma
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Collaborator Option */}
          <Card 
            className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-brand-primary/50"
            onClick={() => handleSelection('collaborator')}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors mb-4">
                <Users className="h-8 w-8 text-brand-primary" />
              </div>
              <CardTitle className="text-2xl">Colaborador</CardTitle>
              <CardDescription>
                Acesse pesquisas, loja de recompensas e indique colegas.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 group-hover:scale-105 transition-transform">
                Entrar como Colaborador
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Admin Option */}
          <Card 
            className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-slate-600/50"
            onClick={() => handleSelection('admin')}
          >
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-200 transition-colors mb-4 dark:bg-slate-800 dark:group-hover:bg-slate-700">
                <ShieldCheck className="h-8 w-8 text-slate-700 dark:text-slate-200" />
              </div>
              <CardTitle className="text-2xl">Administrador</CardTitle>
              <CardDescription>
                Gerencie usuários, aprove solicitações e configure o sistema.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="secondary" className="w-full group-hover:scale-105 transition-transform">
                Entrar como Admin
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
