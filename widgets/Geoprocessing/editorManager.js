// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/array dojo/on dojo/aspect dijit/form/Select dijit/form/TextBox jimu/dijit/CheckBox jimu/dijit/URLInput jimu/utils ./editors/simpleEditors ./editors/FeatureSetEditorChooser ./editors/FeatureSetResultEditor ./editors/SelectFeatureSetFromUrl ./editors/SelectFeatureSetFromLayer ./editors/SelectFeatureSetFromFile ./editors/SelectFeatureSetFromDraw ./editors/DataFileEditor ./editors/RasterLayerEditor ./editors/RecordSetEditor ./editors/RecordSetEditorChooser ./editors/SelectRecordSetFromTable".split(" "),
function(m,p,q,r,t,u,v,w,e,x,y,z,A,B,C,D,E,F,G,H){function I(a,d,b){return a.editorName&&0>a.dataType.indexOf("GPMultiValue")?a.editorName:"input"===d?"GPMultiValue:GPFeatureRecordSetLayer"===a.dataType?"UnsupportEditor":-1<a.dataType.indexOf("GPMultiValue")&&a.choiceList&&0<a.choiceList.length?"MultiValueChooser":-1<a.dataType.indexOf("GPMultiValue")&&(!a.choiceList||0===a.choiceList.length)?"MultiValueEditor":"GPLong"===a.dataType?"LongNumberTextBox":"GPDouble"===a.dataType?"DoubleNumberTextBox":
"GPString"===a.dataType?a.choiceList&&0<a.choiceList.length?"Select":"TextBox":"GPBoolean"===a.dataType?"CheckBox":"GPLinearUnit"===a.dataType?"LinerUnitEditor":"GPDate"===a.dataType?"DateTimeEditor":"GPDataFile"===a.dataType?"DataFileEditor":"GPRasterDataLayer"===a.dataType?"RasterLayerEditor":"GPRecordSet"===a.dataType?"setting"===b?"RecordSetEditorChooser":"json"===a.recordSetMode?"SimpleJsonEditor":"table"===a.recordSetMode?"SelectRecordSetFromTable":"UnsupportEditor":"GPFeatureRecordSetLayer"===
a.dataType?"setting"===b?"FeatureSetEditorChooser":"draw"===a.featureSetMode?"SelectFeatureSetFromDraw":"layers"===a.featureSetMode?"SelectFeatureSetFromLayer":"url"===a.featureSetMode?"SelectFeatureSetFromUrl":"file"===a.featureSetMode?"SelectFeatureSetFromFile":"map"===a.featureSetMode?"SelectFeatureSetFromMap":"UnsupportEditor":"UnsupportEditor":"GPFeatureRecordSetLayer"===a.dataType?"FeatureSetResultEditor":"GPRecordSet"===a.dataType?"RecordSetEditor":"MapServiceLayer"===a.dataType?"MapServiceLayer":
"ShowMessage"}var h={},n,k=[],l;h.createEditor=function(a,d,b,f){d=I(a,d,b);b={param:a,widgetUID:f?f.uid:void 0,config:f?f.config:void 0,appConfig:f?f.appConfig:void 0,map:n,nls:l,context:b,editorManager:h,style:{width:"100%"}};if("UnsupportEditor"===d){b.message="type "+a.dataType+" is not supported for now.";var c=new e.UnsupportEditor(b)}else"ShowMessage"===d?(b.message="GPRecordSet"===a.dataType?"table":"GPDataFile"===a.dataType||"GPRasterDataLayer"===a.dataType?"link":"text",c=new e.UnsupportEditor(b)):
"MapServiceLayer"===d?(b.message=l.useResultMapService,c=new e.UnsupportEditor(b)):"RecordSetEditor"===d?c=new F(b):"MultiValueChooser"===d?c=new e.MultiValueChooser(b):"MultiValueEditor"===d?c=new e.MultiValueEditor(b):"LongNumberTextBox"===d?c=new e.LongNumberEditor(b):"DoubleNumberTextBox"===d?c=new e.DoubleNumberEditor(b):"Select"===d?(b.gEditor=new r({options:m.map(a.choiceList,function(g){return{label:g,value:g}}),value:void 0===a.defaultValue?"":a.defaultValue}),b.editorName="Select",c=new e.GeneralEditorWrapperEditor(b)):
"TextBox"===d?(b.gEditor=new t({value:void 0===a.defaultValue?"":a.defaultValue}),c=new e.GeneralEditorWrapperEditor(b)):"CheckBox"===d?(b.gEditor=new u({checked:void 0===a.defaultValue?!1:a.defaultValue}),c=new e.GeneralEditorWrapperEditor(b)):"LinerUnitEditor"===d?c=new e.LinerUnitEditor(b):"DateTimeEditor"===d?c=new e.DateTimeEditor(b):"URLInput"===d?(b.gEditor=new v({value:void 0===a.defaultValue?"":a.defaultValue}),c=new e.GeneralEditorWrapperEditor(b)):"ObjectUrlEditor"===d?(a.defaultValue&&
"string"===typeof a.defaultValue&&(b.value=a.defaultValue),c=new e.ObjectUrlEditor(b)):"SimpleJsonEditor"===d?(a.defaultValue&&(b.value=a.defaultValue),c=new e.SimpleJsonEditor(b)):"DataFileEditor"===d?(a.defaultValue&&(b.value=a.defaultValue),c=new D(b)):"RasterLayerEditor"===d?(a.defaultValue&&(b.value=a.defaultValue),c=new E(b)):"SelectFeatureSetFromMap"===d?(b.message=l.currentMapExtent,c=new e.currentExtentEditor(b)):"SelectFeatureSetFromDraw"===d?void 0===a.defaultValue?(b.message="No defaultValue property.",
c=new e.UnsupportEditor(b)):(a.defaultValue&&a.defaultValue.geometryType&&(f=w.getTypeByGeometryType(a.defaultValue.geometryType),b.types=[f]),b.showClear=!0,c=new C(b)):"SelectFeatureSetFromLayer"===d?(a.defaultValue&&(b.value=a.defaultValue),c=new A(b)):"SelectFeatureSetFromUrl"===d?(b.querySetting=a.defaultValue,c=new z(b)):"SelectFeatureSetFromFile"===d?c=new B(b):"FeatureSetEditorChooser"===d?c=new x(b):"RecordSetEditorChooser"===d?c=new G(b):"SelectRecordSetFromTable"===d?c=new H(b):"FeatureSetResultEditor"===
d?c=new y(b):"GetUrlObjectFromLayer"===d?(a.defaultValue&&(b.value=a.defaultValue),c=new e.GetUrlObjectFromLayer(b)):(b.message="wrong editorName."+d,c=new e.UnsupportEditor(b));a.editorDependParamName&&(c.dependParam=a.editorDependParamName);q.before(c,"destroy",function(){k.splice(k.indexOf(c),1)});c.dependParam&&m.forEach(k,function(g){g.param.name===c.dependParam&&c.update(g.getValue())});"SelectFeatureSetFromLayer"===d&&p(c,"change",function(){m.forEach(k,function(g){g.dependParam===a.name&&
g.update(c.getValue())})});k.push(c);return c};h.setMap=function(a){n=a};h.setNls=function(a){l=a};return h});