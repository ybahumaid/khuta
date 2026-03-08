#!/bin/bash
# ============================================
# 🚀 سكربت رفع خُطى على GitHub Pages
# استخدم: bash deploy.sh
# ============================================

echo "🔨 جاري بناء المشروع..."
npm run build

echo ""
echo "📦 جاري رفع الملفات على GitHub..."
git add .
git commit -m "🚀 تحديث خُطى - $(date '+%Y-%m-%d %H:%M')"
git push origin main

echo ""
echo "✅ تم الرفع بنجاح!"
echo "🌐 موقعك: https://ybahumaid.github.io/khuta/"
echo ""
