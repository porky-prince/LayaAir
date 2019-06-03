import { HTMLElement } from "./HTMLElement";
import { Graphics } from "laya/display/Graphics"
	import { HTMLStyle } from "../utils/HTMLStyle"
	import { ILayout } from "../utils/ILayout"
	import { Pool } from "laya/utils/Pool"
import { IHtml } from "../utils/IHtml";
import { ILaya } from "ILaya";
	
	/**
	 * @private
	 */
	export class HTMLBrElement {
		 static brStyle:HTMLStyle;
		
		/**@private */
		 _addToLayout(out:ILayout[]):void {
			out.push((<ILayout>(this as any) ));
		}
		
		//TODO:coverage
		 reset():HTMLBrElement {
			return this;
		}
		
		 destroy():void {
			Pool.recover(HTMLElement.getClassName(this), this.reset());
		}
		
		protected _setParent(value:HTMLElement):void {
		
		}
		
		 set parent(value:any) {
		
		}
		
		 set URI(value:any) {
		}
		
		 set href(value:any) {
		
		}
		
		/**@private */
		//TODO:coverage
		 _getCSSStyle():HTMLStyle {
			if (!HTMLBrElement.brStyle) {
				HTMLBrElement.brStyle = new HTMLStyle();
				HTMLBrElement.brStyle.setLineElement(true);
				HTMLBrElement.brStyle.block = true;
			}
			return HTMLBrElement.brStyle;
		}
		
		 renderSelfToGraphic(graphic:Graphics, gX:number, gY:number, recList:any[]):void {
		
		}
	}

IHtml.HTMLBrElement=HTMLBrElement;
ILaya.regClass(HTMLBrElement);