# josfoxai-deep-link — open the JOSFOX AI app from any web page, with a safe web fallback

A JOSFOX product utility. One function call sends a visitor from a web page into the JOSFOX AI app on iOS or Android, and back to [josfox.ai](https://josfox.ai) when the app is not installed, so a "Open in JOSFOX AI" button never leaves anyone on a dead page.

```js
import { openJosfoxAI } from 'josfoxai-deep-link';

document.getElementById('openApp').addEventListener('click', () => {
  openJosfoxAI({
    schemeUrl: 'josfoxai://open?resource=home',
    packageName: 'ai.josfox.app',
    fallbackUrl: 'https://josfox.ai'
  });
});
```

## How it decides

| Visitor | What happens |
|---|---|
| Android with Chrome or Edge | An Android intent opens the app; if it is missing, the browser follows `browser_fallback_url` |
| iOS | The custom scheme opens the app; if the page is still visible after 1.2 s, the visitor goes to the fallback |
| Anything else | Same as iOS, after 1 s |

## Status

Pre-release (0.1.0). Not yet published to npm; install from this repository. Known limitation: on Android the intent always opens `resource=home`, whatever `schemeUrl` says. Fixing it is the first item before publishing.

## Get the most out of it

A JOSFOX account connects the app, your sites and your agents. Create one at [josfox.cloud](https://josfox.cloud).

## Related repositories

**Built by JOSFOX**
- [The reserved josfox-jos name for this helper](https://github.com/josfox-jos/josfoxai-deep-link) — it points here; this repository is canonical.

**The open standard behind JOSFOX**
- [.jos: the open format JOSFOX agents run on](https://github.com/josfox-jos/jos) — start here to see what the app's agents are made of.
- [The .jos 2.0.0 specification](https://github.com/josfox-jos/jos-spec) — media type `application/vnd.jos+json`, in IANA review.
- [jos.mx, the standard's public page](https://github.com/josfox-jos/jos.mx) — the one-page explanation.
- [The first .jos draft, 0.0.7](https://github.com/josfox-ai/jos-format-spec) — history of the format.
- [A2A.jos](https://github.com/josfox-ai/A2A.jos) and [.jos-a2a-js](https://github.com/josfox-ai/.jos-a2a-js) — `.jos` contracts carried over the Agent2Agent protocol.

MIT License · © JOSFOX LLC

## Public platform documentation — expanded ecosystem

For readers of `josfox-ai/josfoxai-deep-link`, distribution status per platform is documented in one public hub; its existence does not imply a downloadable artifact or verified host compatibility.

- For readers of `josfox-ai/josfoxai-deep-link`, [jos-omni](https://github.com/josfox-ai/jos-omni) provides distribution documentation hub.
