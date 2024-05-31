// Accordion.js 

const Accordion = (props:any) => { 
	return ( 
		<div className="border rounded-lg mb-1"> 
			<button 
				className={`w-full ${!props.isOpen ? 'rounded-lg' : 'rounded-t-lg'}  flex items-center justify-between p-4 text-left hover:bg-green-800 
						bg-[var(--new-green)] text-white transition duration-300`}
				onClick={props.toggleAccordion} 
			> 
				{props.title} 
				<span className={`float-right transform ${props.isOpen ? 
								'rotate-180' : 'rotate-0'} 
								transition-transform duration-300`}> 
					&#9660; 
				</span> 
			</button> 
			{props.isOpen && ( 
				<div className="p-4 bg-green-100"> 
					{props.data} 
				</div> 
			)} 
		</div> 
	); 
}; 

export default Accordion