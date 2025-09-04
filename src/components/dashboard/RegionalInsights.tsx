import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Medal, TrendingUp } from "lucide-react";

const topStates = [
  { state: "Maharashtra", athletes: 2340, performance: 92, rank: 1 },
  { state: "Karnataka", athletes: 2150, performance: 89, rank: 2 },
  { state: "Tamil Nadu", athletes: 1980, performance: 87, rank: 3 },
  { state: "Punjab", athletes: 1450, performance: 85, rank: 4 },
  { state: "Haryana", athletes: 1320, performance: 84, rank: 5 },
];

const talentPools = [
  { region: "North India", sports: ["Hockey", "Wrestling", "Boxing"], athletes: 4520 },
  { region: "South India", sports: ["Cricket", "Badminton", "Athletics"], athletes: 5890 },
  { region: "West India", sports: ["Cricket", "Football", "Swimming"], athletes: 3240 },
  { region: "East India", sports: ["Football", "Athletics", "Boxing"], athletes: 2197 },
];

const RegionalInsights = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Medal className="h-5 w-5 text-warning" />
            Top Performing States
          </CardTitle>
          <CardDescription>States ranked by athlete performance scores</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {topStates.map((state) => (
            <div key={state.state} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="w-8 h-8 flex items-center justify-center">
                  {state.rank}
                </Badge>
                <div>
                  <p className="font-medium text-foreground">{state.state}</p>
                  <p className="text-sm text-muted-foreground">{state.athletes.toLocaleString()} athletes</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-foreground">{state.performance}%</p>
                <Progress value={state.performance} className="w-20 h-2 mt-1" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <MapPin className="h-5 w-5 text-primary" />
            Regional Talent Pools
          </CardTitle>
          <CardDescription>Sport specializations by region</CardDescription>
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