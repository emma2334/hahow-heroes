export const breakpoint = {
  xs: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1216px'
}

export interface GridType {
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
}

export function calcColWidth (props: GridType) {
  return (Object.keys(props) as Array<keyof GridType>)
    .map((key) =>
      props[key]
        ? `@media (min-width: ${breakpoint[key]}) { max-width: ${
            (Number(props[key]) / 12) * 100
          }%; }`
        : ''
    )
    .join('')
}
