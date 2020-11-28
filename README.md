# Lazyload

Simple, seo friendly.

## Image

Before:

```html
<picture class="lazyload" data-alt="IMG-ALT" data-src="IMG-URL" data-srcset="IMG-SRCSET">
  <noscript>
    <img alt="IMG-ALT" src="IMG-URL" srcset="IMG-SRCSET">
  </noscript>
</picture>
```

After:

```html
<picture class="lazyload done" data-alt="IMG-ALT" data-src="IMG-URL" data-srcset="IMG-SRCSET">
  <img class="loaded" alt="IMG-ALT" src="IMG-URL" srcset="IMG-SRCSET">
  <noscript>
    <img alt="IMG-ALT" src="IMG-URL" srcset="IMG-SRCSET">
  </noscript>
</picture>
```
