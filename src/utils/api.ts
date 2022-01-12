export default { get, patch }

/**
 * Generate absolute url
 *
 * @param      {string}  path    The path
 * @return     {string}  The absolute url
 */
export function absoluteUrl (path: string): string {
  return /https?:\/\//.exec(path)
    ? path
    : `https://hahow-recruit.herokuapp.com/${path.replace(/^\//, '')}`
}

/**
 * Function for sending an api GET request
 *
 * @param      {string}                       path    API path
 * @return     {Promise<object | undefined>}  Response
 */
export async function get (path: string): Promise<object | undefined> {
  try {
    return await fetch(absoluteUrl(path), {
      method: 'GET'
    }).then((res) => res.json())
  } catch (e) {
    console.warn(e)
  }
}

/**
 * Function for sending an api PATCH request
 *
 * @param      {string}                       path    API path
 * @param      {object}                       body    Request payload
 * @return     {Promise<string | undefined>}  Response
 */
export async function patch (
  path: string,
  body: object
): Promise<string | undefined> {
  try {
    return await fetch(absoluteUrl(path), {
      method: 'PATCH',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(body)
    }).then((res) => res.text())
  } catch (e) {
    console.warn(e)
  }
}
