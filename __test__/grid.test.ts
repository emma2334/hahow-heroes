import * as grid from '../src/utils/grid'
const { breakpoint, maxWidth } = grid

/**
 * Test RWD()
 */
describe('RWD()', () => {
  test('Set color white when device size is sm', () => {
    expect(grid.RWD('sm', 'color: #000;')).toBe(
      `@media (min-width: ${breakpoint.sm}) { color: #000; }`
    )
  })
})

/**
 * Test genColWidth()
 */
describe('genColWidth()', () => {
  test('Set grid 12', () => {
    expect(grid.genColWidth(12)).toBe('max-width: 100%;')
  })
  test('Set responsive grid { xs: 12, md: 6, xxl: 3 }', () => {
    expect(grid.genColWidth({ xs: 12, md: 6, xxl: 3 })).toBe(
      `@media (min-width: ${breakpoint.xs}) { max-width: 100%; }@media (min-width: ${breakpoint.md}) { max-width: 50%; }@media (min-width: ${breakpoint.xxl}) { max-width: 25%; }`
    )
  })
})

/**
 * Test genGridLayout()
 */
describe('genGridLayout()', () => {
  test('Set 2 colums in each row', () => {
    expect(grid.genGridLayout(2)).toBe('grid-template-columns: 1fr 1fr;')
  })
  test('Set responsive template { xs: 1, md: 3, xxl: 6 }', () => {
    expect(grid.genGridLayout({ xs: 1, md: 3, xxl: 6 })).toBe(
      `@media (min-width: ${breakpoint.xs}) { grid-template-columns: 1fr; }@media (min-width: ${breakpoint.md}) { grid-template-columns: 1fr 1fr 1fr; }@media (min-width: ${breakpoint.xxl}) { grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; }`
    )
  })
})

/**
 * Test genMaxWidth()
 */
describe('genMaxWidth()', () => {
  test('Set 2 colums in each row', () => {
    expect(grid.genMaxWidth()).toBe(
      (Object.keys(maxWidth) as Array<keyof typeof maxWidth>)
        .map(
          (bp) =>
            `@media (min-width: ${breakpoint[bp]}) { max-width: ${maxWidth[bp]}; }`
        )
        .join('')
    )
  })
})
