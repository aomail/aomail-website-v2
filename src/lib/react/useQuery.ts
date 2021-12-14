import { useRouter } from 'next/router'
import type { ParsedUrlQuery } from 'querystring'
import { useEffect, useState } from 'react'

export function useQuery(): {
  processedQueries: boolean
  queries: ParsedUrlQuery
} {
  const [processedQueries, setProcessedQueries] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [queries, setQueries] = useState<ParsedUrlQuery>({})
  const router = useRouter()
  const { query, asPath } = router
  const urlHasQueries = /\?(.*)=/.test(asPath)
  useEffect(() => {
    let recheckQueries = false
    //compare the queries so that we can refresh them if they have changed
    if (JSON.stringify(query) !== JSON.stringify(queries)) {
      recheckQueries = true
    }
    if ((!processedQueries || recheckQueries) && router) {
      if (urlHasQueries) {
        if (Object.keys(query).length > 0) {
          setQueries(query)
          setProcessedQueries(true)
        }
      } else {
        setProcessedQueries(true)
      }
    }
  }, [router])
  return {
    processedQueries,
    queries,
  }
}
