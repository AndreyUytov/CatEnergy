'use strict';

const overlayImg = document.querySelector('.img-comp-overlay');
const pos = document.querySelector('.position');
const bar = document.querySelector('.bar');
const scale = document.querySelector('.scale');



const mouseDownOnPos = function (pos) {
	pos.addEventListener('mousedown', function(evt) {
		evt.preventDefault();

		var startCoord = {
			x: evt.clientX
		};
		const mouseMoveOnPos = function (evtMove){
			evtMove.preventDefault();
			var shift = {
				x: startCoord.x - evtMove.clientX
			};

			startCoord = {
				x: evtMove.clientX
			};
			// Код для перемещения ползунка и бара

      if ((pos.offsetLeft - shift.x) < 0) {
        pos.style.left = 0 + 'px';	 
      } if ((pos.offsetLeft - shift.x) > 70) {
        pos.style.left = 69 + 'px';
      } else {
        pos.style.left = (pos.offsetLeft - shift.x) + 'px';
      } 

      // Для бара
      
		};

		// Не забудем снять обработчики
		
		const mouseUpOnDocument = function(mouseUpEvt){
			mouseUpEvt.preventDefault();
			document.removeEventListener('mousedown', mouseDownOnPos);
			document.removeEventListener ('mousemove', mouseMoveOnPos);
		};

		document.addEventListener('mousemove', mouseMoveOnPos);
		document.addEventListener('mouseup', mouseUpOnDocument);

	})
};

mouseDownOnPos(pos);