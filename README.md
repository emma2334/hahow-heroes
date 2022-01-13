# Hahow Heroes

### [👉 Hahow Frontend Engineer 徵才小專案](https://github.com/hahow/hahow-recruit/blob/master/frontend.md)

## 執行專案

```bash
# 安裝 pagckages
yarn

# 以開發模式運行
yarn react-scripts start

# 建置專案
yarn react-scripts build

# 測試 /src/utils 內的函式
yarn jest
```

## 檔案結構

```
.
├── __test__  # jest 測試
├── public/  # 靜態檔案
├── src/  # React.js 程式碼
│   ├── components/   # 展示元件
│   ├── pages/  # 頁面
│   └── utils/  # 工具
│       ├── api.ts  # 封裝過的 request 函式
│       ├── grid.ts  # RWD 相關定義、函式
│       └── hero.ts  # 英雄相關類別定義、函式
├── package.json
└── ...其他設定檔
```

## 使用的第三方函式庫

### 前端

- [React](http://reactjs.org)：實作使用者介面的 JavaScript 函式庫。不同於過去網頁前端以頁面為一個單元的開發，React 以一個 component 為單元，使得開發更利於模組化。
  - [React Router](https://reactrouter.com)：客戶端路由。
  - [react-markdown](https://remarkjs.github.io/react-markdown/)：將傳入的 Markdown 轉為 HTML 的格式渲染，並可自定義元素的渲染元件。
  - [React Syntax Highlighter](https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/)：將程式碼區塊上色。
- [styled-components](https://styled-components.com/)：CSS-in-JS 函式庫，可直接生成帶有樣式的 component 並透過傳入元件的 props 動態改變樣式。在 TypeScript 專案底下，擴增的元件除了繼承樣式外也會繼承 props 的型態定義。

### 工具

- [TypeScript](https://www.typescriptlang.org/)：基於 JavaScript 延伸的超級，提供靜態型別檢查以彌補 JavaScript 弱型別的不足。
  - [@types/\*](https://github.com/DefinitelyTyped/DefinitelyTyped)：packages 的 TypeScript 宣告擴充。
- [JEST](https://jestjs.io/)：由 Facebook 維護的單元測試框架，由於 [React](http://reactjs.org) 本身也是用 [JEST](https://jestjs.io/) 進行單元測試，所以契合度高。
  - [ts-jest](https://kulshekhar.github.io/ts-jest/)：將 [JEST](https://jestjs.io/) 轉化成支援 TypeScript 的形式，省去自己寫 babel 設定去處理編譯的時間。
- [husky](https://typicode.github.io/husky/)：在 git commit 或 push 階段執行指定動作。
- [lint-staged](https://github.com/okonet/lint-staged)：lint 在 git 暫存區的檔案，本專案和 [husky](https://typicode.github.io/husky/) 搭配在 commit 前執行 linter 們，來保持 coding style 和檢查是否符合規範。
- [ESLint](http://eslint.org/)：用以檢查程式碼是否符合規則，本專案使用 [Javascript Standard Style](https://standardjs.com/) 作為規範。
- [Prettier](https://prettier.io/)：統一程式碼格式。
- [Web Vitals](https://web.dev/vitals/)：由 Google 推出的用戶體驗量化指標，用以幫助釐清調整方向。

## 寫註解的原則

通用的函式一定會寫 JSDoc 去說明函式目的和個參數的用途，其餘可能是認為邏輯較為不值觀或需要特別註明的部分會寫註解。

## 專案中你遇到的困難、問題，以及解決的方法

有些過去沒有相關經驗的地方花比較多時間閱讀相關資料，過程中也不乏在反反復復嘗試中慢慢釐清而找到解答。部分問題在讀完相關資料仍不明白的話就想辦法讓問題縮限，使問題不那麼空泛、模糊，在問人讓對方也比較容易明白自己不懂的點在哪。

印象最深刻的問題是 `Object.keys()` 去取得定義過型態的 object key 做 `.map()` 操作時，TypeScript 會顯示錯誤，所以要另外用 `Object.keys(obect) as Array<keyof Interface>` 或 `Object.keys(object) as Array<keyof typeof object>` 去定義型態。

專案中最困難的部分應該是整個環境的架設，套件的相依、環境如不如預期執行 ⋯⋯ 即便過去有相關經驗，但每次新專案建置時仍覺得是個棘手的環節。
