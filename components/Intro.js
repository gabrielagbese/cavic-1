
import Image from "next/image";
export default function Intro() {

    return (
      <div className="intro">
        <h2 className="intro-head">Work/Event Spaces</h2>
        <p className="intro-text">
          CAVIC provides an array of spaces, including
          co-working spaces, event spaces, a conference room, and a fully
          equipped photo studio
        </p>
        <div className="intro-img">
          <Image src="/images/space/studio.jpg" height={700} width={600}/>
          <div className="intro-mini">
            <Image src="/images/space/conference.jpg" height={400} width={600}/>
            <Image src="/images/space/private.jpg" height={400} width={600}/>
          </div>
        </div>
      </div>
    );
}