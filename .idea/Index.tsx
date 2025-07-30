import Header from "@/components/Header";
import Hero from "@/compronents/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <Hero />
            <Services />
            <Contact />
            <Footer />
const Index = () => {
    //Redireciona para a página HTML estática
    window.location.href = '/index.html';

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
                <h1 className="text-2x1 font-semibold mb-4">Redirecionando...</h1>
                <p className="text-muted-foreground">
                    Se nãofoi redirecionado automaticamente,
                    <a href="/index.html" className="text-primary hover:underline ml-1">
                        clique aqui
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Index;