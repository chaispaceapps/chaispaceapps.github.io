import GlobalTopbar from "@app/components/GlobalTopbar"
import ScrollPresentationContainer from "@app/components/ScrollPresentationContainer"
import ScrollPresentationItem from "@app/components/ScrollPresentationItem"
import Head from "next/head"
import Link from "next/link"

export default function Elementary() {
    return (<>
        <Head>
            <title>Mystery of Auroras</title>
        </Head>
        <GlobalTopbar audioSrc="/audio/elementary.mp3" />

        <header className="spel__header">
            <div className="spel__htext">
                <h1 className="spel__htitle">Mystery of Auroras</h1>
                <span className="spel__scrolldown">Scroll down to learn more</span>
                <br />
                Image by W.Carter, Wikimedia Commons.
            </div>
        </header>
        <ScrollPresentationContainer>
            <ScrollPresentationItem id="p1" rightImageURL="/3dassets/astronaut1.png">
                Hello Earth, I am Sally. I am an astronaut, and I love discovering new things.
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p2" rightImageURL="https://upload.wikimedia.org/wikipedia/commons/9/9d/G5_aurora_over_Tuntorp%2C_Lysekil_Municipality_15.jpg">
                Today, I saw a picture of auroras. They are colorful lights that you can see around the North-Pole and South-Pole.
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p3" rightImageURL="/3dassets/astronaut2.png">
                They are beautiful, and I am curious about how they happen. Shall we learn about them?
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p4" rightImageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/640px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg">
                First, let’s visit our light source… The Sun!
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p5" rightImageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/640px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg">
                The journey starts here. The hotness of the Sun’s surface isn't the same for all places. Some places are colder, and some places are hotter.
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p6" rightImageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sun_poster.svg/640px-Sun_poster.svg.png">
                The hottest is the outer layer named Corona. In this part, there are tiny particles that are always moving. Sometimes, these particles move too fast and leave the layer.
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p7" rightImageURL="https://upload.wikimedia.org/wikipedia/commons/1/1d/Solar_wind_Speed_interplanetary_magnetic_field.jpg">
                When they leave the surface, they start travelling in streams through space. We call them solar winds.
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p8" rightImageURL="https://upload.wikimedia.org/wikipedia/commons/b/bd/Birkeland-anode-globe-fig259.jpg">
                The streams travel fast and go long distances in space. The Sun has a magnetic layer that helps the streams to move towards space.
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p9" rightImageURL="https://upload.wikimedia.org/wikipedia/commons/a/a6/Solar_Wind_and_Earth%27s_magnetic_field.png">
                After some time, the streams come to visit the Earth. The Earth has its magnetic field. It works like a shield, it protects the Earth from dangers. Most of the streams bounce back from that shield, but some of it can pass around the North-Pole and South-Pole.
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p10" rightImageURL="https://upload.wikimedia.org/wikipedia/commons/9/9d/G5_aurora_over_Tuntorp%2C_Lysekil_Municipality_15.jpg">
                While the streams are passing, they leave colorful lights behind them. We call them auroras.
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p11" rightImageURL="/3dassets/astronaut2.png">
                Now that we know about solar winds and auroras, I am more excited about seeing auroras, an effect of the solar winds. Thank you for joining my adventure, my dear friend.
            </ScrollPresentationItem>
        </ScrollPresentationContainer>

        <h1 className="spel__thankyou">Thank you for visiting!</h1>
        <a className="sp__gobacklink" href="/">Go back</a>
    </>)
}