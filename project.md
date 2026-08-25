# HTML to Next.js — Exact Conversion Project

## 1. Project Objective

I will provide an existing **HTML/CSS/JavaScript website source code**.

Your task is to convert the existing website into a **latest stable Next.js project** while preserving the original website as accurately as possible.

The converted Next.js application must reproduce the original HTML website's:

* Exact visual design
* Layout
* Section structure
* Typography
* Font sizes
* Font weights
* Colors
* Spacing
* Padding and margins
* Borders
* Border radius
* Shadows
* Images
* Icons
* Buttons
* Hover states
* Animations
* Transitions
* Responsive behavior
* Desktop layout
* Tablet layout
* Mobile layout
* Navigation behavior
* Scroll behavior
* Interactive elements

**Do not redesign the website.**

The goal is:

> **HTML source → Next.js implementation with maximum visual and functional fidelity.**

---

# 2. Framework Requirements

Use the **latest stable version of Next.js available at implementation time**.

Requirements:

* Next.js
* React
* JavaScript
* JSX
* Tailwind CSS
* Framer Motion where required
* React Bits only where it genuinely helps reproduce an existing effect
* No TypeScript
* No `.ts`
* No `.tsx`

Use JavaScript files:

```text
.js
.jsx
```

Do not introduce TypeScript anywhere in the project.

---

# 3. Existing Folder Requirement

The Next.js project must be created **inside the same folder where the provided HTML project exists**.

Do not create an unnecessary nested project such as:

```text
project/
    html-project/
    next-project/
```

Instead, the final structure should be organized directly inside the existing project folder.

Example:

```text
existing-project/
├── app/
├── components/
├── data/
├── public/
├── styles/
├── package.json
├── next.config.js
├── postcss.config.js
├── jsconfig.json
└── ...
```

Preserve useful existing assets whenever possible.

Do not unnecessarily duplicate files.

---

# 4. HTML Source Analysis — Mandatory First Step

Before writing Next.js code, inspect the complete HTML source.

Understand:

* Overall page structure
* Header
* Navigation
* Hero
* Sections
* Cards
* Testimonials
* Statistics
* Forms
* Footer
* Images
* SVGs
* Icons
* Scripts
* Animations
* Responsive CSS
* JavaScript interactions
* External libraries
* Repeated UI patterns

Do not start converting section-by-section blindly.

First understand the entire website structure and relationships between sections.

---

# 5. Preserve the Original Design

The original HTML is the **single source of truth** for the design.

Do not make creative design decisions unless absolutely necessary for technical conversion.

Do not:

* Change colors
* Change fonts
* Change spacing
* Change section order
* Change card design
* Change button design
* Replace images unnecessarily
* Simplify the layout
* Add modern UI patterns that were not present
* Remove visual details
* Add unnecessary gradients
* Add unnecessary animations
* Redesign the mobile layout

The Next.js version should look like the original website.

---

# 6. Pixel-Level Visual Accuracy

Try to reproduce the original website as closely as technically possible.

Pay special attention to:

### Typography

Preserve:

* Font family
* Font size
* Font weight
* Line height
* Letter spacing
* Text transformation
* Text alignment

### Spacing

Preserve:

* Section padding
* Container width
* Grid gaps
* Card spacing
* Margins
* Internal padding

### Layout

Preserve:

* Flex layouts
* Grid layouts
* Alignment
* Widths
* Heights
* Max widths
* Positioning
* Absolute elements
* Sticky elements

### Visual styling

Preserve:

* Colors
* Borders
* Radius
* Shadows
* Backgrounds
* Overlays
* Gradients
* Opacity

---

# 7. Tailwind CSS

Use **Tailwind CSS** for styling.

Convert the original CSS into clean Tailwind utilities wherever practical.

Example:

```jsx
<section className="mx-auto max-w-7xl px-6 py-20">
```

Instead of unnecessarily creating large CSS files.

However, do not force everything into Tailwind if doing so makes the implementation less accurate.

For complex or unavoidable styles, use dedicated CSS modules/global CSS when necessary.

### Important

Do not modify the original visual values just to make the Tailwind implementation easier.

Visual accuracy has priority.

---

# 8. Component Architecture

Do not create one huge `page.jsx` file.

Break the website into logical reusable components.

Example:

```text
components/
├── layout/
│   ├── Header.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Projects.jsx
│   ├── Testimonials.jsx
│   └── Contact.jsx
│
├── ui/
│   ├── Button.jsx
│   ├── SectionHeading.jsx
│   └── Card.jsx
```

The exact structure should be decided based on the actual HTML source.

Do not create components simply for the sake of creating more files.

Components should have meaningful responsibilities.

---

# 9. Reusable Components

Identify repeated UI patterns.

For example, if the HTML contains multiple testimonial cards:

Instead of:

```jsx
<article>...</article>
<article>...</article>
<article>...</article>
```

Create:

```jsx
<TestimonialCard />
```

and render it using data.

Similarly identify:

* Cards
* Buttons
* Navigation links
* Section headings
* Feature items
* Service items
* Team members
* Testimonials
* Statistics
* FAQ items
* Social links

Only abstract components when the structure is genuinely reusable.

---

# 10. Data-Driven Rendering

Repeated content must be moved into data files where appropriate.

Create:

```text
data/
├── testimonials.js
├── services.js
├── projects.js
├── team.js
└── navigation.js
```

Only create files that are actually needed.

Example:

```js
export const testimonials = [
  {
    name: "John Doe",
    role: "CEO",
    message: "Example testimonial",
    image: "/images/john.webp",
  },
  {
    name: "Jane Doe",
    role: "Founder",
    message: "Another testimonial",
    image: "/images/jane.webp",
  },
];
```

Then use:

```jsx
{testimonials.map((testimonial) => (
  <TestimonialCard
    key={testimonial.name}
    {...testimonial}
  />
))}
```

Use `.map()` for repeated content.

Do not duplicate large JSX blocks unnecessarily.

---

# 11. Keep Code Weight Low

The implementation must be:

* Clean
* Maintainable
* Reusable
* Lightweight
* Performance-oriented
* Easy to understand

Avoid unnecessary:

* Duplicate JSX
* Duplicate CSS
* Duplicate data
* Huge components
* Repeated markup
* Unused dependencies
* Unused functions
* Unused variables
* Unused packages
* Excessive abstraction

Do not over-engineer a simple website.

---

# 12. JavaScript Requirement

Use JavaScript only.

Correct:

```text
page.jsx
Navbar.jsx
Hero.jsx
data.js
```

Not allowed:

```text
page.tsx
Navbar.tsx
Hero.tsx
data.ts
```

Do not add TypeScript configuration.

---

# 13. Next.js App Router

Use the modern Next.js App Router.

Expected structure:

```text
app/
├── layout.jsx
├── page.jsx
├── globals.css
└── ...
```

Use the appropriate Next.js conventions for:

* `layout.jsx`
* `page.jsx`
* Metadata
* Image optimization
* Font optimization
* Client components
* Server components

Use `"use client"` only when required.

Do not make the entire application a client component unnecessarily.

---

# 14. Server and Client Components

Prefer Server Components by default.

Use:

```jsx
"use client";
```

only for components requiring:

* `useState`
* `useEffect`
* Browser APIs
* Event-driven interaction
* Framer Motion interaction where required
* Client-only libraries

Do not convert every component into a client component.

---

# 15. Images

Use the existing images from the HTML project whenever possible.

Preserve:

* Image source
* Aspect ratio
* Cropping
* Object positioning
* Dimensions
* Quality
* Placement

Move local assets into:

```text
public/
```

Example:

```text
public/
├── images/
├── icons/
└── fonts/
```

Use Next.js `<Image />` where appropriate.

Example:

```jsx
import Image from "next/image";
```

Do not replace an existing image with a random image.

---

# 16. SVG and Icons

Preserve the original SVGs and icons.

If the HTML contains inline SVG:

* Preserve its visual appearance.
* Convert it to a reusable JSX component if appropriate.
* Do not replace it with a different icon simply because it is easier.

If an icon library is required, use a lightweight appropriate library.

Do not introduce unnecessary icon packages.

---

# 17. Fonts

Identify the fonts used by the original website.

If local fonts exist, preserve them.

If the HTML uses an external font, reproduce it using the appropriate Next.js font approach where possible.

Do not arbitrarily replace the font.

Typography accuracy is important.

---

# 18. Animations

All existing animations from the HTML must be preserved.

Analyze:

* Entrance animations
* Scroll animations
* Hover animations
* Image animations
* Text animations
* Parallax effects
* Marquee effects
* Button effects
* Menu animations
* Counter animations
* Loading animations
* Transition timing

Use **Framer Motion** where it provides a clean and reliable equivalent.

Example:

```jsx
import { motion } from "framer-motion";
```

But do not add Framer Motion to components that do not need animation.

---

# 19. React Bits

React Bits may be used only when it helps reproduce an existing visual/interactive effect.

Do not use React Bits just to make the website look more "modern".

The original HTML design remains the source of truth.

---

# 20. Animation Accuracy

When converting animations, preserve as closely as possible:

* Duration
* Delay
* Easing
* Direction
* Distance
* Scale
* Opacity
* Trigger
* Stagger
* Hover behavior

Example:

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
```

Do not randomly change animation behavior.

---

# 21. Responsive Design

Responsive behavior must match the original HTML website.

Test at minimum:

```text
320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px
```

Check:

* Navbar
* Hero
* Images
* Typography
* Cards
* Grids
* Columns
* Buttons
* Forms
* Spacing
* Section heights
* Overflow
* Horizontal scrolling
* Footer

Do not only make the desktop version responsive.

Mobile must be properly implemented.

---

# 22. Mobile Navigation

If the original website contains a mobile menu:

* Reproduce the same behavior.
* Preserve its animation.
* Preserve menu spacing.
* Preserve overlay/background.
* Preserve open/close behavior.

Do not introduce a completely different navigation pattern.

---

# 23. Existing JavaScript Functionality

Analyze all JavaScript in the provided HTML.

Convert functionality such as:

* Menu toggle
* Sliders
* Tabs
* Accordions
* Modals
* Counters
* Scroll behavior
* Form interactions
* Filters
* Carousels
* Hover effects

into appropriate React/Next.js implementations.

Do not simply copy old DOM manipulation code such as:

```js
document.querySelector(...)
```

when it can be implemented naturally with React.

---

# 24. React Best Practices

Prefer:

```jsx
const [open, setOpen] = useState(false);
```

instead of manually manipulating the DOM.

Use:

* React state
* Props
* Component composition
* Data-driven rendering
* Event handlers
* Conditional rendering

Avoid unnecessary direct DOM manipulation.

---

# 25. Navigation and Links

Convert HTML navigation into Next.js-compatible navigation.

Use:

```jsx
import Link from "next/link";
```

for internal routes.

Preserve:

* Navigation labels
* Order
* URLs
* Active states
* Hover behavior
* Mobile behavior

Do not change navigation structure unless technically required.

---

# 26. SEO and Metadata

Preserve or improve existing SEO information without changing the visual design.

Use Next.js metadata appropriately.

Include where available:

* Title
* Description
* Keywords
* Open Graph metadata
* Favicon
* Viewport behavior

Do not invent important business information that does not exist in the source.

---

# 27. Accessibility

Improve accessibility without changing the design.

Use:

* Semantic HTML
* Proper heading hierarchy
* `alt` text
* Button elements for actions
* Keyboard accessibility
* Accessible navigation
* Appropriate ARIA attributes when needed

Do not use accessibility improvements as a reason to redesign the UI.

---

# 28. Performance

The final project must be high-performance.

Follow these principles:

* Use Server Components where possible.
* Use Client Components only when required.
* Optimize images.
* Avoid unnecessary dependencies.
* Avoid unnecessary JavaScript.
* Lazy-load heavy components where appropriate.
* Avoid duplicate rendering.
* Keep component trees reasonable.
* Use reusable data-driven components.
* Avoid unnecessary state.
* Avoid unnecessary `useEffect`.
* Avoid unnecessary re-renders.

Do not sacrifice visual accuracy for arbitrary micro-optimizations.

---

# 29. Dependency Rules

Only install dependencies that are genuinely required.

Preferred stack:

```text
Next.js
React
Tailwind CSS
Framer Motion
```

React Bits may be added only if required.

Do not install large UI libraries unnecessarily.

Before adding a package, verify whether the same result can be achieved with:

* React
* Tailwind CSS
* CSS
* Framer Motion
* Native browser functionality

---

# 30. Build Requirement

The project must build successfully.

Run:

```bash
npm install
```

then:

```bash
npm run build
```

The build must complete without errors.

Then verify:

```bash
npm run start
```

The application must run correctly.

If the project uses static export, configure the project appropriately so the production build generates the required output folder.

---

# 31. Separate Build Output

When the project is built, the production output must be generated separately from source files.

Do not mix generated build files with source code.

If static export is required, configure Next.js appropriately so:

```text
npm run build
```

produces:

```text
out/
```

Example:

```text
project/
├── app/
├── components/
├── data/
├── public/
├── out/
├── package.json
└── ...
```

Do not manually create fake build output.

The output must be generated by the actual Next.js build process.

---

# 32. Error Prevention

Before considering the project complete, verify:

### Compilation

* No JSX syntax errors
* No JavaScript errors
* No import errors
* No missing modules
* No invalid component imports
* No invalid paths

### Runtime

* No console errors
* No broken images
* No hydration errors
* No React warnings
* No broken links
* No animation errors

### Build

Run:

```bash
npm run build
```

and fix every build error.

Do not stop after the development server starts successfully.

---

# 33. Broken Asset Prevention

Check every:

* Image
* SVG
* Icon
* Font
* Video
* CSS asset
* JavaScript asset

Make sure paths work correctly in Next.js.

Avoid:

```text
../../assets/image.png
```

when a proper `public/` path can be used.

Prefer:

```text
/images/image.png
```

when appropriate.

---

# 34. Code Quality

The final code should look like it was written by a senior frontend developer.

Requirements:

* Clear naming
* Logical folder structure
* Reusable components
* Small focused components
* Minimal duplication
* Consistent formatting
* No dead code
* No unnecessary comments
* No unnecessary abstractions

Do not write code that looks artificially generated.

Prefer straightforward professional implementation.

---

# 35. Do Not Over-Componentize

Do not create:

```text
Text.jsx
Wrapper.jsx
Container.jsx
Title.jsx
Paragraph.jsx
Icon.jsx
```

for every tiny element unless there is a genuine reuse case.

Instead create components around meaningful UI sections and repeated patterns.

---

# 36. Preserve HTML Content

Do not remove existing content.

Preserve:

* Headings
* Paragraphs
* Buttons
* Labels
* Navigation text
* Testimonials
* Service descriptions
* Statistics
* Footer information
* Links

If content exists in the original HTML, keep it.

---

# 37. Preserve Existing IDs and Anchors

If the HTML uses:

```html
<section id="about">
<section id="services">
<section id="contact">
```

preserve those IDs where appropriate.

Navigation should continue to work.

Example:

```jsx
<a href="#about">About</a>
```

or an appropriate Next.js-compatible implementation.

---

# 38. No Unnecessary Redesign

Do NOT:

* Modernize the UI
* Change the color palette
* Change the typography
* Change layouts
* Add unnecessary gradients
* Add glassmorphism
* Add excessive rounded corners
* Add random animations
* Replace original images
* Change section order

The requirement is **conversion, not redesign**.

---

# 39. Final Project Structure

Use a structure similar to:

```text
project/
│
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
│
├── data/
│   ├── navigation.js
│   ├── testimonials.js
│   └── ...
│
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── package.json
├── next.config.js
├── postcss.config.js
├── jsconfig.json
└── ...
```

Only include folders/files that are actually required.

---

# 40. Final Verification Checklist

Before completing the conversion, verify all of the following:

* [ ] Latest stable Next.js is used.
* [ ] JavaScript/JSX only.
* [ ] No TypeScript.
* [ ] Tailwind CSS is used.
* [ ] Original HTML design is preserved.
* [ ] Original content is preserved.
* [ ] Original images are preserved.
* [ ] Original fonts are preserved where possible.
* [ ] Original animations are reproduced.
* [ ] Framer Motion is used only where appropriate.
* [ ] React Bits is used only when genuinely required.
* [ ] Components are properly separated.
* [ ] Repeated UI uses reusable components.
* [ ] Repeated data uses `.map()`.
* [ ] Repeated content is stored in data files where appropriate.
* [ ] Code duplication is minimized.
* [ ] Client components are used only where necessary.
* [ ] Responsive behavior matches the original.
* [ ] Mobile layout is tested.
* [ ] Tablet layout is tested.
* [ ] Desktop layout is tested.
* [ ] Navigation works.
* [ ] Internal links work.
* [ ] Images load correctly.
* [ ] No console errors.
* [ ] No hydration errors.
* [ ] No missing imports.
* [ ] No broken assets.
* [ ] `npm run build` succeeds.
* [ ] Production build succeeds.
* [ ] Static export generates `out/` when static export is required.
* [ ] Final code is clean and maintainable.
* [ ] No unnecessary dependencies.
* [ ] No unnecessary redesign.

---

# 41. Final Quality Standard

The final result must satisfy these priorities in order:

### Priority 1 — Visual Accuracy

The Next.js website must look as close as possible to the provided HTML website.

### Priority 2 — Functional Accuracy

All original interactions and behaviors must work.

### Priority 3 — Responsive Accuracy

Desktop, tablet, and mobile must behave correctly.

### Priority 4 — Code Quality

Use clean, reusable, maintainable React/Next.js architecture.

### Priority 5 — Performance

Avoid unnecessary JavaScript, dependencies, rendering, and duplicated code.

### Priority 6 — Production Readiness

The project must successfully install, run, build, and produce the required production output.

---

# Final Instruction

Treat the provided HTML project as the **design specification**.

Do not redesign it.

Do not simplify it.

Do not replace it with an approximate version.

Convert it into a modern **Next.js + JavaScript + JSX + Tailwind CSS** implementation while maintaining the original design, responsiveness, animations, content, assets, and behavior as accurately as technically possible.

The final project should be:

> **Visually accurate + responsive + reusable + clean + lightweight + performant + production-ready + error-free.**
