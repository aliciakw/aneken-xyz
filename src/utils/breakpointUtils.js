const ScreenSizes = {
  mobile: 'mobile',
  phablet: 'phablet',
  tablet: 'tablet',
  laptop: 'laptop',
  desktop: 'desktop',
};

export const Breakpoints = {
  [ScreenSizes.mobile]: 365,
  [ScreenSizes.phablet]: 550,
  [ScreenSizes.tablet]: 770,
  [ScreenSizes.laptop]: 1250,
  [ScreenSizes.desktop]: Infinity,
}

export function isMobile($mq) {
  if (
    $mq === ScreenSizes.mobile ||
    $mq === ScreenSizes.phablet ||
    $mq === ScreenSizes.tablet
  ) {
    return true;
  }
  return false;
}