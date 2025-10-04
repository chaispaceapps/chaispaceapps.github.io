import { createContext, useEffect, useRef, useState } from "react"

export const ScrollPresentationContext = createContext<any>(null)

export default function ScrollPresentationContainer(props: any) {
    const [items, setItems] = useState<Record<string, any>>({})
    const [activeItemID, setActiveItemID] = useState<string | null>(null)
    const observerRef = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        // Cleanup old observer if items change
        if (observerRef.current) {
            observerRef.current.disconnect()
        }

        const visibleItems = new Set<string>()

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    const id = entry.target.getAttribute("data-scroll-id")
                    if (!id) return

                    if (entry.isIntersecting) {
                        visibleItems.add(id)
                    } else {
                        visibleItems.delete(id)
                    }
                })

                // Pick the first visible item, or null if none
                const firstVisible = Array.from(visibleItems)[0] || null
                setActiveItemID(firstVisible)
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.3, // item considered "visible" when 30% in view
            }
        )

        // Observe each item's ref
        Object.entries(items).forEach(([id, Item]) => {
            if (Item.itemRef?.current) {
                Item.itemRef.current.setAttribute("data-scroll-id", id)
                observerRef.current!.observe(Item.itemRef.current)
            }
        })

        return () => {
            if (observerRef.current) observerRef.current.disconnect()
        }
    }, [items])

    return (
        <div className="scrollp__container">
            <div className="scrollp__left">
                <ScrollPresentationContext.Provider value={[items, setItems]}>
                    {props.children}
                </ScrollPresentationContext.Provider>
            </div>
            <div className="scrollp__right__wrap">
                {Object.entries(items).map(([id, Item]) => (
                    <img
                        key={id}
                        className={`scrollp__rightitem ${id === activeItemID ? "active" : ""}`}
                        src={Item.rightImage}
                    />
                ))}
            </div>
        </div>
    )
}
