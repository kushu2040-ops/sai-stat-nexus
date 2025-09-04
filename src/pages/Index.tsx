import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import RegionalInsights from "@/components/dashboard/RegionalInsights";
import SystemMetrics from "@/components/dashboard/SystemMetrics";
import ChartDashboard from "@/components/dashboard/ChartDashboard";
import Sidebar from "@/components/dashboard/Sidebar";
import StatsCard from "@/components/dashboard/StatsCard";
import { 
  Users, 
  Trophy, 
  Target, 
  TrendingUp,
  Video,
  Award,
  MapPin,
  Activity
} from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <div className="space-y-6">
            <DashboardHeader />
            
            {/* Main Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatsCard
                title="Total Athletes Registered"
                value="15,847"
                description="Active athletes on platform"
                icon={Users}
                variant="primary"
                trend={{ value: 12.3, isPositive: true }}
              />
              
              <StatsCard
                title="Athletes Identified"
                value="2,341"
                description="Potential talent identified"
                icon={Target}
                variant="success"
                trend={{ value: 8.7, isPositive: true }}
              />
              
              <StatsCard
                title="Top Performers"
                value="1,256"
                description="Above 90% performance score"
                icon={Trophy}
                variant="warning"
                trend={{ value: 15.2, isPositive: true }}
              />
              
              <StatsCard
                title="Videos Uploaded"
                value="8,945"
                description="Performance evaluation videos"
                icon={Video}
                variant="default"
                trend={{ value: 23.1, isPositive: true }}
              />
            </div>

            <PerformanceChart />
            <ChartDashboard />
            <RegionalInsights />
          </div>
        );
      
      case "performance":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Performance Analytics</h2>
            <PerformanceChart />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatsCard
                title="Average Score"
                value="87.3%"
                description="Across all tests"
                icon={TrendingUp}
                variant="success"
              />
              <StatsCard
                title="Test Completion"
                value="89.2%"
                description="Overall completion rate"
                icon={Activity}
                variant="primary"
              />
              <StatsCard
                title="Improvement Rate"
                value="92.1%"
                description="Athletes showing improvement"
                icon={Award}
                variant="warning"
              />
            </div>
          </div>
        );
      
      case "regional":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Regional Insights</h2>
            <RegionalInsights />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatsCard
                title="Top State"
                value="Maharashtra"
                description="Highest athlete performance"
                icon={Award}
                variant="success"
              />
              <StatsCard
                title="Regional Coverage"
                value="28 States"
                description="Active in all regions"
                icon={MapPin}
                variant="primary"
              />
            </div>
          </div>
        );
      
      case "system":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">System Performance</h2>
            <SystemMetrics />
          </div>
        );
      
      default:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h2>
            <p className="text-muted-foreground">This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
