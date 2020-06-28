# `useFetchImage`

Hook that loads an image source and provides various information, e.g. whether the image has been loaded.

## Usage

```jsx
const Demo = () => {
    const imageSrc = "https://via.placeholder.com/150";

    const { hasLoaded, hasError } = useFetchImage(imageSrc);

    if (hasError) {
        return null;
    }

    return (
        <div>
            {!hasLoaded && <LoadingIndicator />}
            {hasLoaded && <img src={imageSrc} />}
        </div>
    );
};
```

## Reference

```typescript
const {
    hasLoaded: boolean;
    hasError: boolean;
    hasStartedInitialFetch: boolean;
} = useFetchImage(imageSrc: string);
```
