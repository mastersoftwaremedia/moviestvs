import React from 'react'
import Modal from 'react-modal'

const ShowFavModal=(props)=>{
	if(!props.selectedItem){
		return <div></div>
	}
	const URL='http://image.tmdb.org/t/p/w342//'
	return(
		<Modal isOpen={props.modalOpened}
			onRequestClose={()=>props.closeModal()}>
			<div className="gif-modal">
				<img src={`${URL}${props.selectedItem.poster_path}`} 
						alt={props.selectedItem.title} 
						title={props.selectedItem.title}		 />
				<button onClick={()=>props.closeModal()}>Close</button>
			</div>
		</Modal>
	)
}
Modal.setAppElement('#root')
export default ShowFavModal