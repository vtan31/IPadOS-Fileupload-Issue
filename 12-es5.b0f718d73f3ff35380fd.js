(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1Mf0":function(n,t,u){"use strict";u.r(t);var e=u("CcnG"),l=function(){return function(){}}(),o=u("pMnS"),r=u("mrSG"),c=function(){function n(){this.test="Initial Message, should be different after taking a photo"}return n.prototype.uploadPWA=function(){return r.b(this,void 0,void 0,(function(){return r.e(this,(function(n){return this.test="Photo has been selected, page should not refresh and wipe this out.",[2]}))}))},n}(),i=e.ob({encapsulation:0,styles:[[".fileupload[_ngcontent-%COMP%]{margin:12px}.message[_ngcontent-%COMP%]{margin:12px;font-size:20px;font-weight:600}"]],data:{}});function a(n){return e.Fb(0,[(n()(),e.qb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.qb(1,0,null,null,1,"div",[["class","fileupload"]],null,null,null,null,null)),(n()(),e.qb(2,0,null,null,0,"input",[["accept","image/*"],["capture","camera"],["id","pwaphoto"],["type","file"]],null,[[null,"change"]],(function(n,t,u){var e=!0;return"change"===t&&(e=!1!==n.component.uploadPWA()&&e),e}),null,null)),(n()(),e.qb(3,0,null,null,1,"div",[["class","message"]],null,null,null,null,null)),(n()(),e.Eb(4,null,["Message: ",""]))],null,(function(n,t){n(t,4,0,t.component.test)}))}function s(n){return e.Fb(0,[(n()(),e.qb(0,0,null,null,1,"app-camera-upload1",[],null,null,null,a,i)),e.pb(1,49152,null,0,c,[],null,null)],null,null)}var p=e.mb("app-camera-upload1",c,s,{},{},[]),f=u("Ip0R"),b=u("gIcY"),d=u("ZZ/e"),h=u("ZYCi"),g=function(){return function(){}}();u.d(t,"CameraUpload1PageModuleNgFactory",(function(){return m}));var m=e.nb(l,[],(function(n){return e.yb([e.zb(512,e.j,e.Z,[[8,[o.a,p]],[3,e.j],e.x]),e.zb(4608,f.i,f.h,[e.u,[2,f.p]]),e.zb(4608,b.c,b.c,[]),e.zb(4608,d.a,d.a,[e.z,e.g]),e.zb(4608,d.Db,d.Db,[d.a,e.j,e.q]),e.zb(4608,d.Gb,d.Gb,[d.a,e.j,e.q]),e.zb(1073742336,f.b,f.b,[]),e.zb(1073742336,b.b,b.b,[]),e.zb(1073742336,b.a,b.a,[]),e.zb(1073742336,d.Bb,d.Bb,[]),e.zb(1073742336,h.n,h.n,[[2,h.s],[2,h.m]]),e.zb(1073742336,g,g,[]),e.zb(1073742336,l,l,[]),e.zb(1024,h.k,(function(){return[[{path:"",component:c}]]}),[])])}))},gIcY:function(n,t,u){"use strict";u("mrSG");var e=u("CcnG");u("ZYjt"),u("6blF"),u("isby"),u("67Y/"),u("McSo"),u("0/uQ"),u.d(t,"b",(function(){return r})),u.d(t,"c",(function(){return l})),u.d(t,"a",(function(){return c}));var l=function(){function n(){this._accessors=[]}return n.prototype.add=function(n,t){this._accessors.push([n,t])},n.prototype.remove=function(n){for(var t=this._accessors.length-1;t>=0;--t)if(this._accessors[t][1]===n)return void this._accessors.splice(t,1)},n.prototype.select=function(n){var t=this;this._accessors.forEach((function(u){t._isSameGroup(u,n)&&u[1]!==n&&u[1].fireUncheck(n.value)}))},n.prototype._isSameGroup=function(n,t){return!!n[0].control&&n[0]._parent===t._control._parent&&n[1].name===t.name},n}(),o=new e.p("NgFormSelectorWarning"),r=function(){return function(){}}(),c=function(){function n(){}var t;return t=n,n.withConfig=function(n){return{ngModule:t,providers:[{provide:o,useValue:n.warnOnDeprecatedNgFormSelector}]}},n}()}}]);