const express = require('express');
const cors    = require('cors');
const path    = require('path');
const app     = express();
const PORT    = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// ─────────────────────────────────────────────
// Static files — serve the public folder
// ─────────────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));

// ─────────────────────────────────────────────
// Health Check
// ─────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'NutriMind AI' });
});

// ─────────────────────────────────────────────
// POST /recommend  — AI food recommendation
// Body: { mood: "stress" | "optimized" | "depleted" }
// ─────────────────────────────────────────────
const recommendations = {
  stress: {
    food:     'Dark Chocolate 🍫',
    reason:   'Rich in magnesium — calms the nervous system under stress',
    calories:  170,
    grade:    'B+',
    nutrients: { protein: '2g', carbs: '22g', fat: '12g' },
  },
  optimized: {
    food:     'Avocado Toast 🥑',
    reason:   'Healthy fats fuel peak cognitive performance',
    calories:  280,
    grade:    'A',
    nutrients: { protein: '7g', carbs: '28g', fat: '16g' },
  },
  depleted: {
    food:     'Banana & Peanut Butter 🍌',
    reason:   'Fast-acting carbs + protein to restore energy quickly',
    calories:  320,
    grade:    'A-',
    nutrients: { protein: '9g', carbs: '42g', fat: '10g' },
  },
};

app.post('/recommend', (req, res) => {
  const { mood } = req.body;
  if (!mood) return res.status(400).json({ error: 'mood is required' });

  const result = recommendations[mood.toLowerCase()];
  if (!result) return res.status(400).json({ error: `Unknown mood: ${mood}. Use stress, optimized, or depleted.` });

  res.json(result);
});

// ─────────────────────────────────────────────
// POST /scan  — Food scanner simulation
// Returns a random food from a pool
// ─────────────────────────────────────────────
const scannedFoods = [
  { food: 'Grilled Salmon 🐟',    calories: 367, grade: 'A',  health: 'Excellent', protein: '34g', carbs: '0g',  fat: '22g' },
  { food: 'Caesar Salad 🥗',      calories: 220, grade: 'A-', health: 'Great',     protein: '6g',  carbs: '8g',  fat: '18g' },
  { food: 'Cheeseburger 🍔',      calories: 520, grade: 'C',  health: 'Poor',      protein: '28g', carbs: '44g', fat: '26g' },
  { food: 'Acai Bowl 🫐',         calories: 290, grade: 'A',  health: 'Excellent', protein: '5g',  carbs: '54g', fat: '8g'  },
  { food: 'Margherita Pizza 🍕',  calories: 480, grade: 'C+', health: 'Moderate',  protein: '18g', carbs: '58g', fat: '18g' },
];

app.post('/scan', (req, res) => {
  const result = scannedFoods[Math.floor(Math.random() * scannedFoods.length)];
  // Add a slight artificial delay to simulate scanning
  setTimeout(() => res.json(result), 800);
});

// ─────────────────────────────────────────────
// GET /insights  — Health analytics data
// ─────────────────────────────────────────────
app.get('/insights', (req, res) => {
  res.json({
    insight: "Your stress levels correlate with high sugar intake on weekdays. Try a magnesium-rich meal to balance your cortisol.",
    totalCalories:  2482,
    caloriePct:      85,    // % of daily goal
    topMood:        'Focused',
    topMoodPct:      74,
    streak:          14,
    bioScore:        78,
    log: [
      { icon: 'coffee',     name: 'Oatmilk Latte',      time: '08:15 AM', tag: 'LOW CALORIC IMPACT', calories: 120, color: 'secondary' },
      { icon: 'restaurant', name: 'Quinoa Salmon Bowl',  time: '12:30 PM', tag: 'HIGH PROTEIN',        calories: 540, color: 'tertiary'  },
      { icon: 'lunch_dining', name: 'Avocado Toast',    time: '07:00 AM', tag: 'HEALTHY FATS',        calories: 280, color: 'primary'   },
      { icon: 'local_cafe',  name: 'Green Smoothie',    time: '03:30 PM', tag: 'MICRONUTRIENT RICH',  calories: 180, color: 'secondary' },
    ],
  });
});

// ─────────────────────────────────────────────
// Fallback — serve index.html for any unknown route
// ─────────────────────────────────────────────
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅  NutriMind AI server running → http://localhost:${PORT}`);
});
