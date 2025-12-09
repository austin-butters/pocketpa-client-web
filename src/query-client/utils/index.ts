import { type QueryOptions } from '@tanstack/react-query'

/**
 * A union of base resources that can be queried.
 * Includes only the most relevant resource type.
 *
 * The intention here is to add to this over time.
 */
export type QueryBaseResource =
  | 'authentication'
  | 'user'
  | 'project'
  | 'take-log'

/**
 * Query metadata for a single resource, with no relations.
 */
export type QueryResourceMetadata = {
  baseResource: QueryBaseResource
  type: 'collection' | 'single'
  id?: string
  filters?: {
    pagination?: {
      pageNumber: number
      pageSize: number
    }
  }
} & ({ type: 'single'; id: string } | { type: 'collection'; id?: undefined }) &
  ({ type: 'single'; filters?: undefined } | { type: 'collection' })

/**
 * Metadata relating to relationships between resources.
 *
 * The relationship should be framed as a one-way relationship from the primary resource to it's related resource.
 * For example, a base resource `take-log` may be `relatedTo` a `project` as a `child`
 *
 * Contains additional metadata about indented behavior, which can be used to influence query behavior and invalidation.
 */
export type QueryResourceRelationMetadata = {
  type: 'parent' | 'child' | 'other'
  resource: QueryResourceMetadata
  intendedBehavior?: {
    cascadeOnParentUpdate?: boolean
  }
}

/**
 * Options for generating a query key. Contains a primary resource of type `QueryResourceMetadata`, and array of resources it is `relatedTo` of type `QueryResourceRelationMetadata`.
 */
export type GenerateQueryKeyOptions = {
  resource: QueryResourceMetadata
  relatedTo: QueryResourceRelationMetadata[]
}

/**
 * A standard query key, intended for use whenever possible.
 * It is an array of length 1, containing a single object with properties.
 *
 * This is the most future-proof approach as altering properties of the object will make minimal breaking changes.
 * It is also the most useful for managing invalidation with predicates.
 */
export type StandardQueryKey = [GenerateQueryKeyOptions]

/**
 * Represents a function that generates a query key (`StandardQueryKey`) from a `GenerateQueryKeyOptions` object.
 */
export type QueryKeyGenerator = (
  options: GenerateQueryKeyOptions
) => StandardQueryKey

/**
 * Generates a `StandardQueryKey` from a `GenerateQueryKeyOptions` object.
 */
export const generateQueryKey: QueryKeyGenerator = (options) => [options]

/**
 * Options for generating query options.
 *
 * This should be used wherever possible, rather than manually writing query options. Ensures type safety.
 */
export type GenerateQueryOptionsOptions = Omit<
  QueryOptions,
  'queryKey' | 'queryFn'
>

/**
 * Represents a function that generates query options (`QueryOptions`) from a `GenerateQueryOptionsOptions` object.
 * `queryKey` and `queryFn` are excluded from the defaults, as they should be set each time.
 */
type QueryOptionsGenerator = (
  options: GenerateQueryOptionsOptions
) => QueryOptions

/**
 * Curried function that returns a `QueryOptionsGenerator` function.
 * The returned function makes use of the provided `defaults` when options are not provided.
 *
 * @param defaults - The default query options for the generator to use when options are not provided.
 * @returns A `QueryOptionsGenerator` function that makes use of the provided `defaults`.
 */
export const getQueryOptionsGeneratorWithDefaults = (
  defaults: GenerateQueryOptionsOptions
): QueryOptionsGenerator => {
  return (options) => ({ ...defaults, ...options })
}
