# 🏥 Nursing Creative Portfolio
### Julizelle L. Lizardo · Bachelor of Science in Nursing · 4th Year
**Subject:** NCMCOA6 — Community and Population Health Nursing
**Academic Year:** 2024–2025

---

## 📖 About This Portfolio

This is a personal digital portfolio created as a requirement for **NCMCOA6 (Community Health Nursing)**. It serves as a comprehensive record of my nursing journey throughout my 4th year — documenting the activities I completed, the skills I developed, the reflections I wrote, and the aspirations I carry as a future Registered Nurse.

The portfolio is presented as a fully interactive website, organized into eight sections that together tell the story of who I am as a student nurse, what I have accomplished, and what I hope to become.

---

## 📋 Portfolio Sections

### 1. Cover Page
The opening of the portfolio, presenting my full name, degree program, year level, and the subject this portfolio is submitted for. It sets the tone for everything that follows.

### 2. About Me — My Nursing Journey
A personal introduction that goes beyond academic credentials. This section shares my background, the story of why I chose nursing, the core competencies I have developed, and a timeline of my four years in the BSN program. It reflects both who I am as a person and who I am becoming as a nurse.

### 3. Table of Contents
A navigable guide to every section of the portfolio, designed so that readers — whether instructors, clinical supervisors, or peers — can quickly find the content most relevant to them.

### 4. Recorded Activities
A detailed documentation of all nursing activities completed across three grading periods:

- **Prelims** — Initial community immersion, health assessments, windshield surveys, and family nursing care planning
- **Midterms** — Home visits, maternal and child health assistance, health teaching sessions, and epidemiological data analysis
- **Finals** — Community health program implementation, school health activities, disaster preparedness seminars, and the final community diagnosis presentation

Each activity includes a description of what was done, its type (field work, clinical skills, health education, etc.), and its significance to my development as a community health nurse.

### 5. Insights & Reflections
Personal and professional reflections written at the close of each grading period. These are honest accounts of what I experienced, what challenged me, what surprised me, and what I learned — not just about nursing, but about myself. Each reflection captures the emotional and intellectual growth that no grade can fully measure.

### 6. Why I Need to Pass NCMCOA6
A candid and heartfelt section explaining my motivations for passing this subject. It goes beyond academic necessity to articulate the deeper reasons: honoring my family's sacrifices, fulfilling my responsibility to future patients, advancing toward licensure, and answering the call to serve the Filipino community.

### 7. Family Introduction
An introduction to the people who have made this journey possible. Each family member is described not just by their relationship to me, but by the specific ways they have shaped my character, sustained my commitment, and strengthened my resolve throughout nursing school. They are the foundation of everything I do.

### 8. Dreams in Life
A forward-looking section that captures my aspirations — passing the Nursing Licensure Examination, working in public health, pursuing advanced education, and ultimately becoming an advocate for community health in the Philippines. This section closes the portfolio with purpose and hope.

---

## 🌐 Viewing the Portfolio Online

This portfolio is deployed as a live website via GitHub Pages. Once published, it can be accessed at:

```
https://YOUR_USERNAME.github.io/nursing-portfolio
```

Replace `YOUR_USERNAME` with your actual GitHub username after deployment.

---

## 🚀 How to Deploy to GitHub Pages

Follow these steps to publish the portfolio online so it can be viewed by your professor, classmates, or anyone with the link.

### Step 1 — Create a GitHub Account and Repository
1. Go to [github.com](https://github.com) and create a free account if you don't have one
2. Click the **+** button at the top right → select **New repository**
3. Name it `nursing-portfolio`
4. Set the visibility to **Public** (required for free GitHub Pages hosting)
5. Click **Create repository**

### Step 2 — Upload the Project Files
**If you are not familiar with coding tools, use this method:**
1. On your new repository page, look for the link that says **uploading an existing file**
2. Open the `nursing-portfolio` folder on your computer
3. Select all files and folders inside it and drag them into the GitHub upload area
4. Scroll down and click **Commit changes**

> ⚠️ Make sure to upload the contents of the `nursing-portfolio` folder, not the folder itself. GitHub should see files like `index.html`, `package.json`, and the `src` folder at the root level.

### Step 3 — Enable GitHub Pages
1. Inside your repository, click the **Settings** tab
2. In the left sidebar, click **Pages**
3. Under **Source**, select **GitHub Actions**
4. Click **Save**

### Step 4 — Wait for It to Go Live
1. Click the **Actions** tab in your repository to watch the build progress
2. A green checkmark means it was successful
3. Your portfolio is now live at `https://YOUR_USERNAME.github.io/nursing-portfolio`

The site will automatically rebuild and update every time you push new changes to the repository.

---

## ✏️ How to Update Your Personal Content

All text content lives inside the `src/sections/` folder. Each section of the portfolio has its own file. Open the relevant file in any text editor (Notepad, VS Code, etc.) and update the text between the quotation marks.

| Section | File to Open | What You Can Change |
|---------|-------------|---------------------|
| Cover Page | `src/sections/Cover.jsx` | Name, year level, subject, academic year |
| About Me | `src/sections/AboutMe.jsx` | Bio paragraphs, skills list, timeline events |
| Recorded Activities | `src/sections/RecordedActivities.jsx` | Activity titles, types, and descriptions per period |
| Insights & Reflections | `src/sections/Insights.jsx` | Reflection text per grading period |
| Why Pass NCMCOA6 | `src/sections/WhyPass.jsx` | Reasons and closing statement |
| Family Introduction | `src/sections/FamilyIntro.jsx` | Family members' names, relations, and descriptions |
| Dreams in Life | `src/sections/Dreams.jsx` | Dream titles, categories, and descriptions |

> 💡 **Tip:** Look for text inside double quotation marks `"like this"` — those are the parts you can safely edit without breaking anything.

---

## 🎨 Changing the Color Theme

The portfolio uses a clean navy and blue color scheme by default. To adjust the colors, open `src/index.css` and edit the color values under the `:root` section at the very top of the file. Each variable is clearly named (e.g., `--blue`, `--navy`, `--teal`) so you can identify what it controls.

---

## 📌 Notes

- This portfolio was built using **React** and **Vite**, and is hosted for free on **GitHub Pages**
- No coding experience is needed to update the text content — just open the files and edit the text
- If you encounter any issues with deployment, double-check that all files were uploaded correctly and that GitHub Pages is set to use **GitHub Actions** as the source
- The portfolio is fully responsive and works on both desktop and mobile browsers

---

*This portfolio is submitted in partial fulfillment of the requirements for NCMCOA6 — Community and Population Health Nursing, Bachelor of Science in Nursing, 4th Year, Academic Year 2024–2025.*
