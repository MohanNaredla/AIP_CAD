
import React from 'react';
import { RiskCategory } from '@/data/mockData';
import { ShieldCheck, AlertTriangle, ShieldAlert } from 'lucide-react';

interface RiskIndicatorProps {
  risk: RiskCategory;
  compact?: boolean;
}

export const RiskIndicator: React.FC<RiskIndicatorProps> = ({ risk, compact = false }) => {
  const getIcon = () => {
    switch (risk.level) {
      case 'Low':
        return <ShieldCheck className="h-6 w-6 text-green-500" />;
      case 'Medium':
        return <AlertTriangle className="h-6 w-6 text-amber-500" />;
      case 'High':
        return <ShieldAlert className="h-6 w-6 text-red-500" />;
      default:
        return <AlertTriangle className="h-6 w-6 text-amber-500" />;
    }
  };

  if (compact) {
    return (
      <div className="flex items-center">
        {getIcon()}
        <div className="ml-2">
          <h3 className="text-lg font-semibold" style={{ color: risk.color }}>
            {risk.level} Risk
          </h3>
          <p className="text-xs text-muted-foreground">{risk.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {getIcon()}
      <h3 className="mt-3 text-xl font-semibold" style={{ color: risk.color }}>
        {risk.level} Risk
      </h3>
      <p className="mt-2 text-center text-muted-foreground">{risk.description}</p>
    </div>
  );
};
