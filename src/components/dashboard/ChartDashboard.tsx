import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  ScatterChart,
  Scatter,
  ComposedChart,
  Bar
} from "recharts";

const monthlyGrowthData = [
  { month: "Jan", newAthletes: 120, totalAthletes: 1200, retention: 78, engagement: 85 },
  { month: "Feb", newAthletes: 180, totalAthletes: 1380, retention: 82, engagement: 87 },
  { month: "Mar", newAthletes: 220, totalAthletes: 1600, retention: 85, engagement: 89 },
  { month: "Apr", newAthletes: 195, totalAthletes: 1795, retention: 84, engagement: 91 },
  { month: "May", newAthletes: 240, totalAthletes: 2035, retention: 87, engagement: 93 },
  { month: "Jun", newAthletes: 280, totalAthletes: 2315, retention: 89, engagement: 95 },
];

const performanceCorrelationData = [
  { training: 20, performance: 65, age: 18, sport: "Cricket" },
  { training: 35, performance: 78, age: 22, sport: "Football" },
  { training: 45, performance: 85, age: 19, sport: "Athletics" },
  { training: 25, performance: 70, age: 21, sport: "Badminton" },
  { training: 50, performance: 92, age: 24, sport: "Hockey" },
  { training: 30, performance: 75, age: 20, sport: "Swimming" },
  { training: 40, performance: 88, age: 23, sport: "Wrestling" },
  { training: 55, performance: 95, age: 25, sport: "Boxing" },
];

const talentPipelineData = [
  { stage: "Identified", week1: 45, week2: 52, week3: 48, week4: 61 },
  { stage: "Screened", week1: 38, week2: 44, week3: 41, week4: 53 },
  { stage: "Selected", week1: 25, week2: 30, week3: 28, week4: 35 },
  { stage: "Training", week1: 18, week2: 22, week3: 20, week4: 28 },
  { stage: "Certified", week1: 12, week2: 15, week3: 14, week4: 20 },
];

const ChartDashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="shadow-card bg-gradient-card lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-foreground">Athlete Growth & Engagement</CardTitle>
          <CardDescription>Monthly trends in athlete acquisition and platform engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={monthlyGrowthData}>
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
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="totalAthletes"
                fill="hsl(var(--primary))"
                fillOpacity={0.3}
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                name="Total Athletes"
              />
              <Bar
                yAxisId="left"
                dataKey="newAthletes"
                fill="hsl(var(--success))"
                name="New Athletes"
                radius={[4, 4, 0, 0]}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="retention"
                stroke="hsl(var(--warning))"
                strokeWidth={3}
                dot={{ fill: "hsl(var(--warning))", strokeWidth: 2, r: 4 }}
                name="Retention %"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="engagement"
                stroke="hsl(var(--secondary))"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "hsl(var(--secondary))", strokeWidth: 2, r: 3 }}
                name="Engagement %"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-foreground">Training vs Performance</CardTitle>
          <CardDescription>Correlation between training hours and performance scores</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart data={performanceCorrelationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                type="number"
                dataKey="training" 
                name="Training Hours"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                type="number"
                dataKey="performance" 
                name="Performance Score"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  color: "hsl(var(--foreground))"
                }}
                formatter={(value, name) => [
                  name === 'training' ? `${value} hours` : `${value}%`,
                  name === 'training' ? 'Training Hours' : 'Performance Score'
                ]}
                labelFormatter={(label) => `Sport: ${performanceCorrelationData[label]?.sport || 'Unknown'}`}
              />
              <Scatter 
                name="Athletes" 
                dataKey="performance" 
                fill="hsl(var(--primary))"
                strokeWidth={2}
                stroke="hsl(var(--primary))"
              />
            </ScatterChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="text-foreground">Talent Pipeline Flow</CardTitle>
          <CardDescription>Weekly progression through talent identification stages</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={talentPipelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="stage" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={11}
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
              <Area 
                type="monotone" 
                dataKey="week1" 
                stackId="1"
                stroke="hsl(var(--primary))" 
                fill="hsl(var(--primary))"
                fillOpacity={0.8}
                name="Week 1"
              />
              <Area 
                type="monotone" 
                dataKey="week2" 
                stackId="1"
                stroke="hsl(var(--success))" 
                fill="hsl(var(--success))"
                fillOpacity={0.8}
                name="Week 2"
              />
              <Area 
                type="monotone" 
                dataKey="week3" 
                stackId="1"
                stroke="hsl(var(--warning))" 
                fill="hsl(var(--warning))"
                fillOpacity={0.8}
                name="Week 3"
              />
              <Area 
                type="monotone" 
                dataKey="week4" 
                stackId="1"
                stroke="hsl(var(--secondary))" 
                fill="hsl(var(--secondary))"
                fillOpacity={0.8}
                name="Week 4"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartDashboard;