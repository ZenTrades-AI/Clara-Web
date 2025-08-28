
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const ROICalculator = ({ trigger }: { trigger: React.ReactNode }) => {
  const [annualRevenue, setAnnualRevenue] = useState('');
  const [missedCallPercent, setMissedCallPercent] = useState('');
  const [results, setResults] = useState<{
    lostRevenue: number;
    monthlyCost: number;
    monthlyROI: number;
    paybackDays: number;
  } | null>(null);

  const calculateROI = () => {
    const revenue = parseFloat(annualRevenue.replace(/[,$]/g, ''));
    const missedPercent = parseFloat(missedCallPercent);

    if (!revenue || !missedPercent) return;

    // Assumptions: 
    // - 20% of missed calls = lost revenue opportunity
    // - Average deal size varies by revenue (larger companies = larger deals)
    // - Clara prevents 80% of missed call revenue loss
    const lostRevenue = (revenue * (missedPercent / 100) * 0.2);
    const recoveredRevenue = lostRevenue * 0.8; // Clara recovers 80%
    const monthlyCost = revenue > 5000000 ? 2000 : revenue > 1000000 ? 1200 : 100;
    const monthlyROI = (recoveredRevenue / 12) - monthlyCost;
    const paybackDays = (monthlyCost / (recoveredRevenue / 365));

    setResults({
      lostRevenue,
      monthlyCost,
      monthlyROI,
      paybackDays: Math.max(1, paybackDays)
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-montserrat text-clara-navy">ROI Calculator</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="revenue">Annual Revenue ($)</Label>
            <Input
              id="revenue"
              type="text"
              placeholder="e.g., 2,500,000"
              value={annualRevenue}
              onChange={(e) => setAnnualRevenue(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="missed-calls">Missed Call Percentage (%)</Label>
            <Input
              id="missed-calls"
              type="number"
              placeholder="e.g., 15"
              value={missedCallPercent}
              onChange={(e) => setMissedCallPercent(e.target.value)}
            />
          </div>
          
          <Button 
            onClick={calculateROI}
            className="w-full bg-clara-gold hover:bg-clara-gold/90 text-clara-navy font-semibold"
          >
            Calculate ROI
          </Button>

          {results && (
            <div className="bg-clara-gray p-4 rounded-lg space-y-2">
              <h3 className="font-montserrat font-semibold text-clara-navy">Your Results</h3>
              <div className="space-y-1 text-sm">
                <p><span className="font-medium">Lost Revenue/Year:</span> ${results.lostRevenue.toLocaleString()}</p>
                <p className="text-clara-teal font-semibold">
                  <span className="font-medium">Monthly ROI:</span> +${results.monthlyROI.toLocaleString()}
                </p>
                <p className="text-clara-gold font-semibold">
                  <span className="font-medium">Payback Period:</span> {Math.round(results.paybackDays)} days
                </p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ROICalculator;
