// import { ClockIcon } from './clock-icon';
// import { EmailIcon } from './email-icon';
// import { LocationIcon } from './location-icon';

// const icons = {
//   ClockIcon,
//   EmailIcon,
//   LocationIcon,
// };

// type IconColor = 'primary' | 'secondary';

// export interface IconPrefs<T = '24'> {
//   color: IconColor;
//   size?: T | '14' | '24' | '32' | '46' | '54' | '196';
// }

// type Icons = Record<keyof typeof icons, IconPrefs>;

// export interface IconProps extends IconPrefs {
//   icon: keyof Icons;
// }

// export const Icon = ({ icon, ...props }: IconProps) => {
//   const RenderIcon = icons[icon];

//   return <RenderIcon {...props} />;
// };

export { BasketIcon } from './basket-icon';
export { ClockIcon } from './clock-icon';
export { EmailIcon } from './email-icon';
export { LocationIcon } from './location-icon';
