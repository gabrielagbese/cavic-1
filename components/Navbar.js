import Image from 'next/image'

export default function Navbar () {

    

    return (
        <div>
            <div className="head-div">
                {/* favicon image */}
                <Image src="/logo.png" layout='fill' objectFit='contain'/>
            </div>
            <div className="navbar">
                <div className="topnav" id="myTopnav">
                    <div className="nav-main">
                        <a href="#home">Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a>About</a>
                    </div>
                    <div className="nav-mobile">
                        <a className="menu-button" href="#menu" onClick={() => toggleMenu()}>Menu</a>
                    </div>
                </div>
            </div>
            <div id="dropdown">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                    </div>
        </div>
    );
}


const toggleMenu = () => {
    console.log("clicked");
    var x = document.getElementById("dropdown");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
