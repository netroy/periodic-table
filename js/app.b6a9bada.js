(function(e){function m(m){for(var t,u,o=m[0],r=m[1],a=m[2],N=0,b=[];N<o.length;N++)u=o[N],Object.prototype.hasOwnProperty.call(l,u)&&l[u]&&b.push(l[u][0]),l[u]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t]);E&&E(m);while(b.length)b.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var e,m=0;m<i.length;m++){for(var n=i[m],t=!0,o=1;o<n.length;o++){var r=n[o];0!==l[r]&&(t=!1)}t&&(i.splice(m--,1),e=u(u.s=n[0]))}return e}var t={},l={app:0},i=[];function u(m){if(t[m])return t[m].exports;var n=t[m]={i:m,l:!1,exports:{}};return e[m].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=t,u.d=function(e,m,n){u.o(e,m)||Object.defineProperty(e,m,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,m){if(1&m&&(e=u(e)),8&m)return e;if(4&m&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&m&&"string"!=typeof e)for(var t in e)u.d(n,t,function(m){return e[m]}.bind(null,t));return n},u.n=function(e){var m=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(m,"a",m),m},u.o=function(e,m){return Object.prototype.hasOwnProperty.call(e,m)},u.p="/periodic-table/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=m,o=o.slice();for(var a=0;a<o.length;a++)m(o[a]);var E=r;i.push([0,"chunk-vendors"]),n()})({0:function(e,m,n){e.exports=n("cd49")},4800:function(e,m,n){"use strict";function t(e){for(var n in e)m.hasOwnProperty(n)||(m[n]=e[n])}Object.defineProperty(m,"__esModule",{value:!0}),t(n("4e72")),t(n("a8ca")),t(n("b44a")),t(n("f7ae")),t(n("95b4"))},"4e72":function(e,m,n){"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.isAtomicNumber=function(e){return"number"===typeof e&&e>0&&e<=118}},"5c48":function(e,m,n){},"7c55":function(e,m,n){"use strict";var t=n("5c48"),l=n.n(t);l.a},"95b4":function(e,m,n){"use strict";var t;Object.defineProperty(m,"__esModule",{value:!0}),m.isElementSymbol=function(e){return e in t},function(e){e["H"]="H",e["He"]="He",e["Li"]="Li",e["Be"]="Be",e["B"]="B",e["C"]="C",e["N"]="N",e["O"]="O",e["F"]="F",e["Ne"]="Ne",e["Na"]="Na",e["Mg"]="Mg",e["Al"]="Al",e["Si"]="Si",e["P"]="P",e["S"]="S",e["Cl"]="Cl",e["Ar"]="Ar",e["K"]="K",e["Ca"]="Ca",e["Sc"]="Sc",e["Ti"]="Ti",e["V"]="V",e["Cr"]="Cr",e["Mn"]="Mn",e["Fe"]="Fe",e["Co"]="Co",e["Ni"]="Ni",e["Cu"]="Cu",e["Zn"]="Zn",e["Ga"]="Ga",e["Ge"]="Ge",e["As"]="As",e["Se"]="Se",e["Br"]="Br",e["Kr"]="Kr",e["Rb"]="Rb",e["Sr"]="Sr",e["Y"]="Y",e["Zr"]="Zr",e["Nb"]="Nb",e["Mo"]="Mo",e["Tc"]="Tc",e["Ru"]="Ru",e["Rh"]="Rh",e["Pd"]="Pd",e["Ag"]="Ag",e["Cd"]="Cd",e["In"]="In",e["Sn"]="Sn",e["Sb"]="Sb",e["Te"]="Te",e["I"]="I",e["Xe"]="Xe",e["Cs"]="Cs",e["Ba"]="Ba",e["Hf"]="Hf",e["Ta"]="Ta",e["W"]="W",e["Re"]="Re",e["Os"]="Os",e["Ir"]="Ir",e["Pt"]="Pt",e["Au"]="Au",e["Hg"]="Hg",e["Tl"]="Tl",e["Pb"]="Pb",e["Bi"]="Bi",e["Po"]="Po",e["At"]="At",e["Rn"]="Rn",e["Fr"]="Fr",e["Ra"]="Ra",e["Rf"]="Rf",e["Db"]="Db",e["Sg"]="Sg",e["Bh"]="Bh",e["Hs"]="Hs",e["Mt"]="Mt",e["Ds"]="Ds",e["Rg"]="Rg",e["Cb"]="Cb",e["Nh"]="Nh",e["Fl"]="Fl",e["Mc"]="Mc",e["Lv"]="Lv",e["Ts"]="Ts",e["Og"]="Og",e["La"]="La",e["Ce"]="Ce",e["Pr"]="Pr",e["Nd"]="Nd",e["Pm"]="Pm",e["Sm"]="Sm",e["Eu"]="Eu",e["Gd"]="Gd",e["Tb"]="Tb",e["Dy"]="Dy",e["Ho"]="Ho",e["Er"]="Er",e["Tm"]="Tm",e["Yb"]="Yb",e["Lu"]="Lu",e["Ac"]="Ac",e["Th"]="Th",e["Pa"]="Pa",e["U"]="U",e["Np"]="Np",e["Pu"]="Pu",e["Am"]="Am",e["Cm"]="Cm",e["Bk"]="Bk",e["Cf"]="Cf",e["Es"]="Es",e["Fm"]="Fm",e["Md"]="Md",e["No"]="No",e["Lr"]="Lr"}(t=m.ElementSymbol||(m.ElementSymbol={}))},a8ca:function(e,m,n){"use strict";Object.defineProperty(m,"__esModule",{value:!0});var t=n("f7ae"),l=n("95b4"),i=Symbol();m.isElement=function(e){return e instanceof u};var u=function(){function e(e,n,t,l){this[m]=!0,this.number=e,this.group=n,this.symbol=t,this.name=l,Object.freeze(this)}var m;return e.findByGroup=function(m){return e.ALL.filter((function(e){return e.group===m}))},e.findByName=function(m){return e.ALL.find((function(e){return e.name.toLowerCase()===m.toLowerCase()}))},e.findByNumber=function(m){return e.ALL.find((function(e){return e.number===m}))},e.findBySymbol=function(m){return e.ALL.find((function(e){return e.symbol.toLowerCase()===m.toLowerCase()}))},e.getAll=function(){return e.ALL.slice(0)},m=i,e.HYDROGEN=new e(1,1,l.ElementSymbol.H,t.ElementName.Hydrogen),e.HELIUM=new e(2,18,l.ElementSymbol.He,t.ElementName.Helium),e.LITHIUM=new e(3,1,l.ElementSymbol.Li,t.ElementName.Lithium),e.BERYLLIUM=new e(4,2,l.ElementSymbol.Be,t.ElementName.Beryllium),e.BORON=new e(5,13,l.ElementSymbol.B,t.ElementName.Boron),e.CARBON=new e(6,14,l.ElementSymbol.C,t.ElementName.Carbon),e.NITROGEN=new e(7,15,l.ElementSymbol.N,t.ElementName.Nitrogen),e.OXYGEN=new e(8,16,l.ElementSymbol.O,t.ElementName.Oxygen),e.FLUORINE=new e(9,17,l.ElementSymbol.F,t.ElementName.Fluorine),e.NEON=new e(10,18,l.ElementSymbol.Ne,t.ElementName.Neon),e.SODIUM=new e(11,1,l.ElementSymbol.Na,t.ElementName.Sodium),e.MAGNESIUM=new e(12,2,l.ElementSymbol.Mg,t.ElementName.Magnesium),e.ALUMINIUM=new e(13,13,l.ElementSymbol.Al,t.ElementName.Aluminium),e.SILICON=new e(14,14,l.ElementSymbol.Si,t.ElementName.Silicon),e.PHOSPHORUS=new e(15,15,l.ElementSymbol.P,t.ElementName.Phosphorus),e.SULFUR=new e(16,16,l.ElementSymbol.S,t.ElementName.Sulfur),e.CHLORINE=new e(17,17,l.ElementSymbol.Cl,t.ElementName.Chlorine),e.ARGON=new e(18,18,l.ElementSymbol.Ar,t.ElementName.Argon),e.POTASSIUM=new e(19,1,l.ElementSymbol.K,t.ElementName.Potassium),e.CALCIUM=new e(20,2,l.ElementSymbol.Ca,t.ElementName.Calcium),e.SCANDIUM=new e(21,3,l.ElementSymbol.Sc,t.ElementName.Scandium),e.TITANIUM=new e(22,4,l.ElementSymbol.Ti,t.ElementName.Titanium),e.VANADIUM=new e(23,5,l.ElementSymbol.V,t.ElementName.Vanadium),e.CHROMIUM=new e(24,6,l.ElementSymbol.Cr,t.ElementName.Chromium),e.MANGANESE=new e(25,7,l.ElementSymbol.Mn,t.ElementName.Manganese),e.IRON=new e(26,8,l.ElementSymbol.Fe,t.ElementName.Iron),e.COBALT=new e(27,9,l.ElementSymbol.Co,t.ElementName.Cobalt),e.NICKEL=new e(28,10,l.ElementSymbol.Ni,t.ElementName.Nickel),e.COPPER=new e(29,11,l.ElementSymbol.Cu,t.ElementName.Copper),e.ZINC=new e(30,12,l.ElementSymbol.Zn,t.ElementName.Zinc),e.GALLIUM=new e(31,13,l.ElementSymbol.Ga,t.ElementName.Gallium),e.GERMANIUM=new e(32,14,l.ElementSymbol.Ge,t.ElementName.Germanium),e.ARSENIC=new e(33,15,l.ElementSymbol.As,t.ElementName.Arsenic),e.SELENIUM=new e(34,16,l.ElementSymbol.Se,t.ElementName.Selenium),e.BROMINE=new e(35,17,l.ElementSymbol.Br,t.ElementName.Bromine),e.KRYPTON=new e(36,18,l.ElementSymbol.Kr,t.ElementName.Krypton),e.RUBIDIUM=new e(37,1,l.ElementSymbol.Rb,t.ElementName.Rubidium),e.STRONTIUM=new e(38,2,l.ElementSymbol.Sr,t.ElementName.Strontium),e.YTTRIUM=new e(39,3,l.ElementSymbol.Y,t.ElementName.Yttrium),e.ZIRCONIUM=new e(40,4,l.ElementSymbol.Zr,t.ElementName.Zirconium),e.NIOBIUM=new e(41,5,l.ElementSymbol.Nb,t.ElementName.Niobium),e.MOLYBDENUM=new e(42,6,l.ElementSymbol.Mo,t.ElementName.Molybdenum),e.TECHNETIUM=new e(43,7,l.ElementSymbol.Tc,t.ElementName.Technetium),e.RUTHENIUM=new e(44,8,l.ElementSymbol.Ru,t.ElementName.Ruthenium),e.RHODIUM=new e(45,9,l.ElementSymbol.Rh,t.ElementName.Rhodium),e.PALLADIUM=new e(46,10,l.ElementSymbol.Pd,t.ElementName.Palladium),e.SILVER=new e(47,11,l.ElementSymbol.Ag,t.ElementName.Silver),e.CADMIUM=new e(48,12,l.ElementSymbol.Cd,t.ElementName.Cadmium),e.INDIUM=new e(49,13,l.ElementSymbol.In,t.ElementName.Indium),e.TIN=new e(50,14,l.ElementSymbol.Sn,t.ElementName.Tin),e.ANTIMONY=new e(51,15,l.ElementSymbol.Sb,t.ElementName.Antimony),e.TELLURIUM=new e(52,16,l.ElementSymbol.Te,t.ElementName.Tellurium),e.IODINE=new e(53,17,l.ElementSymbol.I,t.ElementName.Iodine),e.XENON=new e(54,18,l.ElementSymbol.Xe,t.ElementName.Xenon),e.CESIUM=new e(55,1,l.ElementSymbol.Cs,t.ElementName.Cesium),e.BARIUM=new e(56,2,l.ElementSymbol.Ba,t.ElementName.Barium),e.LANTHANUM=new e(57,"La",l.ElementSymbol.La,t.ElementName.Lanthanum),e.CERIUM=new e(58,"La",l.ElementSymbol.Ce,t.ElementName.Cerium),e.PRASEODYMIUM=new e(59,"La",l.ElementSymbol.Pr,t.ElementName.Praseodymium),e.NEODYMIUM=new e(60,"La",l.ElementSymbol.Nd,t.ElementName.Neodymium),e.PROMETHIUM=new e(61,"La",l.ElementSymbol.Pm,t.ElementName.Promethium),e.SAMARIUM=new e(62,"La",l.ElementSymbol.Sm,t.ElementName.Samarium),e.EUROPIUM=new e(63,"La",l.ElementSymbol.Eu,t.ElementName.Europium),e.GADOLINIUM=new e(64,"La",l.ElementSymbol.Gd,t.ElementName.Gadolinium),e.TERBIUM=new e(65,"La",l.ElementSymbol.Tb,t.ElementName.Terbium),e.DYSPROSIUM=new e(66,"La",l.ElementSymbol.Dy,t.ElementName.Dysprosium),e.HOLMIUM=new e(67,"La",l.ElementSymbol.Ho,t.ElementName.Holmium),e.ERBIUM=new e(68,"La",l.ElementSymbol.Er,t.ElementName.Erbium),e.THULIUM=new e(69,"La",l.ElementSymbol.Tm,t.ElementName.Thulium),e.YTTERBIUM=new e(70,"La",l.ElementSymbol.Yb,t.ElementName.Ytterbium),e.LUTETIUM=new e(71,"La",l.ElementSymbol.Lu,t.ElementName.Lutetium),e.HAFNIUM=new e(72,4,l.ElementSymbol.Hf,t.ElementName.Hafnium),e.TANTALUM=new e(73,5,l.ElementSymbol.Ta,t.ElementName.Tantalum),e.TUNGSTEN=new e(74,6,l.ElementSymbol.W,t.ElementName.Tungsten),e.RHENIUM=new e(75,7,l.ElementSymbol.Re,t.ElementName.Rhenium),e.OSMIUM=new e(76,8,l.ElementSymbol.Os,t.ElementName.Osmium),e.IRIDIUM=new e(77,9,l.ElementSymbol.Ir,t.ElementName.Iridium),e.PLATINUM=new e(78,10,l.ElementSymbol.Pt,t.ElementName.Platinum),e.GOLD=new e(79,11,l.ElementSymbol.Au,t.ElementName.Gold),e.MERCURY=new e(80,12,l.ElementSymbol.Hg,t.ElementName.Mercury),e.THALLIUM=new e(81,13,l.ElementSymbol.Tl,t.ElementName.Thallium),e.LEAD=new e(82,14,l.ElementSymbol.Pb,t.ElementName.Lead),e.BISMUTH=new e(83,15,l.ElementSymbol.Bi,t.ElementName.Bismuth),e.POLONIUM=new e(84,16,l.ElementSymbol.Po,t.ElementName.Polonium),e.ASTATINE=new e(85,17,l.ElementSymbol.At,t.ElementName.Astatine),e.RADON=new e(86,18,l.ElementSymbol.Rn,t.ElementName.Radon),e.FRANCIUM=new e(87,1,l.ElementSymbol.Fr,t.ElementName.Francium),e.RADIUM=new e(88,2,l.ElementSymbol.Ra,t.ElementName.Radium),e.ACTINIUM=new e(89,"Ac",l.ElementSymbol.Ac,t.ElementName.Actinium),e.THORIUM=new e(90,"Ac",l.ElementSymbol.Th,t.ElementName.Thorium),e.PROTACTINIUM=new e(91,"Ac",l.ElementSymbol.Pa,t.ElementName.Protactinium),e.URANIUM=new e(92,"Ac",l.ElementSymbol.U,t.ElementName.Uranium),e.NEPTUNIUM=new e(93,"Ac",l.ElementSymbol.Np,t.ElementName.Neptunium),e.PLUTONIUM=new e(94,"Ac",l.ElementSymbol.Pu,t.ElementName.Plutonium),e.AMERICIUM=new e(95,"Ac",l.ElementSymbol.Am,t.ElementName.Americium),e.CURIUM=new e(96,"Ac",l.ElementSymbol.Cm,t.ElementName.Curium),e.BERKELIUM=new e(97,"Ac",l.ElementSymbol.Bk,t.ElementName.Berkelium),e.CALIFORNIUM=new e(98,"Ac",l.ElementSymbol.Cf,t.ElementName.Californium),e.EINSTEINIUM=new e(99,"Ac",l.ElementSymbol.Es,t.ElementName.Einsteinium),e.FERMIUM=new e(100,"Ac",l.ElementSymbol.Fm,t.ElementName.Fermium),e.MENDELEVIUM=new e(101,"Ac",l.ElementSymbol.Md,t.ElementName.Mendelevium),e.NOBELIUM=new e(102,"Ac",l.ElementSymbol.No,t.ElementName.Nobelium),e.LAWRENCIUM=new e(103,"Ac",l.ElementSymbol.Lr,t.ElementName.Lawrencium),e.RUTHERFORDIUM=new e(104,4,l.ElementSymbol.Rf,t.ElementName.Rutherfordium),e.DUBNIUM=new e(105,5,l.ElementSymbol.Db,t.ElementName.Dubnium),e.SEABORGIUM=new e(106,6,l.ElementSymbol.Sg,t.ElementName.Seaborgium),e.BOHRIUM=new e(107,7,l.ElementSymbol.Bh,t.ElementName.Bohrium),e.HASSIUM=new e(108,8,l.ElementSymbol.Hs,t.ElementName.Hassium),e.MEITNERIUM=new e(109,9,l.ElementSymbol.Mt,t.ElementName.Meitnerium),e.DARMSTADTIUM=new e(110,10,l.ElementSymbol.Ds,t.ElementName.Darmstadtium),e.ROENTGENIUM=new e(111,11,l.ElementSymbol.Rg,t.ElementName.Roentgenium),e.COPERNICIUM=new e(112,12,l.ElementSymbol.Cb,t.ElementName.Copernicium),e.NIHONIUM=new e(113,13,l.ElementSymbol.Nh,t.ElementName.Nihonium),e.FLEROVIUM=new e(114,14,l.ElementSymbol.Fl,t.ElementName.Flerovium),e.MOSCOVIUM=new e(115,15,l.ElementSymbol.Mc,t.ElementName.Moscovium),e.LIVERMORIUM=new e(116,16,l.ElementSymbol.Lv,t.ElementName.Livermorium),e.TENNESSINE=new e(117,17,l.ElementSymbol.Ts,t.ElementName.Tennessine),e.OGANESSON=new e(118,18,l.ElementSymbol.Og,t.ElementName.Oganesson),e.ALL=[e.HYDROGEN,e.HELIUM,e.LITHIUM,e.BERYLLIUM,e.BORON,e.CARBON,e.NITROGEN,e.OXYGEN,e.FLUORINE,e.NEON,e.SODIUM,e.MAGNESIUM,e.ALUMINIUM,e.SILICON,e.PHOSPHORUS,e.SULFUR,e.CHLORINE,e.ARGON,e.POTASSIUM,e.CALCIUM,e.SCANDIUM,e.TITANIUM,e.VANADIUM,e.CHROMIUM,e.MANGANESE,e.IRON,e.COBALT,e.NICKEL,e.COPPER,e.ZINC,e.GALLIUM,e.GERMANIUM,e.ARSENIC,e.SELENIUM,e.BROMINE,e.KRYPTON,e.RUBIDIUM,e.STRONTIUM,e.YTTRIUM,e.ZIRCONIUM,e.NIOBIUM,e.MOLYBDENUM,e.TECHNETIUM,e.RUTHENIUM,e.RHODIUM,e.PALLADIUM,e.SILVER,e.CADMIUM,e.INDIUM,e.TIN,e.ANTIMONY,e.TELLURIUM,e.IODINE,e.XENON,e.CESIUM,e.BARIUM,e.LANTHANUM,e.CERIUM,e.PRASEODYMIUM,e.NEODYMIUM,e.PROMETHIUM,e.SAMARIUM,e.EUROPIUM,e.GADOLINIUM,e.TERBIUM,e.DYSPROSIUM,e.HOLMIUM,e.ERBIUM,e.THULIUM,e.YTTERBIUM,e.LUTETIUM,e.HAFNIUM,e.TANTALUM,e.TUNGSTEN,e.RHENIUM,e.OSMIUM,e.IRIDIUM,e.PLATINUM,e.GOLD,e.MERCURY,e.THALLIUM,e.LEAD,e.BISMUTH,e.POLONIUM,e.ASTATINE,e.RADON,e.FRANCIUM,e.RADIUM,e.ACTINIUM,e.THORIUM,e.PROTACTINIUM,e.URANIUM,e.NEPTUNIUM,e.PLUTONIUM,e.AMERICIUM,e.CURIUM,e.BERKELIUM,e.CALIFORNIUM,e.EINSTEINIUM,e.FERMIUM,e.MENDELEVIUM,e.NOBELIUM,e.LAWRENCIUM,e.RUTHERFORDIUM,e.DUBNIUM,e.SEABORGIUM,e.BOHRIUM,e.HASSIUM,e.MEITNERIUM,e.DARMSTADTIUM,e.ROENTGENIUM,e.COPERNICIUM,e.NIHONIUM,e.FLEROVIUM,e.MOSCOVIUM,e.LIVERMORIUM,e.TENNESSINE,e.OGANESSON],e}();m.Element=u},b44a:function(e,m,n){"use strict";Object.defineProperty(m,"__esModule",{value:!0}),m.isElementGroup=function(e){return"number"===typeof e&&e>0&&e<=18||"La"===e||"Ac"===e}},cd49:function(e,m,n){"use strict";n.r(m);var t=n("2b0e"),l=function(){var e=this,m=e.$createElement,n=e._self._c||m;return n("div",{attrs:{id:"app"}},[n("svg",{attrs:{id:"periodic-table"}},[e._l(e.elements,(function(e){return n("Element",{key:e.number,attrs:{el:e}})})),n("filter",{attrs:{id:"dropshadow"}},[n("feGaussianBlur",{attrs:{in:"SourceAlpha",stdDeviation:"3"}}),n("feOffset",{attrs:{dx:"2",dy:"3",result:"offsetblur"}}),n("feComponentTransfer",[n("feFuncA",{attrs:{type:"linear",slope:"0.4"}})],1),n("feMerge",[n("feMergeNode"),n("feMergeNode",{attrs:{in:"SourceGraphic"}})],1)],1)],2)])},i=[],u=n("9ab4"),o=n("4800"),r=n("60a3"),a=function(){var e=this,m=e.$createElement,n=e._self._c||m;return n("g",{class:"group"+e.el.group,attrs:{transform:"translate("+e.x+", "+e.y+")",symbol:e.el.symbol}},[n("rect",{attrs:{width:e.width,height:e.height,column:e.column,row:e.row,rx:"2"}}),n("text",{staticClass:"symbol",attrs:{transform:"translate(33, 35)"}},[e._v(e._s(e.el.symbol))]),n("text",{staticClass:"number",attrs:{transform:"translate(5, 12)"}},[e._v(e._s(e.el.number))]),n("text",{staticClass:"name",attrs:{transform:"translate(33, 65)"}},[e._v(e._s(e.el.name))])])},E=[],N=function(e){function m(){return null!==e&&e.apply(this,arguments)||this}return Object(u["b"])(m,e),Object.defineProperty(m.prototype,"x",{get:function(){return(this.width+this.padding)*this.column},enumerable:!0,configurable:!0}),Object.defineProperty(m.prototype,"y",{get:function(){return(this.height+this.padding)*this.row},enumerable:!0,configurable:!0}),Object.defineProperty(m.prototype,"column",{get:function(){var e=this.el.number,m=this.el.group;return"La"===m?e-53.5:"Ac"===m?e-85.5:m},enumerable:!0,configurable:!0}),Object.defineProperty(m.prototype,"row",{get:function(){var e=this.el.number;return e<=2?0:e<=10?1:e<=18?2:e<=36?3:e<=54?4:e>=57&&e<=71?7.5:e<=86?5:e>=89&&e<=103?8.5:e<=118?6:9},enumerable:!0,configurable:!0}),Object(u["a"])([Object(r["b"])()],m.prototype,"el",void 0),Object(u["a"])([Object(r["b"])({default:65,type:Number})],m.prototype,"width",void 0),Object(u["a"])([Object(r["b"])({default:70,type:Number})],m.prototype,"height",void 0),Object(u["a"])([Object(r["b"])({default:5,type:Number})],m.prototype,"padding",void 0),m=Object(u["a"])([r["a"]],m),m}(r["c"]),b=N,M=b,I=n("2877"),S=Object(I["a"])(M,a,E,!1,null,null,null),s=S.exports,c=function(e){function m(){var m=null!==e&&e.apply(this,arguments)||this;return m.elements=o["Element"].getAll(),m}return Object(u["b"])(m,e),m=Object(u["a"])([Object(r["a"])({components:{Element:s}})],m),m}(r["c"]),y=c,U=y,R=(n("7c55"),Object(I["a"])(U,l,i,!1,null,null,null)),O=R.exports;t["a"].config.productionTip=!1,new t["a"]({render:function(e){return e(O)}}).$mount("#app")},f7ae:function(e,m,n){"use strict";var t;Object.defineProperty(m,"__esModule",{value:!0}),m.isElementName=function(e){return e in t},function(e){e["Hydrogen"]="Hydrogen",e["Helium"]="Helium",e["Lithium"]="Lithium",e["Beryllium"]="Beryllium",e["Boron"]="Boron",e["Carbon"]="Carbon",e["Nitrogen"]="Nitrogen",e["Oxygen"]="Oxygen",e["Fluorine"]="Fluorine",e["Neon"]="Neon",e["Sodium"]="Sodium",e["Magnesium"]="Magnesium",e["Aluminium"]="Aluminium",e["Silicon"]="Silicon",e["Phosphorus"]="Phosphorus",e["Sulfur"]="Sulfur",e["Chlorine"]="Chlorine",e["Argon"]="Argon",e["Potassium"]="Potassium",e["Calcium"]="Calcium",e["Scandium"]="Scandium",e["Titanium"]="Titanium",e["Vanadium"]="Vanadium",e["Chromium"]="Chromium",e["Manganese"]="Manganese",e["Iron"]="Iron",e["Cobalt"]="Cobalt",e["Nickel"]="Nickel",e["Copper"]="Copper",e["Zinc"]="Zinc",e["Gallium"]="Gallium",e["Germanium"]="Germanium",e["Arsenic"]="Arsenic",e["Selenium"]="Selenium",e["Bromine"]="Bromine",e["Krypton"]="Krypton",e["Rubidium"]="Rubidium",e["Strontium"]="Strontium",e["Yttrium"]="Yttrium",e["Zirconium"]="Zirconium",e["Niobium"]="Niobium",e["Molybdenum"]="Molybdenum",e["Technetium"]="Technetium",e["Ruthenium"]="Ruthenium",e["Rhodium"]="Rhodium",e["Palladium"]="Palladium",e["Silver"]="Silver",e["Cadmium"]="Cadmium",e["Indium"]="Indium",e["Tin"]="Tin",e["Antimony"]="Antimony",e["Tellurium"]="Tellurium",e["Iodine"]="Iodine",e["Xenon"]="Xenon",e["Cesium"]="Cesium",e["Barium"]="Barium",e["Lanthanum"]="Lanthanum",e["Cerium"]="Cerium",e["Praseodymium"]="Praseodymium",e["Neodymium"]="Neodymium",e["Promethium"]="Promethium",e["Samarium"]="Samarium",e["Europium"]="Europium",e["Gadolinium"]="Gadolinium",e["Terbium"]="Terbium",e["Dysprosium"]="Dysprosium",e["Holmium"]="Holmium",e["Erbium"]="Erbium",e["Thulium"]="Thulium",e["Ytterbium"]="Ytterbium",e["Lutetium"]="Lutetium",e["Hafnium"]="Hafnium",e["Tantalum"]="Tantalum",e["Tungsten"]="Tungsten",e["Rhenium"]="Rhenium",e["Osmium"]="Osmium",e["Iridium"]="Iridium",e["Platinum"]="Platinum",e["Gold"]="Gold",e["Mercury"]="Mercury",e["Thallium"]="Thallium",e["Lead"]="Lead",e["Bismuth"]="Bismuth",e["Polonium"]="Polonium",e["Astatine"]="Astatine",e["Radon"]="Radon",e["Francium"]="Francium",e["Radium"]="Radium",e["Actinium"]="Actinium",e["Thorium"]="Thorium",e["Protactinium"]="Protactinium",e["Uranium"]="Uranium",e["Neptunium"]="Neptunium",e["Plutonium"]="Plutonium",e["Americium"]="Americium",e["Curium"]="Curium",e["Berkelium"]="Berkelium",e["Californium"]="Californium",e["Einsteinium"]="Einsteinium",e["Fermium"]="Fermium",e["Mendelevium"]="Mendelevium",e["Nobelium"]="Nobelium",e["Lawrencium"]="Lawrencium",e["Rutherfordium"]="Rutherfordium",e["Dubnium"]="Dubnium",e["Seaborgium"]="Seaborgium",e["Bohrium"]="Bohrium",e["Hassium"]="Hassium",e["Meitnerium"]="Meitnerium",e["Darmstadtium"]="Darmstadtium",e["Roentgenium"]="Roentgenium",e["Copernicium"]="Copernicium",e["Nihonium"]="Nihonium",e["Flerovium"]="Flerovium",e["Moscovium"]="Moscovium",e["Livermorium"]="Livermorium",e["Tennessine"]="Tennessine",e["Oganesson"]="Oganesson"}(t=m.ElementName||(m.ElementName={}))}});
//# sourceMappingURL=app.b6a9bada.js.map