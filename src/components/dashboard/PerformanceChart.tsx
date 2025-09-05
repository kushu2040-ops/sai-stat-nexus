import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from "recharts";

const performanceData = [
  { month: "Jan", athletes: 1200, performance: 82 },
  { month: "Feb", athletes: 1350, performance: 84 },
  { month: "Mar", athletes: 1480, performance: 86 },
  { month: "Apr", athletes: 1620, performance: 85 },
  { month: "May", athletes: 1780, performance: 87 },
  { month: "Jun", athletes: 1890, performance: 89 },
];

const sportData = [
  { sport: "Football/Soccer", athletes: 3240, potential: 890 },
  { sport: "Cricket", athletes: 2890, potential: 820 },
  { sport: "Athletics", athletes: 2650, potential: 750 },
  { sport: "Basketball", athletes: 2150, potential: 645 },
  { sport: "Swimming", athletes: 1890, potential: 520 },
  { sport: "Hockey", athletes: 1540, potential: 380 },
  { sport: "Volleyball", athletes: 1420, potential: 340 },
  { sport: "Boxing", athletes: 1320, potential: 290 },
  { sport: "Wrestling", athletes: 1180, potential: 260 },
  { sport: "Judo", athletes: 980, potential: 220 },
  { sport: "Baseball", athletes: 850, potential: 190 },
  { sport: "Rugby", athletes: 720, potential: 160 },
  { sport: "Karate", athletes: 680, potential: 150 },
  { sport: "Handball", athletes: 620, potential: 140 },
  { sport: "Kickboxing", athletes: 580, potential: 130 },
  { sport: "Diving", athletes: 450, potential: 100 },
  { sport: "Softball", athletes: 420, potential: 95 },
];

const pieChartData = [
  { name: "Football/Soccer", value: 3240, color: "hsl(var(--primary))" },
  { name: "Cricket", value: 2890, color: "hsl(var(--success))" },
  { name: "Athletics", value: 2650, color: "hsl(var(--warning))" },
  { name: "Basketball", value: 2150, color: "hsl(var(--secondary))" },
  { name: "Swimming", value: 1890, color: "hsl(var(--accent))" },
  { name: "Hockey", value: 1540, color: "hsl(var(--chart-1))" },
  { name: "Volleyball", value: 1420, color: "hsl(var(--chart-2))" },
  { name: "Boxing", value: 1320, color: "hsl(var(--chart-3))" },
  { name: "Wrestling", value: 1180, color: "hsl(var(--chart-4))" },
  { name: "Others", value: 4270, color: "hsl(var(--muted))" },
];

const areaChartData = [
  { month: "Jan", identified: 180, recruited: 45, trained: 32 },
  { month: "Feb", identified: 220, recruited: 58, trained: 41 },
  { month: "Mar", identified: 265, recruited: 72, trained: 55 },
  { month: "Apr", identified: 310, recruited: 85, trained: 68 },
  { month: "May", identified: 355, recruited: 98, trained: 79 },
  { month: "Jun", identified: 420, recruited: 125, trained: 95 },
];

const PerformanceChart = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="shadow-card bg-gradient-card lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-foreground">Performance Trends</CardTitle>
          <CardDescription>Monthly athlete performance scores and total athletes</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                yAxisId="left"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
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
                yAxisId="left"
                type="monotone" 
                dataKey="performance" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
                name="Performance %"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="athletes" 
                stroke="hsl(var(--success))" 
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "hsl(var(--success))", strokeWidth: 2, r: 3 }}
                name="Total Athletes"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-foreground">Sport Distribution</CardTitle>
          <CardDescription>Athletes by sport category</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  color: "hsl(var(--foreground))"
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card bg-gradient-card lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-foreground">Talent Pipeline</CardTitle>
          <CardDescription>Athletes identified, recruited, and trained over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={areaChartData}>
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
              <Area 
                type="monotone" 
                dataKey="identified" 
                stackId="1"
                stroke="hsl(var(--primary))" 
                fill="hsl(var(--primary))"
                fillOpacity={0.8}
              />
              <Area 
                type="monotone" 
                dataKey="recruited" 
                stackId="1"
                stroke="hsl(var(--success))" 
                fill="hsl(var(--success))"
                fillOpacity={0.8}
              />
              <Area 
                type="monotone" 
                dataKey="trained" 
                stackId="1"
                stroke="hsl(var(--warning))" 
                fill="hsl(var(--warning))"
                fillOpacity={0.8}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-foreground">Sport Performance</CardTitle>
          <CardDescription>Athletes vs potential by sport</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sportData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="sport" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={10}
                angle={-45}
                textAnchor="end"
                height={80}
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
              <Bar 
                dataKey="athletes" 
                fill="hsl(var(--primary))" 
                radius={[4, 4, 0, 0]}
                name="Total Athletes"
              />
              <Bar 
                dataKey="potential" 
                fill="hsl(var(--success))" 
                radius={[4, 4, 0, 0]}
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