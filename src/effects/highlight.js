Effect.Highlight = Class.create(Effect.Base, {
	initialize: function($super, element, options){
		$super(element, Object.extend({
			startcolor: 			'#ffff99',
			endcolor:				false,
			restorecolor:			false,
			keepBackgroundImage:	false
		}, options));
	},
	setup: function(){
		if (this.element.getStyle('display')=='none') return this.cancel();
		
		if (!this.options.endcolor)		this.options.endcolor				= this.element.getStyle('background-color');
		if (!this.options.restorecolor)	this.options.restorecolor			= this.element.style.backgroundColor;
		if (this.options.keepBackgroundImage){
			this.restoreBackgroundImage = this.element.getStyle('background-image');
			this.element.style.backgroundImage = 'none';
		}
		
		this.element.style.backgroundColor = this.options.startcolor;
		
		this.morph("background-color: " + this.options.endcolor);
	},
	teardown: function(){
		this.element.style.backgroundColor = this.options.restorecolor;
		if (this.options.keepBackgroundImage){
			this.element.style.backgroundImage = this.restoreBackgroundImage;
		}
	}
});
