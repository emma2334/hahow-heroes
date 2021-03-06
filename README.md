# Hahow Heroes

### [ð Hahow Frontend Engineer å¾µæå°å°æ¡](https://github.com/hahow/hahow-recruit/blob/master/frontend.md)

## å·è¡å°æ¡

```bash
# å®è£ pagckages
yarn

# ä»¥éç¼æ¨¡å¼éè¡
yarn react-scripts start

# å»ºç½®å°æ¡
yarn react-scripts build

# æ¸¬è©¦ /src/utils å§çå½å¼
yarn jest
```

## æªæ¡çµæ§

```
.
âââ __test__  # jest æ¸¬è©¦
âââ public/  # éææªæ¡
âââ src/  # React.js ç¨å¼ç¢¼
â   âââ components/   # å±ç¤ºåä»¶
â   âââ pages/  # é é¢
â   âââ utils/  # å·¥å·
â       âââ api.ts  # å°è£éç request å½å¼
â       âââ grid.ts  # RWD ç¸éå®ç¾©ãå½å¼
â       âââ hero.ts  # è±éç¸éé¡å¥å®ç¾©ãå½å¼
âââ package.json
âââ ...å¶ä»è¨­å®æª
```

## ä½¿ç¨çç¬¬ä¸æ¹å½å¼åº«

### åç«¯

- [React](http://reactjs.org)ï¼å¯¦ä½ä½¿ç¨èä»é¢ç JavaScript å½å¼åº«ãä¸åæ¼éå»ç¶²é åç«¯ä»¥é é¢çºä¸åå®åçéç¼ï¼React ä»¥ä¸å component çºå®åï¼ä½¿å¾éç¼æ´å©æ¼æ¨¡çµåã
  - [React Router](https://reactrouter.com)ï¼å®¢æ¶ç«¯è·¯ç±ã
  - [react-markdown](https://remarkjs.github.io/react-markdown/)ï¼å°å³å¥ç Markdown è½çº HTML çæ ¼å¼æ¸²æï¼ä¸¦å¯èªå®ç¾©åç´ çæ¸²æåä»¶ã
  - [React Syntax Highlighter](https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/)ï¼å°ç¨å¼ç¢¼åå¡ä¸è²ã
- [styled-components](https://styled-components.com/)ï¼CSS-in-JS å½å¼åº«ï¼å¯ç´æ¥çæå¸¶ææ¨£å¼ç component ä¸¦ééå³å¥åä»¶ç props åææ¹è®æ¨£å¼ãå¨ TypeScript å°æ¡åºä¸ï¼æ´å¢çåä»¶é¤äºç¹¼æ¿æ¨£å¼å¤ä¹æç¹¼æ¿ props çåæå®ç¾©ã

### å·¥å·

- [TypeScript](https://www.typescriptlang.org/)ï¼åºæ¼ JavaScript å»¶ä¼¸çè¶ç´ï¼æä¾éæåå¥æª¢æ¥ä»¥å½è£ JavaScript å¼±åå¥çä¸è¶³ã
  - [@types/\*](https://github.com/DefinitelyTyped/DefinitelyTyped)ï¼packages ç TypeScript å®£åæ´åã
- [JEST](https://jestjs.io/)ï¼ç± Facebook ç¶­è­·çå®åæ¸¬è©¦æ¡æ¶ï¼ç±æ¼ [React](http://reactjs.org) æ¬èº«ä¹æ¯ç¨ [JEST](https://jestjs.io/) é²è¡å®åæ¸¬è©¦ï¼æä»¥å¥ååº¦é«ã
  - [ts-jest](https://kulshekhar.github.io/ts-jest/)ï¼å° [JEST](https://jestjs.io/) è½åææ¯æ´ TypeScript çå½¢å¼ï¼çå»èªå·±å¯« babel è¨­å®å»èçç·¨è­¯çæéã
- [husky](https://typicode.github.io/husky/)ï¼å¨ git commit æ push éæ®µå·è¡æå®åä½ã
- [lint-staged](https://github.com/okonet/lint-staged)ï¼lint å¨ git æ«å­åçæªæ¡ï¼æ¬å°æ¡å [husky](https://typicode.github.io/husky/) æ­éå¨ commit åå·è¡ linter åï¼ä¾ä¿æ coding style åæª¢æ¥æ¯å¦ç¬¦åè¦ç¯ã
- [ESLint](http://eslint.org/)ï¼ç¨ä»¥æª¢æ¥ç¨å¼ç¢¼æ¯å¦ç¬¦åè¦åï¼æ¬å°æ¡ä½¿ç¨ [Javascript Standard Style](https://standardjs.com/) ä½çºè¦ç¯ã
- [Prettier](https://prettier.io/)ï¼çµ±ä¸ç¨å¼ç¢¼æ ¼å¼ã
- [Web Vitals](https://web.dev/vitals/)ï¼ç± Google æ¨åºçç¨æ¶é«é©éåææ¨ï¼ç¨ä»¥å¹«å©éæ¸èª¿æ´æ¹åã

## å¯«è¨»è§£çåå

éç¨çå½å¼ä¸å®æå¯« JSDoc å»èªªæå½å¼ç®çåååæ¸çç¨éï¼å¶é¤å¯è½æ¯èªçºéè¼¯è¼çºä¸å¼è§æéè¦ç¹å¥è¨»æçé¨åæå¯«è¨»è§£ã

## å°æ¡ä¸­ä½ éå°çå°é£ãåé¡ï¼ä»¥åè§£æ±ºçæ¹æ³

æäºéå»æ²æç¸éç¶é©çå°æ¹è±æ¯è¼å¤æéé±è®ç¸éè³æï¼éç¨ä¸­ä¹ä¸ä¹å¨ååå¾©å¾©åè©¦ä¸­æ¢æ¢éæ¸èæ¾å°è§£ç­ãé¨ååé¡å¨è®å®ç¸éè³æä»ä¸æç½çè©±å°±æ³è¾¦æ³è®åé¡ç¸®éï¼ä½¿åé¡ä¸é£éº¼ç©ºæ³ãæ¨¡ç³ï¼å¨åäººè®å°æ¹ä¹æ¯è¼å®¹ææç½èªå·±ä¸æçé»å¨åªã

å°è±¡ææ·±å»çåé¡æ¯ `Object.keys()` å»åå¾å®ç¾©éåæç object key å `.map()` æä½æï¼TypeScript æé¡¯ç¤ºé¯èª¤ï¼æä»¥è¦å¦å¤ç¨ `Object.keys(obect) as Array<keyof Interface>` æ `Object.keys(object) as Array<keyof typeof object>` å»å®ç¾©åæã

å°æ¡ä¸­æå°é£çé¨åæè©²æ¯æ´åç°å¢çæ¶è¨­ï¼å¥ä»¶çç¸ä¾ãç°å¢å¦ä¸å¦é æå·è¡ â¯â¯ å³ä¾¿éå»æç¸éç¶é©ï¼ä½æ¯æ¬¡æ°å°æ¡å»ºç½®æä»è¦ºå¾æ¯åæ£æçç°ç¯ã
