import api from 'utils/api'

export default {
  getAll: getHeroes,
  get: getHero,
  getProfile: getHeroProfile,
  patch: patchHeroProfile
}

/**
 * Definitions of type
 */
export interface HeroType {
  id: string;
  name: string;
  image: string;
}

export interface HeroProfileType {
  str: number;
  int: number;
  agi: number;
  luk: number;
}

type Callback = (data: any) => void | any;

/**
 * Gets the heroes.
 *
 * @param      {Function}                       [cb]    Callback
 * @return     {Promise<HeroType[]|undefined>}  The list of heroes.
 */
export async function getHeroes (
  cb: Callback = function (data: HeroType[]) {
    return data
  }
) {
  return cb(await api.get('/heroes'))
}

/**
 * Get specific hero.
 *
 * @param      {number|string}                id      The identifier
 * @param      {Function}                     [cb]    Callback
 * @return     {Promise<HeroType|undefined>}  The hero information.
 */
export async function getHero (
  id: number | string,
  cb: Callback = function (data: HeroType) {
    return data
  }
) {
  return cb(await api.get(`/heroes/${id}`))
}

/**
 * Get specific hero profile.
 *
 * @param      {number|string}                       id      The identifier
 * @param      {Function}                            [cb]    Callback
 * @return     {Promise<HeroProfileType|undefined>}  The hero profile.
 */
export async function getHeroProfile (
  id: number | string,
  cb: Callback = function (data: HeroProfileType) {
    return data
  }
) {
  return cb(await api.get(`/heroes/${id}/profile`))
}

/**
 * Patch hero profile
 *
 * @param      {number|string}              id           The identifier skills
 * @param      {HeroProfileType}            profile      The profile
 * @param      {number}                     profile.str  Strength
 * @param      {number}                     profile.int  Intelligence
 * @param      {number}                     profile.agi  Agility
 * @param      {number}                     profile.luk  Luck
 * @param      {Function}                   [cb]         Callback
 * @return     {Promise<string|undefined>}  Result
 */
export async function patchHeroProfile (
  id: number | string,
  profile: HeroProfileType,
  cb: Callback = function (data: string) {
    return data
  }
) {
  return cb(await api.patch(`/heroes/${id}/profile`, profile))
}
