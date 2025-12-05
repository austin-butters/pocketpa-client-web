import { LoadingPlaceholder } from '#components/loading-placeholder'
import { queryClient, QueryClientProvider } from '#lib/query-client'
import { StrictMode, Suspense } from 'react'

const App = () => {
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

export default App
