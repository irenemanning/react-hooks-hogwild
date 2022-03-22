import react from "react";
import PigInfo from "./PigInfo";

function Pig({ pig }) {
    function displayPigInfo() {
        console.log('clicked')
        return(<PigInfo pig={pig} />)
    }
  return (
    <div style={{
            width:"400px",
            padding:"10px",
            margin:"10px",
            backgroundColor: "rgb(255, 230, 243)",
            border:"6px solid rgb(255, 204, 230)"
            }}
            onClick={displayPigInfo}
            >
      <h3>{pig.name}</h3>
      <img src={pig.image} width={300} height={290} alt="" />
    </div>
  );
}

export default Pig;
