import type { ConfigContext } from 'sanity'
import type { StructureBuilder } from 'sanity/structure'

export default function defineStructure<StructureType>(
  factory: (S: StructureBuilder, context: ConfigContext) => StructureType,
) {
  return factory
}
