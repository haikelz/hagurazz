// NOTE This file is auto-generated by Contentlayer

export { isType } from 'contentlayer/client'

// NOTE During development Contentlayer imports from `.mjs` files to improve HMR speeds.
// During (production) builds Contentlayer it imports from `.json` files to improve build performance.
import { allNotes } from './Notes/_index.mjs'
import { allWorks } from './Works/_index.mjs'

export { allNotes, allWorks }

export const allDocuments = [...allNotes, ...allWorks]


