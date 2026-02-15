# Enterprise Animation System

## Overview

This document outlines the comprehensive enterprise animation system implemented across the PSG website. The system provides professional, smooth animations and hover effects that enhance user experience while maintaining performance and accessibility.

## Core Features

### 1. Animation Hooks

#### `useEnterpriseAnimation`
A custom hook that provides intersection observer-based animations with configurable options.

```typescript
const { ref, isVisible, getAnimationClass } = useEnterpriseAnimation({
  threshold: 0.1,
  triggerOnce: true,
  delay: 0,
  rootMargin: '0px'
});
```

**Parameters:**
- `threshold`: Intersection threshold (0-1)
- `triggerOnce`: Whether to trigger animation only once
- `delay`: Animation delay in milliseconds
- `rootMargin`: Root margin for intersection observer

#### `useIntersectionObserver`
Lower-level hook for custom intersection observer implementations.

#### `useParallax`
Creates parallax scrolling effects.

```typescript
const { ref, style } = useParallax(speed: 0.5);
```

### 2. Animated Components

#### `AnimatedSection`
Wraps content sections with entrance animations.

```tsx
<AnimatedSection 
  className="py-24 bg-white"
  animationType="fade-in-up"
  delay={200}
  threshold={0.2}
>
  {/* Content */}
</AnimatedSection>
```

**Animation Types:**
- `fade-in-up`: Fade in with upward movement
- `fade-in-left`: Fade in from left
- `fade-in-right`: Fade in from right
- `scale-in`: Scale up from center
- `slide-in-up`: Slide in from bottom

#### `AnimatedCard`
Interactive cards with hover effects.

```tsx
<AnimatedCard 
  className="p-6 rounded-xl"
  hoverEffect="lift"
  animationDelay={100}
>
  {/* Card content */}
</AnimatedCard>
```

**Hover Effects:**
- `lift`: Subtle upward movement with shadow
- `scale`: Scale up effect
- `glow`: Glowing border effect
- `shimmer`: Shimmer overlay effect
- `border-glow`: Animated border glow

#### `AnimatedButton`
Enhanced buttons with professional animations.

```tsx
<AnimatedButton
  variant="primary"
  size="md"
  animationType="scale"
  onClick={handleClick}
>
  Button Text
</AnimatedButton>
```

**Variants:**
- `primary`: Primary brand color
- `secondary`: Secondary color
- `accent`: Accent color
- `outline`: Outline style

**Animation Types:**
- `scale`: Scale up on hover
- `lift`: Lift effect on hover
- `glow`: Glow effect on hover

#### `StaggeredList`
Creates lists with staggered animations.

```tsx
<StaggeredList
  items={items}
  className="space-y-4"
  animationType="fade-in-left"
  staggerDelay={100}
/>
```

### 3. CSS Animation Classes

#### Entrance Animations
- `.animate-fade-in-up`: Fade in with upward movement
- `.animate-fade-in-left`: Fade in from left
- `.animate-fade-in-right`: Fade in from right
- `.animate-scale-in`: Scale up from center
- `.animate-slide-in-up`: Slide in from bottom

#### Hover Effects
- `.hover-lift`: Subtle upward movement
- `.hover-scale`: Scale up effect
- `.hover-glow`: Glowing effect
- `.hover-shimmer`: Shimmer overlay
- `.hover-border-glow`: Border glow effect

#### Interactive Elements
- `.interactive-card`: Enhanced card with hover effects
- `.interactive-button`: Enhanced button with hover effects

#### Utility Animations
- `.animate-float`: Floating animation
- `.animate-pulse-slow`: Slow pulsing effect
- `.animate-glow`: Glowing animation
- `.animate-shimmer`: Shimmer effect

### 4. Staggered Animations

Control animation timing with stagger classes:
- `.stagger-1`: 100ms delay
- `.stagger-2`: 200ms delay
- `.stagger-3`: 300ms delay
- `.stagger-4`: 400ms delay
- `.stagger-5`: 500ms delay

## Implementation Examples

### Hero Section with Parallax
```tsx
<section className="relative h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 z-0 parallax-slow">
    <img src={heroImage} alt="Hero" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
  </div>
  
  <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
    <h1 className="animate-fade-in-up stagger-1">Welcome to PSG</h1>
    <p className="animate-fade-in-up stagger-2">Building tomorrow's solutions</p>
    <AnimatedButton className="animate-fade-in-up stagger-3">
      Get Started
    </AnimatedButton>
  </div>
</section>
```

### Interactive Cards Grid
```tsx
<div className="grid md:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <AnimatedCard
      key={index}
      hoverEffect="lift"
      className="p-6 rounded-xl"
      animationDelay={index * 100}
    >
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </AnimatedCard>
  ))}
</div>
```

### Staggered Feature List
```tsx
<StaggeredList
  items={features.map(feature => (
    <div className="flex items-center space-x-3">
      <div className="w-2 h-2 bg-accent rounded-full"></div>
      <span>{feature}</span>
    </div>
  ))}
  className="space-y-4"
  staggerDelay={150}
  animationType="fade-in-left"
/>
```

## Performance Considerations

### 1. Intersection Observer
- Uses native browser Intersection Observer API
- Efficiently manages scroll-based animations
- Minimal performance impact

### 2. CSS Transforms
- All animations use CSS transforms for hardware acceleration
- Smooth 60fps animations on modern browsers
- Reduced paint and layout calculations

### 3. Memory Management
- Proper cleanup of event listeners
- Efficient ref management
- Optimized re-renders

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Fallback gracefully on older browsers
- Progressive enhancement approach
- Mobile-optimized animations

## Best Practices

### 1. Animation Timing
- Keep animations under 1 second for responsiveness
- Use easing functions for natural movement
- Stagger multiple elements for visual hierarchy

### 2. Performance
- Use CSS transforms instead of position changes
- Avoid animating layout properties
- Test on mobile devices

### 3. Accessibility
- Respect `prefers-reduced-motion` preference
- Provide non-animated alternatives
- Ensure animations don't interfere with screen readers

### 4. User Experience
- Use animations to enhance, not distract
- Provide meaningful feedback
- Maintain consistent animation language

## Customization

### Adding New Animations

1. **Add keyframes to Tailwind config:**
```javascript
keyframes: {
  "custom-animation": {
    from: { opacity: "0", transform: "translateY(20px)" },
    to: { opacity: "1", transform: "translateY(0)" },
  },
}
```

2. **Add animation class:**
```css
.animate-custom {
  @apply animate-[custom-animation_0.6s_ease-out_forwards];
}
```

3. **Use in components:**
```tsx
<div className="animate-custom">
  Content
</div>
```

### Theme Integration

Animations automatically integrate with the existing theme system:
- Colors use CSS custom properties
- Timing matches design system
- Consistent with brand guidelines

## Testing

### Manual Testing
- Test on different screen sizes
- Verify animation performance
- Check accessibility compliance
- Test with reduced motion preferences

### Automated Testing
- Animation completion detection
- Performance metrics collection
- Cross-browser compatibility

## Maintenance

### Regular Updates
- Monitor performance metrics
- Update animation timings based on user feedback
- Optimize for new browser features
- Maintain compatibility with design system updates

### Documentation
- Keep animation documentation updated
- Document custom animations
- Maintain examples and use cases
- Update browser support information