import GlobalTopbar from "@app/components/GlobalTopbar"
import QuestionMarksCanvas from "@app/components/QuestionMarksCanvas"
import useSRHook from "@app/hooks/useSRHook"
import Head from "next/head"
import Link from "next/link"
import { useRef, useState } from "react"

export default function Elementary2Page() {
    const [pTransform, setPTransform] = useState("")
    const ouRef = useRef<HTMLDivElement | null>(null)
    const deepestRef = useRef<HTMLDivElement | null>(null)
    const offRef = useRef<HTMLDivElement | null>(null)
    const [animateOffSect, setAnimateOffSect] = useState(false)
    const [ahcImageScale, setAhcImageScale] = useState(1)
    const ahcRef = useRef<HTMLDivElement | null>(null)

    useSRHook(() => {
        const sy = window.scrollY
        const ouOffset = ouRef.current!.offsetTop
        const deepestOffset = deepestRef.current!.offsetTop
        const scrollDist = deepestOffset - ouOffset - 100
        const cover = Math.max(window.innerWidth, window.innerHeight)/250
        const t = Math.min(1, Math.max(0, (sy - ouOffset) / scrollDist))
        setPTransform(`scale(${(t*(cover-1)) + 1})`)

        setAnimateOffSect(window.scrollY + window.innerHeight >= offRef.current!.offsetTop+window.innerHeight/3)
        
        const t2 = Math.min(1, Math.max(0, (sy - ahcRef.current!.offsetTop)/(3*window.innerHeight)))
        const ewCover = Math.max(window.innerWidth, window.innerHeight)/300 * 4
        setAhcImageScale(t2 * (ewCover-1) + 1)
    })

    return (<>
        <Head>
            <title>Little Particle Sunny</title>
        </Head>
        <GlobalTopbar audioSrc="/audio/sunny.mp3" />

        <div className="spadv__particlewrap">
            <div className="spadv__particle" style={{
                transform: `var(--transform-base) ${pTransform}`
            }}></div>
        </div>
        <header className="sphead">
            <div className="sphead__hst sphead__init">
                <h1 className="sphead__title">
                    <span className="spadv__hlittle">Little</span> <span className="spvadv__hparticle">Particle</span> <span className="spvadv__hsunny">Sunny</span>
                </h1>

                <div className="spadv__scrolldown">Scroll down to learn more</div>
            </div>

            <div className="sphead__hst sphead__onceUpon" ref={ouRef}>
                <h1 className="sphead__hst__heading">Once upon a time....</h1>
            </div>

            <div className="sphead__hst sphead__deepest" ref={deepestRef}>
                <h1 className="sphead__hst__heading">In the deepest places of the Sun there was this particle called Sunny.</h1>
            </div>
        </header>

        <div className="spadv__realmain">
            <h2 className="spadv__curious">She was a curious kid and so as her friends. Sunny and her friends loved dance and play in the hot plasma of the sun. That day stared as usual. She woke up, went to her school and learned new things. And then she got out to play with her friends. They were playing and having fun...</h2>
            <div className="spadv__somethingoff" ref={offRef}>
                <div className={`spadv__offmarks ${animateOffSect ? "animate" : ""}`}>
                    <QuestionMarksCanvas />
                </div>
                <div className="spvadv__offtext">...until she realized something was off...</div>
            </div>
            <h2 className="spadv__yelled">Somebody yelled “The Sun’s magnetic fields twisted and tangled, making a huge, fiery loop.” <span className="spadv__gasped">Sunny gasped. “What’s happening?!”</span></h2>
            <div className="spadv__quakewrap">
                <div className="spadv__quake">
                    Before she knew a sunquake rippled through the Sun’s surface! The plasma shook like a wobbly jelly, waves bounced in every direction, and Sunny bounced along with them.“I’m flying on Sun-waves!” Sunny laughed.
                </div>
            </div>
            <div className="spadv__notend">
                But it didn’t end there. She realised she was going away from her house sun!
                She and some of her friends passed trough planets.
            </div>
            <div className="spadv__areheading" ref={ahcRef}>
                <div className="spadv__areheadingcontentwrap">
                    <div className="spadv__ahcmain">
                        <div className="spadv__ahctext">
                            <div className="spadv__ahctmain">
                                <h2>One of them yelled “We are heading to this green planet!”</h2>
                                <div className="spadv__ahctbottom">That planet called Earth.</div>
                            </div>
                        </div>
                        <div
                            className="spadv__ahcimage"
                            style={{
                                transform: `var(--base-transform) scale(${ahcImageScale})`
                            }}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="spadv__ahnext">
                They were heading trough the Earth’s magnetic field. The field bent, twisted, and shimmered with energy.“Whoa! Everything is glowing!” Sunny exclaimed. As Sunny and her friends danced along the magnetic field lines, their energy made the air glow with beautiful colors like green, pink, and purple. Sunny realized something amazing she and her friends had transformed into part of the northern and southern lights!
                <div className="spadv__theend">
                    But her adventure didn’t stop there. As she danced, Sunny also helped stir up a geomagnetic storm a space storm that made compasses wobble and satellites buzz high above the Earth. Sunny looked back at the Sun shining far away and smiled.“From a tiny particle inside the Sun to painting the skies above Earth… what an adventure!” she thought.
                    <br /><br />
                    And from that day on, whenever people saw the glowing auroras in the night sky, Sunny and her friends were there, dancing and shimmering, telling their story in colors.

                    <h3 className="spadv__endtext">The End</h3>
                    <a className="sp__gobacklink" href="/">Go back</a>
                </div>
            </div>
        </div>
    </>)
}