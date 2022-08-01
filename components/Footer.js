
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import { fabrand, faHighlighter } from '@fortawesome/free-solid-svg-icons';

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer () {
    return (
        <div className="footer">
            <p>COPYRIGHT © 2016 CREATIVE ARTS AND VISUAL IMAGERY CENTRE</p>
            {/* <div>
            <ul class="socials-nav">
                <FontAwesomeIcon icon="instagram" />
                <li class="socials-nav-item"><a href="#"><span class="fa fa-facebook"></span></a></li>
                <li class="socials-nav-item"><a href="#"><span class="fa fa-instagram"></span></a></li>
            </ul>
            </div> */}
        </div>
    );
}