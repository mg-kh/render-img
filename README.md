## Image Loader Component For React&#x20;

Simple React Component for image placeholder. Replace **small size image** before **actual image load** or **facing error**.

---

## Simple Usage

```javascript
<ImageLoader
  src="https://actual-img.png"
  plalceHolderSrc="lowqty-placeholder.png"
  errorSrc="low-qty-error.png"
  alt="text about image"
  style={{ width: "...px" }}
  className={"w-30 custom-class"}
/>
```

---

## Props

| src            | Actual image source to render                               |
| :------------- | :---------------------------------------------------------- |
| placeholderSrc | Image source to show before actual image render             |
| errorSrc       | Image source to show when actual image get unexpected error |
| alt            | Some proper text for image                                  |

---

> This is my first component library. I am willing to improve day by day.
>
> :)
