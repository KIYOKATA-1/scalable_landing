import Image from "next/image";
import styles from "./BackgroundSpheres.module.scss";

type SphereProps = {
  className?: string;
};

function SphereCenter({ className }: SphereProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 967 967"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2" filter="url(#sphere-center-filter)">
        <circle cx="483.5" cy="483.5" r="233.5" fill="#5D6EF3" />
      </g>
      <defs>
        <filter
          id="sphere-center-filter"
          x="0"
          y="0"
          width="967"
          height="967"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}

function SphereLeft({ className }: SphereProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 832 862"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2" filter="url(#sphere-left-filter)">
        <ellipse cx="400" cy="431" rx="232" ry="231" fill="#8593E8" />
      </g>
      <defs>
        <filter
          id="sphere-left-filter"
          x="-32"
          y="0"
          width="864"
          height="862"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}

function SphereRight({ className }: SphereProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 846 846"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2" filter="url(#sphere-right-filter)">
        <circle cx="423" cy="423" r="223" fill="#FC4FF6" />
      </g>
      <defs>
        <filter
          id="sphere-right-filter"
          x="0"
          y="0"
          width="846"
          height="846"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}

export function BackgroundSpheres() {
  return (
    <div aria-hidden="true" className={styles.visualBlock}>
      <div className={styles.backgroundSpheres}>
        <SphereLeft className={`${styles.sphere} ${styles.left}`} />
        <SphereCenter className={`${styles.sphere} ${styles.center}`} />
        <SphereRight className={`${styles.sphere} ${styles.right}`} />
      </div>
      <Image
        className={styles.mainImage}
        src="/images/main.webp"
        alt=""
        width={1605}
        height={505}
        priority
      />
    </div>
  );
}
