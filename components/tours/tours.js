
import './Tours.css';
function Tours(props){
return(
    <div className='destination'>
        <h3>{props.countryName}</h3>
        <img src={props.image}/>
        <hr/>
    </div>
)
}
export default Tours;