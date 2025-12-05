import { invariantType } from '#lib/invariant'

export const fetchJSON = async <T>(
  path: string,
  init: RequestInit,
  validator: (data: unknown) => data is T
): Promise<T> => {
  const response = await fetch(path, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init.headers,
    },
  })

  if (!response.ok) {
    throw new Error(
      `Fetch failed for ${path} with status ${response.status}: ${response.statusText}`
    )
  }

  const data = await response.json()
  invariantType(data, validator, `Data from ${path} is not valid`)
  return data
}

export const fetchOK = async (
  path: string,
  init: RequestInit
): Promise<void> => {
  const response = await fetch(path, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init.headers,
    },
  })

  if (!response.ok) {
    throw new Error(
      `Fetch failed for ${path} with status ${response.status}: ${response.statusText}`
    )
  }
}
