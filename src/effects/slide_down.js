Effect.SlideDown = Class.create(Effect.Base, {
	setup: function(){
		this.element.show().makeClipping();
		
		var innerElement = this.element.down();
		this.originalMarginTop = innerElement.style.marginTop;
		
		innerElement.style.marginTop = "-" + innerElement.getHeight() + "px";
		
		this.animate('style', innerElement, { style: "margin-top: " + (this.originalMarginTop || 0) + "px", propertyTransitions: this.options.propertyTransitions || { }});
	},
	teardown: function(){
		this.element.undoClipping();
		this.element.down().style.marginTop = this.originalMarginTop;
	}
});
