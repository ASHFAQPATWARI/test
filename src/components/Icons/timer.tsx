import { SVGProps } from 'react';

interface ITimer extends SVGProps<SVGSVGElement> {
  type?: 'green' | 'yellow' | 'neutral';
}

function Timer({ type = 'green', ...props }: ITimer) {
  let color;
  switch (type) {
    case 'green':
      color = 'var(--secondary-500)';
      break;
    case 'yellow':
      color = 'var(--yellow)';
      break;

    case 'neutral':
      color = 'var(--neutral-500)';
      break;

    default:
      break;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      {...props}
    >
      <path
        d="M8.12768 7.11419C8.27408 7.25473 8.27408 7.48189 8.12768 7.62243C8.05467 7.69252 7.95882 7.72774 7.86296 7.72774C7.76711 7.72774 7.67126 7.69252 7.59824 7.62243L5.35168 5.46585C5.28129 5.39828 5.24198 5.30698 5.24198 5.21173V1.97686C5.24198 1.77846 5.40934 1.61743 5.6164 1.61743C5.82346 1.61743 5.99083 1.77846 5.99083 1.97686V5.06293L8.12768 7.11419ZM11.2328 5.39145C11.2328 8.36429 8.71329 10.7829 5.6164 10.7829C2.51952 10.7829 0 8.36429 0 5.39145C0 2.4186 2.51952 0 5.6164 0C8.71329 0 11.2328 2.4186 11.2328 5.39145ZM10.484 5.39145C10.484 2.81505 8.30029 0.71886 5.6164 0.71886C2.93251 0.71886 0.748854 2.81505 0.748854 5.39145C0.748854 7.96784 2.93251 10.064 5.6164 10.064C8.30029 10.064 10.484 7.96784 10.484 5.39145Z"
        fill={color}
      />
    </svg>
  );
}

export default Timer;
