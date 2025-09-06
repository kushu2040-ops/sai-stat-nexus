import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Video, TestTube, TrendingUp, Users, Eye, Clock } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

// Mock data for videos uploaded over time
const videoUploadData = [
  { month: "Jan", videos: 245 },
  { month: "Feb", videos: 298 },
  { month: "Mar", videos: 367 },
  { month: "Apr", videos: 423 },
  { month: "May", videos: 512 },
  { month: "Jun", videos: 589 },
  { month: "Jul", videos: 634 },
  { month: "Aug", videos: 721 },
  { month: "Sep", videos: 798 },
  { month: "Oct", videos: 856 },
  { month: "Nov", videos: 923 },
  { month: "Dec", videos: 1034 }
];

// Mock data for test completion rates by sport
const testCompletionData = [
  { sport: "Football/Soccer", completionRate: 89 },
  { sport: "Basketball", completionRate: 92 },
  { sport: "Athletics", completionRate: 87 },
  { sport: "Swimming", completionRate: 94 },
  { sport: "Wrestling", completionRate: 85 },
  { sport: "Boxing", completionRate: 91 },
  { sport: "Cricket", completionRate: 88 },
  { sport: "Hockey", completionRate: 86 },
  { sport: "Volleyball", completionRate: 90 },
  { sport: "Judo", completionRate: 83 },
  { sport: "Karate", completionRate: 87 },
  { sport: "Rugby", completionRate: 84 }
];

// Mock data for user retention over time
const retentionData = [
  { week: "Week 1", retentionRate: 95 },
  { week: "Week 2", retentionRate: 89 },
  { week: "Week 3", retentionRate: 85 },
  { week: "Week 4", retentionRate: 82 },
  { week: "Week 5", retentionRate: 78 },
  { week: "Week 6", retentionRate: 75 },
  { week: "Week 7", retentionRate: 73 },
  { week: "Week 8", retentionRate: 71 },
  { week: "Week 9", retentionRate: 69 },
  { week: "Week 10", retentionRate: 68 },
  { week: "Week 11", retentionRate: 67 },
  { week: "Week 12", retentionRate: 66 }
];

// Mock data for most popular tests
const popularTests = [
  { id: 1, testName: "Sprint Performance Assessment", sport: "Athletics", completions: 2847, avgScore: 87.3 },
  { id: 2, testName: "Ball Control Skills Test", sport: "Football/Soccer", completions: 2634, avgScore: 85.1 },
  { id: 3, testName: "Shooting Accuracy Challenge", sport: "Basketball", completions: 2456, avgScore: 89.7 },
  { id: 4, testName: "Endurance Swimming Test", sport: "Swimming", completions: 2298, avgScore: 91.2 },
  { id: 5, testName: "Strength & Conditioning", sport: "Wrestling", completions: 2187, avgScore: 83.5 },
  { id: 6, testName: "Reaction Time Test", sport: "Boxing", completions: 2034, avgScore: 86.8 },
  { id: 7, testName: "Batting Technique Analysis", sport: "Cricket", completions: 1923, avgScore: 84.6 },
  { id: 8, testName: "Stick Handling Skills", sport: "Hockey", completions: 1876, avgScore: 82.9 },
  { id: 9, testName: "Spike Power Test", sport: "Volleyball", completions: 1734, avgScore: 88.4 },
  { id: 10, testName: "Grappling Technique Test", sport: "Judo", completions: 1623, avgScore: 81.7 }
];

const EngagementDashboard = () => {
  const totalVideos = videoUploadData.reduce((sum, month) => sum + month.videos, 0);
  const avgCompletionRate = testCompletionData.reduce((sum, sport) => sum + sport.completionRate, 0) / testCompletionData.length;
  const currentRetention = retentionData[retentionData.length - 1].retentionRate;
  const totalTestCompletions = popularTests.reduce((sum, test) => sum + test.completions, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Videos</p>
                <p className="text-2xl font-bold text-primary">{totalVideos.toLocaleString()}</p>
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
                <p className="text-2xl font-bold text-success">{avgCompletionRate.toFixed(1)}%</p>
              </div>
              <TestTube className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">User Retention</p>
                <p className="text-2xl font-bold text-warning">{currentRetention}%</p>
              </div>
              <Users className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Test Completions</p>
                <p className="text-2xl font-bold text-secondary">{totalTestCompletions.toLocaleString()}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Videos & Tests Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Video className="h-5 w-5 text-primary" />
              Total Videos Uploaded Trend
            </CardTitle>
            <CardDescription>Monthly video upload statistics over the past year</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={videoUploadData}>
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
                  dataKey="videos" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "hsl(var(--primary))", strokeWidth: 2, fill: "hsl(var(--background))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <TestTube className="h-5 w-5 text-success" />
              Average Test Completion Rate by Sport
            </CardTitle>
            <CardDescription>Performance test completion rates across different sports</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={testCompletionData}>
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
                  domain={[0, 100]}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                    color: "hsl(var(--foreground))"
                  }}
                  formatter={(value: any) => [`${value}%`, "Completion Rate"]}
                />
                <Bar 
                  dataKey="completionRate" 
                  fill="hsl(var(--success))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Popularity and Retention */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Eye className="h-5 w-5 text-warning" />
              Most Popular Tests
            </CardTitle>
            <CardDescription>Top performing tests ranked by completion count</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-foreground">Rank</TableHead>
                    <TableHead className="text-foreground">Test Name</TableHead>
                    <TableHead className="text-foreground">Sport</TableHead>
                    <TableHead className="text-foreground text-right">Completions</TableHead>
                    <TableHead className="text-foreground text-right">Avg Score</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {popularTests.slice(0, 8).map((test, index) => (
                    <TableRow key={test.id} className="hover:bg-muted/50">
                      <TableCell className="font-medium">
                        <Badge variant={index < 3 ? "default" : "secondary"} className="w-8 h-8 rounded-full flex items-center justify-center">
                          {index + 1}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium text-foreground">{test.testName}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {test.sport}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-semibold text-primary">
                        {test.completions.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right font-semibold text-success">
                        {test.avgScore}%
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Clock className="h-5 w-5 text-secondary" />
              User Retention Rate Over Time
            </CardTitle>
            <CardDescription>User engagement and retention tracking over 12 weeks</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={retentionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="week" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  domain={[60, 100]}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                    color: "hsl(var(--foreground))"
                  }}
                  formatter={(value: any) => [`${value}%`, "Retention Rate"]}
                />
                <Line 
                  type="monotone" 
                  dataKey="retentionRate" 
                  stroke="hsl(var(--secondary))" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--secondary))", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: "hsl(var(--secondary))", strokeWidth: 2, fill: "hsl(var(--background))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EngagementDashboard;