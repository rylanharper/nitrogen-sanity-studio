import type { SanityDocument, StringInputProps, StringSchemaType } from 'sanity'

import { useFormValue } from 'sanity'
import { Box, Text, TextInput, Tooltip } from '@sanity/ui'
import { LockIcon } from '@sanity/icons'
import get from 'lodash.get'

type Props = StringInputProps<
  StringSchemaType & { options?: { field?: string } }
>

export const ProxyStringInput = (props: Props) => {
  const { schemaType } = props

  const path = schemaType?.options?.field
  const doc = useFormValue([]) as SanityDocument
  const proxyValue = path ? (get(doc, path) as string) : ''

  return (
    <Tooltip
      content={
        <Box padding={2}>
          <Text muted size={1}>
            This value is set in Shopify (<code>{path}</code>)
          </Text>
        </Box>
      }
      portal
    >
      <TextInput iconRight={LockIcon} readOnly={true} value={proxyValue} />
    </Tooltip>
  )
}
