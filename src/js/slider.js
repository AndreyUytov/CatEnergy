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
      const posMover = function (positionLeft) {
        var posPosition = null;
      if ((positionLeft - shift.x) < 0) {
        posPosition = 0;	 
      } else if ((positionLeft - shift.x) > 70) {
        posPosition = 69;
      } else {
        posPosition = positionLeft - shift.x;
      };
      pos.style.left = posPosition + 'px';
      return posPosition; 
    };

    ;

    posMover(pos.offsetLeft);

      // Для бара
      
     bar.style.width = pos.style.left;

      // Для оверлея картинки

      overlayImg.style.width = ((posMover(pos.offsetLeft)) * 3.8) + 'px';
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

const clickAndTouchOnScale = function (scaleEvt) {
    scaleEvt.preventDefault();
    let coordinateClick = (scaleEvt.clientX - scale.getBoundingClientRect().left);
    if ((coordinateClick >= 0) && (coordinateClick < 75)) {
        pos.style.left = coordinateClick + 'px';   
      } else  coordinateClick = undefined;

    bar.style.width = pos.style.left;
    overlayImg.style.width = (coordinateClick * 3.8) + 'px';
  };

// для клика по scale
  scale.addEventListener('click', clickAndTouchOnScale);
  scale.addEventListener ('touch', clickAndTouchOnScale);

  // Для мобильного (непонятно работает ли?))


const touchStartOnPos = function (pos) {
  pos.addEventListener('touchstart', function(evt) {
    evt.preventDefault();

    var startCoord = {
      x: evt.clientX
    };
    const touchMoveOnPos = function (evtMove){
      // evtMove.preventDefault();
      var shift = {
        x: startCoord.x - evtMove.clientX
      };

      startCoord = {
        x: evtMove.clientX
      };
      // Код для перемещения ползунка и бара
      const posMover = function (positionLeft) {
        var posPosition = null;
      if ((positionLeft - shift.x) < 0) {
        posPosition = 0;   
      } else if ((positionLeft - shift.x) > 70) {
        posPosition = 69;
      } else {
        posPosition = positionLeft - shift.x;
      };
      pos.style.left = posPosition + 'px';
      return posPosition; 
    };

    ;

    posMover(pos.offsetLeft);

      // Для бара
      
     bar.style.width = pos.style.left;

      // Для оверлея картинки

      overlayImg.style.width = ((posMover(pos.offsetLeft)) * 3.8) + 'px';
    };



    // Не забудем снять обработчики
    
    const touchEndOnDocument = function(touchEndEvt){
      // touchEndEvt.preventDefault();
      document.removeEventListener('touchend', touchEndOnDocument);
      document.removeEventListener ('touchmove', touchMoveOnPos);
    };

    document.addEventListener('touchmove', touchMoveOnPos);
    document.addEventListener('touchend', touchEndOnDocument);

  })
};

touchStartOnPos(pos);