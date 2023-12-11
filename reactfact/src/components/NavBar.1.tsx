import logo from '../assets/react.svg'
function NavBar() {
    return (
        <div className="container">

        <nav>
            <img className="nav--icon" src={logo} alt="logo" />
            <h3 className="nav--logo_text" >ReacrFacts</h3>
            <h4 className="nav--title" >React Course - Project 1</h4>
        </nav>
        </div>
    );
}
export default NavBar;