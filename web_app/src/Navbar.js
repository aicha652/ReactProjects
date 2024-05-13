const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The coder Web App</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor:"yellow",
                    borderRadius: "8px"
                }}>New app</a>
            </div>
        </nav>
    );
}
 
export default Navbar;
