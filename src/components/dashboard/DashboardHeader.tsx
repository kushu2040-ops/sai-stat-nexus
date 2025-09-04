import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, TrendingUp } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-hero p-8 text-primary-foreground">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary-foreground/20 rounded-lg">
              <Trophy className="h-6 w-6" />
            </div>
            <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
              Sports Authority of India
            </Badge>
          </div>
          <h1 className="text-3xl font-bold mb-2">Athlete Performance Dashboard</h1>
          <p className="text-primary-foreground/80 max-w-2xl">
            Comprehensive analytics and insights for tracking athlete performance, 
            talent identification, and regional sports development across India.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground to-transparent rounded-full transform rotate-45"></div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <Card className="p-6 bg-gradient-card shadow-card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Athletes</p>
              <p className="text-2xl font-bold text-foreground">15,847</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="p-3 bg-success/10 rounded-lg">
              <TrendingUp className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg Performance</p>
              <p className="text-2xl font-bold text-foreground">87.3%</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="p-3 bg-warning/10 rounded-lg">
              <Trophy className="h-6 w-6 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Talent Identified</p>
              <p className="text-2xl font-bold text-foreground">2,341</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DashboardHeader;