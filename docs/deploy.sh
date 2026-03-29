#!/bin/bash
# Deploy script for Cloudflare Pages
cd "$(dirname "$0")"
npx wrangler pages deploy dist --project-name=drippia-icons --commit-dirty=true
