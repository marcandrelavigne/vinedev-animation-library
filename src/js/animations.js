import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

export function initPageAnimations() {

  // Trigger Animations right now on page load
  gsap.utils.toArray('[data-animate~="abovefold"]').forEach(function(element) {
	gsap.from(element, {
	  onComplete: () => {
		triggerAnimation(element);
	  }
	});
  });

  // Trigger Animations on scroll
  gsap.utils.toArray('[data-animate~="scroll"]').forEach(function(element) {
	if(element.getAttribute('data-animate').includes('toggle')) {
	  // Play the animation forward when entering the viewport, then backward when leaving
	  gsap.from(element, {
		scrollTrigger: {
		  trigger: element,
		  start: '20% bottom',
		  end: '70% top',
		  onEnter: () => {
			triggerAnimation(element);
		  },
		  onEnterBack: () => {
			triggerAnimation(element);
		  },
		  onLeave: () => {
			triggerAnimation(element);
		  },
		  onLeaveBack: () => {
			triggerAnimation(element);
		  }
		}
	  });
	} else {
	  // Play the animation once, when scrolling down
	  gsap.from(element, {
		scrollTrigger: {
		  trigger: element,
		  start: '20% bottom',
		  once: true
		},
		onComplete: () => {
		  triggerAnimation(element);
		}
	  });
	}
  });

  function triggerAnimation(element) {
	const dataAnimate = element.getAttribute('data-animate');
	if(dataAnimate.includes('trigger')) {
	  const newDataAnimate = dataAnimate.replace('trigger', '');
	  return element.setAttribute('data-animate', newDataAnimate + ' reverse');
	} else if(dataAnimate.includes('reverse')) {
	  const newDataAnimate = dataAnimate.replace('reverse', '');
	  return element.setAttribute('data-animate', newDataAnimate + ' trigger');
	} else {
	  return element.setAttribute('data-animate', dataAnimate + ' trigger');
	}
  }

}
