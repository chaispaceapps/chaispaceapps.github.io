import { useEffect } from "react"

export default function useSRHook(handler: () => void) {
    useEffect(() => {
        window.addEventListener("scroll", handler)
        window.addEventListener("resize", handler)
        handler()

        return () => {
            window.removeEventListener("scroll", handler)
            window.removeEventListener("resize", handler)
        }
    }, [])
}