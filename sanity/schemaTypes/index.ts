import { type SchemaTypeDefinition } from 'sanity'
import { blogPost } from './blogPost'
import { programme } from './programme'
import { festival } from './festival'
import { event } from './event'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, programme, festival, event],
}
