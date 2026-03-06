import { type SchemaTypeDefinition } from 'sanity'
import { blogPost } from './blogPost'
import { programme } from './programme'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, programme],
}
