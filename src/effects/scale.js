Effect.Scale = Class.create(Effect.Base, {
	initialize: function($super, element, percent, options){
		$super(element, Object.extend({
			scaleX:				true,
			scaleY:				true,
			scaleContent:		true,
			scaleFromCenter:	false,
			scaleMode:			'box',	// 'box' or 'contents' or {} with provided values
			scaleFrom:			100.0,
			scaleTo:			percent || 0
		}, options || {}));
	},
	setup: function(){
		if (this.options.restoreAfterFinish){
			var style = this.element.style;
			this.originalStyle = {
				top:		style.top,
				left:		style.left,
				width:		style.width,
				height:		style.height,
				fontSize:	style.fontSize
			};
		}
		
		var dims;
		switch(this.options.scaleMode){
			case 'box':			dims = [this.element.offsetWidth, this.element.offsetHeight]; break;
			case 'contents':	dims = [this.element.scrollWidth, this.element.scrollHeight]; break;
			default:			dims = [this.options.scaleMode.originalWidth, this.options.scaleMode.originalHeight]; break;
		}
		
		if (this.options.scaleContent){
			var fontSize = this.element.getStyle('font-size') || '100%';
			['em','px','%','pt'].each( function(fontSizeType){
				if (fontSize.indexOf(fontSizeType) > 0){
					dims.fontSize     = parseFloat(fontSize);
					dims.fontSizeType = fontSizeType;
				}
			});
		}
		
		if (this.options.scaleFrom != 100){
			this.element.setStyle(this.getScaleStyle(this.options.scaleFrom, dims));
		}
		
		this.morph(this.getScaleStyle(this.options.scaleTo, dims));
	},	
	teardown: function(){
		if (this.originalStyle) this.element.setStyle(this.originalStyle);
	},
	getScaleStyle: function(scale, dims){
		scale /= 100;
		
		var styles	= {},
			width	= dims[0] * scale,
			height	= dims[1] * scale;

		if (this.options.scaleX) styles.width  = width.round()  + "px";
		if (this.options.scaleY) styles.height = height.round() + "px";
		
		if (this.options.scaleFromCenter){
			var top  = - (height - dims[0])/2;
			var left = - (width  - dims[1])/2;
			
			if (this.element.getStyle('position') == 'absolute') {
				top  += this.element.offsetTop;
				left += this.element.offsetLeft;
			}
			
			if (this.options.scaleY) styles.top  = top  + "px";
			if (this.options.scaleX) styles.left = left + "px";
		}
		
		if ('fontSize' in dims){
			styles.fontSize = dims.fontSize * scale + dims.fontSizeType;
		}
		
		return styles;
	}
});
