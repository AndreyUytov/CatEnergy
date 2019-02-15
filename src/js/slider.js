const overlayImg = document.querySelector('.img-comp-overlay');
const pos = document.querySelector('.position');
const bar = document.querySelector('.bar');
const scale = document.querySelector('.scale');



const mouseDownOnPos = function (pos) {
	pos.addEventListener('mousedown', function(evt) {
		evt.preventDefult();

		let startCoord = {
			x: evt.ClientX
		};

		const mouseMoveOnPos = function (evtMove){
			evtMove.preventDefult();
			let shift = {
				x: startCoord.x - evtMove.ClientX
			};

			startCoord = {
				x: evtMove.ClientX
			};
			// Код для перемещения ползунка и бара
			

		};

		// Не забудем снять обработчики
		
		const mouseUpOnDocument = function(mouseUpEvt){
			mouseUpEvt.preventDefult();
			document.removeEventListener('mousedown', mouseDownOnPos);
			document.removeEventListener ('mousemove', mouseMoveOnPos);
		};

		document.addEventListener('mousemove', mouseMoveOnPos);
		document.addEventListener('mouseup', mouseUpOnDocument);

	})
}