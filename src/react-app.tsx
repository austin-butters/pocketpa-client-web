import { LoadingPlaceholder } from '#components/loading-placeholder'
import { queryClient, QueryClientProvider } from '#lib/query-client'
import { StrictMode, Suspense } from 'react'

export const ReactApp = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingPlaceholder />}>
          <p>POCKETPa.</p>
        </Suspense>
      </QueryClientProvider>
    </StrictMode>
  )
}
