import GlobalTopbar from "@app/components/GlobalTopbar"
import ScrollPresentationContainer from "@app/components/ScrollPresentationContainer"
import ScrollPresentationItem from "@app/components/ScrollPresentationItem"
import Head from "next/head"
import Link from "next/link"

export default function Elementary3Page() {
    return (<>
        <Head>
            <title>Solar Flare</title>
        </Head>

        <GlobalTopbar audioSrc="/audio/conrad.mp3" />

        <header className="spel__header" style={{
            background: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/X_Class_Solar_Flare_Sends_%E2%80%98Shockwaves%E2%80%99_on_The_Sun_%286819094556%29.jpg/1920px-X_Class_Solar_Flare_Sends_%E2%80%98Shockwaves%E2%80%99_on_The_Sun_%286819094556%29.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>
            <div className="spel__htext">
                <h1 className="spel__htitle">Solar Flare</h1>
                <span className="spel__scrolldown">Scroll down to learn more</span>
            </div>
        </header>
        <ScrollPresentationContainer>
            <ScrollPresentationItem id="p1" rightImageURL="https://science.nasa.gov/wp-content/uploads/2023/04/xrays_6.png">
                Hello everyone! I’m Conrad, and I work in Radiography. It may sound very strange at the beginning, but it really is not that complicated.
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p2" rightImageURL="https://science.nasa.gov/wp-content/uploads/2023/04/xrays_6.png">
                Radiography is the science of using special cameras and telescopes to study things we cannot see with just our eyes. With these tools, I can capture light and energy that are invisible to us.  
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p3" rightImageURL="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001434/GSFC_20171208_Archive_e001434~orig.jpg?w=664&h=571&fit=clip&crop=faces%2Cfocalpoint">
                When I look at the Sun with these tools, I sometimes see something very powerful happen. The surface of the Sun is not always calm.
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p4" rightImageURL="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001434/GSFC_20171208_Archive_e001434~orig.jpg?w=664&h=571&fit=clip&crop=faces%2Cfocalpoint">
                It constantly moves while boiling and bubbling with very hot gases. Think of a giant pot of soup that never stops boiling.The Sun’s surface looks a little like that, except much hotter.
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p5" rightImageURL="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2007/07/earth_s_magnetic_field/9503319-4-eng-GB/Earth_s_magnetic_field_pillars.jpg">
                From time to time, the Sun builds up so much energy that it suddenly explodes outward. This is called a solar flare.
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p6" rightImageURL="https://science.nasa.gov/wp-content/uploads/2024/06/march-14-picturing-magnetic-field-lines-2.webp">
                A solar flare is like a flash of light so strong that it can brighten the whole Sun in seconds. Along with the light, it throws out waves of energy and streams of charged particles into space. These bursts are incredibly powerful. Some flares are so big that they can stretch out farther than the size of our planet! 
            </ScrollPresentationItem>
            <ScrollPresentationItem id="p7" rightImageURL="https://images.newscientist.com/wp-content/uploads/2022/04/12144826/SEI_98484694.jpg?width=1674">
                Luckily, Earth has protection. Our atmosphere and magnetic field act like strong shields around the planet. The atmosphere blocks most of the dangerous radiation, and the magnetic field guides the particles safely around Earth. 
            </ScrollPresentationItem>
        </ScrollPresentationContainer>
        <h3 className="spadv__endtext">Thank you for visiting!</h3>
        <a className="sp__gobacklink" href="/">Go back</a>
    </>)
}