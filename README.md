## Image Loader Component For React&#x20;

Simple React Component for image placeholder and lazy loading.

---

## Features

- Show placeholder before actual image load

- Show fallback image when actual image failed to load

- Image lazyloading

- optional blur effect

- optional background placeholder color

---

## Usage

```javascript
<ImageLoader
  placeHolderSrc={smImg}
  src={lgImg}
  errorSrc={smImg}
  alt="..."
  width={4189} // add Intrinsic width
  height={3361} // Intrinsic height
  threshold={threshold} // default => 100
  isUseblur={isUseblur} // default => false
/>
```

Made with ❤️ by - _kaung htet_
