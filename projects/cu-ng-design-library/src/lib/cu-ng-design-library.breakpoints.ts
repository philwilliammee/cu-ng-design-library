import { BREAKPOINT } from '@angular/flex-layout';

// A standalone version of CWD Design Patterns
// ---------------------------------------------------------------------------
// Recommended breakpoints to match base theme:
// @media (min-width: 321px) - above 3.5" phones begins
// @media xs-min (min-width: 480px)
// @media ks-min (min-width: 624px)
// @media sm-min (min-width: 768px) - tablet begins, sidebar begins
// @media md-min (min-width: 992px) - desktop main navigation begins
// @media ml-min (min-width: 1080px)
// @media lg-min (min-width: 1200px)
// @media xl-min (min-width: 1400px) - maximum content width begins
// $screen-xs-min: 480px;
// $screen-ks-min: 624px;
// $screen-sm-min: 768px;
// $screen-md-min: 992px;
// $screen-ml-min: 1080px;
// $screen-lg-min: 1200px;
// $screen-xl-min: 1480px;
export const CWD_BREAKPOINTS = [
  {
    alias: 'xs',
    suffix: 'Xs',
    mediaQuery: 'screen and (min-width: 0px) and (max-width: 480px)',
    overlapping: false,
    priority: 1002,
  },
  {
    alias: 'sm',
    suffix: 'Sm',
    mediaQuery: 'screen and (min-width: 480px) and (max-width: 624px)',
    overlapping: false,
    priority: 1003,
  },
  {
    alias: 'md',
    suffix: 'Md',
    mediaQuery: 'screen and (min-width: 624px) and (max-width: 768px)',
    overlapping: false,
    priority: 1004,
  },
  {
    alias: 'lg',
    suffix: 'Lg',
    mediaQuery: 'screen and (min-width: 768px) and (max-width: 992px)',
    overlapping: false,
    priority: 1005,
  },
  {
    alias: 'xl',
    suffix: 'Xl',
    mediaQuery: 'screen and (min-width: 992px) and (max-width: 1200px)',
    overlapping: false,
    priority: 1006,
  },
  {
    alias: 'xxl',
    suffix: 'Xxl',
    mediaQuery: 'screen and (min-width: 1200px) and (max-width: 1400px)',
    overlapping: false,
    priority: 1007,
  },
  {
    alias: 'xxxl',
    suffix: 'Xxxl',
    mediaQuery: 'screen and (min-width: 1400px)',
    overlapping: false,
    priority: 1008,
  },
];

export const CustomBreakPointsProvider = {
  provide: BREAKPOINT,
  useValue: [...CWD_BREAKPOINTS],
  multi: true,
};
