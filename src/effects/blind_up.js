Effect.BlindUp = Class.create(Effect.Base, {
	setup: function(){
		this.element.makeClipping();
		this.originalHeight = this.element.style.height;
		this.morph("height: 0px");
	},
	teardown: function(){
		this.element.hide().undoClipping();
		this.element.style.height = this.originalHeight;
	}
});
