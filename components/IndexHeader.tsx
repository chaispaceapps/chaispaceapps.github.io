import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export default function Header() {
    const hwRef = useRef<HTMLDivElement | null>(null)
    const bgRef = useRef<HTMLCanvasElement | null>(null)
    useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({
            canvas: bgRef.current!,
        })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight)
        camera.position.setZ(30)
        camera.position.setX(-3)
        renderer.render(scene, camera)

        const pointLight = new THREE.PointLight(0xffffff)
        pointLight.position.set(5, 5, 5)
        const ambientLight = new THREE.AmbientLight(0xffffff)
        scene.add(pointLight, ambientLight)
        function addStar() {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24)
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
            const star = new THREE.Mesh(geometry, material)

            const [x, y] = Array(2)
                .fill(null)
                .map(() => THREE.MathUtils.randFloatSpread(100))

            star.position.set(x, y, 0)
            scene.add(star)
        }

        Array(200).fill(null).forEach(addStar)
        const earthTexture = new THREE.TextureLoader().load("/3dassets/earth_tex.jpg")

        const earth = new THREE.Mesh(
            new THREE.SphereGeometry(15, 32, 32),
            new THREE.MeshStandardMaterial({
                map: earthTexture,
            })
        )
        earth.translateX(-10)
        earth.position.z = 2
        scene.add(earth)

        const moonTexture = new THREE.TextureLoader().load("/3dassets/moon.jpg")
        const moonNormal = new THREE.TextureLoader().load("/3dassets/moon_normal.jpg")

        const moon = new THREE.Mesh(
            new THREE.SphereGeometry(5, 32, 32),
            new THREE.MeshStandardMaterial({
                map: moonTexture,
                normalMap: moonNormal
            })
        )
        moon.position.z = 1
        moon.translateX(20)
        moon.scale.y = 1.2
        scene.add(moon)

        let cancel = false

        const render = () => {
            if(cancel) return
            earth.rotation.y -= 0.001
            moon.rotation.y += 0.005
            renderer.render(scene, camera)
            requestAnimationFrame(render)
        }

        const resizeHandler = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener("resize", resizeHandler)

        render()

        return () => {
            cancel = true
            window.removeEventListener("resize", resizeHandler)
        }
    }, [])

    const LevelLink = (props: any) => {
        return (<Link href={props.href} className="header__levelLink" onClick={e => {
            e.preventDefault()
            hwRef.current!.animate([
                { opacity: "1" },
                { opacity: "0" }
            ], {
                duration: 200,
                iterations: 1,
                fill: "both"
            }).onfinish = () => {
                setTimeout(() => location.href = props.href, 200)
            }
        }}>
            {props.children}
        </Link>)
    }

    return (<div className="header-wrap" ref={hwRef}>
        <header className="header">
            <div className="header__content">
                <h1 className="header__story-title">Stellar Stories</h1>
                <h2>Choose your level and book name</h2>
                <div className="header__levels">
                    <details className="header__levelDetails">
                        <summary className="header__levelSummary">Elementary</summary>
                        <div className="header__levelLinks">
                            <LevelLink href="/elementary2">Little Particle Sunny</LevelLink>
                            <LevelLink href="/elementary">Mystery of Auroras</LevelLink>
                            <LevelLink href="/elementary3">Solar Flare</LevelLink>
                        </div>
                    </details>
                    <details className="header__levelDetails">
                        <summary className="header__levelSummary">Middle</summary>
                        <div className="header__levelLinks">
                            <LevelLink href="/middle1">Van Allen Radiation Belts</LevelLink>
                            <LevelLink href="/middle2">Astronaut</LevelLink>
                        </div>
                    </details>
                </div>
            </div>
        </header>
        <canvas className="header__bg" ref={bgRef} />
    </div>)
}