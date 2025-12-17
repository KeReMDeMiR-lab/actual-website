import { useGSAP } from "@gsap/react"
// import { useEffect, useState } from "react"

export default function Cursor(){
    useGSAP(()=> {
        gsap.to(".cursor", {x: 100, y: 200} )
    })

    // useEffect(() => {
        const mouseMove = (e:MouseEvent):void => {
            setCursorPos({x: e.clientX, y: e.clientY})
        }
        window.addEventListener('mousemove', mouseMove)

    //     return () => {
    //         window.removeEventListener('mousemove', mouseMove)
    //     }
    // }, [])
    return <div className="cursor"></div>
}