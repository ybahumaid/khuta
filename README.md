# خُطى — KHUTAA 🧭
### دليلك السياحي الذكي لمدينة جدة
> "اكتشف جدة بعيونها الحقيقية"

🌐 **الموقع:** [ybahumaid.github.io/khuta](https://ybahumaid.github.io/khuta/)

---

## 🚀 تشغيل المشروع محلياً

```bash
# 1. ثبّت المكتبات (أول مرة بس)
npm install

# 2. شغّل المشروع للتطوير
npm run dev

# 3. ابنِ النسخة النهائية
npm run build
```

---

## 📦 رفع التحديثات على GitHub

### ويندوز:
```
deploy.bat
```
(دبل كلك عليه أو من CMD)

### ماك / لينكس:
```bash
bash deploy.sh
```

### أو يدوياً:
```bash
npm run build
git add .
git commit -m "تحديث"
git push origin main
```

---

## 🏗️ هيكل المشروع

```
khutaa/
├── src/
│   ├── App.tsx              # المتحكم الرئيسي
│   ├── main.tsx             # نقطة الدخول
│   ├── index.css            # الثيم والأنيميشنز
│   ├── data.ts              # قاعدة بيانات المحتوى
│   └── components/
│       ├── Navbar.tsx        # شريط التنقل
│       ├── Footer.tsx        # الفوتر
│       ├── HomePage.tsx      # الصفحة الرئيسية
│       ├── PlacesPage.tsx    # صفحة الأماكن
│       ├── EventsPage.tsx    # صفحة الفعاليات
│       ├── TransportPage.tsx # صفحة التنقل
│       ├── AboutPage.tsx     # صفحة عن خُطى
│       └── ContactPage.tsx   # صفحة التواصل
├── index.html
├── package.json
├── deploy.sh                # سكربت رفع (ماك/لينكس)
├── deploy.bat               # سكربت رفع (ويندوز)
└── README.md
```

---

## 🎨 التقنيات

- **React 19** + **TypeScript**
- **Vite 7** (بناء سريع)
- **Tailwind CSS v4** (تصميم)
- **Lucide React** (أيقونات)
- **Cairo + Tajawal** (خطوط عربية)

---

## 📄 الترخيص
© 2026 خُطى — جميع الحقوق محفوظة
