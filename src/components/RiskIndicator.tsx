
import React from 'react';
import { RiskCategory } from '@/data/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, ShieldCheck, ShieldAlert } from 'lucide-react';

interface RiskIndicatorProps {
  risk: RiskCategory;
}

export const RiskIndicator: React.FC<RiskIndicatorProps> = ({ risk }) => {
  const getIcon = () => {
    switch (risk.level) {
      case 'Low':
        return <ShieldCheck className="h-10 w-10 text-green-500" />;
      case 'Medium':
        return <AlertTriangle className="h-10 w-10 text-amber-500" />;
      case 'High':
        return <ShieldAlert className="h-10 w-10 text-red-500" />;
      default:
        return <AlertTriangle className="h-10 w-10 text-amber-500" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk Assessment</CardTitle>
        <CardDescription>Current risk status based on attendance patterns</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center p-4">
          {getIcon()}
          <h3 className="mt-3 text-xl font-semibold" style={{ color: risk.color }}>
            {risk.level} Risk
          </h3>
          <p className="mt-2 text-center text-muted-foreground">{risk.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};
