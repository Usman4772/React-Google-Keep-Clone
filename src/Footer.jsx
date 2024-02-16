import React from "react";
function Footer(){
    let year=new Date().getFullYear()


    // console.log(year)
    return(
        <React.Fragment>
        <footer className="footer">
        <h3 className="h3Footer">Copyright© {year}</h3>
        </footer>
        </React.Fragment>
    )
}
export default Footer;