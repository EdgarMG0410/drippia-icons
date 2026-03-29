#!/bin/bash
# Deploy script for Cloudflare Pages
cd docs
npm run build
npx wrangler pages deploy dist --project-name=drippia-icons --commit-dirty=true
