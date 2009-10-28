Effect.toggle = function(element, effect){
	element = $(element);
	
	effect = (effect || 'appear').toLowerCase();
	return new Effect[ arguments.callee.PAIRS[ effect ][ element.visible() ? 1 : 0 ] ](element, arguments[2] || {});
};

Effect.toggle.PAIRS = {
	slide:  ['SlideDown', 'SlideUp'],
	blind:  ['BlindDown', 'BlindUp'],
	appear: ['Appear', 'Fade']
};