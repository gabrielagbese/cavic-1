import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

export default function Features() {

    return (
        <div className="features" >
            <div className="features-container">
                <div className="features-item">
                    <div className="features-cell-title">cell</div>
                    <div className="features-cell-text" id="xx"></div>
                </div>
                <div className="features-item">
                    <div className="features-cell-title" id="xd">cell</div>
                    <div className="features-cell-text"></div>
                </div>
            </div>
        </div>
        )
}
gsap.registerPlugin(ScrollTrigger);

if(process.browser){
    // var tl1 = gsap.timeline();
    // var cell = document.querySelector('.features-cell-text2');

    // tl1.from(".features-cell-text", {
    //     duration: 1,
    //     x: '-40%',
    //     scrollTrigger: {
    //         trigger: ".features-container",
    //         scrub: true,
    //         markers: {
    //             startColor: "red",
    //             endColor: "red",
    //         },
    //         //toggleActions: "restart pause reverse pause",
    //     },
        
    // })
}


