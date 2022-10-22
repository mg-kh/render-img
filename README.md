## Image Loader Component For React&#x20;

React Component for image placeholder and lazy loading.

---

## Features

- Show placeholder before actual image load

- Show fallback image when actual image failed to load

- Image lazyloading

- optional blur effect

- optional background placeholder color

- custom **loader component**

---

## Usage

```javascript
<ImageLoader
  placeHolderSrc={smImg} // low quality image to show before actual image load
  src={lgImg}
  errorSrc={smImg} // low quality image to show when actual image src get error
  alt="..."
  width={...} // add Intrinsic width
  height={...} // Intrinsic height
  threshold={threshold} // default => 100
  isUseblur={isUseblur} // default => false
  blurOverLay='#b4b4b4'
  loader = null, // custom loader component
/>
```

Made with ❤️ by - _kaung htet_
