import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Activity, Video, Users, TrendingUp, Target, Clock, PlayCircle } from "lucide-react";

// Mock data for charts
const videoUploadTrend = [
  { month: "Jan", uploads: 1200 },
  { month: "Feb", uploads: 1450 },
  { month: "Mar", uploads: 1380 },
  { month: "Apr", uploads: 1650 },
  { month: "May", uploads: 1890 },
  { month: "Jun", uploads: 2100 },
  { month: "Jul", uploads: 2350 },
  { month: "Aug", uploads: 2180 },
  { month: "Sep", uploads: 2450 },
  { month: "Oct", uploads: 2680 },
  { month: "Nov", uploads: 2850 },
  { month: "Dec", uploads: 3120 },
];

const testCompletionBySport = [
  { sport: "Football", completion: 89 },
  { sport: "Athletics", completion: 92 },
  { sport: "Swimming", completion: 87 },
  { sport: "Basketball", completion: 85 },
  { sport: "Wrestling", completion: 91 },
  { sport: "Boxing", completion: 88 },
  { sport: "Hockey", completion: 84 },
  { sport: "Volleyball", completion: 86 },
  { sport: "Cricket", completion: 90 },
  { sport: "Judo", completion: 83 },
];

const popularTests = [
  { test: "Speed & Agility Assessment", completions: 8945, avgScore: 87.3, trend: "+12%" },
  { test: "Strength Endurance Test", completions: 7823, avgScore: 84.6, trend: "+8%" },
  { test: "Cardiovascular Fitness", completions: 7234, avgScore: 86.2, trend: "+15%" },
  { test: "Technical Skills Evaluation", completions: 6892, avgScore: 82.9, trend: "+5%" },
  { test: "Mental Resilience Test", completions: 6345, avgScore: 79.8, trend: "+18%" },
  { test: "Coordination Assessment", completions: 5967, avgScore: 85.1, trend: "+10%" },
  { test: "Power Output Analysis", completions: 5432, avgScore: 88.4, trend: "+7%" },
  { test: "Flexibility Evaluation", completions: 4876, avgScore: 81.7, trend: "+22%" },
];

const userRetentionData = [
  { period: "Week 1", retention: 100 },
  { period: "Week 2", retention: 85 },
  { period: "Week 3", retention: 78 },
  { period: "Month 1", retention: 72 },
  { period: "Month 2", retention: 68 },
  { period: "Month 3", retention: 65 },
  { period: "Month 6", retention: 58 },
  { period: "Month 12", retention: 52 },
];

const engagementByTimeData = [
  { time: "6 AM", users: 245 },
  { time: "9 AM", users: 1234 },
  { time: "12 PM", users: 2134 },
  { time: "3 PM", users: 1876 },
  { time: "6 PM", users: 2987 },
  { time: "9 PM", users: 1654 },
  { time: "12 AM", users: 432 },
];

const deviceUsageData = [
  { name: "Mobile", value: 65, color: "#8B5CF6" },
  { name: "Desktop", value: 25, color: "#06B6D4" },
  { name: "Tablet", value: 10, color: "#10B981" },
];

const chartConfig = {
  uploads: { label: "Video Uploads", color: "#8B5CF6" },
  completion: { label: "Completion Rate", color: "#06B6D4" },
  retention: { label: "Retention Rate", color: "#10B981" },
  users: { label: "Active Users", color: "#F59E0B" },
};

const EngagementDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Videos</p>
                <p className="text-2xl font-bold text-primary">28,450</p>
                <p className="text-xs text-success">+23% this month</p>
              </div>
              <Video className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Completion</p>
                <p className="text-2xl font-bold text-secondary">87.3%</p>
                <p className="text-xs text-success">+5.2% improvement</p>
              </div>
              <Target className="h-8 w-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Daily Active</p>
                <p className="text-2xl font-bold text-warning">12,567</p>
                <p className="text-xs text-success">+18% growth</p>
              </div>
              <Users className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Session</p>
                <p className="text-2xl font-bold text-success">24.5m</p>
                <p className="text-xs text-success">+12% increase</p>
              </div>
              <Clock className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Video className="h-5 w-5 text-primary" />
              Video Upload Trends
            </CardTitle>
            <CardDescription>Monthly video uploads over the past year</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={videoUploadTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="uploads" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Target className="h-5 w-5 text-secondary" />
              Test Completion by Sport
            </CardTitle>
            <CardDescription>Average completion rates across different sports</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={testCompletionBySport} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                  <YAxis dataKey="sport" type="category" width={80} stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar 
                    dataKey="completion" 
                    fill="hsl(var(--secondary))" 
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="shadow-card bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <TrendingUp className="h-5 w-5 text-success" />
              User Retention Rate
            </CardTitle>
            <CardDescription>User retention over time periods</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userRetentionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="period" stroke="hsl(var(--muted-foreground))" />
                  <YAxis domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="retention" 
                    stroke="hsl(var(--success))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--success))", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Activity className="h-5 w-5 text-warning" />
              Daily Usage Pattern
            </CardTitle>
            <CardDescription>User activity throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={engagementByTimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar 
                    dataKey="users" 
                    fill="hsl(var(--warning))" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <PlayCircle className="h-5 w-5 text-primary" />
              Device Usage
            </CardTitle>
            <CardDescription>Platform usage distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceUsageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {deviceUsageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 space-y-2">
              {deviceUsageData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-foreground">{item.name}</span>
                  </div>
                  <span className="font-medium text-foreground">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Popular Tests Table */}
      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Target className="h-5 w-5 text-primary" />
            Most Popular Tests
          </CardTitle>
          <CardDescription>
            Top performing tests based on completion rates and user engagement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-8">#</TableHead>
                  <TableHead>Test Name</TableHead>
                  <TableHead>Completions</TableHead>
                  <TableHead>Avg Score</TableHead>
                  <TableHead>Growth Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {popularTests.map((test, index) => (
                  <TableRow key={test.test}>
                    <TableCell className="font-medium text-muted-foreground">
                      #{index + 1}
                    </TableCell>
                    <TableCell className="font-medium text-foreground">
                      {test.test}
                    </TableCell>
                    <TableCell className="text-foreground">
                      {test.completions.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-foreground">{test.avgScore}%</span>
                        <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary rounded-full" 
                            style={{ width: `${test.avgScore}%` }}
                          />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-success border-success">
                        {test.trend}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EngagementDashboard;