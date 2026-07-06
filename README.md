# Joy's Portfolio (GitHub 整合版)

這是一個為 **Joy** 量身打造的專業網頁作品集，已自動整合 GitHub (`Joy0130`) 的公開 Repository。

## 特色
- **GitHub 自動整合**：已將 Joy0130 的公開專案（如 My-ChatBot, SmartCommit, Argo-CD-Notifications 等）整合進作品集中。
- **自動分類與描述**：根據專案內容自動進行分類（網頁開發、後端與自動化、UI/UX 與工具），並撰寫了標題、描述與技術標籤。
- **活力天藍設計**：採用清爽的淺色模式搭配活力天藍色調。
- **彈跳視窗詳情**：每個專案點擊後皆可查看開發背景、解決痛點與核心成果，並附有 GitHub 原始碼連結。
- **多媒體預留**：已預留圖片畫廊與 DEMO 影片的欄位，方便後續手動添加。
- **完整 RWD 支援**：針對手機、iPad Pro、桌機三種裝置完成介面優化。

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

---

## RWD 響應式設計優化紀錄

### 1. Lightbox 說明文字與圖片同寬對齊

**問題**：畫廊中點擊圖片進入 Lightbox 後，底部說明文字（caption）以 `position: absolute` 固定在 viewport 底部，與圖片寬度無關，且長文字會被截斷。

**修正方式**：
- 新增 `.lightbox-inner` flex column 容器，將 `<img>` 與 `.lightbox-caption` 包在一起。
- Caption 改為 `width: 100%`，自動與圖片同寬，並允許多行換行（`white-space: normal`）。
- `.lightbox` 改為 `flex-direction: column`，加上 padding 保留上下空間。
- 手機版（≤ 767px）：收窄側邊 padding，圖片高度限制改為 `calc(100vh - 9rem)`，caption 字型縮小。

---

### 2. iPad Pro 全站字型放大

**問題**：iPad Pro（768px～1024px 直/橫向）顯示的字體偏小，閱讀體驗差。

**修正方式**：在 `768px～1199px` 區間新增兩段 CSS：

| 作用範圍 | 修改內容 |
|---------|---------|
| 全域 `body` | `font-size: 16px → 18px` |
| Hero 介紹區 | `h1` → 3.5rem，說明文字 → 1.25rem |
| 篩選按鈕 | `font-size: 1rem`，padding 加大 |
| 作品卡片 | 標題 1.2rem，描述 0.95rem，tech tag 更大 |
| Modal 彈窗 | 標題 2.25rem，正文 1.1rem |
| 聯絡區塊 | 標題 2.25rem，說明 1.15rem |
| Lightbox | caption / counter 放大至 1rem |

> 桌機版（≥ 1200px）與手機版（≤ 767px）的樣式不受影響。

---

### 3. 篩選列右側「更多」捲動提示箭頭

**問題**：手機 / iPad 上篩選列按鈕無法全部顯示，使用者不知道可以橫向捲動查看更多分類。

**實作方式**：

- **HTML**：在 `#filter-buttons` 外層新增 `.filter-scroll-wrapper`（`position: relative`），並在其右側放置 `.filter-scroll-hint` overlay。
- **CSS**：
  - `.filter-scroll-hint`：絕對定位，右側白色漸層遮罩，`opacity` 搭配 `transition: 0.3s` 平滑淡出。
  - `.scroll-arrow`：圓形白底藍箭頭圖示，持續 `arrowBounce` 彈跳動畫（1.2s 循環）。
  - 桌機（≥ 1200px）：`.filter-scroll-hint` 強制 `display: none`。
  - 手機版：`bottom: 0.75rem` 對齊按鈕中心（排除 `pb-3` 的底部 padding 影響）。
- **JavaScript**：
  - 監聽 `scroll` 與 `resize` 事件，當 `scrollLeft + clientWidth < scrollWidth - 4` 時顯示箭頭。
  - 點擊箭頭執行 `scrollBy({ left: 150, behavior: 'smooth' })`，平滑往右捲動 150px。
  - 捲到底後箭頭自動淡出。

---

### 4. Lightbox 畫廊觸控縮放功能（手機 / 平板）

**需求**：在手機或平板的 Lightbox 中，支援手指縮放與雙擊放大，讓使用者可以查看圖片細節。

**支援手勢**：

| 手勢 | 動作 |
|------|------|
| 雙指 Pinch（展開/收合） | 在 1x～4x 之間任意縮放 |
| 雙擊（連續兩次點擊） | 縮放 < 1.5x → 放大到 2.5x；已放大 → 還原 1x |
| 單指拖曳 | 放大狀態下平移圖片查看細節 |
| Pinch 縮回 1x | 自動還原並置中（含動畫） |

**實作方式**：

- **CSS**：
  - `.lightbox-content` 加入 `touch-action: none`、`transform-origin: center`，並設定 `cursor: grab`。
  - 新增 `.is-zoomed` class：放大時切換為 `cursor: move`，並關閉 `transition` 避免拖曳延遲。
  - 新增 `.lightbox-inner.zoomed-mode`：放大時設定 `overflow: visible`，防止圖片被裁切。

- **JavaScript**（IIFE 封閉模組）：
  - 維護 `scale`、`posX`、`posY` 三個狀態變數。
  - `touchstart`：偵測雙指距離（Pinch 起始）或雙擊（300ms 間隔判斷）；放大狀態下啟動拖曳平移。
  - `touchmove`：雙指時計算新縮放比例（`startScale × dist / startDist`），單指時更新平移座標；均呼叫 `preventDefault()` 防止頁面捲動干擾。
  - `touchend`：Pinch 縮回接近 1x 時自動 `resetZoom(true)` 還原。
  - `resetZoom(animate)`：重置 scale/posX/posY，可選是否附帶 0.25s CSS 動畫。
  - `window._lightboxResetZoom` 對外暴露，供 `showLightboxImage()` 在切換圖片時呼叫，確保每張圖片初始都是未縮放狀態。
  - 放大時自動隱藏左右翻頁箭頭（`opacity: 0` + `pointer-events: none`），還原後重新出現。
