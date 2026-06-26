import arrowPathRaw from '../../SVGs/arrow-path.svg?raw';
import arrowTrendingUpRaw from '../../SVGs/arrow-trending-up.svg?raw';
import chartPieRaw from '../../SVGs/chart-pie.svg?raw';
import chevronDownRaw from '../../SVGs/chevron-down.svg?raw';
import chevronLeftRaw from '../../SVGs/chevron-left.svg?raw';
import chevronRightRaw from '../../SVGs/chevron-right.svg?raw';
import chevronUpSolidRaw from '../../SVGs/chevron-up-solid.svg?raw';
import chevronUpRaw from '../../SVGs/chevron-up.svg?raw';
import cog8ToothRaw from '../../SVGs/cog-8-tooth.svg?raw';
import cube16SolidRaw from '../../SVGs/cube-16-solid.svg?raw';
import linkSolidRaw from '../../SVGs/link-solid.svg?raw';
import linkRaw from '../../SVGs/link.svg?raw';
import searchRaw from '../../SVGs/search.svg?raw';
import xMarkRaw from '../../SVGs/x-mark.svg?raw';

import { HTMLAttributes } from 'react';

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
}

function createIcon(rawSvg: string) {
  const IconComponent = ({ className = '', ...props }: IconProps) => {
    return (
      <span
        {...props}
        className={`inline-flex items-center justify-center ${className} [&>svg]:w-full [&>svg]:h-full [&>svg]:block`}
        dangerouslySetInnerHTML={{ __html: rawSvg }}
      />
    );
  };
  IconComponent.displayName = 'IconComponent';
  return IconComponent;
}

export const ArrowPathIcon = createIcon(arrowPathRaw);
export const ArrowTrendingUpIcon = createIcon(arrowTrendingUpRaw);
export const ChartPieIcon = createIcon(chartPieRaw);
export const ChevronDownIcon = createIcon(chevronDownRaw);
export const ChevronLeftIcon = createIcon(chevronLeftRaw);
export const ChevronRightIcon = createIcon(chevronRightRaw);
export const ChevronUpSolidIcon = createIcon(chevronUpSolidRaw);
export const ChevronUpIcon = createIcon(chevronUpRaw);
export const Cog8ToothIcon = createIcon(cog8ToothRaw);
export const Cube16SolidIcon = createIcon(cube16SolidRaw);
export const LinkSolidIcon = createIcon(linkSolidRaw);
export const LinkIcon = createIcon(linkRaw);
export const SearchIcon = createIcon(searchRaw);
export const XMarkIcon = createIcon(xMarkRaw);
