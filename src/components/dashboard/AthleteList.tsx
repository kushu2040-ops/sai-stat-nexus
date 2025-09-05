import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Star, TrendingUp, Medal } from "lucide-react";

const athletes = [
  { 
    id: 1, 
    name: "Rajesh Kumar", 
    sport: "Football/Soccer", 
    state: "Maharashtra", 
    performance: 94, 
    medals: 12,
    avatar: "/placeholder.svg"
  },
  { 
    id: 2, 
    name: "Priya Sharma", 
    sport: "Athletics", 
    state: "Punjab", 
    performance: 92, 
    medals: 8,
    avatar: "/placeholder.svg"
  },
  { 
    id: 3, 
    name: "Arjun Singh", 
    sport: "Swimming", 
    state: "Karnataka", 
    performance: 91, 
    medals: 15,
    avatar: "/placeholder.svg"
  },
  { 
    id: 4, 
    name: "Meera Patel", 
    sport: "Basketball", 
    state: "Gujarat", 
    performance: 89, 
    medals: 6,
    avatar: "/placeholder.svg"
  },
  { 
    id: 5, 
    name: "Vikram Das", 
    sport: "Wrestling", 
    state: "Haryana", 
    performance: 88, 
    medals: 9,
    avatar: "/placeholder.svg"
  },
  { 
    id: 6, 
    name: "Anjali Reddy", 
    sport: "Boxing", 
    state: "Telangana", 
    performance: 87, 
    medals: 7,
    avatar: "/placeholder.svg"
  },
  { 
    id: 7, 
    name: "Rohit Verma", 
    sport: "Hockey", 
    state: "Odisha", 
    performance: 86, 
    medals: 11,
    avatar: "/placeholder.svg"
  },
  { 
    id: 8, 
    name: "Kavya Nair", 
    sport: "Volleyball", 
    state: "Kerala", 
    performance: 85, 
    medals: 5,
    avatar: "/placeholder.svg"
  },
  { 
    id: 9, 
    name: "Suresh Yadav", 
    sport: "Judo", 
    state: "Uttar Pradesh", 
    performance: 84, 
    medals: 4,
    avatar: "/placeholder.svg"
  },
  { 
    id: 10, 
    name: "Deepika Thakur", 
    sport: "Karate", 
    state: "Himachal Pradesh", 
    performance: 83, 
    medals: 6,
    avatar: "/placeholder.svg"
  },
];

const getPerformanceBadge = (performance: number) => {
  if (performance >= 90) return { variant: "default" as const, label: "Elite" };
  if (performance >= 85) return { variant: "secondary" as const, label: "Advanced" };
  return { variant: "outline" as const, label: "Developing" };
};

const AthleteList = () => {
  return (
    <Card className="shadow-card bg-gradient-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Users className="h-5 w-5 text-primary" />
          Top Athletes Registry
        </CardTitle>
        <CardDescription>Leading performers across all sports disciplines</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {athletes.map((athlete, index) => {
            const performanceBadge = getPerformanceBadge(athlete.performance);
            return (
              <div 
                key={athlete.id} 
                className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50 hover:bg-background/70 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground w-6">
                      #{index + 1}
                    </span>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={athlete.avatar} alt={athlete.name} />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {athlete.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-foreground">{athlete.name}</h4>
                      <Badge variant={performanceBadge.variant} className="text-xs">
                        {performanceBadge.label}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{athlete.sport}</span>
                      <span>•</span>
                      <span>{athlete.state}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm font-medium text-foreground">
                      <Star className="h-3 w-3 text-warning" />
                      {athlete.performance}%
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Medal className="h-3 w-3" />
                      {athlete.medals} medals
                    </div>
                  </div>
                  
                  <TrendingUp className="h-4 w-4 text-success" />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default AthleteList;