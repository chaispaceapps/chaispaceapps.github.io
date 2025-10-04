import { useContext, useEffect, useRef } from "react"
import { ScrollPresentationContext } from "./ScrollPresentationContainer"

export default function ScrollPresentationItem(props: any) {
    const [spItems,setSPItems] = useContext(ScrollPresentationContext)
    const itemRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        //@ts-ignore
        setSPItems(prev => ({
            ...prev,
            [props.id]: {
                itemRef: itemRef,
                rightImage: props.rightImageURL
            }
        }))
    }, [])
    return (<div className="scrollp__item" ref={itemRef}>
        {props.children}
    </div>)
}