import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Users, 
  Clock, 
  Video, 
  Target,
  ActivitySquare
} from "lucide-react";
import StatsCard from "./StatsCard";

const SystemMetrics = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="App Downloads"
          value="45,231"
          description="Total downloads across platforms"
          icon={Download}
          variant="primary"
          trend={{ value: 12.5, isPositive: true }}
        />
        
        <StatsCard
          title="User Retention"
          value="78.4%"
          description="30-day retention rate"
          icon={Users}
          variant="success"
          trend={{ value: 5.2, isPositive: true }}
        />
        
        <StatsCard
          title="System Uptime"
          value="99.8%"
          description="Last 30 days availability"
          icon={Clock}
          variant="default"
        />
        
        <StatsCard
          title="Videos Uploaded"
          value="8,945"
          description="Total performance videos"
          icon={Video}
          variant="warning"
          trend={{ value: 23.1, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Target className="h-5 w-5 text-primary" />
              Test Completion Rates
            </CardTitle>
            <CardDescription>Average completion rates by test type</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { test: "Physical Fitness", completion: 89, color: "text-success" },
              { test: "Skill Assessment", completion: 76, color: "text-primary" },
              { test: "Mental Agility", completion: 68, color: "text-warning" },
              { test: "Technical Skills", completion: 82, color: "text-secondary" },
              { test: "Endurance Test", completion: 91, color: "text-success" },
            ].map((item) => (
              <div key={item.test} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-foreground">{item.test}</span>
                  <span className={`text-sm font-bold ${item.color}`}>{item.completion}%</span>
                </div>
                <Progress value={item.completion} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <ActivitySquare className="h-5 w-5 text-primary" />
              Platform Engagement
            </CardTitle>
            <CardDescription>Key engagement metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg bg-background/50">
                <p className="text-2xl font-bold text-foreground">4.7</p>
                <p className="text-sm text-muted-foreground">Avg Session Time (hrs)</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-background/50">
                <p className="text-2xl font-bold text-foreground">2.3M</p>
                <p className="text-sm text-muted-foreground">Monthly Active Users</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Daily Active Users</span>
                <Badge variant="secondary">+15.2%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Test Submissions</span>
                <Badge variant="secondary">+8.7%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">Performance Reviews</span>
                <Badge variant="secondary">+12.1%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SystemMetrics;