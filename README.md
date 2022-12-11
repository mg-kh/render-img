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
import {ImageLoader} from 'render-img'

<ImageLoader
  src,                                  // * required
  placeHolderSrc,
  errorSrc,
  alt,
  threshold = 100,
  width = 0,                            // Intrinsic width of image
  height = 0,                           // Intrinsic height of image
  blurOverLayColor = "#b4b4b4",
  blurStrength = "sm",                  // options : sm/md/lg
  isUseblur = false,                    // to use blur effect or not
  loader = null,                        // custom loader component
  containerClass = "",                  // custom class for container div
  containerStyle = {},                  // custom css for container div
  imageClass = "",                      // custom class for image component
  imageStyle = {},                      // custom css for image component
/>
```

Made with ❤️ by - _kaung htet_
