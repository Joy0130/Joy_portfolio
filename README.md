# Joy's Portfolio (GitHub 整合版)

這是一個為 **Joy** 量身打造的專業網頁作品集，已自動整合 GitHub (`Joy0130`) 的公開 Repository。

## 特色
- **GitHub 自動整合**：已將 Joy0130 的公開專案（如 My-ChatBot, SmartCommit, Argo-CD-Notifications 等）整合進作品集中。
- **自動分類與描述**：根據專案內容自動進行分類（網頁開發、後端與自動化、UI/UX 與工具），並撰寫了標題、描述與技術標籤。
- **活力天藍設計**：採用清爽的淺色模式搭配活力天藍色調。
- **彈跳視窗詳情**：每個專案點擊後皆可查看開發背景、解決痛點與核心成果，並附有 GitHub 原始碼連結。
- **多媒體預留**：已預留圖片畫廊與 DEMO 影片的欄位，方便後續手動添加。

## 檔案結構
- `index.html`: 網頁主程式。
- `assets/`: 靜態資源目錄。
  - `images/`: 請放入您的專案截圖。
  - `videos/`: 請放入您的專案演示影片。
- `design_spec.md`: 參考的設計規範文件。

## 使用說明
1. **添加素材**：將您的專案截圖放入 `assets/images/`，影片放入 `assets/videos/`。
2. **更新路徑**：編輯 `index.html` 中的 `projects` 陣列，將 `image`, `galleryImages` 與 `demoVideo` 的路徑更新為您實際的檔案路徑。
3. **查看效果**：雙擊 `index.html` 即可在瀏覽器中開啟。

## 技術細節
- **前端**: Tailwind CSS (CDN)。
- **互動**: Vanilla JavaScript。
- **數據來源**: GitHub Public Repositories (Joy0130)。
