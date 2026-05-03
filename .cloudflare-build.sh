#!/usr/bin/env bash
# Cloudflare Pages/Workers build script.
# Cloudflare auto-installs pnpm and runs `pnpm install --frozen-lockfile`
# BEFORE this script runs, so we only need to build.
set -euo pipefail

echo "──────────────────────────────────────────────"
echo "Node:  $(node -v)"
echo "pnpm:  $(pnpm -v)"
echo "──────────────────────────────────────────────"

echo "▶ Building grafly-landing…"
pnpm --filter @workspace/grafly-landing exec vite build

echo "──────────────────────────────────────────────"
echo "✅ Build complete. Output:"
ls -la artifacts/grafly-landing/dist/public/
echo "──────────────────────────────────────────────"
