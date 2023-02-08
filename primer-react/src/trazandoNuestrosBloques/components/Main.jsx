import Subcontent from "./Subcontent";
import Advertisement from "./Advertisement";

export default function Main(){
	return (
		<div id="Main" 
			style={{
				marginRight:"20px",
				marginBottom:"20px",
				background: "#ffa07a",
				border:"2px solid black",
				width:"75%"}}>
			<div style={{display: "flex"}}>
				<Subcontent />			
				<Subcontent />			
				<Subcontent />			
			</div>
			<div>
				<Advertisement />
			</div>
		</div>
	);
}