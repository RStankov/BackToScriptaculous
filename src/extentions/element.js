Element.addMethods(
	$w('fade appear blindUp blindDown slideUp slideDown dropOut highlight move scrollTo squish').inject({}, function(methods, effect){
		methods[effect] = function(element, options){
			new Effect[effect.charAt(0).toUpperCase() + effect.substring(1)](element, options);
		};
		return methods;
	})
);