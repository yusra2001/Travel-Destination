// import './Tours.css';
// import Tour from './tour/Tour';
// const tour = require('../../data/db.json')
// function Tours(props){
// return(
//     <Tour tour = {tour}/>
// )
// }
// export default Tours;


import "./Tours.css";
import Tour from "./tour/Tour";


function Tours(props) {
    return (
        <>
<h1>yyyyyy</h1>
            {
                props.dataFromHome.map(item => {
                    return <Tour key={item.id} objectFromTours={item}  />
                })

            }
        </>
    )
}

export default Tours