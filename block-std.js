module.exports = function(){
    let BlockStd = Object.getPrototypeOf(fw).BlockStd = class BlockStd extends fw.Component{
        static {
            this.debug = false;
            this.createdAt  = "3.0.0";
            this.lastUpdate = "3.0.0";
            this.version = "2.0.0";
            this.tpl = utils.getNodeFromString(require('bundle-tpl:./block-std.html')).outerHTML;
            // this.describe();
        }
        // onCreate(){
            // do thing after element's creation
        // }
    }
    return BlockStd;
}