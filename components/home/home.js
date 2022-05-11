import Header from "../header/Header"
import Footer from "../footer/Footer"
import Tours from "../tours/Tours"
import db from "/home/yusra2001/Travel-Destination/travel-destination/src/data/db.json"

function Home (){
    return(
        <div>
        <Header/>
        <Tours data ={db}/>
        <Footer/>
        </div> 
    )
    
}
export default Home;