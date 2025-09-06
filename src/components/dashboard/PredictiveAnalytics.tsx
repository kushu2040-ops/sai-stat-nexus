import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Target, Brain, TrendingUp, Activity, Award, Star } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, RadialBarChart, RadialBar, Legend } from "recharts";

// Mock predictive analytics data
const athletePredictiveData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    sport: "Football/Soccer",
    state: "Maharashtra",
    age: 22,
    predictiveScore: 94,
    tier: "High",
    physicalScore: 92,
    technicalScore: 89,
    mentalScore: 96,
    performanceScore: 93,
    improvementTrend: 88,
    consistency: 91
  },
  {
    id: 2,
    name: "Priya Sharma",
    sport: "Athletics",
    state: "Punjab",
    age: 20,
    predictiveScore: 91,
    tier: "High",
    physicalScore: 95,
    technicalScore: 87,
    mentalScore: 90,
    performanceScore: 89,
    improvementTrend: 92,
    consistency: 88
  },
  {
    id: 3,
    name: "Arjun Singh",
    sport: "Swimming",
    state: "Karnataka",
    age: 24,
    predictiveScore: 88,
    tier: "Medium",
    physicalScore: 90,
    technicalScore: 85,
    mentalScore: 87,
    performanceScore: 91,
    improvementTrend: 85,
    consistency: 90
  },
  {
    id: 4,
    name: "Meera Patel",
    sport: "Basketball",
    state: "Gujarat",
    age: 21,
    predictiveScore: 85,
    tier: "Medium",
    physicalScore: 88,
    technicalScore: 82,
    mentalScore: 84,
    performanceScore: 87,
    improvementTrend: 83,
    consistency: 86
  },
  {
    id: 5,
    name: "Vikram Das",
    sport: "Wrestling",
    state: "Haryana",
    age: 25,
    predictiveScore: 82,
    tier: "Medium",
    physicalScore: 86,
    technicalScore: 79,
    mentalScore: 81,
    performanceScore: 84,
    improvementTrend: 80,
    consistency: 83
  }
];

const getTierColor = (tier: string) => {
  switch (tier) {
    case "High":
      return "hsl(var(--primary))";
    case "Medium":
      return "hsl(var(--warning))";
    case "Low":
      return "hsl(var(--destructive))";
    default:
      return "hsl(var(--muted))";
  }
};

const getTierBadge = (tier: string) => {
  switch (tier) {
    case "High":
      return { variant: "default" as const, className: "bg-primary text-primary-foreground" };
    case "Medium":
      return { variant: "secondary" as const, className: "bg-warning text-warning-foreground" };
    case "Low":
      return { variant: "outline" as const, className: "border-destructive text-destructive" };
    default:
      return { variant: "outline" as const, className: "" };
  }
};

const PredictiveAnalytics = () => {
  const [selectedAthleteId, setSelectedAthleteId] = useState(athletePredictiveData[0].id);
  
  const selectedAthlete = athletePredictiveData.find(athlete => athlete.id === selectedAthleteId) || athletePredictiveData[0];
  
  const contributingFactors = [
    { factor: "Physical Fitness", value: selectedAthlete.physicalScore, weight: 20, color: "hsl(var(--primary))" },
    { factor: "Technical Skills", value: selectedAthlete.technicalScore, weight: 25, color: "hsl(var(--success))" },
    { factor: "Mental Strength", value: selectedAthlete.mentalScore, weight: 20, color: "hsl(var(--warning))" },
    { factor: "Performance History", value: selectedAthlete.performanceScore, weight: 15, color: "hsl(var(--secondary))" },
    { factor: "Improvement Trend", value: selectedAthlete.improvementTrend, weight: 10, color: "hsl(var(--accent))" },
    { factor: "Consistency", value: selectedAthlete.consistency, weight: 10, color: "hsl(var(--muted))" }
  ];

  const factorChartData = contributingFactors.map(factor => ({
    name: factor.factor,
    value: factor.value,
    weight: factor.weight,
    weightedScore: (factor.value * factor.weight) / 100
  }));

  const radialData = [
    {
      name: "Predictive Score",
      value: selectedAthlete.predictiveScore,
      fill: getTierColor(selectedAthlete.tier)
    }
  ];

  const tierBadge = getTierBadge(selectedAthlete.tier);

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Brain className="h-5 w-5 text-primary" />
            Predictive Analytics Dashboard
          </CardTitle>
          <CardDescription>
            AI-powered talent prediction and performance analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium text-foreground mb-2 block">
                Select Athlete to Analyze
              </label>
              <Select value={selectedAthleteId.toString()} onValueChange={(value) => setSelectedAthleteId(parseInt(value))}>
                <SelectTrigger className="w-full sm:w-64">
                  <SelectValue placeholder="Choose an athlete..." />
                </SelectTrigger>
                <SelectContent>
                  {athletePredictiveData.map((athlete) => (
                    <SelectItem key={athlete.id} value={athlete.id.toString()}>
                      {athlete.name} - {athlete.sport}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Predictive Score Display */}
        <Card className="shadow-card bg-gradient-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Target className="h-5 w-5 text-primary" />
              Predictive Score
            </CardTitle>
            <CardDescription>
              AI-calculated potential score for {selectedAthlete.name}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="90%"
                    startAngle={90}
                    endAngle={-270}
                    data={radialData}
                  >
                    <RadialBar
                      dataKey="value"
                      cornerRadius={10}
                      fill={getTierColor(selectedAthlete.tier)}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-foreground">
                    {selectedAthlete.predictiveScore}
                  </span>
                </div>
              </div>
              <Badge {...tierBadge} className="text-sm px-3 py-1">
                {selectedAthlete.tier} Potential
              </Badge>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Sport:</span>
                <span className="text-sm font-medium text-foreground">{selectedAthlete.sport}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Age:</span>
                <span className="text-sm font-medium text-foreground">{selectedAthlete.age} years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">State:</span>
                <span className="text-sm font-medium text-foreground">{selectedAthlete.state}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contributing Factors Chart */}
        <Card className="shadow-card bg-gradient-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Activity className="h-5 w-5 text-success" />
              Contributing Factors Breakdown
            </CardTitle>
            <CardDescription>
              Individual performance metrics that contribute to the final score
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={factorChartData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  type="number" 
                  domain={[0, 100]}
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  type="category" 
                  dataKey="name"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  width={120}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                    color: "hsl(var(--foreground))"
                  }}
                  formatter={(value: any, name: string) => [
                    `${value}%`,
                    name === "value" ? "Score" : name
                  ]}
                />
                <Bar 
                  dataKey="value" 
                  fill="hsl(var(--primary))"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Factor Analysis */}
      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <TrendingUp className="h-5 w-5 text-warning" />
            Detailed Factor Analysis
          </CardTitle>
          <CardDescription>
            Weighted contribution of each factor to the overall predictive score
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributingFactors.map((factor, index) => (
              <div key={index} className="space-y-3 p-4 rounded-lg bg-background/50 border border-border/50">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-foreground">{factor.factor}</h4>
                  <Badge variant="outline" className="text-xs">
                    {factor.weight}% weight
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Score</span>
                    <span className="text-lg font-semibold text-foreground">{factor.value}%</span>
                  </div>
                  <Progress value={factor.value} className="h-2" />
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Weighted Impact</span>
                  <span className="font-medium text-foreground">
                    {((factor.value * factor.weight) / 100).toFixed(1)} pts
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Athletes</p>
                <p className="text-2xl font-bold text-primary">{athletePredictiveData.length}</p>
              </div>
              <Brain className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">High Potential</p>
                <p className="text-2xl font-bold text-success">
                  {athletePredictiveData.filter(a => a.tier === "High").length}
                </p>
              </div>
              <Star className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Score</p>
                <p className="text-2xl font-bold text-warning">
                  {Math.round(athletePredictiveData.reduce((sum, a) => sum + a.predictiveScore, 0) / athletePredictiveData.length)}
                </p>
              </div>
              <Award className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card bg-gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Top Performer</p>
                <p className="text-lg font-bold text-primary">
                  {athletePredictiveData.reduce((prev, current) => 
                    (prev.predictiveScore > current.predictiveScore) ? prev : current
                  ).predictiveScore}
                </p>
              </div>
              <Target className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PredictiveAnalytics;