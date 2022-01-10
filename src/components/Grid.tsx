import styled from 'styled-components'
import { GridType, calcColWidth } from 'utils/grid'

export const Column = styled.div`
  display: inline-block;
  width: 100%;
  ${(props: GridType) => calcColWidth(props)}
`
