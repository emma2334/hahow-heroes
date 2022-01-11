import styled, { css } from 'styled-components'
import {
  breakpoint,
  ColType,
  GridType,
  calcColWidth,
  calcGridLayout
} from 'utils/grid'

export const Grid = styled.div`
  display: inline-block;
  flex: ${(props: GridType) =>
    Object.keys(breakpoint).some((r) => Object.keys(props).includes(r))
      ? '0 0 auto'
      : '1 0 0'};
  width: 100%;
  ${(props: GridType) => calcColWidth(props)}
`

interface RowPropType {
  display?: string;
  itemSpace?: string;
  gridCol?: ColType | GridType;
}

export const Wrapper = styled.div`
  ${({ display, itemSpace = '0', gridCol }: RowPropType) => {
    switch (display) {
      case 'grid':
        return css`
          display: grid;
          grid-gap: ${itemSpace};
          ${gridCol && calcGridLayout(gridCol)}
          ${Grid} {
            max-width: 100%;
          }
        `
      default:
        return css`
          display: flex;
          flex-wrap: wrap;
        `
    }
  }}}
`
