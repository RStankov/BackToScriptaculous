Effect.ScrollTo = Class.create(S2.FX.Base, {
	initialize: function($super, element, options){
		if(!(this.element = $(element))) throw(S2.FX.elementDoesNotExistError);
	
		$super(options);
		this.play();
	},
	setup: function(){
		var scroll = document.viewport.getScrollOffsets(),
			offset = this.element.cumulativeOffset();
		
		this.startLeft	= scroll.left;
		this.startTop	= scroll.top;
		this.left		= offset.left - this.startLeft;
		this.top		= offset.top - this.startTop;
	},
	update: function(position){
		position = this.options.transition(position);
		scrollTo(this.startLeft + this.left * position, this.startTop + this.top * position);
	}
});
