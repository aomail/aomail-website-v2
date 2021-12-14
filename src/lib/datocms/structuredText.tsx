import * as React from 'react'
import {
  isHeading as isHeadingGuard,
  isParagraph as isParagraphGuard,
  isBlockquote as isBlockquoteGuard,
  isList as isListGuard,
  isListItem as isListItemGuard,
  Span,
  Node,
  // isBlock as isBlockGuard,
  // isCode as isCodeGuard,
  // isInlineItem as isInlineItemGuard,
  // isThematicBreak as isThematicBreakGuard,
  // isInlineNode as isInlineNodeGuard,
  // isItemLink as isItemLinkGuard,
  // isLink as isLinkGuard,
  // isRoot as isRootGuard,
  // isSpan as isSpanGuard,
} from 'datocms-structured-text-utils'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import * as DatoCMS from 'react-datocms'
import { Anchor, Heading, List, Paragraph } from '@theme'
import type { BlockQuoteProps, listItemProps, ListProps } from '@theme'
import * as DatoUtils from 'datocms-structured-text-utils'
import { structuredTextBlockRules } from './blockRules'

const BlockQuote = dynamic<BlockQuoteProps>(() =>
  import('@atoms/blockquote').then((res) => res.BlockQuote)
)
const UnorderedList = dynamic<ListProps>(() =>
  import('@atoms/lists').then((res) => res.UnorderedList)
)
const OrderedList = dynamic<ListProps>(() =>
  import('@atoms/lists').then((res) => res.OrderedList)
)
const ListItem = dynamic<listItemProps>(() =>
  import('@atoms/lists').then((res) => res.ListItem)
)

type structuredTextConfig = {
  headingProps?: React.ComponentProps<typeof Heading> & {
    fromSize?: number
    fromLevel?: number
  }
  paragraphProps?: React.ComponentProps<typeof Paragraph> & {
    size?: 'l' | 'm' | 's' | 'xs'
  }
  listItemProps?: React.ComponentProps<typeof ListItem>
  blockquoteProps?: React.ComponentProps<typeof BlockQuote>
  listProps?: React.ComponentProps<typeof List>
  strikethroughProps?: React.ComponentProps<'span'>
}

const setLevel = (start = 1, level: number): 1 | 2 | 3 | 4 | 5 | 6 => {
  const bump = start - 1
  if (level + bump >= 6 || level + bump < 0) return 6
  //@ts-expect-error Typescript can't constrain number to range
  return level + bump
}

function isStrikethroughGuard(node: Node): node is Span {
  return node.type === 'span' && !!node.marks?.includes('strikethrough')
}

const defaults = {
  isHeading: ({
    headingProps: { fromSize, fromLevel, ...props } = {
      fromSize: 1,
      fromLevel: 1,
    },
  }: structuredTextConfig = {}) =>
    DatoCMS.renderRule(isHeadingGuard, ({ node, children, key }) => {
      return (
        //@ts-expect-error Stitches css issue and as prop
        <Heading
          key={key}
          level={setLevel(fromSize, node.level)}
          as={`h${setLevel(fromLevel, node.level)}`}
          {...props}
        >
          {children}
        </Heading>
      )
    }),
  isParagraph: ({
    paragraphProps: { size, ...props } = { size: 'm' },
  }: structuredTextConfig) =>
    DatoCMS.renderRule(isParagraphGuard, ({ children, key }) => (
      //@ts-expect-error Stitches css issue and as prop
      <Paragraph key={key} size={size} {...props}>
        {children}
      </Paragraph>
    )),
  isBlockquote: ({ blockquoteProps }: structuredTextConfig) =>
    DatoCMS.renderRule(isBlockquoteGuard, ({ children, key }) => (
      <BlockQuote key={key} {...blockquoteProps}>
        {children}
      </BlockQuote>
    )),
  isList: ({ listProps }: structuredTextConfig) =>
    DatoCMS.renderRule(isListGuard, ({ node, children, key }) => {
      if (node.style === 'numbered') {
        return (
          //@ts-expect-error Stitches css issue and as prop
          <OrderedList key={key} {...listProps}>
            {children}
          </OrderedList>
        )
      }
      return (
        //@ts-expect-error Stitches css issue and as prop
        <UnorderedList key={key} {...listProps}>
          {children}
        </UnorderedList>
      )
    }),
  isListItem: ({ listItemProps }: structuredTextConfig) =>
    DatoCMS.renderRule(isListItemGuard, ({ key, children }) => (
      //@ts-expect-error Stitches css issue and as prop
      <ListItem key={key} {...listItemProps}>
        {children}
      </ListItem>
    )),
  isStrikethrough: ({ strikethroughProps }: structuredTextConfig) =>
    DatoCMS.renderRule(isStrikethroughGuard, ({ children, key }) => (
      <s key={key} {...strikethroughProps}>
        {children}
      </s>
    )),
  /*isLink: ({ linkProps }) =>
    renderRule(isLinkGuard, ({ node, key, children }) => {}),*/
}

// const isStrikethrough = ({ strikethroughProps } = { strikethroughProps: {} }) =>
//   renderRule(isStrikethroughGuard, ({ children, key }) => (
//     <s key={key} children={children} {...strikethroughProps} />
//   ))
// const isCode = ({ codeProps }) =>
//   renderRule(isCodeGuard, ({ key, children, node }) => (
//     <code key={key} children={children} {...codeProps} />
//   ))
// const isBlock = (props) => renderRule(isBlockGuard, (node) => <></>)
// const isInlineItem = (props) => renderRule(isInlineItemGuard, (node) => <></>)
// const isThematicBreak = (props) =>
//  renderRule(isThematicBreakGuard, (node) => <></>)
// const isInlineNode = (props) => renderRule(isInlineNodeGuard, (node) => <></>)
// const isItemLink = (props) => renderRule(isItemLinkGuard, (node) => <></>)
// const isLink = (props) => renderRule(isLinkGuard, (node) => <></>)
// const isRoot = (props) => renderRule(isRootGuard, (node) => <></>)
// const isSpan = (props) => renderRule(isSpanGuard, (node) => <></>)

/**function (node: Node): node is Span {
      return node.type === 'span' && !!node.marks?.includes('strikethrough')
    },
    ({ node, key, children }) => {
      const markLookup = {
        underline: underlineClass,
        strikethrough: strikethroughClass,
      }
      const classNames: string = node.marks.reduce(
        (acc, m) => (markLookup[m] ? acc.concat(' ' + markLookup[m]) : acc),
        ''
      )
      return (
        <s aria-hidden={true} className={classNames} key={key}>
          {node.value || children}
        </s>
      )
    }
  ), */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const structuredTextRules = ({
  ruleOverrides,
  ...propConfig
}: structuredTextConfig & {
  ruleOverrides?: Partial<typeof defaults>
} = {}) => {
  return Object.values(Object.assign({}, defaults, ruleOverrides)).map((k) =>
    k(propConfig)
  )
}

interface MaybeStructuredTextData {
  __typename: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blocks: { [key: string]: any }[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  links: { [key: string]: any }[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
interface StructuredTextProps {
  config?: structuredTextConfig & { ruleOverrides?: Partial<typeof defaults> }
  data: Partial<MaybeStructuredTextData>
}

function getRecordDirectory(typeName: string) {
  return (
    {
      LegalPageRecord: ['/legal', 'legalPageSlug'],
      BlogPageRecord: ['/blog', 'pageSlug'],
    }[typeName] || ['', null]
  )
}

//TODO add inline blocks
export const renderInlineRecordRules: React.ComponentProps<
  typeof DatoCMS.StructuredText
>['renderInlineRecord'] = () => {
  return <div></div>
}
export const renderLinkToRules: React.ComponentProps<
  typeof DatoCMS.StructuredText
>['renderLinkToRecord'] = (node) => {
  const [directory, slugKey] = getRecordDirectory(node.record.__typename)
  return (
    <Link passHref href={directory + '/' + node.record[slugKey]}>
      <Anchor {...node.transformedMeta}>{node.children}</Anchor>
    </Link>
  )
}

export function StructuredText({
  config,
  data,
  ...props
}: StructuredTextProps): JSX.Element {
  if (DatoUtils.isDocument(data) || DatoUtils.isStructuredText(data)) {
    return (
      <DatoCMS.StructuredText
        renderInlineRecord={renderInlineRecordRules}
        renderLinkToRecord={renderLinkToRules}
        customRules={structuredTextRules(config)}
        //@ts-expect-error havent properly typed this
        renderBlock={structuredTextBlockRules}
        data={data}
        {...props}
      />
    )
  }
  console.error(
    'passed a value to DatoCms that is not a Structured text document' +
      '/n' +
      JSON.stringify(data)
  )
}
