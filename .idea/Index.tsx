import { useEffect } from "react";

const Index = () => {
        useEffect(() => {
                window.location.href = "/index.html";
        }, []);

        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                    <div className="text-center">
                            <h1 className="text-2xl font-semibold mb-4">Redirecionando...</h1>
                            <p className="text-muted-foreground">
                                    Se não foi redirecionado automaticamente,
                                    <a href="/index.html" className="text-primary hover:underline ml-1">
                                            clique aqui
                                    </a>
                            </p>
                    </div>
            </div>
        );
};

export default Index;
