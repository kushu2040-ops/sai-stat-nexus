import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const performanceData = [
  { month: "Jan", athletes: 1200, performance: 82 },
  { month: "Feb", athletes: 1350, performance: 84 },
  { month: "Mar", athletes: 1480, performance: 86 },
  { month: "Apr", athletes: 1620, performance: 85 },
  { month: "May", athletes: 1780, performance: 87 },
  { month: "Jun", athletes: 1890, performance: 89 },
];

const sportData = [
  { sport: "Cricket", athletes: 3240, potential: 890 },
  { sport: "Football", athletes: 2150, potential: 645 },
  { sport: "Athletics", athletes: 2890, potential: 1120 },
  { sport: "Badminton", athletes: 1670, potential: 420 },
  { sport: "Hockey", athletes: 1540, potential: 380 },
  { sport: "Swimming", athletes: 1390, potential: 290 },
];

const PerformanceChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-foreground">Performance Trends</CardTitle>
          <CardDescription>Monthly athlete performance scores</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  color: "hsl(var(--foreground))"
                }}
              />
              <Line 
                type="monotone" 
                dataKey="performance" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-foreground">Athletes by Sport</CardTitle>
          <CardDescription>Distribution of registered athletes and potential talent</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sportData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                type="number"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                type="category"
                dataKey="sport" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                width={80}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  color: "hsl(var(--foreground))"
                }}
              />
              <Bar 
                dataKey="athletes" 
                fill="hsl(var(--primary))" 
                radius={[0, 4, 4, 0]}
                name="Total Athletes"
              />
              <Bar 
                dataKey="potential" 
                fill="hsl(var(--success))" 
                radius={[0, 4, 4, 0]}
                name="Potential Talent"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceChart;