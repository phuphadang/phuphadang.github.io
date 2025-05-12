ตัวอย่างภาพตอบสนอง
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
  <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
</picture>

```
phuphadang.github.io/
├── .github/
│   └── workflows/
│       └── static.yml
├── index.html
├── LICENSE
└── README.md
```

ถ้าคุณใช้ Static HTML แบบปกติ:

ให้แน่ใจว่าไฟล์ index.html และไฟล์อื่นๆ เช่น CSS/JS อยู่ในโฟลเดอร์ /docs

/docs/
├── index.html
├── style.css
└── script.js

ถ้าคุณใช้ React Project:

คุณจะต้อง Build React App (npm run build) และย้ายเนื้อหาในโฟลเดอร์ build ไปยัง /docs
หรือปรับ Workflow (static.yml) ให้ Build และ Deploy React App โดยตรง:

ตรวจสอบ Settings ของ GitHub Pages:

ไปที่ Settings > Pages และตรวจสอบว่า:
```
Branch: main
Folder: docs

- name: Build React app
  run: npm run build
- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: './build'
```
# โครงสร้าง
```
phuphadang.github.io/
├── .github/
│   └── workflows/
│       └── static.yml
├── index.html
├── LICENSE
└── README.md
```

```
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

static.yml
  # Single deploy job since we're just deploying
  
'
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload entire repository
          path: '.'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```
This site was built using [phuphadang Pages](https://phuphadang.github.io/).

This site was built using [GitHub Pages](https://pages.github.com/).

