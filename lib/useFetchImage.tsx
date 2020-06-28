import { useState, useEffect } from "react";

/**
 * Fetch an image using this hook and get several information.
 * @param src Image src.
 * @returns hasFinished Whether the image has been fetched.
 * @returns hasError Whether an error occurred.
 * @returns hasStartedInitialFetch Whether at least one fetch attempt has been started.
 */
export const useFetchImage = (src: string) => {
    const [hasFinished, setHasFinished] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [hasStartedInitialFetch, setHasStartedInitialFetch] = useState(false);

    useEffect(() => {
        if (src) {
            setHasStartedInitialFetch(true);
            setHasFinished(false);
            setHasError(false);

            const image = new Image();
            image.src = src;

            const handleError = () => {
                setHasError(true);
            };

            const handleLoad = () => {
                setHasFinished(true);
                setHasError(false);
            };

            image.onerror = handleError;
            image.onload = handleLoad;

            return () => {
                image.removeEventListener("error", handleError);
                image.removeEventListener("load", handleLoad);
            };
        }
    }, [src]);

    return { hasFinished, hasError, hasStartedInitialFetch };
};
