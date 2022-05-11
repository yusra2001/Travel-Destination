
import "../tours/Tours.css"
function Tours(props){
    //console.log(props)
    return(
        props.data.map(element => {
          return(
          <div>
              <h1>{element.name}</h1>
              <img src={element.image} alt=""/>
              <hr/>
          </div>
            )

            })
       )
       };
export default Tours;