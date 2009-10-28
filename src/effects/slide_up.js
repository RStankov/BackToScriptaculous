Effect.SlideUp = Class.create(Effect.Base, {
	setup: function(){
		this.element.makeClipping();
		
		var innerElement = this.element.down();
		this.originalMarginTop = innerElement.style.marginTop;
		this.animate('style', innerElement, { style: "margin-top: -" + innerElement.getHeight() + "px", propertyTransitions: this.options.propertyTransitions || { }});
	},
	teardown: function(){
		this.element.hide().undoClipping();
		this.element.down().style.marginTop = this.originalMarginTop;
	}
});
