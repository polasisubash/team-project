import React, { useState } from 'react';

const computeBmi = (weightKg, heightCm) => {
  if (!weightKg || !heightCm) return null;
  const h = heightCm / 100;
  const bmi = weightKg / (h * h);
  return Math.round(bmi * 10) / 10;
};

const getBmiCategory = (bmi) => {
  if (bmi == null) return 'Unknown';
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
};

const generateWorkoutSplit = (goal, fitnessLevel, workoutDays) => {
  const days = Number(workoutDays) || 3;
  const split = [];

  const push = { title: 'Push (Chest/Shoulders/Triceps) 🔥', exercises: ['Bench Press 4x8-10', 'Overhead Press 3x10', 'Incline DB Press 3x12', 'Lateral Raises 3x15', 'Triceps Pushdowns 3x12'] };
  const pull = { title: 'Pull (Back/Biceps) 💪', exercises: ['Deadlift 3x5 (light if beginner)', 'Lat Pulldown 4x10', 'Seated Row 3x12', 'Face Pulls 3x15', 'Hammer Curls 3x12'] };
  const legs = { title: 'Legs (Quads/Hamstrings/Glutes) 🦵', exercises: ['Squats 4x8', 'Romanian Deadlift 3x10', 'Lunges 3x12/leg', 'Leg Press 3x12', 'Calf Raises 4x15'] };
  const full = { title: 'Full Body ⚡', exercises: ['Squat 3x8', 'Bench Press 3x8', 'Row 3x10', 'Overhead Press 3x10', 'Plank 3x45s'] };
  const cardio = { title: 'Cardio & Core ❤️', exercises: ['20–30 min jog/cycle', 'Intervals 6x1min hard/1min easy', 'Plank 3x45s', 'Hanging Knee Raises 3x12'] };

  if (days <= 3) {
    if (goal === 'weight_loss') split.push(full, cardio, full);
    else if (goal === 'muscle_gain') split.push(full, push, pull);
    else split.push(full, legs, full);
  } else if (days === 4) {
    split.push(push, pull, legs, cardio);
  } else if (days >= 5) {
    split.push(push, pull, legs, full, cardio);
  }

  if (fitnessLevel === 'beginner') {
    split.forEach(d => d.note = 'Keep 2 reps in reserve (RIR 2). Focus on form.');
  } else if (fitnessLevel === 'advanced') {
    split.forEach(d => d.note = 'Progressively overload. Consider last set to near failure.');
  }
  return split;
};

const generateWeeklyMealPlan = (diet, goal, weightKg) => {
  const kcalBase = Math.max(1400, Math.round((weightKg || 70) * 28));
  const kcal = goal === 'weight_loss' ? kcalBase - 300 : goal === 'muscle_gain' ? kcalBase + 300 : kcalBase;

  const banks = {
    omnivore: {
      breakfast: [
        'Greek yogurt + berries + granola',
        'Scrambled eggs, whole grain toast, avocado',
        'Protein smoothie (banana, whey, milk)',
        'Overnight oats + peanut butter + chia',
        'Cottage cheese bowl + pineapple',
        'Veg omelette + toast',
        'Yogurt parfait + nuts'
      ],
      lunch: [
        'Grilled chicken bowl (quinoa, greens, olive oil)',
        'Turkey sandwich + side salad',
        'Sushi bowl (rice, salmon, cucumber, edamame)',
        'Chicken Caesar wrap',
        'Beef steak + roasted potatoes + veggies',
        'Chicken stir-fry + rice',
        'Tuna salad + crackers'
      ],
      snack: [
        'Apple + peanut butter',
        'Protein bar',
        'Yogurt + nuts',
        'Carrots + hummus',
        'Banana + almonds',
        'Trail mix',
        'Cheese sticks'
      ],
      dinner: [
        'Salmon, sweet potato, broccoli',
        'Chicken pasta + marinara + salad',
        'Beef chili + rice',
        'Shrimp tacos + slaw',
        'Chicken curry + rice',
        'Baked cod + quinoa + greens',
        'Turkey meatballs + whole wheat pasta'
      ]
    },
    vegetarian: {
      breakfast: [
        'Oats with milk, banana, chia',
        'Greek yogurt + granola + berries',
        'Smoothie bowl (spinach, banana, soy milk)',
        'Avocado toast + tomato',
        'Peanut butter toast + banana',
        'Idli + sambar (if available)',
        'Paneer bhurji + toast'
      ],
      lunch: [
        'Chickpea salad + feta + veggies',
        'Paneer bowl + brown rice + veggies',
        'Veggie wrap + yogurt dip',
        'Lentil soup + bread',
        'Tofu stir-fry + rice',
        'Rajma + rice + salad',
        'Hummus + pita + salad'
      ],
      snack: ['Trail mix', 'Fruit + nuts', 'Yogurt + honey', 'Granola bar', 'Carrots + hummus', 'Roasted chana', 'Cheese + crackers'],
      dinner: [
        'Paneer/tofu curry + brown rice + beans',
        'Veg biryani + raita',
        'Pasta primavera + parmesan',
        'Stuffed peppers + quinoa',
        'Veg chili + corn bread',
        'Tofu fried rice',
        'Dal + roti + salad'
      ]
    },
    vegan: {
      breakfast: ['Tofu scramble + toast + avocado', 'Overnight oats + almond milk', 'Smoothie bowl + granola', 'Chia pudding + fruit', 'Peanut butter toast + banana', 'Vegan yogurt + berries', 'Oat pancakes + maple'],
      lunch: ['Lentil bowl + roasted veg + tahini', 'Falafel wrap + salad', 'Tofu salad + quinoa', 'Vegan burrito bowl', 'Veg sushi bowl', 'Chickpea salad sandwich', 'Avocado pasta salad'],
      snack: ['Hummus + carrots', 'Fruit + nuts', 'Trail mix', 'Popcorn', 'Protein shake (plant)', 'Apple + almond butter', 'Roasted edamame'],
      dinner: ['Bean chili + quinoa + salad', 'Stir-fry tofu + brown rice', 'Curry chickpeas + roti', 'Vegan burgers + sweet potato', 'Pasta arrabbiata + salad', 'Stuffed peppers + rice', 'Vegan tacos']
    },
    keto: {
      breakfast: ['Eggs + avocado + spinach', 'Omelette + cheese + veggies', 'Greek yogurt (low-carb) + nuts', 'Chia pudding + coconut', 'Frittata slice', 'Smoked salmon + cream cheese roll-ups', 'Scrambled eggs + bacon'],
      lunch: ['Turkey lettuce wraps + olives', 'Chicken salad + olive oil', 'Zoodle bowl + pesto + chicken', 'Bun-less burger + salad', 'Egg salad + cucumbers', 'Tuna salad + avocado', 'Grilled chicken + greens'],
      snack: ['Mixed nuts', 'Cheese + olives', 'Cucumber + cream cheese', 'Beef jerky', 'Celery + peanut butter', 'Walnuts', 'Greek yogurt (low-carb)'],
      dinner: ['Steak + cauliflower mash + asparagus', 'Baked salmon + zucchini', 'Chicken thighs + broccoli + butter', 'Pork chops + green beans', 'Shrimp + garlic butter + spinach', 'Meatballs + zoodles', 'Cauliflower crust pizza']
    },
    mediterranean: {
      breakfast: ['Greek yogurt + walnuts + figs', 'Avocado toast + egg', 'Oats + olive oil + fruit', 'Fruit + cheese + bread', 'Parfait + honey', 'Tomato + cucumber + feta plate', 'Yogurt + granola'],
      lunch: ['Tuna salad + olive oil + cucumbers', 'Chicken souvlaki wrap', 'Shrimp salad + lemon', 'Mediterranean bowl (farro, veg, hummus)', 'Pita + falafel + salad', 'Lentil soup + bread', 'Grilled chicken + tabbouleh'],
      snack: ['Orange + almonds', 'Olives + feta', 'Fruit cup', 'Hummus + veggies', 'Walnuts + dates', 'Yogurt + honey', 'Crackers + cheese'],
      dinner: ['Chicken souvlaki + couscous + salad', 'Grilled fish + lemon + greens', 'Baked chicken + potatoes + veg', 'Pasta + olive oil + tomatoes', 'Stuffed eggplant', 'Shrimp orzo', 'Lamb + salad']
    }
  };

  const bank = banks[diet] || banks.omnivore;
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const week = Array.from({ length: 7 }).map((_, i) => ({
    day: dayNames[i],
    meals: [
      { name: 'Breakfast', menu: bank.breakfast[i % bank.breakfast.length] },
      { name: 'Lunch', menu: bank.lunch[i % bank.lunch.length] },
      { name: 'Snack', menu: bank.snack[i % bank.snack.length] },
      { name: 'Dinner', menu: bank.dinner[i % bank.dinner.length] },
    ]
  }));

  return { kcal, week };
};

// Alternative plans
const generateWorkoutSplitAlt = (goal, fitnessLevel, workoutDays) => {
  const days = Number(workoutDays) || 3;
  const split = [];
  const upper = { title: 'Upper Body 💪', exercises: ['Incline Bench 4x10', 'Pull-ups or Assisted 3xAMRAP', 'Arnold Press 3x12', 'Cable Row 4x10', 'EZ Bar Curl 3x12'] };
  const lower = { title: 'Lower Body 🦵', exercises: ['Front Squat 4x8', 'Hip Thrust 3x12', 'Leg Curl 3x15', 'Walking Lunges 3x12/leg', 'Standing Calf Raise 4x15'] };
  const fullAlt = { title: 'Full Body Alt ⚡', exercises: ['Goblet Squat 3x12', 'Push-ups 3xAMRAP', 'Single-arm Row 3x12/side', 'DB Shoulder Press 3x12', 'Side Plank 3x30s/side'] };
  const cardioCore = { title: 'Cardio & Core ❤️', exercises: ['Bike 25–35 min', 'Row Intervals 6x45s', 'Pallof Press 3x12/side', 'Dead Bug 3x10/side'] };

  if (days <= 3) {
    if (goal === 'weight_loss') split.push(fullAlt, cardioCore, upper);
    else if (goal === 'muscle_gain') split.push(upper, lower, fullAlt);
    else split.push(fullAlt, lower, upper);
  } else if (days === 4) {
    split.push(upper, lower, fullAlt, cardioCore);
  } else if (days >= 5) {
    split.push(upper, lower, fullAlt, cardioCore, upper);
  }

  if (fitnessLevel === 'beginner') {
    split.forEach(d => d.note = 'Control tempo (3s down). Leave 2 reps in reserve.');
  } else if (fitnessLevel === 'advanced') {
    split.forEach(d => d.note = 'Last set optional drop-set or rest-pause on isolation work.');
  }
  return split;
};

const generateWeeklyMealPlanAlt = (diet, goal, weightKg) => {
  const alt = generateWeeklyMealPlan(diet, goal, weightKg);
  // rotate each meal bank by +1 to create alternatives for each day
  const rotated = alt.week.map((day, idx) => ({
    day: day.day,
    meals: [
      { name: 'Breakfast', menu: day.meals[(0 + 1) % day.meals.length]?.menu || day.meals[0].menu },
      { name: 'Lunch', menu: day.meals[(1 + 1) % day.meals.length]?.menu || day.meals[1].menu },
      { name: 'Snack', menu: day.meals[(2 + 1) % day.meals.length]?.menu || day.meals[2].menu },
      { name: 'Dinner', menu: day.meals[(3 + 1) % day.meals.length]?.menu || day.meals[3].menu },
    ]
  }));
  return { kcal: alt.kcal, week: rotated };
};

const generateTips = (goal, bmiCategory) => {
  const tips = [];
  if (goal === 'weight_loss') tips.push('Aim for 7–9k steps daily and 300–500 kcal deficit.');
  if (goal === 'muscle_gain') tips.push('Hit protein ~1.6–2.2g/kg and sleep 7–9 hours.');
  if (goal === 'endurance') tips.push('Keep 2–3 cardio sessions with 1 long slow distance.');
  if (bmiCategory === 'Underweight') tips.push('Focus on surplus calories and compound lifts.');
  if (bmiCategory === 'Obese') tips.push('Prioritize joint-friendly cardio and gradual progression.');
  tips.push('Progress slowly: +2.5–5kg per lift when all sets/reps feel strong.');
  return tips;
};

const AIPlans = ({ userProfile }) => {
  const [showAlt, setShowAlt] = useState(false);
  const bmi = computeBmi(userProfile.weight, userProfile.height);
  const bmiCategory = getBmiCategory(bmi);
  const primarySplit = generateWorkoutSplit(userProfile.goal, userProfile.fitnessLevel, userProfile.workoutDays);
  const altSplit = generateWorkoutSplitAlt(userProfile.goal, userProfile.fitnessLevel, userProfile.workoutDays);
  const primaryMeal = generateWeeklyMealPlan(userProfile.diet, userProfile.goal, userProfile.weight);
  const altMeal = generateWeeklyMealPlanAlt(userProfile.diet, userProfile.goal, userProfile.weight);
  const split = showAlt ? altSplit : primarySplit;
  const meal = showAlt ? altMeal : primaryMeal;
  const tips = generateTips(userProfile.goal, bmiCategory);

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0), rgba(245,240,255,0.7))',
        borderRadius: '1rem',
        padding: '1rem'
      }}
    >
      <div
        className="bg-white rounded-lg shadow-md p-6 mb-6"
        style={{ boxShadow: '0 18px 36px rgba(118,75,162,0.18)' }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">💪 Your AI Fitness Plan</h3>
        <div className="flex items-center justify-center gap-3 mb-4">
          <button
            className={`btn ${showAlt ? 'btn-ghost' : 'btn-primary'}`}
            style={{ minWidth: '160px', border: showAlt ? '1px solid #c7d2fe' : 'none' }}
            onClick={() => setShowAlt(false)}
          >
            Primary Plan
          </button>
          <button
            className={`btn ${showAlt ? 'btn-primary' : 'btn-ghost'}`}
            style={{ minWidth: '180px', border: showAlt ? 'none' : '1px solid #c7d2fe', color: showAlt ? '#fff' : '#4338ca', background: showAlt ? undefined : 'rgba(199,210,254,0.25)' }}
            onClick={() => setShowAlt(true)}
          >
            Alternative Plan
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg" style={{ background: '#eef2ff' }}>
            <div className="text-sm text-gray-600">Fitness Level</div>
            <div className="font-semibold">{userProfile.fitnessLevel}</div>
          </div>
          <div className="p-4 rounded-lg" style={{ background: '#e9d8fd' }}>
            <div className="text-sm text-gray-600">Goal</div>
            <div className="font-semibold">{userProfile.goal}</div>
          </div>
          <div className="p-4 rounded-lg" style={{ background: '#cffafe' }}>
            <div className="text-sm text-gray-600">Workout Days/Week</div>
            <div className="font-semibold">{userProfile.workoutDays}</div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-purple-50 rounded-lg" style={{ border: '1px solid #e9d8fd' }}>
          <p className="text-sm text-purple-700">
            <strong>Profile Summary:</strong> {userProfile.age}y, {userProfile.gender}, {userProfile.height} cm, {userProfile.weight} kg, diet: {userProfile.diet}
            {bmi != null && (
              <span> • BMI: <strong>{bmi}</strong> ({bmiCategory})</span>
            )}
          </p>
        </div>
      </div>

      {/* Workout Plan */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6" style={{ boxShadow: '0 18px 36px rgba(102,126,234,0.18)' }}>
        <h4 className="text-lg font-bold text-gray-900 mb-4">🏋️ Weekly Workout Schedule</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {split.map((day, index) => (
            <div key={index} className="p-4 rounded-lg card-hover" style={{ background: '#f8fafc' }}>
              <div className="font-semibold mb-2">Day {index + 1}: {day.title}</div>
              <ul className="list-disc pl-5 text-gray-700">
                {day.exercises.map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
              {day.note && <div className="mt-2 text-xs text-gray-500">{day.note}</div>}
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Meal Plan */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6" style={{ boxShadow: '0 18px 36px rgba(31,41,55,0.12)' }}>
        <h4 className="text-lg font-bold text-gray-900 mb-2">🍽️ Weekly Meal Plan ({userProfile.diet})</h4>
        <div className="text-sm text-gray-600 mb-4">Estimated target: ~{meal.kcal} kcal/day</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {meal.week.map((day, di) => (
            <div key={di} className="p-4 rounded-lg" style={{ background: '#f8fafc', border: '1px solid #e5e7eb' }}>
              <div className="font-semibold mb-2">{day.day}</div>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {day.meals.map((m, i) => (
                  <li key={i}><strong>{m.name}:</strong> {m.menu}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-white rounded-lg shadow-md p-6" style={{ boxShadow: '0 18px 36px rgba(118,75,162,0.18)' }}>
        <h4 className="text-lg font-bold text-gray-900 mb-2">💡 Coaching Tips</h4>
        <ul className="list-disc pl-5 text-gray-700">
          {tips.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AIPlans;