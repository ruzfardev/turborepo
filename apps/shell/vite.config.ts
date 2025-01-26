import { defineConfig } from 'vite';

import path from 'path';
import fs from 'fs';
import react from '@vitejs/plugin-react';
import fastGlob from 'fast-glob';


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@entities/visual-controls': path.resolve(__dirname, '../../packages/entities/visual-controls/src'),
    }
  },
  plugins: [
      {
        name: "merge-control-metadata",
        async buildStart() {
          let outputDir = path.resolve('public')
          let outputFile = path.resolve(outputDir, 'metadata.json')

          console.log('Looking for metadata.json files of visual-controls...')
          let files = await fastGlob('../../packages/entities/visual-controls/src/**/*.json')
            
          var merged = []
          files.forEach(file => {
            process.stdout.write(`Reading the ${file} ... `)
            merged.push(JSON.parse(fs.readFileSync(file, 'utf-8')))
            console.log(`Done`)
          })

          fs.writeFileSync(outputFile, JSON.stringify(merged), 'utf-8')
          console.log(`${merged.length} metadata.json files merged to ${outputFile}`)
        }
      },
      react()
  ],
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[local]_[hash:base64:9]"
    }
  },
  server: {
    host: true
  }
});
