/**
 * Export functions you want to work with, see documentation for details:
 * https://github.com/zeplin/zeplin-extension-documentation
 */

function layer(context, selectedLayer) {
	if(selectedLayer.textStyles.length > 0) {
		
		var textStyle = selectedLayer.textStyles[0].textStyle 
		if(textStyle != undefined && textStyle.fontSize != undefined && textStyle.letterSpacing != undefined) {
			
			let kerning = (textStyle.fontSize * textStyle.letterSpacing) / 1000.0;
			const JSONString = `.kern: ${kerning.toPrecision(4)}`;
			
		    return {
		        code: JSONString,
		        language: "json"
		    };
		}
	}
	
	return null;
}

export default {
    layer
};