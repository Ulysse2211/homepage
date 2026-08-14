import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
    collections: {
        content: defineCollection({
            type: 'page',
            source: 'posts/*.md',
            schema: z.object({
                tags: z.array(z.string()),
                image: z.string().optional(),
                date: z.date(),
                color: z.string().regex(
                    /^#[0-9a-fA-F]{6}$/,
                    { message: 'Invalid color format. Must be a 7-character hex code (e.g., #RRGGBB).' }
                ).optional(),
            })
        }),
        projects: defineCollection({
            type: 'page',
            source: 'projects/*.md',
            schema: z.object({
                tags: z.array(z.string()),
                image: z.string().optional(),
                date: z.date(),
                color: z.string().regex(
                    /^#[0-9a-fA-F]{6}$/,
                    { message: 'Invalid color format. Must be a 7-character hex code (e.g., #RRGGBB).' }
                ).optional(),
            })
        })
    }
})
