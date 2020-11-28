# Lazyload

Simply, seo friendly, and automatically.

## Image

Define data-src at the container of image, it will create an element of img and append to container.

```html
<picture class="lazyload" data-alt="IMG-ALT" data-src="IMG-URL" data-srcset="IMG-SRCSET">
  <noscript>
    <img alt="IMG-ALT" src="IMG-URL" srcset="IMG-SRCSET">
  </noscript>
</picture>
```

## Background

Define data-background at the element, it will set an inline style of background-image when image loaded.

```html
<div id="lazyload-1" class="lazyload" data-background="IMG-URL">
  <noscript>
    <style>
      #lazyload-1 {
        background-image: url(IMG-URL)
      }
    </style>
  </noscript>
</div>
```
