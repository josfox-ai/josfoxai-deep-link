# josfoxai-deep-link

Deep link utility for [JOSFOX AI](https://josfox.ai).

## Install

```bash
npm install josfoxai-deep-link
```

or

```bash
yarn add josfoxai-deep-link
```

## Usage

### ESM
```html
<button id="openApp">Abrir JOSFOX AI</button>
<script type="module">
  import { openJosfoxAI } from 'josfoxai-deep-link';
  document.getElementById('openApp').addEventListener('click', () => {
    openJosfoxAI();
  });
</script>
```

### UMD (sin type=module)
```html
<script src="https://cdn.jsdelivr.net/npm/josfoxai-deep-link/dist/index.umd.js"></script>
<script>
  document.getElementById('openApp').addEventListener('click', () => {
    josfoxaiDeepLink.openJosfoxAI();
  });
</script>
```

### Options
```js
openJosfoxAI({
  schemeUrl: 'josfoxai://open?resource=dashboard',
  packageName: 'ai.josfox.app',
  fallbackUrl: 'https://josfox.ai'
});
```
