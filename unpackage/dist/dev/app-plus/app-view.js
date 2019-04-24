var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20181116_syb_scopedata*/window.__wcc_version__='v0.5vv_20181116_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'wrapper'])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'bg']]],[1,';']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'wrapper'])
Z([[2,'+'],[[2,'+'],[1,'background-image:'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'-webkit-linear-gradient(left, '],[[7],[3,'colorStart']]],[1,', ']],[[7],[3,'colorEnd']]],[1,')']]],[1,';']])
Z([3,'icon vantfont vant-topic'])
Z([3,'title'])
Z([a,[[7],[3,'title']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'page-index'])
Z([3,'tab-header'])
Z([3,'tab-header-content'])
Z([3,'__i0__'])
Z([3,'tab'])
Z([[7],[3,'tabs']])
Z([3,'title'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'tab-item']],[[2,'?:'],[[2,'==='],[[6],[[7],[3,'tab']],[3,'idx']],[[7],[3,'currentTabIdx']]],[1,'current'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'changeTab']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'tabs']],[1,'title']],[[6],[[7],[3,'tab']],[3,'title']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'tab']],[3,'idx']])
Z([a,[[6],[[7],[3,'tab']],[3,'title']]])
Z([3,'tab-indicator'])
Z([3,'indicator-block'])
Z(z[14])
Z([[2,'+'],[[2,'+'],[1,'transform:'],[[2,'+'],[[2,'+'],[1,'translateX('],[[7],[3,'indicatorPos']]],[1,')']]],[1,';']])
Z([3,'tab-content'])
Z([[4],[[5],[[5],[[5],[[5],[1,'tab-content-body']],[[2,'?:'],[[2,'||'],[[2,'==='],[1,0],[[7],[3,'prevIdx']]],[[2,'&&'],[[2,'<'],[1,0],[[7],[3,'currentTabIdx']]],[[2,'!=='],[1,0],[[7],[3,'nextIdx']]]]],[1,'prev'],[1,'']]],[[2,'?:'],[[2,'==='],[[7],[3,'currentTabIdx']],[1,0]],[1,'current'],[1,'']]],[[2,'?:'],[[2,'||'],[[2,'==='],[1,0],[[7],[3,'nextIdx']]],[[2,'&&'],[[2,'>'],[1,0],[[7],[3,'currentTabIdx']]],[[2,'!=='],[1,0],[[7],[3,'prevIdx']]]]],[1,'next'],[1,'']]]])
Z([3,'关注'])
Z([[4],[[5],[[5],[[5],[[5],[1,'tab-content-body']],[[2,'?:'],[[2,'||'],[[2,'==='],[1,1],[[7],[3,'prevIdx']]],[[2,'&&'],[[2,'<'],[1,1],[[7],[3,'currentTabIdx']]],[[2,'!=='],[1,1],[[7],[3,'nextIdx']]]]],[1,'prev'],[1,'']]],[[2,'?:'],[[2,'==='],[[7],[3,'currentTabIdx']],[1,1]],[1,'current'],[1,'']]],[[2,'?:'],[[2,'||'],[[2,'==='],[1,1],[[7],[3,'nextIdx']]],[[2,'&&'],[[2,'>'],[1,1],[[7],[3,'currentTabIdx']]],[[2,'!=='],[1,1],[[7],[3,'prevIdx']]]]],[1,'next'],[1,'']]]])
Z([3,'tab-content-context'])
Z([3,'rec-header'])
Z([[2,'+'],[1,'rh'],[[6],[[6],[[7],[3,'recommendCates']],[[7],[3,'currentCateIdx']]],[3,'id']]])
Z([3,'idx'])
Z([3,'cate'])
Z([[7],[3,'recommendCates']])
Z([3,'id'])
Z(z[8])
Z([3,'rec-header-cate'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'userChangeCate']],[[4],[[5],[[7],[3,'idx']]]]]]]]]]]])
Z([[2,'+'],[1,'rh'],[[6],[[6],[[7],[3,'recommendCates']],[[7],[3,'idx']]],[3,'id']]])
Z([[4],[[5],[[5],[1,'rec-header-cate-text']],[[2,'?:'],[[2,'==='],[[7],[3,'idx']],[[7],[3,'currentCateIdx']]],[1,'current'],[1,'']]]])
Z([a,[[6],[[7],[3,'cate']],[3,'title']]])
Z([1,false])
Z(z[8])
Z([3,'rec-body'])
Z([[7],[3,'currentCateIdx']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeCate']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,300])
Z(z[34])
Z([3,'__i1__'])
Z(z[25])
Z(z[26])
Z(z[27])
Z([[2,'==='],[[6],[[7],[3,'cate']],[3,'id']],[1,'1']])
Z([3,'rec-topic-box'])
Z([3,'rec-topic-header'])
Z([3,'rec-topic-title'])
Z([3,'推荐话题'])
Z([3,'rec-topic-btn'])
Z([3,'rec-topic-btn-text'])
Z([3,'更多'])
Z([3,'vantfont vant-next'])
Z([3,'rec-topic-content'])
Z([3,'__i2__'])
Z([3,'topic'])
Z([[7],[3,'recommendTopics']])
Z(z[27])
Z([3,'rec-topic-item'])
Z([[6],[[7],[3,'topic']],[3,'colorEnd']])
Z([[6],[[7],[3,'topic']],[3,'colorStart']])
Z([[6],[[7],[3,'topic']],[3,'title']])
Z([[4],[[5],[[5],[[5],[[5],[1,'tab-content-body']],[[2,'?:'],[[2,'||'],[[2,'==='],[1,2],[[7],[3,'prevIdx']]],[[2,'&&'],[[2,'<'],[1,2],[[7],[3,'currentTabIdx']]],[[2,'!=='],[1,2],[[7],[3,'nextIdx']]]]],[1,'prev'],[1,'']]],[[2,'?:'],[[2,'==='],[[7],[3,'currentTabIdx']],[1,2]],[1,'current'],[1,'']]],[[2,'?:'],[[2,'||'],[[2,'==='],[1,2],[[7],[3,'nextIdx']]],[[2,'&&'],[[2,'>'],[1,2],[[7],[3,'currentTabIdx']]],[[2,'!=='],[1,2],[[7],[3,'prevIdx']]]]],[1,'next'],[1,'']]]])
Z([3,'群组'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/statusbar-replacer.wxml','./components/topic-tag.wxml','./pages/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
cs.push("./components/statusbar-replacer.wxml:view:1:1")
var oB=_mz(z,'view',['bind:__l',0,'class',1,'style',1],[],e,s,gg)
cs.pop()
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
cs.push("./components/topic-tag.wxml:view:1:1")
var oD=_mz(z,'view',['bind:__l',0,'class',1,'style',1],[],e,s,gg)
cs.push("./components/topic-tag.wxml:text:1:138")
var fE=_n('text')
_rz(z,fE,'class',3,e,s,gg)
cs.pop()
_(oD,fE)
cs.push("./components/topic-tag.wxml:text:1:184")
var cF=_n('text')
_rz(z,cF,'class',4,e,s,gg)
var hG=_oz(z,5,e,s,gg)
_(cF,hG)
cs.pop()
_(oD,cF)
cs.pop()
_(r,oD)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
cs.push("./pages/index/index.wxml:view:1:1")
var cI=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./pages/index/index.wxml:view:1:41")
var oJ=_n('view')
_rz(z,oJ,'class',2,e,s,gg)
cs.push("./pages/index/index.wxml:statusbar-replacer:1:66")
var lK=_n('statusbar-replacer')
cs.pop()
_(oJ,lK)
cs.push("./pages/index/index.wxml:view:1:107")
var aL=_n('view')
_rz(z,aL,'class',3,e,s,gg)
var tM=_v()
_(aL,tM)
cs.push("./pages/index/index.wxml:block:1:140")
var eN=function(oP,bO,xQ,gg){
cs.push("./pages/index/index.wxml:block:1:140")
cs.push("./pages/index/index.wxml:view:1:220")
var fS=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2,'sort',3],[],oP,bO,gg)
cs.push("./pages/index/index.wxml:text:1:409")
var cT=_n('text')
var hU=_oz(z,12,oP,bO,gg)
_(cT,hU)
cs.pop()
_(fS,cT)
cs.pop()
_(xQ,fS)
cs.pop()
return xQ
}
tM.wxXCkey=2
_2z(z,6,eN,e,s,gg,tM,'tab','__i0__','title')
cs.pop()
cs.push("./pages/index/index.wxml:view:1:450")
var oV=_n('view')
_rz(z,oV,'class',13,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:478")
var cW=_mz(z,'view',['class',14,'id',1,'style',2],[],e,s,gg)
cs.pop()
_(oV,cW)
cs.pop()
_(aL,oV)
cs.pop()
_(oJ,aL)
cs.pop()
_(cI,oJ)
cs.push("./pages/index/index.wxml:view:1:619")
var oX=_n('view')
_rz(z,oX,'class',17,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:645")
var lY=_n('view')
_rz(z,lY,'class',18,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:825")
var aZ=_n('view')
var t1=_oz(z,19,e,s,gg)
_(aZ,t1)
cs.pop()
_(lY,aZ)
cs.pop()
_(oX,lY)
cs.push("./pages/index/index.wxml:view:1:851")
var e2=_n('view')
_rz(z,e2,'class',20,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:1031")
var b3=_n('view')
_rz(z,b3,'class',21,e,s,gg)
cs.push("./pages/index/index.wxml:scroll-view:1:1065")
var o4=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollX',-1,'class',22,'scrollIntoView',1],[],e,s,gg)
var x5=_v()
_(o4,x5)
cs.push("./pages/index/index.wxml:block:1:1190")
var o6=function(c8,f7,h9,gg){
cs.push("./pages/index/index.wxml:block:1:1190")
cs.push("./pages/index/index.wxml:view:1:1275")
var cAB=_mz(z,'view',['catchtap',28,'class',1,'data-event-opts',2,'id',3],[],c8,f7,gg)
cs.push("./pages/index/index.wxml:text:1:1416")
var oBB=_n('text')
_rz(z,oBB,'class',32,c8,f7,gg)
var lCB=_oz(z,33,c8,f7,gg)
_(oBB,lCB)
cs.pop()
_(cAB,oBB)
cs.pop()
_(h9,cAB)
cs.pop()
return h9
}
x5.wxXCkey=2
_2z(z,26,o6,e,s,gg,x5,'cate','idx','id')
cs.pop()
cs.pop()
_(b3,o4)
cs.push("./pages/index/index.wxml:swiper:1:1545")
var aDB=_mz(z,'swiper',['autoplay',34,'bindchange',1,'class',2,'current',3,'data-event-opts',4,'duration',5,'indicatorDots',6],[],e,s,gg)
var tEB=_v()
_(aDB,tEB)
cs.push("./pages/index/index.wxml:block:1:1746")
var eFB=function(oHB,bGB,xIB,gg){
cs.push("./pages/index/index.wxml:block:1:1746")
cs.push("./pages/index/index.wxml:swiper-item:1:1834")
var fKB=_n('swiper-item')
var cLB=_v()
_(fKB,cLB)
if(_oz(z,45,oHB,bGB,gg)){cLB.wxVkey=1
cs.push("./pages/index/index.wxml:block:1:1847")
cs.push("./pages/index/index.wxml:view:1:1880")
var hMB=_n('view')
_rz(z,hMB,'class',46,oHB,bGB,gg)
cs.push("./pages/index/index.wxml:view:1:1908")
var oNB=_n('view')
_rz(z,oNB,'class',47,oHB,bGB,gg)
cs.push("./pages/index/index.wxml:text:1:1939")
var cOB=_n('text')
_rz(z,cOB,'class',48,oHB,bGB,gg)
var oPB=_oz(z,49,oHB,bGB,gg)
_(cOB,oPB)
cs.pop()
_(oNB,cOB)
cs.push("./pages/index/index.wxml:view:1:1988")
var lQB=_n('view')
_rz(z,lQB,'class',50,oHB,bGB,gg)
cs.push("./pages/index/index.wxml:text:1:2016")
var aRB=_n('text')
_rz(z,aRB,'class',51,oHB,bGB,gg)
var tSB=_oz(z,52,oHB,bGB,gg)
_(aRB,tSB)
cs.pop()
_(lQB,aRB)
cs.push("./pages/index/index.wxml:text:1:2062")
var eTB=_n('text')
_rz(z,eTB,'class',53,oHB,bGB,gg)
cs.pop()
_(lQB,eTB)
cs.pop()
_(oNB,lQB)
cs.pop()
_(hMB,oNB)
cs.push("./pages/index/index.wxml:view:1:2116")
var bUB=_n('view')
_rz(z,bUB,'class',54,oHB,bGB,gg)
var oVB=_v()
_(bUB,oVB)
cs.push("./pages/index/index.wxml:block:1:2148")
var xWB=function(fYB,oXB,cZB,gg){
cs.push("./pages/index/index.wxml:block:1:2148")
cs.push("./pages/index/index.wxml:view:1:2238")
var o2B=_n('view')
_rz(z,o2B,'class',59,fYB,oXB,gg)
cs.push("./pages/index/index.wxml:topic-tag:1:2267")
var c3B=_mz(z,'topic-tag',['colorEnd',60,'colorStart',1,'title',2],[],fYB,oXB,gg)
cs.pop()
_(o2B,c3B)
cs.pop()
_(cZB,o2B)
cs.pop()
return cZB
}
oVB.wxXCkey=2
_2z(z,57,xWB,oHB,bGB,gg,oVB,'topic','__i2__','id')
cs.pop()
cs.pop()
_(hMB,bUB)
cs.pop()
_(cLB,hMB)
cs.pop()
}
cLB.wxXCkey=1
cs.pop()
_(xIB,fKB)
cs.pop()
return xIB
}
tEB.wxXCkey=2
_2z(z,43,eFB,e,s,gg,tEB,'cate','__i1__','id')
cs.pop()
cs.pop()
_(b3,aDB)
cs.pop()
_(e2,b3)
cs.pop()
_(oX,e2)
cs.push("./pages/index/index.wxml:view:1:2462")
var o4B=_n('view')
_rz(z,o4B,'class',63,e,s,gg)
cs.push("./pages/index/index.wxml:view:1:2642")
var l5B=_n('view')
var a6B=_oz(z,64,e,s,gg)
_(l5B,a6B)
cs.pop()
_(o4B,l5B)
cs.pop()
_(oX,o4B)
cs.pop()
_(cI,oX)
cs.pop()
_(r,cI)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@font-face { font-family: \x27vantfont\x27; src: local(\x27vantfont\x27),\n        url(data:application/font-woff2;charset\x3dutf-8;base64,d09GMgABAAAAAAMYAA0AAAAABzQAAALEAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP0ZGVE0cGh4GVgCCShEICoIUgXMLDAABNgIkAxQEIAWFCAc3GyEGyB6Dbds4zhJDoYIhtlOfbzxPv9//1j7n3PdV0p8fBWiE6BVP6hGfzpAgZIZE6HjIIhrJ1+ex0x9ySgpokyeAd1chnCpjIibveZ3rvfX5P3WqZno050tzLxi0tYCioWB8LMEAhQIcWrOt9woWoF6tYL0y1rgD7sy8YA68CYFnd+25wMsvNz3co4NxLIIiqiYaCtJKbusoN8sjbgGvzx8bw6XoKq5xx8nwQgR9z/teWuv7evsZyP0JoKJiCQ1swRAsYVoDA02UqG4f4M8rF5UTCEAGBJCCAv55BHDy9FFAB0ZRsQecBdAAEGW2BVxvcCI3Ox/rHYnC9fqnLmdqixKk8BNT+Kv3Nue2tmwFKVOn9zuKRBA+Z63crz+zSUa6AH7i+NHDrnEKfLFk9UHDpb1XXL25dnWgNVgYrC7LoHU1rbUaz6FFo5XB9New/Gv+NyN9M6e7f7TYkXf79CV/GEvqDLK+yDkN33m6bnc/zDts/xLL/+ZNkrwT9w8Ul75zrf/OiwcGxY03uXi4dvUFVwBBuHjikMqR+P0fHmt69qFeY9YjgGEFhN4YaSxoDf/nAF0DZC/QeNM6EXQ2oYOCUaPoAcx6F8ACFzQQw/aggWLIBTRQDbuBgGbYHQR0xjwVMDDsk4BRGxICGhgzl1FV2gjWg0bFtBCqmHSAqqap4Yb3U51FW9TAtBdq1D5fzWNWUgG+zWoQ8qhUjkIW8unBYgUqVSArVPiM3msXljzhn+xRuCRPBVUgD5eOVKicx4FdCBS1Mnlq4I9qef3np8B9CDVqFQcteHLjAVex4p5uHmHh7eUVCDXV1GvDEBQvAR9hgVSjUjkLEXHUEsqUqWShivMzJQgFVNzgRr6/VkN5qVTk5U14Z1XYRSl/930fcJqKShUf7tyRCTtuCrK0sbu2ydDC5uQChcA/ql6HKCmpbSUxWRsk) format(\x27woff2\x27),\n        url(data:application/font-woff;charset\x3dutf-8;base64,d09GRgABAAAAAAUAAA0AAAAABzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAE5AAAABoAAAAch2usI0dERUYAAATEAAAAHgAAAB4AKQALT1MvMgAAAaAAAABCAAAAVjzPSF9jbWFwAAAB+AAAAEYAAAFK5orqFmdhc3AAAAS8AAAACAAAAAj//wADZ2x5ZgAAAkwAAAD6AAABFAtdwmhoZWFkAAABMAAAADAAAAA2FOvJF2hoZWEAAAFgAAAAHgAAACQH4gOLaG10eAAAAeQAAAAUAAAAFA1aANxsb2NhAAACQAAAAAwAAAAMACYAim1heHAAAAGAAAAAHgAAACABEQBObmFtZQAAA0gAAAFPAAACiEoGMXVwb3N0AAAEmAAAACQAAAA36fE97HjaY2BkYGAA4tbUdeLx/DZfGbhZGEDgxuNDvXCa8f98FhbmRCCXg4EJJAoAQykLiXjaY2BkYGBu+N/AEMPCygAELCwMjAyogBUAR9QCdwAAeNpjYGRgYGBlcGJgYgABEMkFhAwM/8F8BgAPcQFgAAB42mNgZGFinMDAysDA1Ml0hoGBoR9CM75mMGLkAIoysDIzYAUBaa4pDA7PEp9lMzf8b2CIYW5gaAAKM4LkAOtJDKkAAAQAAAAAAAAAAVUAAAQAANsEBQABeNpjYGBgZoBgGQZGBhBwAfIYwXwWBg0gzQakGRmYniU+y/7/n4EBQksukpwJVQ8EjGwMcA4jE5BgYkAFjAzDHgAAj4ELaQAAAAAAAAAAAAAAJgCKeNo9jEFOg0AAReczyMSNCiUwxAFGydAUU5KWBuymhmO40wN4BxLXJqaujV3UdFUT9QJNPIacAW9AJSz6F+8tXvIJyO9+RRW9IyYhmA0RXxq2ewzDdqYFcqp4e+uVE46H9oVPSg8bjirkWLrj0mnX7dopxy6WnHTTCPZvuk7vCSVl95YVESuiVFtoblYsEOAUBwewDTZk2dTpHLETpLjBwSlmeYHHOqjf5asVWBiEg+1AH+WhdlZbR8n1BTU/hFJiF65EHItPT0/mkrq11zd34yvlI2qaP1gykiaeziUbierZl+xKVFBzBTRxx52QLBFfP3347sM/8ss1bQAAeNp9kDtOw0AYhMd5AYmEEAjqrSgAOY8yZSKFHqF0FImzNonsXWu9iZQT0FJxAFqOwQG4ARItp2Bs/jQp4pVX387/z+wDwDm+EeD/u8SdcIBjPArXcIRMuE79RbhBfhduooNP4Rb1H+E2boORcAcXwRsTgsYJVzdVWskBzjASruEUT8J16mvhBvlVuIkrfAi3qH8JtzHFr3AH14GhMoaDxgye8wIKc2w5LxHBwiCuZs8+tMdOz7xeqPlWLSNrYms85Q29ZceuE5uZ8WUNeGBkwgOmbHFc6mSdztxBy4HSlGkOBY9WlhT6CNGjrF2xtEb1w95B+z3tporYv2tBW4IB1dKo+DvaM9JEYjSvkJIV8qq2ohJRDxmrjXa7Zyk2ycD7WMXOZmrCbXWaWpU7u9KRZ/NztUeOIboc8V56WL15xjbv82G3G0tAGNkMfyC/cZkAeNpjYGKAAC4G7IAViBkZmBiZGJlZ8lIrSlhL8gsykwEY/wQDAAAAAf//AAIAAQAAAAwAAAAWAAAAAgABAAMABAABAAQAAAACAAAAAHjaY2BgYGQAgqtL1DlA9I3Hh3phNABIzwe+AAA\x3d) format(\x27woff\x27),\n        url(data:font/ttf;base64,AAEAAAANAIAAAwBQRkZUTYdrrCMAAAcYAAAAHEdERUYAKQALAAAG+AAAAB5PUy8yPM9IXwAAAVgAAABWY21hcOaK6hYAAAHEAAABSmdhc3D//wADAAAG8AAAAAhnbHlmC13CaAAAAxwAAAEUaGVhZBTryRcAAADcAAAANmhoZWEH4gOLAAABFAAAACRobXR4DVoA3AAAAbAAAAAUbG9jYQAmAIoAAAMQAAAADG1heHABEQBOAAABOAAAACBuYW1lSgYxdQAABDAAAAKIcG9zdOnxPewAAAa4AAAANwABAAAAAQAAhWWuF18PPPUACwQAAAAAANjjwo0AAAAA2OPCjQAB/58EBANhAAAACAACAAAAAAAAAAEAAAOA/4AAXAQFAAAAAAQEAAEAAAAAAAAAAAAAAAAAAAAFAAEAAAAFAEIAAgAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQQCAZAABQAAAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5mHmawOA/4AAXAOAAIAAAAABAAAAAAAABAAAAAAAAAABVQAABAAA2wQFAAEAAAADAAAAAwAAABwAAQAAAAAARAADAAEAAAAcAAQAKAAAAAYABAABAALmYeZr//8AAOZh5mv//xmiGZkAAQAAAAAAAAAAAQYAAAEAAAAAAAAAAQIAAAACAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYAigABANv/oAMlA2AAEQAAATQnASYiBhQXCQEGFBYyNwE2AyUY/lkZQTEYAW3+kxgxQRkBpxgBgB8YAZIXLUEW/qT+pBZBLRcBkhgAAAAAAgAB/58EBANhAAMAQQAAATM3Iwc3Iy4CPgIXMzc+AR4BDwEzNz4BHgEPATMeARQGBycHMzIWFAYHIwcOAS4BPwEjBw4BLgE/ASMuATQ2NwGD3B7cpSCdEh4SARMfE60TBCk2HwIQ3BIFKjghAxGuHCUlHMAfoBwmJhyxGQQqOSADF9wZBSo4IQMXpx0lJR0BI+7u7wESICMgEQGNGyAHKRyAkB0gByscgAElOSUBAe4mOSUBwBwgByocssMdIAcrHLMBJTklAQAAABIA3gABAAAAAAAAABUALAABAAAAAAABAAgAVAABAAAAAAACAAcAbQABAAAAAAADAAgAhwABAAAAAAAEAAgAogABAAAAAAAFAAsAwwABAAAAAAAGAAgA4QABAAAAAAAKACsBQgABAAAAAAALABMBlgADAAEECQAAACoAAAADAAEECQABABAAQgADAAEECQACAA4AXQADAAEECQADABAAdQADAAEECQAEABAAkAADAAEECQAFABYAqwADAAEECQAGABAAzwADAAEECQAKAFYA6gADAAEECQALACYBbgAKAEMAcgBlAGEAdABlAGQAIABiAHkAIABpAGMAbwBuAGYAbwBuAHQACgAACkNyZWF0ZWQgYnkgaWNvbmZvbnQKAAB2AGEAbgB0AGYAbwBuAHQAAHZhbnRmb250AABSAGUAZwB1AGwAYQByAABSZWd1bGFyAAB2AGEAbgB0AGYAbwBuAHQAAHZhbnRmb250AAB2AGEAbgB0AGYAbwBuAHQAAHZhbnRmb250AABWAGUAcgBzAGkAbwBuACAAMQAuADAAAFZlcnNpb24gMS4wAAB2AGEAbgB0AGYAbwBuAHQAAHZhbnRmb250AABHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAABHZW5lcmF0ZWQgYnkgc3ZnMnR0ZiBmcm9tIEZvbnRlbGxvIHByb2plY3QuAABoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAABodHRwOi8vZm9udGVsbG8uY29tAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAABAAIBAgEDBG5leHQFdG9waWMAAAAAAf//AAIAAQAAAAwAAAAWAAAAAgABAAMABAABAAQAAAACAAAAAAAAAAEAAAAA1aQnCAAAAADY48KNAAAAANjjwo0\x3d) format(\x27truetype\x27); font-weight: normal; font-style: normal; }\n.",[1],"vantfont { font-family: \x22vantfont\x22 !important; font-size: 16px; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.",[1],"vantfont:before { vertical-align: middle; }\n.",[1],"vant-next:before { content: \x22\\E661\x22; }\n.",[1],"vant-topic:before { content: \x22\\E66B\x22; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/statusbar-replacer.wxss']=setCssToHead([".",[1],"wrapper{ width: 100%; height: var(--status-bar-height); }\n",],undefined,{path:"./components/statusbar-replacer.wxss"});    
__wxAppCode__['components/statusbar-replacer.wxml']=$gwx('./components/statusbar-replacer.wxml');

__wxAppCode__['components/topic-tag.wxss']=setCssToHead([".",[1],"wrapper{ height: ",[0,52],"; padding: 0 ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; border-radius: ",[0,6],"; }\n.",[1],"icon{ font-size: ",[0,28],"; color: #fff; margin-right: ",[0,12],"; }\n.",[1],"title{ font-size: ",[0,30],"; color: #fff; }\n",],undefined,{path:"./components/topic-tag.wxss"});    
__wxAppCode__['components/topic-tag.wxml']=$gwx('./components/topic-tag.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead(["body { width: 100%; height: 100%; background: #F5F5F5; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"page-index{ width: 100%; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; overflow: hidden; }\n.",[1],"logo { height: ",[0,200],"; width: ",[0,200],"; margin-top: ",[0,200],"; }\n.",[1],"title { font-size: ",[0,36],"; color: #8f8f94; }\n.",[1],"tab-header{ width: 100%; background-color: #FAFAFA; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; -webkit-box-flex: 0; -webkit-flex-grow: 0; -ms-flex-positive: 0; flex-grow: 0; }\n.",[1],"tab-header-content{ width: 100%; height: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: relative; }\n.",[1],"tab-item{ width: ",[0,122],"; height: 100%; font-size: ",[0,32],"; color: #888888; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"tab-item.",[1],"current{ font-weight: bold; color: #111111; }\n.",[1],"tab-indicator{ width: 100%; position: absolute; left: 0; bottom: 0; }\n.",[1],"indicator-block{ width: ",[0,40],"; height: ",[0,6],"; background-color: #00B1F9; border-radius: ",[0,3],"; -webkit-transform: translateX(-200%); -ms-transform: translateX(-200%); transform: translateX(-200%); -webkit-transition: all 300ms; -o-transition: all 300ms; transition: all 300ms; }\n.",[1],"tab-content{ width: 100%; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; position: relative; }\n.",[1],"tab-content-body{ position: absolute; width: 100%; height: 100%; left: 0; top: 0; -webkit-transform: translateX(0%); -ms-transform: translateX(0%); transform: translateX(0%); -webkit-transition: all 300ms; -o-transition: all 300ms; transition: all 300ms; }\n.",[1],"tab-content-body.",[1],"prev{ -webkit-transform: translateX(-100%); -ms-transform: translateX(-100%); transform: translateX(-100%); opacity: 0; }\n.",[1],"tab-content-body.",[1],"current{ -webkit-transform: translateX(0%); -ms-transform: translateX(0%); transform: translateX(0%); opacity: 1; }\n.",[1],"tab-content-body.",[1],"next{ -webkit-transform: translateX(100%); -ms-transform: translateX(100%); transform: translateX(100%); opacity: 0; }\n.",[1],"tab-content-context{ width: 100%; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"rec-header{ width: 100%; white-space: nowrap; font-size: 0; background-color: #fff; }\n.",[1],"rec-header-cate{ display: inline-block; padding: 0 ",[0,22],"; height: ",[0,80],"; }\n.",[1],"rec-header-cate-text{ font-size: ",[0,30],"; line-height: ",[0,80],"; color: #333333; }\n.",[1],"rec-header-cate-text.",[1],"current{ color: #1EB0FD; }\n.",[1],"rec-body{ border-top: ",[0,1]," solid #E5E5E5; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"rec-body-cate{ }\n.",[1],"rec-topic-box{ padding: ",[0,24]," ",[0,30],"; }\n.",[1],"rec-topic-header{ height: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"rec-topic-title{ font-size: ",[0,28],"; color: #333; }\n.",[1],"rec-topic-btn{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"rec-topic-btn-text{ font-size: ",[0,26],"; color: #666; }\n.",[1],"rec-topic-btn .",[1],"vant-next{ font-size: ",[0,20],"; color: #BBB; }\n.",[1],"vant-next{ font-size: 0; }\n.",[1],"rec-topic-content{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; background: #666; }\n.",[1],"rec-topic-item{ margin: ",[0,8]," ",[0,16]," ",[0,8]," 0; overflow: hidden; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        plus.webview.postMessageToUniNView({
            type: 'UniWebviewReady-' + plus.webview.currentWebview().id
        }, '__uniapp__service');
})();
