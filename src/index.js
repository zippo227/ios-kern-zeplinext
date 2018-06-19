/*
Created by: Andy Martin
Created on: June 19, 2018

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

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