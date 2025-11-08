import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'fitnessTrackerLogs';

const defaultActivities = [
  { key: 'steps', label: 'Steps 🚶', placeholder: 'e.g., 7500' },
  { key: 'water', label: 'Water (ml) 💧', placeholder: 'e.g., 2000' },
  { key: 'sleep', label: 'Sleep (hrs) 😴', placeholder: 'e.g., 7.5' },
  { key: 'calories', label: 'Calories (kcal) 🔥', placeholder: 'e.g., 2200' },
];

function todayKey() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

const FitnessTracker = () => {
  const [logs, setLogs] = useState({});
  const [entry, setEntry] = useState({ steps: '', water: '', sleep: '', calories: '' });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setLogs(JSON.parse(saved));
  }, []);

  const saveLogs = (next) => {
    setLogs(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  };

  const submit = (e) => {
    e.preventDefault();
    const key = todayKey();
    const next = { ...logs, [key]: { ...entry, date: key } };
    saveLogs(next);
  };

  const recent = Object.values(logs)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 7);

  const reviewToday = (() => {
    const key = todayKey();
    const e = logs[key];
    if (!e) return null;
    const num = (v) => {
      const n = parseFloat(v);
      return Number.isFinite(n) ? n : null;
    };
    const steps = num(e.steps);
    const water = num(e.water);
    const sleep = num(e.sleep);
    const calories = num(e.calories);

    const report = [];
    // Steps
    if (steps == null) {
      report.push({ label: 'Steps', verdict: 'No data', tip: 'Try tracking steps with your phone or watch.' });
    } else if (steps >= 10000) {
      report.push({ label: 'Steps', verdict: 'Great ✅', tip: 'Excellent activity level, keep it up!' });
    } else if (steps >= 8000) {
      report.push({ label: 'Steps', verdict: 'Good 👍', tip: 'You’re close to 10k; a short evening walk would do it.' });
    } else {
      report.push({ label: 'Steps', verdict: 'Needs Improvement ⚠️', tip: 'Aim for 6–8k minimum; add a brisk 20-min walk.' });
    }
    
    // Water (ml)
    if (water == null) {
      report.push({ label: 'Water', verdict: 'No data', tip: 'Log your water intake; aim ~2000–3000 ml/day.' });
    } else if (water >= 2000 && water <= 3500) {
      report.push({ label: 'Water', verdict: 'Good 👍', tip: 'Hydration on point. Sip steadily through the day.' });
    } else if (water < 2000) {
      report.push({ label: 'Water', verdict: 'Needs Improvement ⚠️', tip: 'Carry a bottle; target +1–2 glasses each meal.' });
    } else {
      report.push({ label: 'Water', verdict: 'Caution ℹ️', tip: 'Very high intake; ensure electrolytes are balanced.' });
    }

    // Sleep (hrs)
    if (sleep == null) {
      report.push({ label: 'Sleep', verdict: 'No data', tip: 'Track sleep; target 7–9 hours consistently.' });
    } else if (sleep >= 7 && sleep <= 9) {
      report.push({ label: 'Sleep', verdict: 'Good 👍', tip: 'Solid rest range; keep regular bed/wake times.' });
    } else if (sleep < 7) {
      report.push({ label: 'Sleep', verdict: 'Needs Improvement ⚠️', tip: 'Try winding down 30–45 min earlier tonight.' });
    } else {
      report.push({ label: 'Sleep', verdict: 'Mixed ℹ️', tip: 'Oversleeping can signal fatigue; consider consistent schedule.' });
    }

    // Calories (kcal) — generic guidance
    if (calories == null) {
      report.push({ label: 'Calories', verdict: 'No data', tip: 'Logging helps align with your fitness goal.' });
    } else if (calories >= 1800 && calories <= 2600) {
      report.push({ label: 'Calories', verdict: 'Good 👍', tip: 'Reasonable intake; pair with adequate protein.' });
    } else if (calories < 1800) {
      report.push({ label: 'Calories', verdict: 'Needs Improvement ⚠️', tip: 'Very low; ensure enough protein and nutrients.' });
    } else {
      report.push({ label: 'Calories', verdict: 'Caution ℹ️', tip: 'High intake; add a walk or choose leaner options.' });
    }

    const goodCount = report.filter(r => /Good|Great/.test(r.verdict)).length;
    const overall = goodCount >= 3 ? 'Overall: Good day ✅' : goodCount === 2 ? 'Overall: Decent day 👍' : 'Overall: Keep improving 💪';

    return { report, overall };
  })();

  return (
    <div className="bg-white rounded-lg shadow-md p-6" style={{ boxShadow: '0 18px 36px rgba(31,41,55,0.12)' }}>
      <h4 className="text-lg font-bold text-gray-900 mb-4">📈 Fitness Tracker</h4>
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-4">
        {defaultActivities.map((a) => (
          <div key={a.key}>
            <label className="block text-xs text-gray-500 mb-1">{a.label}</label>
            <input
              type="number"
              value={entry[a.key]}
              onChange={(e) => setEntry({ ...entry, [a.key]: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder={a.placeholder}
            />
          </div>
        ))}
        <div className="flex items-end">
          <button type="submit" className="btn btn-primary">Save Today</button>
        </div>
      </form>

      {recent.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="pr-4 py-2">Date</th>
                <th className="pr-4 py-2">Steps</th>
                <th className="pr-4 py-2">Water (ml)</th>
                <th className="pr-4 py-2">Sleep (hrs)</th>
                <th className="pr-4 py-2">Calories</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((r) => (
                <tr key={r.date} className="border-t">
                  <td className="pr-4 py-2">{r.date}</td>
                  <td className="pr-4 py-2">{r.steps || '-'}</td>
                  <td className="pr-4 py-2">{r.water || '-'}</td>
                  <td className="pr-4 py-2">{r.sleep || '-'}</td>
                  <td className="pr-4 py-2">{r.calories || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {reviewToday && (
        <div className="mt-6 p-4 rounded-lg" style={{ background: '#f0f9ff', border: '1px solid #bae6fd' }}>
          <div className="font-semibold mb-2">Daily Review</div>
          <div className="text-sm text-gray-700 mb-2">{reviewToday.overall}</div>
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            {reviewToday.report.map((r, i) => (
              <li key={i}><strong>{r.label}:</strong> {r.verdict} — {r.tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FitnessTracker;


