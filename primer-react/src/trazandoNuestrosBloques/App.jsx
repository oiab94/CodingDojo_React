import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

export default function TrazandoNuestrosBloques(){
	return (
		<div 
			style={{
				margin: "10px",
				border: "2px solid black",
				background:"#dcdcdc",
				}}>
			<Header />
			<div style={{display: "flex", height:"300px"}}>
				<Navigation />
				<Main />
			</div>
		</div>
	);
}