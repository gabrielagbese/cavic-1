export default function Navbar () {

    

    return (
        <div className="navbar">
            <div className="topnav responsive-nav" id="myTopnav">
                <div className="nav-main">
                    <a href="#home" class="active">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a>About</a>
                </div>
                <div className="nav-mobile">
                    <a className="menu-button" href="#menu" onClick={() => toggleMenu()}>Menu</a>
                    <div id="dropdown">
                        <a href="#">Link 1</a>
                    </div>
                </div>
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
