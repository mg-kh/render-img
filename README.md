## Image Loader Component For React&#x20;

Simple React Component for image placeholder.

---

## Features

- Show placeholder before actual image load

- Show fallback image when actual image failed to load

- Image lazyloading

---

## Sample Usage

```javascript
<ImageLoader
  src="https://actual-img.png"
  placeHolderSrc="lowqty-placeholder.png"
  errorSrc="low-qty-error.png"
  alt="text about image"
  style={{ width: "...px" }}
  className={"w-30 custom-class"}
  lazyload={true} // default :: false
  threshold={200} // default :: 100
/>
```

---

## Props

| src            | Actual image source to render                                  |
| :------------- | :------------------------------------------------------------- |
| placeholderSrc | Image source to show before actual image render                |
| errorSrc       | Image source to show when actual image get unexpected error    |
| alt            | Some proper text for image                                     |
| lazyload       | Include lazyload feature or not \[default -> false]            |
| threshold      | Define the position of image to load from the center of screen |

---

Made with ❤️ by - _kaung htet_
