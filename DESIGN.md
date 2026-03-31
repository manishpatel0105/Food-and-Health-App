# Design System: Food Scanner
**Project ID:** 16498916159251345669

# Design System Strategy: The Neon Kinetic Framework

## 1. Overview & Creative North Star
**The Creative North Star: "The Synthetic Biome"**
This design system rejects the sterile, flat aesthetics of traditional health apps. Instead, it positions the user as a high-tech "Bio-Hacker" navigating a sophisticated, data-rich interface. The system moves beyond "Cyberpunk" cliches by employing a "Synthetic Biome" approach: combining the aggressive precision of high-tech machinery with the fluid, organic gradients of digital health.

We break the "template" look through **Kinetic Asymmetry**. Layouts should not feel like static grids but like active HUDs (Heads-Up Displays). Elements should overlap slightly, using high-contrast typography scales and varying surface densities to create a sense of deep, digital space.

---

## 2. Colors: Chromatic Energy
The palette is a high-contrast interplay between the absolute void of the background and the electric energy of the functional accents.

### The Palette
*   **Background (The Void):** `#070e1b`. All primary canvases must use this deep navy-black.
*   **Primary (Pulse Purple):** `#df8eff`. Use this for high-priority actions and "Bio-AI" moments.
*   **Secondary (Cyber Cyan):** `#00eefc`. Reserved for hydration, cooling, and stability data.
*   **Tertiary (Vibrant Nerve):** `#ff6e81`. Used for metabolic heat, warnings, and high-energy alerts.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning. Structural boundaries are defined by:
1.  **Tonal Transitions:** Moving from `surface` to `surface-container-low`.
2.  **Luminescent Fills:** Using a very low-opacity `primary` or `secondary` tint to fill a container background instead of outlining it.
3.  **Negative Space:** Utilizing the `Spacing Scale` (specifically `spacing.8` and `spacing.12`) to allow the eye to define regions.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, semi-transparent layers.
*   **Level 0 (Base):** `surface` (#070e1b).
*   **Level 1 (Sectioning):** `surface-container-low`.
*   **Level 2 (Active Cards):** `surface-container-high` with a 15-20px `backdrop-blur`.
*   **Level 3 (Pop-overs/Modals):** `surface-bright`.

### The "Glass & Gradient" Rule
All high-fidelity components must utilize **Linear Gradients** rather than flat fills. Main CTAs should transition from `primary` (#df8eff) to `primary-container` (#d878ff) at a 135-degree angle to provide a "lit-from-within" glow.

---

## 3. Typography: Data Editorial
We utilize a hierarchy that balances the aggressive geometry of `Space Grotesk` with the high-utility legibility of `Inter`.

*   **Display & Headlines (Space Grotesk):** Use `display-lg` (3.5rem) for hero stats (e.g., daily calorie totals). These should feel like "environmental typography" in a sci-fi HUD.
*   **Titles & Body (Inter):** Use `title-md` and `body-lg` for all instructional content. The clean nature of Inter provides a necessary "grounding" effect against the vibrant headers.
*   **Labels (The "Code" Style):** Use `label-sm` in uppercase with a `0.1em` letter-spacing. This evokes a "data readout" aesthetic, perfect for metadata like "MACRONUTRIENT_PROFILE" or "TIMESTAMP_0800".

---

## 4. Elevation & Depth: The HUD Principle
Depth is achieved through **Luminescent Layering** rather than shadows.

*   **The Layering Principle:** Place a `surface-container-highest` card on a `surface` background. To emphasize depth, apply a `primary` tint at 2% opacity to the top layer.
*   **Ambient Glows:** Traditional shadows are replaced by **Ambient Glows**. Use the `primary` or `secondary` token for the shadow color, with a `24px` to `40px` blur and an opacity no higher than `12%`. This makes components appear to hover via electromagnetic lift.
*   **The "Ghost Border" Fallback:** When a boundary is essential, use `outline-variant` at **15% opacity**. This "Ghost Border" should look like a faint light-leak at the edge of a glass pane.
*   **Glassmorphism:** All cards must use `surface-variant` at 40-60% opacity with a `backdrop-filter: blur(12px)`.

---

## 5. Components: The High-Tech Toolkit

### Buttons (Tactile Triggers)
*   **Primary:** Gradient fill (`primary` to `primary-dim`), `rounded-sm` (0.125rem) for a sharp, military feel. Add a 1px "Ghost Border" using `on-primary` at 20% opacity.
*   **Secondary:** No fill. `outline` border. On hover, the background pulses with a 10% `secondary` tint.

### Input Fields (Data Entry)
*   Forgo the four-sided box. Use a "Bracket" style: a `2px` bottom border of `outline` that turns into `secondary` (Cyan) upon focus, with small vertical ticks at the ends.

### Cards & Lists (The Intelligence Feed)
*   **Rule:** No dividers. Separate items using `surface-container-lowest` for the item background and `spacing.2` as a gap to let the `surface` (void) peek through.
*   **Nesting:** A "Meal Card" might use `surface-container-high`, while the "Ingredients List" inside it uses `surface-container-low`.

### Signature Component: The "Bio-Gauge"
A bespoke circular or semi-circular progress tracker using `primary` gradients for progress and `surface-variant` for the track. Add a `pulse` animation to the "current value" node to simulate a heartbeat.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use intentional asymmetry. Align a headline to the left but offset the body text to the right using `spacing.10`.
*   **Do** use monochromatic icon sets with a `0 0 8px` glow effect in their respective category color (e.g., Green for vitamins, Red for heart rate).
*   **Do** use `spaceGrotesk` for numbers. Numbers are data; data is the hero of the app.

### Don't:
*   **Don't** use standard `rounded-lg` (0.5rem) for everything. Stick to `rounded-sm` or `none` for a more aggressive, futuristic edge.
*   **Don't** use pure white (#ffffff) for body text. Use `on-surface-variant` (#a5abbd) to reduce eye strain in dark environments.
*   **Don't** use standard Material or iOS transition speeds. Use "Snappy" eases (e.g., `cubic-bezier(0.4, 0, 0.2, 1)`) with durations under 200ms to feel high-performance.