export default function BatSVG({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 29c6-5 10-8 18-8 3-6 8-9 13-9s10 3 13 9c8 0 12 3 18 8-4-8-8-11-14-11-2-4-6-6-10-6s-8 2-10 6c-6 0-10 3-14 11z"
        fill="currentColor"
      />
      <path
        d="M6 34c7-2 13.5-4 14-7 0-1 1-2 2-2s2 1 2 2c.5 3 7 5 14 7-1 5-6 8-14 8s-13-3-14-8z"
        fill="currentColor"
      />
      <path
        d="M32 40c8 0 13 4 16 7-3 1-7 2-16 2s-13-1-16-2c3-3 8-7 16-7z"
        fill="currentColor"
      />
    </svg>
  );
}
