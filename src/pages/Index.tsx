import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-secondary/20">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-[url('/hero-farm.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto h-full flex flex-col justify-center items-start px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Fresh Farm-to-Table Lamb
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl">
              Premium quality lamb from our family farm, delivered fresh to your doorstep in Berlin.
              Choose your cut, customize your package, and enjoy the finest meat.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              onClick={() => navigate("/order")}
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1. Choose Your Cut",
                description: "Select from our variety of cutting options - Big, Medium, or Small cuts to suit your needs.",
              },
              {
                title: "2. Select Delivery Date",
                description: "Pick your preferred delivery date and we'll ensure your order is fresh and ready.",
              },
              {
                title: "3. Enjoy Fresh Lamb",
                description: "Receive your premium quality lamb, professionally cut and packaged to your specifications.",
              },
            ].map((step, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Farm Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                For generations, our family farm has been dedicated to raising the finest quality
                sheep with care and respect. We take pride in delivering fresh, premium lamb
                directly to your table.
              </p>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => navigate("/about")}
              >
                Learn More
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/farm-about.jpg"
                alt="Our Farm"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;