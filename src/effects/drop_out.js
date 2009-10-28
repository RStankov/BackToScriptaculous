Effect.DropOut = Class.create(Effect.Base, {
	setup: function(){
		this.oldStyle = {
			top:		this.element.getStyle('top'),
			left:		this.element.getStyle('left'),
			height:		this.element.getStyle('height'),
			opacity:	this.element.style.opacity || ''
		};
		this.element.makePositioned();
		this.morph("top: 100px; left: 0px; height: 0px; opacity: 0;");
	},
	teardown: function(){
		this.element.hide().undoPositioned().setStyle(this.oldStyle);
	}
});
