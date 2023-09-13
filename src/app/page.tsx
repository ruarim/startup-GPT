import Header from "@/components/header";
import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex w-full h-screen flex-col justify-center items-center space-y-6 p-6   md:p-24">
        <Logo />
        <div className="flex flex-col items-center justify-center space-y-8">
          <p className="text-3xl md:text-5xl text-center">
            Bootstrap your next startup with the power of GPT
          </p>
          <div className="flex items-center justify-center space-x-4 text-xl md:text-2xl">
            <Button>
              <a href="">Learn More</a>
            </Button>
            <Button>
              <a href="/generate">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
