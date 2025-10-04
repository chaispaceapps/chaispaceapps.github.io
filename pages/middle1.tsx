import GlobalTopbar from "@app/components/GlobalTopbar"
import ScrollPresentationContainer from "@app/components/ScrollPresentationContainer"
import ScrollPresentationItem from "@app/components/ScrollPresentationItem"
import Head from "next/head"

export default function Middle1Page() {
    return (<>
        <Head>
            <title>Van Allen Radiation Belts</title>
        </Head>

        <GlobalTopbar audioSrc="/audio/james.mp3" />

        <header className="spel__header" style={{
            background: `url("/3dassets/vanallen.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>
            <div className="spel__htext">
                <h1 className="spel__htitle">Van Allen Radiation Belts</h1>
                <span className="spel__scrolldown">Scroll down to learn more</span>
            </div>
        </header>
        <ScrollPresentationContainer>
            <ScrollPresentationItem id="p1" rightImageURL="/3dassets/vanallen.jpg">
                Welcome everyone! I am James, and I am a scientist. My work is to study space and the invisible energy all around our planet. With the help of satellites and special instruments, I discovered something invisible but extremely important: giant belts of radiation that surround the Earth. Today, we call them the Van Allen Belts. 
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p2" rightImageURL="https://upload.wikimedia.org/wikipedia/commons/a/a7/Two_3U_CubeSats.jpg">
                These radiation belts are like invisible doughnuts of charged particles that circle our planet. They come from the Sun and get trapped by Earth’s magnetic field, which makes them spiral along the magnetic field lines, bouncing back and forth between the North and South Poles inside the Van Allen Belts. At first, people were surprised to learn they were there, but they turned out to be very important for understanding space weather. 
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p3" rightImageURL="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001434/GSFC_20171208_Archive_e001434~orig.jpg?w=664&h=571&fit=clip&crop=faces%2Cfocalpoint">
                Why? Because the Sun is not always calm. Sometimes, it releases sudden, powerful bursts of energy called solar flares. A solar flare is like a massive explosion on the surface of the Sun, releasing light, radiation, and streams of charged particles into space. These bursts are so strong that they can affect Earth even though the Sun is 93 million miles away! 
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p4" rightImageURL="https://upload.wikimedia.org/wikipedia/commons/a/a7/Two_3U_CubeSats.jpg">
                When this energy reaches us, the Van Allen Belts act as one of Earth’s first lines of defense. They trap and redirect some of the harmful particles, keeping life on Earth safer. But solar flares can still disturb satellites, mess with radio signals, and even cause power problems on Earth. On the positive side, they can also create dazzling auroras when particles interact with Earth’s atmosphere. 
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p5" rightImageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Van_Allen_radiation_belt.svg/2880px-Van_Allen_radiation_belt.svg.png">
                So, my discovery of the radiation belts was more than just a surprise. It helped us understand how Earth protects itself from the Sun’s fiery moods, and how solar flares shape the space environment we all live in. 
            </ScrollPresentationItem>
        </ScrollPresentationContainer>
        <h3 className="spadv__endtext">Thank you for scrolling!</h3>
        <a className="sp__gobacklink" href="/">Go back</a>
    </>)
}