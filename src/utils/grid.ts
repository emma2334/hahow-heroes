export const breakpoint = {
  xs: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1216px'
}

export type ColType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridType {
  xs?: ColType;
  sm?: ColType;
  md?: ColType;
  lg?: ColType;
  xl?: ColType;
}

/**
 * Generate css with media query
 *
 * @param      {keyof GridType}  bp      Breakpoint
 * @param      {string}          css     Css
 * @return     {string}          A string of css with media query
 */
export function RWD (bp: keyof GridType, css: string) {
  return `@media (min-width: ${breakpoint[bp]}) { ${css} }`
}

/**
 * Calculate column width.
 *
 * @param      {GridType}  width   The column width (n/12)
 * @return     {<type>}    A string of col width in each breakpoint
 */
export function calcColWidth (width: GridType) {
  return (Object.keys(width) as Array<keyof GridType>)
    .map((bp) => RWD(bp, `max-width: ${(Number(width[bp]) / 12) * 100}%;`))
    .join('')
}

/**
 * Calculate grid template columns frames.
 *
 * @param      {ColType|GridType}  gridCol  Number of columns in each row
 * @return     {string|undefined}  String of grid-template-columns result
 */
export function calcGridLayout (gridCol: ColType | GridType) {
  const frame = (n: number) =>
    ([...Array(n)] as any[]).map((e) => '1fr').join(' ')

  if (typeof gridCol === 'number') {
    return `grid-template-columns: ${frame(gridCol)}`
  } else if (typeof gridCol === 'object') {
    return (Object.keys(gridCol) as Array<keyof GridType>)
      .map((bp) => RWD(bp, `grid-template-columns: ${frame(gridCol[bp] || 0)}`))
      .join('')
  }
}
