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
 * @param      {ColType|GridType}  col     The column width (n/12 of parent width)
 * @return     {string|undefined}  A string of col width in each breakpoint
 */
export function calcColWidth (col: ColType | GridType) {
  if (typeof col === 'number') {
    return `max-width: ${(Number(col) / 12) * 100}%;`
  } else if (typeof col === 'object') {
    return (Object.keys(col) as Array<keyof GridType>)
      .map((bp) => RWD(bp, `max-width: ${(Number(col[bp]) / 12) * 100}%;`))
      .join('')
  }
}

/**
 * Calculate grid template columns frames.
 *
 * @param      {ColType|GridType}  colFrame  Number of frames in each column
 * @return     {string|undefined}  String of grid-template-columns result
 */
export function calcGridLayout (colFrame: ColType | GridType) {
  const frame = (n: number) =>
    ([...Array(n)] as any[]).map((e) => '1fr').join(' ')

  if (typeof colFrame === 'number') {
    return `grid-template-columns: ${frame(colFrame)}`
  } else if (typeof colFrame === 'object') {
    return (Object.keys(colFrame) as Array<keyof GridType>)
      .map((bp) =>
        RWD(bp, `grid-template-columns: ${frame(colFrame[bp] || 0)}`)
      )
      .join('')
  }
}
