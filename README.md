# Julizelle L. Lizardo — Nursing Portfolio

NCMCOA6 Creative Portfolio Website · BSN 4th Year · A.Y. 2024–2025

## 🚀 Deploy to GitHub Pages (Step-by-Step)

### Step 1: Create a GitHub Repository
1. Go to [github.com](https://github.com) and log in
2. Click **+** → **New repository**
3. Name it `nursing-portfolio` (or any name you like)
4. Set it to **Public**
5. Click **Create repository**

### Step 2: Upload the project files
You have two options:

**Option A — GitHub website (easiest):**
1. On your new repository page, click **uploading an existing file**
2. Drag and drop all files and folders from this project
3. Click **Commit changes**

**Option B — Using Git (if you have it installed):**
```bash
cd nursing-portfolio
git init
git add .
git commit -m "Initial commit: nursing portfolio"
git remote add origin https://github.com/YOUR_USERNAME/nursing-portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. In your repository, go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Click **Save**

### Step 4: Wait for deployment
- The GitHub Actions workflow will automatically build and deploy your site
- Go to **Actions** tab to see the progress
- Once done, your site will be live at:
  `https://YOUR_USERNAME.github.io/nursing-portfolio`

---

## 🛠️ Run Locally (for editing)

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📝 How to Edit Your Content

All content is in `src/sections/`. Open any file to update:

| File | What to edit |
|------|-------------|
| `Cover.jsx` | Your name, year, subject |
| `AboutMe.jsx` | Bio, skills, timeline |
| `RecordedActivities.jsx` | Activities for each period |
| `Insights.jsx` | Reflections per grading period |
| `WhyPass.jsx` | Your motivation |
| `FamilyIntro.jsx` | Family member names and descriptions |
| `Dreams.jsx` | Your aspirations |

## 🎨 Customizing Colors

Edit `src/index.css` and change the `:root` CSS variables at the top.
