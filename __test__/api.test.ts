import { absoluteUrl } from '../src/utils/api'

/**
 * Test absoluteUrl()
 */
describe('absoluteUrl()', () => {
  test("Generate absolute url from relative url doesn't start with slash", () => {
    expect(absoluteUrl('heroes')).toBe(
      'https://hahow-recruit.herokuapp.com/heroes'
    )
  })
  test('Generate absolute url from relative url start with slash', () => {
    expect(absoluteUrl('/heroes')).toBe(
      'https://hahow-recruit.herokuapp.com/heroes'
    )
  })
  test('Input an absolute url', () => {
    expect(absoluteUrl('https://hahow-recruit.herokuapp.com/heroes')).toBe(
      'https://hahow-recruit.herokuapp.com/heroes'
    )
  })
})
