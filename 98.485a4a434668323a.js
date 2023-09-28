"use strict";(self.webpackChunkbook_monkey=self.webpackChunkbook_monkey||[]).push([[98],{5098:(Ln,he,l)=>{l.r(he),l.d(he,{AdminModule:()=>Pn});var _=l(6814),o=l(6689),vt=l(7715),Vt=l(5592),Ct=l(7453),Dt=l(4829),At=l(4564),bt=l(8251),Mt=l(7400),Et=l(2714),q=l(7398);let fe=(()=>{class t{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static#e=this.\u0275fac=function(r){return new(r||t)(o.Y36(o.Qsj),o.Y36(o.SBq))};static#t=this.\u0275dir=o.lG2({type:t})}return t})(),y=(()=>{class t extends fe{static#e=this.\u0275fac=function(){let e;return function(i){return(e||(e=o.n5z(t)))(i||t)}}();static#t=this.\u0275dir=o.lG2({type:t,features:[o.qOj]})}return t})();const h=new o.OlP("NgValueAccessor"),Ot={provide:h,useExisting:(0,o.Gpc)(()=>S),multi:!0},Nt=new o.OlP("CompositionEventMode");let S=(()=>{class t extends fe{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function St(){const t=(0,_.q)()?(0,_.q)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static#e=this.\u0275fac=function(r){return new(r||t)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Nt,8))};static#t=this.\u0275dir=o.lG2({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,i){1&r&&o.NdJ("input",function(a){return i._handleInput(a.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(a){return i._compositionEnd(a.target.value)})},features:[o._Bn([Ot]),o.qOj]})}return t})();function p(t){return null==t||("string"==typeof t||Array.isArray(t))&&0===t.length}function me(t){return null!=t&&"number"==typeof t.length}const u=new o.OlP("NgValidators"),m=new o.OlP("NgAsyncValidators"),Bt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class ge{static min(n){return function _e(t){return n=>{if(p(n.value)||p(t))return null;const e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}(n)}static max(n){return function ye(t){return n=>{if(p(n.value)||p(t))return null;const e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}(n)}static required(n){return function ve(t){return p(t.value)?{required:!0}:null}(n)}static requiredTrue(n){return function Ve(t){return!0===t.value?null:{required:!0}}(n)}static email(n){return function Ce(t){return p(t.value)||Bt.test(t.value)?null:{email:!0}}(n)}static minLength(n){return function De(t){return n=>p(n.value)||!me(n.value)?null:n.value.length<t?{minlength:{requiredLength:t,actualLength:n.value.length}}:null}(n)}static maxLength(n){return function Ae(t){return n=>me(n.value)&&n.value.length>t?{maxlength:{requiredLength:t,actualLength:n.value.length}}:null}(n)}static pattern(n){return function be(t){if(!t)return N;let n,e;return"string"==typeof t?(e="","^"!==t.charAt(0)&&(e+="^"),e+=t,"$"!==t.charAt(t.length-1)&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),r=>{if(p(r.value))return null;const i=r.value;return n.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}(n)}static nullValidator(n){return null}static compose(n){return Se(n)}static composeAsync(n){return Ne(n)}}function N(t){return null}function Me(t){return null!=t}function Ee(t){return(0,o.QGY)(t)?(0,vt.D)(t):t}function Fe(t){let n={};return t.forEach(e=>{n=null!=e?{...n,...e}:n}),0===Object.keys(n).length?null:n}function we(t,n){return n.map(e=>e(t))}function Oe(t){return t.map(n=>function It(t){return!t.validate}(n)?n:e=>n.validate(e))}function Se(t){if(!t)return null;const n=t.filter(Me);return 0==n.length?null:function(e){return Fe(we(e,n))}}function Y(t){return null!=t?Se(Oe(t)):null}function Ne(t){if(!t)return null;const n=t.filter(Me);return 0==n.length?null:function(e){return function Ft(...t){const n=(0,At.jO)(t),{args:e,keys:r}=(0,Ct.D)(t),i=new Vt.y(s=>{const{length:a}=e;if(!a)return void s.complete();const d=new Array(a);let V=a,A=a;for(let j=0;j<a;j++){let de=!1;(0,Dt.Xf)(e[j]).subscribe((0,bt.x)(s,Rn=>{de||(de=!0,A--),d[j]=Rn},()=>V--,void 0,()=>{(!V||!de)&&(A||s.next(r?(0,Et.n)(r,d):d),s.complete())}))}});return n?i.pipe((0,Mt.Z)(n)):i}(we(e,n).map(Ee)).pipe((0,q.U)(Fe))}}function $(t){return null!=t?Ne(Oe(t)):null}function Be(t,n){return null===t?[n]:Array.isArray(t)?[...t,n]:[t,n]}function Ie(t){return t._rawValidators}function Ge(t){return t._rawAsyncValidators}function Z(t){return t?Array.isArray(t)?t:[t]:[]}function B(t,n){return Array.isArray(t)?t.includes(n):t===n}function Te(t,n){const e=Z(n);return Z(t).forEach(i=>{B(e,i)||e.push(i)}),e}function ke(t,n){return Z(n).filter(e=>!B(t,e))}class xe{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Y(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=$(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,e){return!!this.control&&this.control.hasError(n,e)}getError(n,e){return this.control?this.control.getError(n,e):null}}class c extends xe{get formDirective(){return null}get path(){return null}}class g extends xe{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Ue{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let He=(()=>{class t extends Ue{constructor(e){super(e)}static#e=this.\u0275fac=function(r){return new(r||t)(o.Y36(g,2))};static#t=this.\u0275dir=o.lG2({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,i){2&r&&o.ekj("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},features:[o.qOj]})}return t})(),Pe=(()=>{class t extends Ue{constructor(e){super(e)}static#e=this.\u0275fac=function(r){return new(r||t)(o.Y36(c,10))};static#t=this.\u0275dir=o.lG2({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,i){2&r&&o.ekj("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},features:[o.qOj]})}return t})();const b="VALID",G="INVALID",C="PENDING",M="DISABLED";function J(t){return(T(t)?t.validators:t)||null}function Q(t,n){return(T(n)?n.asyncValidators:t)||null}function T(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}function Le(t,n,e){const r=t.controls;if(!(n?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[e])throw new o.vHH(1001,"")}function je(t,n,e){t._forEachChild((r,i)=>{if(void 0===e[i])throw new o.vHH(1002,"")})}class X{constructor(n,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===G}get pending(){return this.status==C}get disabled(){return this.status===M}get enabled(){return this.status!==M}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Te(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Te(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(ke(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(ke(n,this._rawAsyncValidators))}hasValidator(n){return B(this._rawValidators,n)}hasAsyncValidator(n){return B(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=C,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const e=this._parentMarkedDirty(n.onlySelf);this.status=M,this.errors=null,this._forEachChild(r=>{r.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){const e=this._parentMarkedDirty(n.onlySelf);this.status=b,this._forEachChild(r=>{r.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===C)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?M:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;const e=Ee(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(!1!==e.emitEvent)}get(n){let e=n;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(n,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?M:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(G)?G:b}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){T(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function xt(t){return Array.isArray(t)?Y(t):t||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function Ut(t){return Array.isArray(t)?$(t):t||null}(this._rawAsyncValidators)}}class k extends X{constructor(n,e,r){super(J(e),Q(r,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,r={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,r={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){je(this,0,n),Object.keys(n).forEach(r=>{Le(this,!0,r),this.controls[r].setValue(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){null!=n&&(Object.keys(n).forEach(r=>{const i=this.controls[r];i&&i.patchValue(n[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((r,i)=>{r.reset(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(n,e,r)=>(n[r]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&n(r,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const[e,r]of Object.entries(this.controls))if(this.contains(e)&&n(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(n,e){let r=n;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}}const D=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>x}),x="always";function U(t,n){return[...n.path,t]}function E(t,n,e=x){K(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||"always"===e)&&n.valueAccessor.setDisabledState?.(t.disabled),function Rt(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&qe(t,n)})}(t,n),function jt(t,n){const e=(r,i)=>{n.valueAccessor.writeValue(r),i&&n.viewToModelUpdate(r)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}(t,n),function Lt(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&qe(t,n),"submit"!==t.updateOn&&t.markAsTouched()})}(t,n),function Pt(t,n){if(n.valueAccessor.setDisabledState){const e=r=>{n.valueAccessor.setDisabledState(r)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}(t,n)}function H(t,n,e=!0){const r=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(r),n.valueAccessor.registerOnTouched(r)),R(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function P(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function K(t,n){const e=Ie(t);null!==n.validator?t.setValidators(Be(e,n.validator)):"function"==typeof e&&t.setValidators([e]);const r=Ge(t);null!==n.asyncValidator?t.setAsyncValidators(Be(r,n.asyncValidator)):"function"==typeof r&&t.setAsyncValidators([r]);const i=()=>t.updateValueAndValidity();P(n._rawValidators,i),P(n._rawAsyncValidators,i)}function R(t,n){let e=!1;if(null!==t){if(null!==n.validator){const i=Ie(t);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==n.validator);s.length!==i.length&&(e=!0,t.setValidators(s))}}if(null!==n.asyncValidator){const i=Ge(t);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==n.asyncValidator);s.length!==i.length&&(e=!0,t.setAsyncValidators(s))}}}const r=()=>{};return P(n._rawValidators,r),P(n._rawAsyncValidators,r),e}function qe(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Ze(t,n){const e=t.indexOf(n);e>-1&&t.splice(e,1)}function We(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}const f=class extends X{constructor(n=null,e,r){super(J(e),Q(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),T(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=We(n)?n.value:n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Ze(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Ze(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){We(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};let ze=(()=>{class t extends c{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return U(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}static#e=this.\u0275fac=function(){let e;return function(i){return(e||(e=o.n5z(t)))(i||t)}}();static#t=this.\u0275dir=o.lG2({type:t,features:[o.qOj]})}return t})(),Ke=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275dir=o.lG2({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}return t})(),tt=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=o.oAB({type:t});static#n=this.\u0275inj=o.cJS({})}return t})();const oe=new o.OlP("NgModelWithFormControlWarning"),rn={provide:c,useExisting:(0,o.Gpc)(()=>w)};let w=(()=>{class t extends c{constructor(e,r,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(R(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return E(r,e,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){H(e.control||null,e,!1),function Zt(t,n){const e=t.indexOf(n);e>-1&&t.splice(e,1)}(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,function $e(t,n){t._syncPendingControls(),n.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,i=this.form.get(e.path);r!==i&&(H(r||null,e),(t=>t instanceof f)(i)&&(E(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);(function Ye(t,n){K(t,n)})(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function qt(t,n){return R(t,n)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){K(this.form,this),this._oldForm&&R(this._oldForm,this)}_checkFormPresent(){}static#e=this.\u0275fac=function(r){return new(r||t)(o.Y36(u,10),o.Y36(m,10),o.Y36(D,8))};static#t=this.\u0275dir=o.lG2({type:t,selectors:[["","formGroup",""]],hostBindings:function(r,i){1&r&&o.NdJ("submit",function(a){return i.onSubmit(a)})("reset",function(){return i.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([rn]),o.qOj,o.TTD]})}return t})();const on={provide:c,useExisting:(0,o.Gpc)(()=>ie)};let ie=(()=>{class t extends ze{constructor(e,r,i){super(),this.name=null,this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}_checkParentType(){it(this._parent)}static#e=this.\u0275fac=function(r){return new(r||t)(o.Y36(c,13),o.Y36(u,10),o.Y36(m,10))};static#t=this.\u0275dir=o.lG2({type:t,selectors:[["","formGroupName",""]],inputs:{name:["formGroupName","name"]},features:[o._Bn([on]),o.qOj]})}return t})();const sn={provide:c,useExisting:(0,o.Gpc)(()=>L)};let L=(()=>{class t extends c{constructor(e,r,i){super(),this.name=null,this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return U(null==this.name?this.name:this.name.toString(),this._parent)}_checkParentType(){it(this._parent)}static#e=this.\u0275fac=function(r){return new(r||t)(o.Y36(c,13),o.Y36(u,10),o.Y36(m,10))};static#t=this.\u0275dir=o.lG2({type:t,selectors:[["","formArrayName",""]],inputs:{name:["formArrayName","name"]},features:[o._Bn([sn]),o.qOj]})}return t})();function it(t){return!(t instanceof ie||t instanceof w||t instanceof L)}const an={provide:g,useExisting:(0,o.Gpc)(()=>se)};let se=(()=>{class t extends g{set isDisabled(e){}static#e=this._ngModelWarningSentOnce=!1;constructor(e,r,i,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function ne(t,n){if(!n)return null;let e,r,i;return Array.isArray(n),n.forEach(s=>{s.constructor===S?e=s:function $t(t){return Object.getPrototypeOf(t.constructor)===y}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){this._added||this._setUpControl(),function te(t,n){if(!t.hasOwnProperty("model"))return!1;const e=t.model;return!!e.isFirstChange()||!Object.is(n,e.currentValue)}(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return U(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static#t=this.\u0275fac=function(r){return new(r||t)(o.Y36(c,13),o.Y36(u,10),o.Y36(m,10),o.Y36(h,10),o.Y36(oe,8))};static#n=this.\u0275dir=o.lG2({type:t,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([an]),o.qOj,o.TTD]})}return t})(),Dn=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=o.oAB({type:t});static#n=this.\u0275inj=o.cJS({imports:[tt]})}return t})();class _t extends X{constructor(n,e,r){super(J(e),Q(r,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(n){return this.controls[this._adjustIndex(n)]}push(n,e={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(n,e,r={}){this.controls.splice(n,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(n,e={}){let r=this._adjustIndex(n);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(n,e,r={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),e&&(this.controls.splice(i,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,e={}){je(this,0,n),n.forEach((r,i)=>{Le(this,!1,i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){null!=n&&(n.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n=[],e={}){this._forEachChild((r,i)=>{r.reset(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((e,r)=>{n(e,r)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(e=>e.enabled&&n(e))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(const n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}}let bn=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:oe,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:D,useValue:e.callSetDisabledState??x}]}}static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=o.oAB({type:t});static#n=this.\u0275inj=o.cJS({imports:[Dn]})}return t})();var O=l(2413),ce=l(5008);let Mn=(()=>{class t{constructor(e){this.service=e}isbnExists(){return e=>this.service.check(e.value).pipe((0,q.U)(r=>r?{isbnexists:!0}:null))}static#e=this.\u0275fac=function(r){return new(r||t)(o.LFG(ce.T))};static#t=this.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();const En=function(t){if(!t.value||"string"!=typeof t.value)return null;const e=t.value.replace(/-/g,"").length;return 10===e||13===e?null:{isbnformat:!0}},Fn=function(t){return!(t=>t instanceof _t)(t)||t.controls.some(n=>!!n.value)?null:{atleastonevalue:!0}};let wn=(()=>{class t{constructor(e,r){this.renderer=e,this.elementRef=r,this.onInput=i=>{const s=i?new Date(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()):null,a=s?s.toISOString():null;this.onChange(a)},this.onChange=()=>{},this.onTouched=()=>{}}writeValue(e){const r=e?new Date(e):null,i=r?new Date(Date.UTC(r.getFullYear(),r.getMonth(),r.getDate())):null;this.renderer.setProperty(this.elementRef.nativeElement,"valueAsDate",i)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.renderer.setProperty(this.elementRef.nativeElement,"disabled",e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Qsj),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["","useValueAsLocalIso",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r.onInput(s.target.valueAsDate)})("blur",function(){return r.onTouched()})},standalone:!0,features:[o._Bn([{provide:h,useExisting:(0,o.Gpc)(()=>t),multi:!0}])]}),t})();function On(t,n){if(1&t&&(o.TgZ(0,"p",1),o._uU(1),o.qZA()),2&t){const e=n.$implicit;o.xp6(1),o.hij(" ",e,"\n")}}let Sn=(()=>{class t{constructor(e){this.form=e,this.messages={}}get errors(){if(!this.controlName)return[];const e=this.form.control.get(this.controlName);return e&&e.errors&&e.touched?Object.keys(e.errors).map(r=>this.messages[r]):[]}static#e=this.\u0275fac=function(r){return new(r||t)(o.Y36(w))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["bm-form-errors"]],inputs:{controlName:"controlName",messages:"messages"},decls:1,vars:1,consts:[["class","error",4,"ngFor","ngForOf"],[1,"error"]],template:function(r,i){1&r&&o.YNc(0,On,2,1,"p",0),2&r&&o.Q6J("ngForOf",i.errors)},dependencies:[_.sg]})}return t})();function Nn(t,n){if(1&t&&o._UZ(0,"input",20),2&t){const e=n.index;o.Q6J("formControlName",e),o.uIk("aria-label","Author "+e)}}const Bn=function(){return{required:"Title is required"}},In=function(){return{required:"ISBN is required",isbnformat:"ISBN must have 10 or 13 chars",isbnexists:"ISBN already exists"}},Gn=function(){return{atleastonevalue:"At least one author required"}};let yt=(()=>{class t{constructor(){this.submitBook=new o.vpe,this.form=new k({title:new f("",{nonNullable:!0,validators:ge.required}),subtitle:new f("",{nonNullable:!0}),isbn:new f("",{nonNullable:!0,validators:[ge.required,En],asyncValidators:(0,o.f3M)(Mn).isbnExists()}),description:new f("",{nonNullable:!0}),published:new f("",{nonNullable:!0}),authors:this.buildAuthorsArray([""]),thumbnailUrl:new f("",{nonNullable:!0})})}ngOnChanges(){this.book?(this.setFormValues(this.book),this.setEditMode(!0)):this.setEditMode(!1)}setFormValues(e){this.form.patchValue(e),this.form.setControl("authors",this.buildAuthorsArray(e.authors))}setEditMode(e){const r=this.form.controls.isbn;e?r.disable():r.enable()}buildAuthorsArray(e){return new _t(e.map(r=>new f(r,{nonNullable:!0})),Fn)}get authors(){return this.form.controls.authors}addAuthorControl(){this.authors.push(new f("",{nonNullable:!0}))}submitForm(){const e=this.form.getRawValue(),r=e.authors.filter(s=>!!s),i={...e,authors:r};this.submitBook.emit(i)}static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["bm-book-form"]],inputs:{book:"book"},outputs:{submitBook:"submitBook"},features:[o.TTD],decls:30,vars:9,consts:[[3,"formGroup","ngSubmit"],["for","title"],["id","title","formControlName","title"],["controlName","title",3,"messages"],["for","subtitle"],["id","subtitle","formControlName","subtitle"],["for","isbn"],["id","isbn","formControlName","isbn"],["controlName","isbn",3,"messages"],["type","button",1,"add",3,"click"],["formArrayName","authors"],[3,"formControlName",4,"ngFor","ngForOf"],["controlName","authors",3,"messages"],["for","description"],["id","description","formControlName","description"],["for","published"],["type","date","useValueAsLocalIso","","id","published","formControlName","published"],["for","thumbnailUrl"],["type","url","id","thumbnailUrl","formControlName","thumbnailUrl"],["type","submit",3,"disabled"],[3,"formControlName"]],template:function(r,i){1&r&&(o.TgZ(0,"form",0),o.NdJ("ngSubmit",function(){return i.submitForm()}),o.TgZ(1,"label",1),o._uU(2,"Title"),o.qZA(),o._UZ(3,"input",2)(4,"bm-form-errors",3),o.TgZ(5,"label",4),o._uU(6,"Subtitle"),o.qZA(),o._UZ(7,"input",5),o.TgZ(8,"label",6),o._uU(9,"ISBN"),o.qZA(),o._UZ(10,"input",7)(11,"bm-form-errors",8),o.TgZ(12,"label"),o._uU(13,"Authors"),o.qZA(),o.TgZ(14,"button",9),o.NdJ("click",function(){return i.addAuthorControl()}),o._uU(15," + Author "),o.qZA(),o.TgZ(16,"fieldset",10),o.YNc(17,Nn,1,2,"input",11),o.qZA(),o._UZ(18,"bm-form-errors",12),o.TgZ(19,"label",13),o._uU(20,"Description"),o.qZA(),o._UZ(21,"textarea",14),o.TgZ(22,"label",15),o._uU(23,"Published"),o.qZA(),o._UZ(24,"input",16),o.TgZ(25,"label",17),o._uU(26,"Thumbnail URL"),o.qZA(),o._UZ(27,"input",18),o.TgZ(28,"button",19),o._uU(29," Save "),o.qZA()()),2&r&&(o.Q6J("formGroup",i.form),o.xp6(4),o.Q6J("messages",o.DdM(6,Bn)),o.xp6(7),o.Q6J("messages",o.DdM(7,In)),o.xp6(6),o.Q6J("ngForOf",i.authors.controls),o.xp6(1),o.Q6J("messages",o.DdM(8,Gn)),o.xp6(10),o.Q6J("disabled",i.form.invalid))},dependencies:[_.sg,Ke,S,He,Pe,w,se,L,wn,Sn]})}return t})(),Tn=(()=>{class t{constructor(e,r){this.service=e,this.router=r}create(e){this.service.create(e).subscribe(r=>{this.router.navigate(["/books",r.isbn])})}static#e=this.\u0275fac=function(r){return new(r||t)(o.Y36(ce.T),o.Y36(O.F0))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["bm-book-create"]],decls:3,vars:0,consts:[[3,"submitBook"]],template:function(r,i){1&r&&(o.TgZ(0,"h1"),o._uU(1,"Create Book"),o.qZA(),o.TgZ(2,"bm-book-form",0),o.NdJ("submitBook",function(a){return i.create(a)}),o.qZA())},dependencies:[yt]})}return t})();var kn=l(4664);function xn(t,n){if(1&t){const e=o.EpF();o.TgZ(0,"bm-book-form",1),o.NdJ("submitBook",function(i){o.CHM(e);const s=o.oxw();return o.KtG(s.update(i))}),o.qZA()}2&t&&o.Q6J("book",n.ngIf)}const Un=[{path:"",redirectTo:"create",pathMatch:"full"},{path:"create",component:Tn},{path:"edit/:isbn",component:(()=>{class t{constructor(e,r,i){this.service=e,this.route=r,this.router=i,this.book$=this.route.paramMap.pipe((0,q.U)(s=>s.get("isbn")),(0,kn.w)(s=>this.service.getSingle(s)))}update(e){this.service.update(e).subscribe(r=>{this.router.navigate(["/books",r.isbn])})}static#e=this.\u0275fac=function(r){return new(r||t)(o.Y36(ce.T),o.Y36(O.gz),o.Y36(O.F0))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["bm-book-edit"]],decls:4,vars:3,consts:[[3,"book","submitBook",4,"ngIf"],[3,"book","submitBook"]],template:function(r,i){1&r&&(o.TgZ(0,"h1"),o._uU(1,"Edit Book"),o.qZA(),o.YNc(2,xn,1,1,"bm-book-form",0),o.ALo(3,"async")),2&r&&(o.xp6(2),o.Q6J("ngIf",o.lcZ(3,1,i.book$)))},dependencies:[_.O5,yt,_.Ov]})}return t})()}];let Hn=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=o.oAB({type:t});static#n=this.\u0275inj=o.cJS({imports:[O.Bz.forChild(Un),O.Bz]})}return t})(),Pn=(()=>{class t{static#e=this.\u0275fac=function(r){return new(r||t)};static#t=this.\u0275mod=o.oAB({type:t});static#n=this.\u0275inj=o.cJS({imports:[_.ez,Hn,bn]})}return t})()}}]);