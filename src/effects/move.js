Effect.Move = Class.create(Effect.Base, {
	initialize: function($super, element, options){
		$super(element, Object.extend({
			x: 		0,
			y:		0,
			mode:	'relative'
		}, options));
	},
	setup: function(){
    	this.element.makePositioned();
		if (this.options.mode == 'absolute'){
			this.options.x = this.options.x - parseFloat(this.element.getStyle('left') || '0');
			this.options.y = this.options.y - parseFloat(this.element.getStyle('top')  || '0');
		}
		this.morph("left:" + this.options.x + "px; top:" + this.options.y + "px");
	}
});
