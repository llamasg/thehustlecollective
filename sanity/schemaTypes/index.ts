import { type SchemaTypeDefinition } from 'sanity'
import { blogPost } from './blogPost'
import { programme } from './programme'
import { festival } from './festival'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, programme, festival],
}
