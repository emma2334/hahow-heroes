export const breakpoint = {
  xs: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1500px'
}

export const maxWidth = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
  xxl: '1320px'
}

export type ColType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridType {
  xs?: ColType;
  sm?: ColType;
  md?: ColType;
  lg?: ColType;
  xl?: ColType;
  xxl?: ColType;
}

/**
 * Generate css with media query.
 *
 * @param      {keyof GridType}  bp      Breakpoint
 * @param      {string}          css     Css
 * @return     {string}          A string of css with media query
 */
export function RWD (bp: keyof typeof breakpoint, css: string) {
  return `@media (min-width: ${breakpoint[bp]}) { ${css} }`
}

/**
 * Generate RWD column width css.
 *
 * @param      {ColType|GridType}  col     The column width (n/12 of parent width)
 * @return     {string|undefined}  A string of col width in each breakpoint
 */
export function genColWidth (col: ColType | GridType) {
  if (typeof col === 'number') {
    return `max-width: ${(Number(col) / 12) * 100}%;`
  } else if (typeof col === 'object') {
    return (Object.keys(col) as Array<keyof GridType>)
      .map((bp) => RWD(bp, `max-width: ${(Number(col[bp]) / 12) * 100}%;`))
      .join('')
  }
}

/**
 * Generate grid template columns frames css.
 *
 * @param      {ColType|GridType}  colFrame  Number of columns in each row
 * @return     {string|undefined}  String of grid-template-columns result
 */
export function genGridLayout (colFrame: ColType | GridType) {
  const frame = (n: number) =>
    ([...Array(n)] as any[]).map((e) => '1fr').join(' ')

  if (typeof colFrame === 'number') {
    return `grid-template-columns: ${frame(colFrame)};`
  } else if (typeof colFrame === 'object') {
    return (Object.keys(colFrame) as Array<keyof GridType>)
      .map((bp) =>
        RWD(bp, `grid-template-columns: ${frame(colFrame[bp] || 0)};`)
      )
      .join('')
  }
}

/**
 * Generate the css for maximum width of RWD container.
 *
 * @return     {string}  Srting of max-width css
 */
export function genMaxWidth () {
  return (Object.keys(maxWidth) as Array<keyof typeof maxWidth>)
    .map((bp) => RWD(bp, `max-width: ${maxWidth[bp]};`))
    .join('')
}
