import { ENVIROMENT } from '#config'

export const invariant: (
  condition: boolean,
  message: string
) => asserts condition is true = (condition, message) => {
  if (!condition) {
    if (ENVIROMENT === 'production') {
      throw new Error()
    }
    console.error(`Invariant Violation: ${message}`)
    throw new Error(`Invariant Violation: ${message}`)
  }
}

export const invariantType: <TInput, TNarrowed extends TInput>(
  value: TInput,
  typeCheck: (value: TInput) => value is TNarrowed,
  message: string
) => asserts value is TNarrowed = <TInput, TNarrowed extends TInput>(
  value: TInput,
  typeCheck: (value: TInput) => value is TNarrowed,
  message: string
) => {
  invariant(typeCheck(value), message)
}
