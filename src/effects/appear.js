Effect.Appear = Class.create(Effect.Base, {
	setup: function(){
		this.element.show().setOpacity(0.0);
		this.morph("opacity:1");
	}
});
