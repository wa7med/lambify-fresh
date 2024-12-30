import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Order = () => {
  const [cutType, setCutType] = useState<string>("");
  const [boxCount, setBoxCount] = useState<string>("1");

  return (
    <div className="min-h-screen bg-secondary/20 pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Order Fresh Lamb</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Customize Your Order</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Select Cut Type
                </label>
                <Select value={cutType} onValueChange={setCutType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose cut size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="big">Big Cuts</SelectItem>
                    <SelectItem value="medium">Medium Cuts</SelectItem>
                    <SelectItem value="small">Small Cuts</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Number of Boxes
                </label>
                <Select value={boxCount} onValueChange={setBoxCount}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select box count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Box</SelectItem>
                    <SelectItem value="2">2 Boxes (+2.5€)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full">Continue to Delivery Details</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Cut Type:</span>
                <span className="font-medium">
                  {cutType ? cutType.charAt(0).toUpperCase() + cutType.slice(1) : "-"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Box Count:</span>
                <span className="font-medium">{boxCount}</span>
              </div>
              {boxCount === "2" && (
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Extra Box Fee:</span>
                  <span>2.50 €</span>
                </div>
              )}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>{boxCount === "2" ? "Calculate total + 2.50 €" : "Calculate total"}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Order;