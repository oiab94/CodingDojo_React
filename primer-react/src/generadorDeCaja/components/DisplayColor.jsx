export default function DisplayColor(props) {
	const colores = props.color;
	
	return (
		<div style={{display:"flex"}}>
			{
				colores.map((item, index) => {
					return (
						<div key={index}
							style={{
								margin:"5px",
								padding:"50px",
								background:item,
								border:"2px solid black"}} />
						);
				})
			}
		</div>
	);
}