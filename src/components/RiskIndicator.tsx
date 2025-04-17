
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
      <div className="flex items-center space-x-3 p-2 bg-muted/30 rounded-lg">
        {getIcon()}
        <div>
          <h3 className="text-sm font-semibold" style={{ color: risk.color }}>
            {risk.level} Risk
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-2">{risk.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-muted/30 rounded-lg">
      {getIcon()}
      <h3 className="mt-3 text-lg font-semibold" style={{ color: risk.color }}>
        {risk.level} Risk
      </h3>
      <p className="mt-2 text-center text-sm text-muted-foreground">{risk.description}</p>
    </div>
  );
};
