# Framer Motion Animations Guide

This guide documents all the Framer Motion animations implemented across the WorldClass Tech Academy website.

## Installation

Framer Motion has been installed and added to your dependencies:
```bash
npm install framer-motion
```

## Components with Animations

### 1. **Hero Component** (`components/Hero.tsx`)
- **Animations**: Fade-in + Slide-up stagger effect
- **Details**:
  - Title fades in and slides up
  - Description text fades in with delay
  - Call-to-action buttons fade in with stagger
  - Uses `useInView` for viewport-triggered animations
  - Stagger delay of 0.2s between items

### 2. **Services Component** (`components/Services.tsx`)
- **Animations**: Staggered fade-in + Card hover lift
- **Details**:
  - Section header slides in from left
  - Service cards fade in and slide up with stagger (0.1s delay)
  - Cards lift up on hover (translateY -5px)
  - Explore Courses button fades in with delay
  - Uses `whileInView` for scroll-triggered animations

### 3. **About Component** (`components/About.tsx`)
- **Animations**: Slide-in from opposite sides
- **Details**:
  - Content section slides in from left with fade-in
  - Image section slides in from right with fade-in
  - Both use `whileInView` for scroll triggers
  - Smooth 0.8s ease-out transition

### 4. **Testimonials Component** (`components/Testimonials.tsx`)
- **Animations**: Staggered fade-in + Hover lift
- **Details**:
  - Header fades in and slides up
  - Each testimonial card fades in with staggered delay (0.1s)
  - Cards lift up on hover (translateY -8px)
  - Smooth staggered reveal on scroll
  - Uses `whileInView` for performance

### 5. **Footer Component** (`components/Footer.tsx`)
- **Animations**: Staggered fade-in
- **Details**:
  - Each footer column (Brand, Links, Services, Contact) fades in with delay
  - Copyright text fades in at the end (0.5s delay)
  - Staggered children animation with 0.1s delay between items

### 6. **CTA Component** (`components/CTA.tsx`)
- **Animations**: Fade-in + Slide-up + Scale-in buttons
- **Details**:
  - Main container slides up with fade-in
  - Heading scales and fades in
  - Paragraph fades in with delay
  - Buttons scale from 0.95 to 1 on appearance

### 7. **Header Component** (`components/Header.tsx`)
- **Animations**: Logo fade-in + Navigation links fade-in + Mobile menu expand
- **Details**:
  - Logo fades in from left (0.5s)
  - Desktop nav links fade in with staggered delays (0.1-0.2s)
  - Mobile menu expands with smooth height animation (0.3s)
  - Uses `AnimatePresence` for exit animations
  - Menu items slide in from left with progressive delays

### 8. **FAQ Component** (`components/FAQ.tsx`)
- **Animations**: Staggered fade-in + Accordion expand/collapse + Icon rotation
- **Details**:
  - Heading slides up with fade-in
  - FAQ items fade in with staggered animation (0.1s delay)
  - Accordion expands/collapses smoothly (0.3s)
  - Plus/minus icon rotates 45° on expand
  - Height animates from 0 to auto for smooth open/close

### 9. **Impact Component** (`components/Impact.tsx`)
- **Animations**: Scale-in image + Stats stagger
- **Details**:
  - Main image scales from 0.9 to 1 with fade-in (0.8s)
  - Stats container slides up with fade-in
  - Individual stats scale in with staggered delays (0.1s between each)
  - Numeric values animate in smoothly

### 10. **WhyChooseUs Component** (`components/WhyChooseUs.tsx`)
- **Animations**: Header slide-in + Cards stagger + Hover lift
- **Details**:
  - Section header slides in from left with fade-in
  - Reason cards fade in with staggered delays (0.1s)
  - Cards lift on hover (translateY -5px)
  - Smooth transitions with ease-out timing
  - Uses `whileInView` for viewport detection

## Common Animation Patterns

### Fade-In + Slide-Up
```tsx
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
```

### Staggered Container
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
```

### WhileInView (Scroll-Triggered)
```tsx
<motion.div
  variants={itemVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.8 }}
>
```

### Hover Effects
```tsx
<motion.div
  whileHover={{ y: -5, transition: { duration: 0.3 } }}
>
```

## Performance Optimization

- All animations use `whileInView` with `viewport={{ once: true }}` to trigger only once when scrolled into view
- Staggered animations prevent too many elements animating simultaneously
- Hardware acceleration is enabled for transforms (y, x, scale)
- Animations are set to short durations (0.3-0.8s) for premium feel without being sluggish

## Browser Support

Framer Motion animations work on all modern browsers:
- Chrome/Edge 88+
- Firefox 85+
- Safari 15+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Customization

To modify animations, edit the variant objects in each component:

1. Adjust `duration` for animation speed
2. Change `delay` for stagger timing
3. Modify `y`, `x`, `scale` values for different movement distances
4. Update `ease` function for different timing curves (easeIn, easeOut, easeInOut, anticipate)

## Best Practices Applied

✅ Used `once: true` in viewport to prevent re-triggering
✅ Staggered children for visual appeal
✅ Consistent animation timings across components
✅ `ease: "easeOut"` for natural feeling animations
✅ Short durations (0.3-0.8s) for responsive feel
✅ Hover animations only for interactive elements
✅ All animations are optional and don't block content
