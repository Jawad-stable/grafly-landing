#!/usr/bin/env bash
# Cloudflare Pages build script for the Grafly monorepo.
# Set the Cloudflare build command to: bash .cloudflare-build.sh
set -euo pipefail

echo "──────────────────────────────────────────────"
echo "Node version: $(node -v)"
echo "──────────────────────────────────────────────"

echo "▶ Installing pnpm 10.26.1 (matches lockfile)…"
npm install -g pnpm@10.26.1

echo "▶ Installing dependencies…"
pnpm install --no-frozen-lockfile --prefer-offline

echo "▶ Building grafly-landing…"
pnpm --filter @workspace/grafly-landing exec vite build

echo "──────────────────────────────────────────────"
echo "✅ Build complete. Output: artifacts/grafly-landing/dist/public"
ls -la artifacts/grafly-landing/dist/public/
echo "──────────────────────────────────────────────"
