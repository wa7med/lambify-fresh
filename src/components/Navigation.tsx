import { Button } from "@/components/ui/button";
import { ShoppingCart, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthContext";

export const Navigation = () => {
  const { user, signOut, profile } = useAuth();

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-primary">
            Farm Fresh Lamb
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link to="/order" className="text-gray-700 hover:text-primary">
              Order
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary">
              About
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            {user ? (
              <>
                <Button variant="ghost" size="icon" onClick={() => signOut()}>
                  <LogOut className="h-5 w-5" />
                </Button>
                {profile?.role === 'admin' && (
                  <Link to="/admin">
                    <Button>Admin Dashboard</Button>
                  </Link>
                )}
              </>
            ) : (
              <Link to="/login">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            )}
            <Link to="/order">
              <Button className="bg-primary hover:bg-primary/90">
                Order Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};