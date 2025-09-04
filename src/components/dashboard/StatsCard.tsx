import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  variant?: "default" | "success" | "warning" | "primary";
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatsCard = ({ 
  title, 
  value, 
  description, 
  icon: Icon, 
  variant = "default",
  trend
}: StatsCardProps) => {
  const variantStyles = {
    default: "bg-gradient-card border-border",
    success: "bg-gradient-secondary border-success/20",
    warning: "bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20",
    primary: "bg-gradient-primary border-primary/20"
  };

  return (
    <Card className={cn(
      "shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
      variantStyles[variant]
    )}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className={cn(
          "h-4 w-4",
          variant === "success" && "text-success",
          variant === "warning" && "text-warning",
          variant === "primary" && "text-primary-foreground",
          variant === "default" && "text-primary"
        )} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">
            {description}
          </p>
        )}
        {trend && (
          <div className={cn(
            "text-xs mt-2 flex items-center gap-1",
            trend.isPositive ? "text-success" : "text-destructive"
          )}>
            <span>{trend.isPositive ? "↗" : "↘"}</span>
            <span>{Math.abs(trend.value)}% from last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;