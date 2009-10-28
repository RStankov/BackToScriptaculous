Effect.BlindDown = Class.create(Effect.Base, {
	setup: function(){
		var height = this.element.getHeight();
		
		this.originalHeight = this.element.style.height;
		
		this.element.show().makeClipping();
		this.element.style.height = "0px";
		
		this.morph("height: " + height + "px");
	},
	teardown: function(){
		this.element.undoClipping();
		this.element.style.height = this.originalHeight;
	}
});
