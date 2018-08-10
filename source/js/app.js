;
var $ = document;

window.addEventListener('load', () => {
   adaptive();
   openlist($.querySelector('.header-contacts__select-check'), $.querySelector('.header-contacts__select-list'));
   phoneMask($.querySelector('.question-form input[name=phone]'));
   altMenu();
   modalFunction();
   if ($.querySelector('.service-packages__list')) swiper({
      minWidth: '540px',
      maxWidth: '1279px',
      elem: {
         selector: '.service-packages__list',
         settings: {
            wrapperClass: "service-packages__list-wrap",
            slideClass: "pillar",
            slidesPerView: 'auto',
            centeredSlides: true,
            initialSlide: 3
         }
      }
   });
   if ($.querySelector('.targeting-ads__list')) swiper({
      minWidth: '540px',
      maxWidth: '1279px',
      elem: {
         selector: '.targeting-ads__list',
         settings: {
            wrapperClass: "targeting-ads__list-wrap",
            slideClass: "pillar",
            slidesPerView: 'auto',
            centeredSlides: true
         }
      }
   });
   if ($.querySelector('.clients__list')) swiper({
      maxWidth: '767px',
      elem: {
         selector: '.clients__list',
         settings: {
            wrapperClass: "clients__list-wrap",
            slideClass: "clients__item",
            slidesPerView: 'auto',
            slidesPerColumn: 2,
            breakpoints: {
               511: {
                  slidesPerColumn: 1
               }
            }
         }
      }
   });
   if ($.querySelector('.new-articles__list')) swiper({
      maxWidth: '509px',
      elem: {
         selector: '.new-articles__list',
         settings: {
            wrapperClass: "new-articles__list-wrap",
            slideClass: "new-articles__item",
            slidesPerView: 'auto'
         }
      }
   });
});

var adaptive = () => {
   if (window.outerWidth <= 1920) return false;
   else $.body.style.zoom = `calc(${window.outerWidth / 1920})`;

   window.addEventListener('resize', () => {
      if (window.outerWidth <= 1920) {
         $.body.style.zoom = '1';
         return false;
      }
      else $.body.style.zoom = `calc(${window.outerWidth / 1920})`;
   });
};

var altMenu = () => {
   var ctrl = $.querySelector('.alt-menu-btn');
   ctrl.onclick = () => {
      if (ctrl.getAttribute('data-state') === 'no-active') ctrl.dataset.state = 'active';
      else ctrl.dataset.state = 'no-active';
   }
};

var phoneMask = item => {
   if (!item) return false;
   MaskedInput({
      elm: item,
      format: item.value,
      separator: '+7 ()-'
   });
};

var openlist = (ctrl, list) => {
   ctrl.onclick = () => {
      list.classList.toggle('-active');
   }
};

var modalModule = (() => {

   var open = () => {
      setTimeout(() => {
         $.querySelector('.modal').classList.add('-open');
      }, 100);
   };

   var close = () => {
      $.querySelector('.modal').classList.remove('-open');
   };

   var sent = () => {
      $.querySelector('.modal').classList.add('-sent');
      setTimeout(() => {
         $.querySelector('.modal').classList.remove('-open', '-sent');
      }, 3500);
   };

   return {
      open: open,
      close: close,
      sent: sent
   }
})();

var modalFunction = () => {
   var modalControls = ['.btn-gradient[data-target=want-site]'],
      newModalControls = [];

   if (modalControls.length < 1) return false;

   modalControls.forEach(item => {
      $.querySelectorAll(item).forEach(subItem => {
         newModalControls.push(subItem);
      });
   });

   if (newModalControls.length <= 0) return false;

   newModalControls.forEach(item => {
      item.onclick = () => modalModule.open();
   });
   $.querySelector('.modal__close').onclick = () => modalModule.close();
   $.querySelector('.modal-form').querySelector('button[type=submit]').onclick = (e) => {
      e.preventDefault();
      modalModule.sent()
   };
};

// masked_input_1.4-min.js
(function(a){a.MaskedInput=function(f){if(!f||!f.elm||!f.format){return null}if(!(this instanceof a.MaskedInput)){return new a.MaskedInput(f)}var o=this,d=f.elm,s=f.format,i=f.allowed||"0123456789",h=f.allowedfx||function(){return true},p=f.separator||"/:-",n=f.typeon||"_YMDhms",c=f.onbadkey||function(){},q=f.onfilled||function(){},w=f.badkeywait||0,A=f.hasOwnProperty("preserve")?!!f.preserve:true,l=true,y=false,t=s,j=(function(){if(window.addEventListener){return function(E,C,D,B){E.addEventListener(C,D,(B===undefined)?false:B)}}if(window.attachEvent){return function(D,B,C){D.attachEvent("on"+B,C)}}return function(D,B,C){D["on"+B]=C}}()),u=function(){for(var B=d.value.length-1;B>=0;B--){for(var D=0,C=n.length;D<C;D++){if(d.value[B]===n[D]){return false}}}return true},x=function(C){try{C.focus();if(C.selectionStart>=0){return C.selectionStart}if(document.selection){var B=document.selection.createRange();return -B.moveStart("character",-C.value.length)}return -1}catch(D){return -1}},b=function(C,E){try{if(C.selectionStart){C.focus();C.setSelectionRange(E,E)}else{if(C.createTextRange){var B=C.createTextRange();B.move("character",E);B.select()}}}catch(D){return false}return true},m=function(D){D=D||window.event;var C="",E=D.which,B=D.type;if(E===undefined||E===null){E=D.keyCode}if(E===undefined||E===null){return""}switch(E){case 8:C="bksp";break;case 46:C=(B==="keydown")?"del":".";break;case 16:C="shift";break;case 0:case 9:case 13:C="etc";break;case 37:case 38:case 39:case 40:C=(!D.shiftKey&&(D.charCode!==39&&D.charCode!==undefined))?"etc":String.fromCharCode(E);break;default:C=String.fromCharCode(E);break}return C},v=function(B,C){if(B.preventDefault){B.preventDefault()}B.returnValue=C||false},k=function(B){var D=x(d),F=d.value,E="",C=true;switch(C){case (i.indexOf(B)!==-1):D=D+1;if(D>s.length){return false}while(p.indexOf(F.charAt(D-1))!==-1&&D<=s.length){D=D+1}if(!h(B,D)){c(B);return false}E=F.substr(0,D-1)+B+F.substr(D);if(i.indexOf(F.charAt(D))===-1&&n.indexOf(F.charAt(D))===-1){D=D+1}break;case (B==="bksp"):D=D-1;if(D<0){return false}while(i.indexOf(F.charAt(D))===-1&&n.indexOf(F.charAt(D))===-1&&D>1){D=D-1}E=F.substr(0,D)+s.substr(D,1)+F.substr(D+1);break;case (B==="del"):if(D>=F.length){return false}while(p.indexOf(F.charAt(D))!==-1&&F.charAt(D)!==""){D=D+1}E=F.substr(0,D)+s.substr(D,1)+F.substr(D+1);D=D+1;break;case (B==="etc"):return true;default:return false}d.value="";d.value=E;b(d,D);return false},g=function(B){if(i.indexOf(B)===-1&&B!=="bksp"&&B!=="del"&&B!=="etc"){var C=x(d);y=true;c(B);setTimeout(function(){y=false;b(d,C)},w);return false}return true},z=function(C){if(!l){return true}C=C||event;if(y){v(C);return false}var B=m(C);if((C.metaKey||C.ctrlKey)&&(B==="X"||B==="V")){v(C);return false}if(C.metaKey||C.ctrlKey){return true}if(d.value===""){d.value=s;b(d,0)}if(B==="bksp"||B==="del"){k(B);v(C);return false}return true},e=function(C){if(!l){return true}C=C||event;if(y){v(C);return false}var B=m(C);if(B==="etc"||C.metaKey||C.ctrlKey||C.altKey){return true}if(B!=="bksp"&&B!=="del"&&B!=="shift"){if(!g(B)){v(C);return false}if(k(B)){if(u()){q()}v(C,true);return true}if(u()){q()}v(C);return false}return false},r=function(){if(!d.tagName||(d.tagName.toUpperCase()!=="INPUT"&&d.tagName.toUpperCase()!=="TEXTAREA")){return null}if(!A||d.value===""){d.value=s}j(d,"keydown",function(B){z(B)});j(d,"keypress",function(B){e(B)});j(d,"focus",function(){t=d.value});j(d,"blur",function(){if(d.value!==t&&d.onchange){d.onchange()}});return o};o.resetField=function(){d.value=s};o.setAllowed=function(B){i=B;o.resetField()};o.setFormat=function(B){s=B;o.resetField()};o.setSeparator=function(B){p=B;o.resetField()};o.setTypeon=function(B){n=B;o.resetField()};o.setEnabled=function(B){l=B};return r()}}(window));

var swiper = (obj) => {
   var elem, slider;
   elem = obj.elem;

   if (!obj.minWidth && !obj.maxWidth) {
      _elemCreateSlider(elem);
      return false;
   }

   var media = 'all';

   obj.minWidth ? media += ` and (min-width: ${obj.minWidth})` : null;
   obj.maxWidth ? media += ` and (max-width: ${obj.maxWidth})` : null;

   var breakpoint = window.matchMedia(media);

   var _breakpointChecker = () => {
      if (breakpoint.matches === true) {
         _elemCreateSlider(elem);
         return;
      } else if (slider !== undefined) slider.destroy(true, true);
   };

   var _elemCreateSlider = (elem) => 
      slider = new Swiper(elem.selector, elem.settings);

   _breakpointChecker();
   breakpoint.addListener(_breakpointChecker);
};