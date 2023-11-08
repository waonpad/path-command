import { AtLeast } from '@/types';

export type Coord = {
  x: number;
  y: number;
};

type PathCommandOptions = {
  relative?: boolean;
};

const defaultPathCommandOptions: PathCommandOptions = {
  relative: false,
};

/**
 * https://www.w3.org/TR/SVG2/paths.html#PathDataMovetoCommands
 */
const moveTo = (
  coords: AtLeast<1, Coord>,
  { relative }: PathCommandOptions = defaultPathCommandOptions
) => {
  return `${relative ? 'm' : 'M'} ${coords.map(({ x, y }) => `${x} ${y}`)}` as const;
};

/**
 * https://www.w3.org/TR/SVG2/paths.html#PathDataLinetoCommands
 */
const lineTo = (
  coords: AtLeast<1, Coord>,
  { relative = false }: PathCommandOptions = defaultPathCommandOptions
) => `${relative ? 'l' : 'L'} ${coords.map(({ x, y }) => `${x} ${y}`)}` as const;

/**
 * https://www.w3.org/TR/SVG2/paths.html#PathDataLinetoCommands
 */
const horizontalLineTo = (
  coords: AtLeast<1, Coord['x']>,
  { relative = false }: PathCommandOptions = defaultPathCommandOptions
) => `${relative ? 'h' : 'H'} ${coords.map((x) => `${x}`)}` as const;

/**
 * https://www.w3.org/TR/SVG2/paths.html#PathDataLinetoCommands
 */
const verticalLineTo = (
  coords: AtLeast<1, Coord['y']>,
  { relative = false }: PathCommandOptions = defaultPathCommandOptions
) => `${relative ? 'v' : 'V'} ${coords.map((y) => `${y}`)}` as const;

/**
 * https://www.w3.org/TR/SVG2/paths.html#PathDataCubicBezierCommands
 */
const curveTo = (
  coords: AtLeast<3, Coord>,
  { relative = false }: PathCommandOptions = defaultPathCommandOptions
) => `${relative ? 'c' : 'C'} ${coords.map(({ x, y }) => `${x} ${y}`)}` as const;

/**
 * https://www.w3.org/TR/SVG2/paths.html#PathDataCubicBezierCommands
 */
const smoothCurveTo = (
  coords: AtLeast<2, Coord>,
  { relative = false }: PathCommandOptions = defaultPathCommandOptions
) => `${relative ? 's' : 'S'} ${coords.map(({ x, y }) => `${x} ${y}`)}` as const;

/**
 * https://www.w3.org/TR/SVG2/paths.html#PathDataQuadraticBezierCommands
 */
const quadraticBezierCurveTo = (
  coords: AtLeast<2, Coord>,
  { relative = false }: PathCommandOptions = defaultPathCommandOptions
) => `${relative ? 'q' : 'Q'} ${coords.map(({ x, y }) => `${x} ${y}`)}` as const;

/**
 * https://www.w3.org/TR/SVG2/paths.html#PathDataQuadraticBezierCommands
 */
const smoothQuadraticBezierCurveTo = (
  coords: AtLeast<1, Coord>,
  { relative = false }: PathCommandOptions = defaultPathCommandOptions
) => `${relative ? 't' : 'T'} ${coords.map(({ x, y }) => `${x} ${y}`)}` as const;

// 使う時やる
// /**
//  * https://www.w3.org/TR/SVG2/paths.html#PathDataEllipticalArcCommands
//  */
// const ellipticalArc = (coords: Coord[], { relative = false }: PathCommandOptions = defaultPathCommandOptions) =>
//   `${relative ? 'a' : 'A'} ${coords.map(({ x, y }) => `${x} ${y}`)}` as const;

/**
 * https://www.w3.org/TR/SVG2/paths.html#PathDataClosePathCommand
 */
const closePath = 'Z' as const;

/**
 * https://www.w3.org/TR/SVG2/paths.html
 */
export const pathCommand = {
  m: moveTo,
  l: lineTo,
  h: horizontalLineTo,
  v: verticalLineTo,
  c: curveTo,
  s: smoothCurveTo,
  q: quadraticBezierCurveTo,
  t: smoothQuadraticBezierCurveTo,
  // a: ellipticalArc,
  z: closePath,
  moveTo,
  lineTo,
  horizontalLineTo,
  verticalLineTo,
  curveTo,
  smoothCurveTo,
  quadraticBezierCurveTo,
  smoothQuadraticBezierCurveTo,
  // ellipticalArc,
  closePath,
};
