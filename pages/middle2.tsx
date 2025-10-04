import GlobalTopbar from "@app/components/GlobalTopbar"
import ScrollPresentationContainer from "@app/components/ScrollPresentationContainer"
import ScrollPresentationItem from "@app/components/ScrollPresentationItem"
import Head from "next/head"
import Link from "next/link"

export default function Middle1Page() {
    return (<>
        <Head>
            <title>Astronaut</title>
        </Head>

        <GlobalTopbar audioSrc="/audio/max.mp3" />

        <header className="spel__header" style={{
            background: `url("/3dassets/astronaut1.png")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>
            <div className="spel__htext">
                <h1 className="spel__htitle">Astronaut</h1>
                <span className="spel__scrolldown">Scroll down to learn more</span>
            </div>
        </header>
        <ScrollPresentationContainer>
            <ScrollPresentationItem id="p1" rightImageURL="/3dassets/astronaut1.png">
                Max started his day as usual. He was a successful astronaut. In the international Space Station he has been flying to space for six months. He loved the view — the swirling blue oceans, the glowing continents… and the quiet things… until today. The alarms beeped.
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p2" rightImageURL="https://cdn.mos.cms.futurecdn.net/X2ZACuPV9eApEezB6ECQGk-1200-80.jpg.webp">
                Outside, billions of supercharged solar particles were zooming toward them at lightning speed. This was a Solar Energetic Particle (SEP) event. Max’s eyes widened. “What is happening?” he asked his astronaut friends.
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p3" rightImageURL="https://news.cgtn.com/news/2025-06-02/Geomagnetic-storms-likely-after-solar-flare-no-threat-to-health-1DSeHUThU2Y/img/e5f7626e839e496c86354f2a21c76e4e/e5f7626e839e496c86354f2a21c76e4e.jpeg">
                He tried to look through the outside of the window, the Sun shimmered a bright flash bursting from its surface.While he tries to understand the problem someone yells in the most anxious way possible “That means radiation!” Max pushed off the wall, floating toward the safety module.
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p4" rightImageURL="https://www.touteleurope.eu/wp-content/uploads/2024/12/satellite-europe-iris-1024x683.jpg">
                Suddenly, the station’s electronics flickered — lights dimming, monitors buzzing. Max realized what was happening. “So that’s why satellites sometimes lose signal during a solar storm!”
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p5" rightImageURL="https://images.newscientist.com/wp-content/uploads/2022/04/12144826/SEI_98484694.jpg">
                But behind the beauty was danger. The SEP particles were bouncing along Earth’s magnetic field lines, forming invisible radiation pockets. He and his crew carefully moved between shielded modules, avoiding exposed areas like playing a glowing obstacle course in zero gravity. Hours passed. Finally, the storm weakened. “Wow… these things are faster than anything I’ve ever seen,” Max whispered, watching the particles streak past the station like tiny glowing missiles.
            </ScrollPresentationItem>
        </ScrollPresentationContainer>
        <h3 className="spadv__endtext">Thank you for scrolling!</h3>
        <a className="sp__gobacklink" href="/">Go back</a>
    </>)
}