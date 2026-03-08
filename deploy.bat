@echo off
REM ============================================
REM 🚀 سكربت رفع خُطى على GitHub Pages
REM استخدم: deploy.bat (دبل كلك أو من CMD)
REM ============================================

echo 🔨 جاري بناء المشروع...
call npm run build

echo.
echo 📦 جاري رفع الملفات على GitHub...
git add .
git commit -m "🚀 تحديث خُطى - %date% %time%"
git push origin main

echo.
echo ✅ تم الرفع بنجاح!
echo 🌐 موقعك: https://ybahumaid.github.io/khuta/
echo.
pause
