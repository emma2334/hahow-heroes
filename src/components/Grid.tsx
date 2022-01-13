import styled, { css } from 'styled-components'
import {
  ColType,
  GridType,
  genColWidth,
  genGridLayout,
  genMaxWidth
} from 'utils/grid'

interface GridPropType {
  col?: ColType | GridType;
  align?: 'left' | 'right' | 'center';
}

export const Grid = styled.div`
  display: inline-block;
  width: 100%;
  text-align: ${({ align }: GridPropType) => align};
  flex: ${({ col }: GridPropType) => (col ? '0 0 auto' : '1 0 0')};
  ${({ col }: GridPropType) => col && genColWidth(col)}
`

interface WrapperPropType {
  display?: string;
  itemSpace?: string;
  colFrame?: ColType | GridType;
}

export const Wrapper = styled.div`
  ${({ display, itemSpace = '0', colFrame }: WrapperPropType) => {
    switch (display) {
      case 'grid':
        return css`
          display: grid;
          grid-gap: ${itemSpace};
          ${colFrame && genGridLayout(colFrame)}
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

export const Container = styled.div`
  margin: auto;
  padding: 0 15px;
  width: 100%;
  ${genMaxWidth()}
`
