import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Our idea emerged after discovering that some livestock owners prioritize profit over health by feeding animals unhealthy food to accelerate growth. Our mission is to provide high-quality, halal, and healthy lamb. We carefully select our livestock and raise them on natural pastures. Quality before profit.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">100% Halal</h2>
            <p className="text-gray-600 leading-relaxed">
              We ensure that all our processes strictly follow Halal guidelines, from raising to processing our lamb. Our commitment to Halal practices is unwavering and certified.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Eating from Nature</h2>
            <p className="text-gray-600 leading-relaxed">
              Our lambs graze on natural pastures, eating what nature intended. This natural diet ensures the highest quality meat and supports the well-being of our animals.
            </p>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Fresh from Farm to Table</h2>
            <p className="text-gray-600 leading-relaxed">
              We don't use coolers for storage. Our lamb goes directly from our farm to your table, ensuring maximum freshness and quality. This farm-to-table approach guarantees you're getting the freshest meat possible.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;