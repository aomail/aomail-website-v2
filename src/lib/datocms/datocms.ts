import { GetGlobalCompanyInformationQuery, getSdk } from './__generated__/types'
import type { Awaited } from '@utils/src'

interface requestQuery {
  preview?: boolean
  query: keyof ReturnType<typeof getSdk>
  variables?: Parameters<ReturnType<typeof getSdk>[requestQuery['query']]>[0]
  pageHeaders?: Parameters<ReturnType<typeof getSdk>[requestQuery['query']]>[1]
}

export async function request<T>({
  query,
  preview,
  pageHeaders,
  variables,
}: requestQuery): Promise<T> {
  const endpoint = preview
    ? `${process.env.NEXT_DATOCMS_GRAPHQL_URL}/preview`
    : process.env.NEXT_DATOCMS_GRAPHQL_URL

  const GraphQLClient = await import('graphql-request').then(
    (res) => res.GraphQLClient
  )

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  })

  const sdk = getSdk(client)
  //@ts-expect-error need to narrow type to Promise<T>
  return sdk[query](variables, pageHeaders)
}

export type GlobalCompanyInformation = Awaited<
  ReturnType<typeof fetchGlobalCompanyInformation>
>['companyInformationGlobal']

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function fetchGlobalCompanyInformation(preview = false) {
  const {
    companyInformationGlobal,
  } = await request<GetGlobalCompanyInformationQuery>({
    query: 'getGlobalCompanyInformation',
    preview,
  })
  return { companyInformationGlobal }
}
