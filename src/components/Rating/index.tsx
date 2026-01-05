import { Star } from 'lucide-react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface RatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
  showValue?: boolean;
  ariaLabel?: string;
}

export default function Rating({
  rating,
  maxRating = 5,
  size = 20,
  className,
  showValue = false,
  ariaLabel,
}: RatingProps) {
  const clampedRating = Math.max(0, Math.min(rating, maxRating));

  const stars = Array.from({ length: maxRating }, (_, index) => {
    const fillPercentage = Math.max(0, Math.min(1, clampedRating - index));

    return {
      id: index,
      fillPercentage,
      isFull: fillPercentage === 1,
      isHalf: fillPercentage > 0 && fillPercentage < 1,
      isEmpty: fillPercentage === 0,
    };
  });

  const roundedRating = Math.round(clampedRating * 2) / 2;
  const defaultAriaLabel = `${roundedRating} out of ${maxRating} stars`;

  return (
    <div
      className={clsx(styles.rating, className)}
      role="img"
      aria-label={ariaLabel || defaultAriaLabel}
    >
      <div className={styles.stars}>
        {stars.map((star) => (
          <div key={star.id} className={styles.starWrapper}>
            <Star
              size={size}
              className={styles.starEmpty}
              aria-hidden="true"
            />
            <div
              className={styles.starFillContainer}
              style={{ width: `${star.fillPercentage * 100}%` }}
            >
              <Star
                size={size}
                className={styles.starFilled}
                fill="currentColor"
                aria-hidden="true"
              />
            </div>
          </div>
        ))}
      </div>

      {showValue && (
        <span className={styles.ratingValue} aria-hidden="true">
          {roundedRating}
        </span>
      )}
    </div>
  );
}

