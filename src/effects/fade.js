Effect.Fade = Class.create(Effect.Base, {
	setup: function(){
		this.element.show();
		this.oldOpacity = this.element.style.opacity || '';
		this.morph("opacity:0");
	},
	teardown: function(){
		this.element.hide().setOpacity(this.oldOpacity);
	}
});
