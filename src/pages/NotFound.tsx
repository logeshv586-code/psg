import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-6xl lg:text-8xl font-heading font-bold text-accent mb-4">
            404
          </h1>
          <h2 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
