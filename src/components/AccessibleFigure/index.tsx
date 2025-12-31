import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.css';

interface AccessibleFigureProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function AccessibleFigure({
  src,
  alt,
  caption,
  className = '',
  width,
  height,
}: AccessibleFigureProps) {
  const [open, setOpen] = useState(false);
  const prevActiveRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    }

    if (open) {
      prevActiveRef.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
      // focus close button after open
      setTimeout(() => closeButtonRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      prevActiveRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <figure className={`${styles.figure} ${className}`}>
      <button
        className={styles.imageButton}
        aria-label={`Open image: ${alt}`}
        onClick={() => setOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          width={width}
          height={height}
          className={styles.img}
        />
      </button>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}

      {open && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={caption || alt}
          onClick={() => setOpen(false)}
        >
          <div className={styles.dialog} onClick={(e) => e.stopPropagation()}>
            <button
              ref={closeButtonRef}
              className={styles.close}
              aria-label="Close image"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            <img src={src} alt={alt} className={styles.fullImage} />
            {caption && <div className={styles.captionFull}>{caption}</div>}
          </div>
        </div>
      )}
    </figure>
  );
}

