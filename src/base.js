Effect.Base = Class.create(S2.FX.Element, {
	initialize: function($super, element, options){
		$super(element, options);
		this.play();
	},
	morph: function(style){
		this.animate('style', this.element, {style: style, propertyTransitions: this.options.propertyTransitions || {}});
	}
});