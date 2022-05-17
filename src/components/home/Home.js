import Tours from "../tours/Tours";
import "./Home.css";


function Home(props) {
  //console.log(props.dataFromAppComponent);
  return (
    <div className="home">
    
      <Tours dataFromHome={props.dataFromAppComponent}/>
     

    </div>

    
  );
}

export default Home;