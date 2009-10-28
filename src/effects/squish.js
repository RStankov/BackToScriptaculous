Effect.Squish = Class.create(Effect.Scale, {
	initialize: function($super, element){
		$super(element, window.opera ? 1 : 0.4, { restoreAfterFinish: true });
	},
	setup: function($super){
		this.element.makeClipping();
		$super();
	},
	teardown: function($super){
		this.element.hide().undoClipping();
		$super();
	}
});
