import React, { useState } from "react";

// UI Components
const Card = ({ children }) => (
  <div className="rounded-lg sm:rounded-2xl shadow-md bg-white mt-16 sm:mt-14 px-20 py-6 sm:p-6 w-3xl max-w-sm sm:max-w-3xl mx-auto">
{children}</div>
);

const CardContent = ({ children }) => <div className="space-y-4">{children}</div>;

const Input = ({ label, ...props }) => (
  <div>
    <label className="block mb-1 font-medium text-sm">{label}</label>
    <input
      {...props}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>
);

const Button = ({ children, ...props }) => (
  <button
    {...props}
    className="w-full bg-black text-white rounded-md py-2 px-4 font-semibold hover:opacity-90 transition"
  >
    {children}
  </button>
);

export default function Calculator() {
  const [incomeGoal, setIncomeGoal] = useState('');
  const [hoursPerWeek, setHoursPerWeek] = useState('');
  const [weeksPerYear, setWeeksPerYear] = useState(48);
  const [expensesPerMonth, setExpensesPerMonth] = useState('');
  const [marketAvgRate, setMarketAvgRate] = useState('');
  const [experienceMultiplier, setExperienceMultiplier] = useState(1.0);
  const [confidenceFactor, setConfidenceFactor] = useState(0.2);
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');

  const calculateHourlyRate = () => {
    const income = parseFloat(incomeGoal);
    const hours = parseFloat(hoursPerWeek);
    const weeks = parseFloat(weeksPerYear);
    const expenses = parseFloat(expensesPerMonth);
    const marketRate = parseFloat(marketAvgRate);
    const multiplier = parseFloat(experienceMultiplier);
    const confidence = parseFloat(confidenceFactor);

    if (
      isNaN(income) ||
      isNaN(hours) ||
      isNaN(weeks) ||
      isNaN(expenses) ||
      isNaN(multiplier) ||
      isNaN(confidence)
    ) {
      setResults(null);
      setError('⚠️ Please fill all required fields with valid numbers.');
      return;
    }

    setError(''); // Clear previous errors

    const yearlyExpenses = expenses * 12;
    const yearlyIncomeGoal = (income * 12) + yearlyExpenses;
    const totalWorkingHours = hours * weeks;
    const baseRate = yearlyIncomeGoal / totalWorkingHours;
    const adjustedRate = baseRate * (1 + confidence);
    const finalRate = adjustedRate * multiplier;
    const suggestedRate = !isNaN(marketRate) ? (finalRate + marketRate) / 2 : finalRate;

    setResults({
      baseRate: baseRate.toFixed(2),
      finalRate: finalRate.toFixed(2),
      suggestedRate: suggestedRate.toFixed(2),
    });
  };

 return (
  <main className="w-full max-w-5xl min-h-[70vh] bg-gray-50 flex items-center justify-center px-4 py-10 mx-auto">

    <Card>
      <CardContent>
        <h1 className="text-2xl font-bold mb-2 text-center">Pricing Buddy</h1>
        <p className="text-sm text-gray-500 mb-4 text-center">Find your ideal hourly freelance rate.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Monthly Income Goal (₹)"
            type="number"
            placeholder="e.g., 50000"
            value={incomeGoal}
            onChange={(e) => setIncomeGoal(e.target.value)}
          />
          <Input
            label="Hours Per Week"
            type="number"
            placeholder="e.g., 40"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(e.target.value)}
          />
          <Input
            label="Working Weeks Per Year"
            type="number"
            placeholder="e.g., 48"
            value={weeksPerYear}
            onChange={(e) => setWeeksPerYear(e.target.value)}
          />
          <Input
            label="Monthly Business Expenses (₹)"
            type="number"
            placeholder="e.g., 10000"
            value={expensesPerMonth}
            onChange={(e) => setExpensesPerMonth(e.target.value)}
          />
          <Input
            label="Market Avg. Rate (Optional ₹)"
            type="number"
            placeholder="e.g., 1200"
            value={marketAvgRate}
            onChange={(e) => setMarketAvgRate(e.target.value)}
          />
          <Input
            label="Experience Multiplier (e.g., 1.0)"
            type="number"
            step="0.1"
            placeholder="e.g., 1.2"
            value={experienceMultiplier}
            onChange={(e) => setExperienceMultiplier(e.target.value)}
          />
          <Input
            label="Confidence Factor (e.g., 0.2 = 20%)"
            type="number"
            step="0.05"
            placeholder="e.g., 0.2"
            value={confidenceFactor}
            onChange={(e) => setConfidenceFactor(e.target.value)}
          />
          <div className="flex items-end">
            <Button onClick={calculateHourlyRate}>Calculate</Button>
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}

        {results && (
          <div className="mt-6 space-y-2 text-center">
            <p className="text-sm text-gray-600">Base Rate: ₹{results.baseRate} / hour</p>
            <p className="text-sm text-gray-600">Final Rate (Experience & Confidence): ₹{results.finalRate} / hour</p>
            <p className="text-lg font-bold text-black">Suggested Rate: ₹{results.suggestedRate} / hour</p>
          </div>
        )}
      </CardContent>
    </Card>
  </main>
);

}
