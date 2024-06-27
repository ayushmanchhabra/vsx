/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        coverage: {
            provider: 'v8',
            reporter: ['json', 'json-summary'],
            reportOnFailure: true,
        },
        globals: true,
        environment: 'jsdom',
        setupFiles: './test/setup.ts',
      },
  })
