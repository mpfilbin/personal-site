# Rating Component

A flexible React component for displaying star ratings with half-star increments.

## Features

- Displays 0-5 stars (configurable max)
- Half-star increments support
- Uses Lucide React icons
- Accessible with ARIA labels
- Customizable size and styling
- Optional rating value display

## Usage

```tsx
import Rating from '@site/src/components/Rating';

// Basic usage
<Rating rating={3.5} />

// With custom max rating
<Rating rating={4.5} maxRating={5} />

// Custom size (in pixels)
<Rating rating={4} size={24} />

// Show numeric value
<Rating rating={3.5} showValue />

// Custom aria label
<Rating rating={4.5} ariaLabel="Customer satisfaction: 4.5 out of 5 stars" />

// With custom className
<Rating rating={3} className="my-custom-class" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `rating` | `number` | *required* | The rating value (0 to maxRating) |
| `maxRating` | `number` | `5` | Maximum number of stars to display |
| `size` | `number` | `20` | Size of each star icon in pixels |
| `className` | `string` | - | Additional CSS class names |
| `showValue` | `boolean` | `false` | Whether to display the numeric rating value |
| `ariaLabel` | `string` | Auto-generated | Custom aria-label for accessibility |

## Examples

```tsx
// Half star ratings
<Rating rating={0.5} />   // Half star
<Rating rating={1.5} />   // 1 full + 1 half
<Rating rating={2.5} />   // 2 full + 1 half
<Rating rating={3.5} />   // 3 full + 1 half
<Rating rating={4.5} />   // 4 full + 1 half

// Full star ratings
<Rating rating={1} />     // 1 full star
<Rating rating={2} />     // 2 full stars
<Rating rating={3} />     // 3 full stars
<Rating rating={4} />     // 4 full stars
<Rating rating={5} />     // 5 full stars

// With value display
<Rating rating={4.5} showValue />

// Large size
<Rating rating={4} size={32} />
```

## Accessibility

The component includes proper ARIA attributes:
- Uses `role="img"` for the rating container
- Provides descriptive `aria-label` (auto-generated or custom)
- Individual stars are marked with `aria-hidden="true"` to avoid redundant screen reader announcements

