import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Enhanced UI Components with Apple-inspired design
const Card = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 ${className}`}
  >
    {children}
  </motion.div>
);

const Input = ({ label, value, onChange, type = "text", placeholder, disabled = false, prefix, suffix, error }) => (
  <motion.div 
    className="space-y-2"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
  >
    <label className="block text-sm font-medium text-gray-700 tracking-wide">
      {label}
    </label>
    <div className="relative">
      {prefix && (
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
          {prefix}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`
          w-full px-4 py-4 ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-12' : ''}
          bg-gray-50/50 border border-gray-200 rounded-2xl 
          focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500
          disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
          transition-all duration-200 ease-out
          text-base font-medium
          placeholder:text-gray-400
        `}
      />
      {suffix && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
          {suffix}
        </div>
      )}
    </div>
    {error && (
      <motion.p 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        className="text-sm text-red-500 font-medium"
      >
        {error}
      </motion.p>
    )}
  </motion.div>
);

const Select = ({ label, value, onChange, options, disabled = false }) => (
  <motion.div 
    className="space-y-2"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4 }}
  >
    <label className="block text-sm font-medium text-gray-700 tracking-wide">
      {label}
    </label>
    <select
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl 
                 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500
                 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed
                 transition-all duration-200 ease-out text-base font-medium appearance-none
                 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzZCNzI4MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==')] bg-no-repeat bg-[position:right_1.25rem_center] pr-12"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </motion.div>
);

const Button = ({ children, onClick, variant = "primary", disabled = false, loading = false }) => {
  const baseClasses = "w-full py-4 px-6 rounded-2xl font-semibold text-base transition-all duration-200 ease-out transform";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200"
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variants[variant]} disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {loading ? (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          <span>Calculating...</span>
        </div>
      ) : children}
    </motion.button>
  );
};

const ResultCard = ({ results, currency }) => {
  const formatCurrency = (value) => {
    const symbol = currency === "USD" ? "$" : "₹";
    return `${symbol}${parseFloat(value).toLocaleString()}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100"
    >
      <div className="text-center space-y-6">
        <div>
          <p className="text-sm text-gray-600 font-medium mb-2">Your Suggested Hourly Rate</p>
          <p className="text-4xl font-bold text-blue-600 tracking-tight">
            {formatCurrency(results.suggestedRate)}
          </p>
          <p className="text-sm text-gray-500 mt-1">per hour</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blue-200">
          <div className="text-center p-4 bg-white/60 rounded-2xl">
            <p className="text-xs text-gray-500 font-medium">Weekly</p>
            <p className="text-lg font-semibold text-gray-800">{formatCurrency(results.weeklyRate)}</p>
          </div>
          <div className="text-center p-4 bg-white/60 rounded-2xl">
            <p className="text-xs text-gray-500 font-medium">Monthly</p>
            <p className="text-lg font-semibold text-gray-800">{formatCurrency(results.monthlyRate)}</p>
          </div>
        </div>

        <details className="text-left">
          <summary className="cursor-pointer text-sm text-gray-600 font-medium hover:text-gray-800 transition-colors">
            View breakdown
          </summary>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between p-2 bg-white/40 rounded-lg">
              <span className="text-gray-600">Base Rate:</span>
              <span className="font-medium">{formatCurrency(results.baseRate)}/hr</span>
            </div>
            <div className="flex justify-between p-2 bg-white/40 rounded-lg">
              <span className="text-gray-600">With Experience & Confidence:</span>
              <span className="font-medium">{formatCurrency(results.finalRate)}/hr</span>
            </div>
          </div>
        </details>
      </div>
    </motion.div>
  );
};

const FIELD_RATES = {
  "Web Development": 1250,
  "Graphic Design": 1050,
  "Thumbnail Design": 650,
  "Video Editing": 5000,
  "UI/UX Design": 5000,
  "Content Writing": 1250,
  "Social Media Management": 1050,
  "SEO Services": 2500,
  "Illustration": 1550,
  "3D Modeling": 5000,
};

const CURRENCY_CONVERSION = {
  INR: 1,
  USD: 0.012,
};

export default function Calculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  // Form state
  const [selectedField, setSelectedField] = useState("Web Development");
  const [currency, setCurrency] = useState("INR");
  const [incomeGoal, setIncomeGoal] = useState('');
  const [hoursPerWeek, setHoursPerWeek] = useState('');
  const [weeksPerYear, setWeeksPerYear] = useState('48');
  const [expensesPerMonth, setExpensesPerMonth] = useState('');
  const [marketAvgRate, setMarketAvgRate] = useState('');
  const [experienceMultiplier, setExperienceMultiplier] = useState('1.0');
  const [confidenceFactor, setConfidenceFactor] = useState('0.2');
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({});

  // Auto-fill market rate
  useEffect(() => {
    if (selectedField === "Other") {
      setMarketAvgRate('');
    } else {
      const avg = FIELD_RATES[selectedField];
      setMarketAvgRate(avg ? avg.toString() : '');
    }
  }, [selectedField]);

  // Recalculate on currency change
  useEffect(() => {
    if (results) {
      calculateHourlyRate();
    }
  }, [currency]);

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!incomeGoal || parseFloat(incomeGoal) <= 0) {
        newErrors.incomeGoal = "Please enter a valid income goal";
      }
      if (!hoursPerWeek || parseFloat(hoursPerWeek) <= 0 || parseFloat(hoursPerWeek) > 168) {
        newErrors.hoursPerWeek = "Please enter valid working hours (1-168)";
      }
      if (!expensesPerMonth || parseFloat(expensesPerMonth) < 0) {
        newErrors.expensesPerMonth = "Please enter valid monthly expenses";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const calculateHourlyRate = async () => {
    if (!validateStep(1)) return;
    
    setLoading(true);
    
    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const income = parseFloat(incomeGoal);
    const hours = parseFloat(hoursPerWeek);
    const weeks = parseFloat(weeksPerYear);
    const expenses = parseFloat(expensesPerMonth);
    const marketRate = parseFloat(marketAvgRate);
    const multiplier = parseFloat(experienceMultiplier);
    const confidence = parseFloat(confidenceFactor);

    const currencyMultiplier = currency === "USD" ? 83 : 1;

    const incomeINR = income * currencyMultiplier;
    const expensesINR = expenses * currencyMultiplier;
    const marketRateINR = !isNaN(marketRate) ? marketRate * currencyMultiplier : NaN;

    const yearlyExpenses = expensesINR * 12;
    const yearlyIncomeGoal = (incomeINR * 12) + yearlyExpenses;
    const totalWorkingHours = hours * weeks;
    const baseRateINR = yearlyIncomeGoal / totalWorkingHours;
    const adjustedRateINR = baseRateINR * (1 + confidence);
    const finalRateINR = adjustedRateINR * multiplier;

    const suggestedRateINR = !isNaN(marketRateINR)
      ? (finalRateINR + marketRateINR) / 2
      : finalRateINR;

    const rateInSelectedCurrency = (val) =>
      (val * CURRENCY_CONVERSION[currency]).toFixed(2);

    setResults({
      baseRate: rateInSelectedCurrency(baseRateINR),
      finalRate: rateInSelectedCurrency(finalRateINR),
      suggestedRate: rateInSelectedCurrency(suggestedRateINR),
      weeklyRate: rateInSelectedCurrency(suggestedRateINR * hours),
      monthlyRate: rateInSelectedCurrency(suggestedRateINR * hours * 4),
    });
    
    setLoading(false);
    setCurrentStep(3);
  };

  const fieldOptions = [
    ...Object.keys(FIELD_RATES).map(field => ({ value: field, label: field })),
    { value: "Other", label: "Other" }
  ];

  const currencyOptions = [
    { value: "INR", label: "INR (₹)" },
    { value: "USD", label: "USD ($)" }
  ];

  const experienceOptions = [
    { value: "0.8", label: "Beginner (0-1 year)" },
    { value: "1.0", label: "Intermediate (1-3 years)" },
    { value: "1.3", label: "Advanced (3-5 years)" },
    { value: "1.6", label: "Expert (5+ years)" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto mt-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Pricing <span className="text-blue-600">Buddy</span>
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            Find your ideal hourly freelance rate with confidence
          </p>
          
          {/* Progress indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  step <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <Card key="step1" className="p-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Basic Information</h2>
                  <p className="text-gray-600">Tell us about your work and financial goals</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Select
                    label="Your Freelance Field"
                    value={selectedField}
                    onChange={(e) => setSelectedField(e.target.value)}
                    options={fieldOptions}
                  />
                  <Select
                    label="Preferred Currency"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    options={currencyOptions}
                  />
                </div>

                <Input
                  label="Monthly Income Goal"
                  type="number"
                  value={incomeGoal}
                  onChange={(e) => setIncomeGoal(e.target.value)}
                  placeholder="50000"
                  prefix={currency === "USD" ? "$" : "₹"}
                  error={errors.incomeGoal}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Hours Per Week"
                    type="number"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(e.target.value)}
                    placeholder="40"
                    suffix="hrs"
                    error={errors.hoursPerWeek}
                  />
                  <Input
                    label="Working Weeks Per Year"
                    type="number"
                    value={weeksPerYear}
                    onChange={(e) => setWeeksPerYear(e.target.value)}
                    placeholder="48"
                    suffix="weeks"
                  />
                </div>

                <Input
                  label="Monthly Business Expenses"
                  type="number"
                  value={expensesPerMonth}
                  onChange={(e) => setExpensesPerMonth(e.target.value)}
                  placeholder="10000"
                  prefix={currency === "USD" ? "$" : "₹"}
                  error={errors.expensesPerMonth}
                />

                <Button onClick={handleNext}>
                  Continue to Advanced Settings
                </Button>
              </motion.div>
            </Card>
          )}

          {currentStep === 2 && (
            <Card key="step2" className="p-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">Fine-tune Your Rate</h2>
                  <p className="text-gray-600">Adjust these settings to match your experience and market position</p>
                </div>

                <Input
                  label={`Market Average Rate ${selectedField === "Other" ? "(Optional)" : "(Auto-filled)"}`}
                  type="number"
                  value={marketAvgRate}
                  onChange={(e) => setMarketAvgRate(e.target.value)}
                  placeholder="1200"
                  prefix={currency === "USD" ? "$" : "₹"}
                  disabled={selectedField !== "Other"}
                />

                <Select
                  label="Experience Level"
                  value={experienceMultiplier}
                  onChange={(e) => setExperienceMultiplier(e.target.value)}
                  options={experienceOptions}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 tracking-wide mb-2">
                    Confidence Buffer: {Math.round(parseFloat(confidenceFactor) * 100)}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="0.5"
                    step="0.05"
                    value={confidenceFactor}
                    onChange={(e) => setConfidenceFactor(e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Conservative</span>
                    <span>Aggressive</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button 
                    variant="secondary" 
                    onClick={() => setCurrentStep(1)}
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={calculateHourlyRate}
                    loading={loading}
                  >
                    Calculate My Rate
                  </Button>
                </div>
              </motion.div>
            </Card>
          )}

          {currentStep === 3 && results && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <ResultCard results={results} currency={currency} />
              
              <div className="flex space-x-4">
                <Button 
                  variant="secondary" 
                  onClick={() => {
                    setCurrentStep(1);
                    setResults(null);
                  }}
                >
                  Start Over
                </Button>
                <Button 
                  onClick={() => setCurrentStep(2)}
                  variant="secondary"
                >
                  Adjust Settings
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(59, 130, 246, 0.3);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3B82F6;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
}