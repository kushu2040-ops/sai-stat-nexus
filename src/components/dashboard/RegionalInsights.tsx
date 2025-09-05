import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Medal, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const topStates = [
  { state: "Maharashtra", athletes: 2340, performance: 92, rank: 1 },
  { state: "Karnataka", athletes: 2150, performance: 89, rank: 2 },
  { state: "Tamil Nadu", athletes: 1980, performance: 87, rank: 3 },
  { state: "Punjab", athletes: 1450, performance: 85, rank: 4 },
  { state: "Haryana", athletes: 1320, performance: 84, rank: 5 },
];

const talentPools = [
  { region: "North India", sports: ["Hockey", "Wrestling", "Boxing", "Judo", "Karate"], athletes: 4520 },
  { region: "South India", sports: ["Cricket", "Athletics", "Swimming", "Diving", "Volleyball"], athletes: 5890 },
  { region: "West India", sports: ["Football/Soccer", "Basketball", "Rugby", "Handball"], athletes: 3240 },
  { region: "East India", sports: ["Boxing", "Kickboxing", "Baseball", "Softball"], athletes: 2197 },
];

const statePerformanceData = [
  { state: "MH", athletes: 2340, performance: 92, medals: 45 },
  { state: "KA", athletes: 2150, performance: 89, medals: 38 },
  { state: "TN", athletes: 1980, performance: 87, medals: 35 },
  { state: "PB", athletes: 1450, performance: 85, medals: 28 },
  { state: "HR", athletes: 1320, performance: 84, medals: 25 },
  { state: "UP", athletes: 1890, performance: 82, medals: 22 },
  { state: "GJ", athletes: 1560, performance: 80, medals: 20 },
  { state: "RJ", athletes: 1234, performance: 78, medals: 18 },
];

const radarData = [
  { metric: "Physical Fitness", north: 85, south: 88, west: 82, east: 79 },
  { metric: "Technical Skills", north: 78, south: 85, west: 90, east: 75 },
  { metric: "Mental Strength", north: 92, south: 84, west: 87, east: 88 },
  { metric: "Teamwork", north: 88, south: 89, west: 85, east: 90 },
  { metric: "Leadership", north: 86, south: 87, west: 84, east: 82 },
  { metric: "Adaptability", north: 83, south: 91, west: 88, east: 85 },
];

const RegionalInsights = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="shadow-card bg-gradient-card lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Medal className="h-5 w-5 text-warning" />
            State Performance Overview
          </CardTitle>
          <CardDescription>Athletes, performance scores, and medals by state</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={statePerformanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="state" 
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
              <Bar 
                yAxisId="left"
                dataKey="athletes" 
                fill="hsl(var(--primary))" 
                radius={[4, 4, 0, 0]}
                name="Athletes"
              />
              <Bar 
                yAxisId="right"
                dataKey="medals" 
                fill="hsl(var(--warning))" 
                radius={[4, 4, 0, 0]}
                name="Medals Won"
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <TrendingUp className="h-5 w-5 text-success" />
            Regional Strengths
          </CardTitle>
          <CardDescription>Performance comparison across regions</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis 
                dataKey="metric" 
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]}
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
              />
              <Radar
                name="North India"
                dataKey="north"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Radar
                name="South India"
                dataKey="south"
                stroke="hsl(var(--success))"
                fill="hsl(var(--success))"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Radar
                name="West India"
                dataKey="west"
                stroke="hsl(var(--warning))"
                fill="hsl(var(--warning))"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Radar
                name="East India"
                dataKey="east"
                stroke="hsl(var(--secondary))"
                fill="hsl(var(--secondary))"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  color: "hsl(var(--foreground))"
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            Regional Talent Distribution
          </CardTitle>
          <CardDescription>Athletes by region with sport focus</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {talentPools.map((pool) => (
            <div key={pool.region} className="p-4 rounded-lg bg-background/50 border border-border/50">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-foreground">{pool.region}</h4>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {pool.athletes.toLocaleString()}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                {pool.sports.map((sport) => (
                  <Badge key={sport} variant="outline" className="text-xs">
                    {sport}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default RegionalInsights;