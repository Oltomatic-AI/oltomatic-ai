#!/bin/bash
echo "🚀 Deploying Oltomatic website..."
git add .
git commit -m "$1"
git push origin main
echo "✅ Pushed to GitHub — Vercel will deploy automatically"
