import api from 'utils/api'

export default {
  getAll: getHeroes,
  get: getHero,
  getProfile: getHeroProfile,
  patch: patchHeroProfile
}

export interface HeroType {
  id: string;
  name: string;
  image: string;
}

/**
 * Gets the heroes.
 *
 * @return     {Promise<object|undefined>}  The list of heroes.
 */
export async function getHeroes (): Promise<object | undefined> {
  return await api.get('/heroes')
}

/**
 * Get specific hero.
 *
 * @param      {number|string}              id      The identifier
 * @return     {Promise<object|undefined>}  The hero information.
 */
export async function getHero (
  id: number | string
): Promise<object | undefined> {
  return await api.get(`/heroes/${id}`)
}

/**
 * Get specific hero profile.
 *
 * @param      {number|string}              id      The identifier
 * @return     {Promise<object|undefined>}  The hero profile.
 */
export async function getHeroProfile (
  id: number | string
): Promise<object | undefined> {
  return await api.get(`/heroes/${id}/profile`)
}

/**
 * Patch hero profile
 *
 * @param      {number|string}              id           The identifier skills
 * @param      {Object}                     profile      The profile
 * @param      {number}                     profile.str  Strength
 * @param      {number}                     profile.int  Intelligence
 * @param      {number}                     profile.agi  Agility
 * @param      {number}                     profile.luk  Luck
 * @return     {Promise<string|undefined>}  Result
 */
export async function patchHeroProfile (
  id: number | string,
  profile: { str: string; int: string; agi: string; luk: string }
): Promise<string | undefined> {
  return await api.patch(`/heroes/${id}/profile`, profile)
}
