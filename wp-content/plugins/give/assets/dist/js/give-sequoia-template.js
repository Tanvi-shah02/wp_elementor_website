!function(e){var t={};function a(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=907)}({20:function(e,t){function a(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=a=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),a(t)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},907:function(e,t,a){a(908),e.exports=a(909)},908:function(e,t,a){},909:function(e,t,a){"use strict";a.r(t);var i=a(20),n=a.n(i);!function(e){var t=window.sequoiaTemplateL10n,a=window.sequoiaTemplateOptions,i=e(".give-embed-form"),o=e(".advance-btn",i),r=e(".back-btn"),c=e(".give-form-navigator .title"),s=e("#give-payment-mode-select"),l=!1,d=window.parent.wp;d&&d.data&&i.on("click",(function(){var e=window.frameElement.closest(".wp-block").getAttribute("data-block");d.data.dispatch("core/block-editor").selectBlock(e)}));var u={currentStep:"enabled"===a.introduction.enabled?0:1,animating:!1,firstFocus:!1,goToStep:function(t){var n=p[t].title?e(p[t].selector).height()+50:e(p[t].selector).height(),o=p[u.currentStep].title?e(p[u.currentStep].selector).height()+50:e(p[u.currentStep].selector).height();n>o?e(".give-form-templates").css("min-height","".concat(n+123,"px")):setTimeout((function(){e(".give-form-templates").css("min-height","".concat(n+123,"px"))}),200),e(".step-tracker").removeClass("current"),e('.step-tracker[data-step="'+t+'"]').addClass("current"),"disabled"===a.introduction.enabled?(3===e(".step-tracker").length&&e(".step-tracker").remove(),1===(t=t>0?t:1)?e(".back-btn",i).hide():e(".back-btn",i).show(),e(".give-form-navigator",i).addClass("nav-visible"),e(p[t].selector).css("padding-top","50px")):0===t?(e(".give-form-navigator",i).removeClass("nav-visible"),e(p[t].selector).css("padding-top","")):(e(".give-form-navigator",i).addClass("nav-visible"),e(p[t].selector).css("padding-top","50px")),p[t].title&&c.text(p[t].title);var r=p.map((function(e,a){return a===t||a===u.currentStep?null:e.selector})).filter(Boolean).join(", ");if(e(r).hide(),u.currentStep!==t){var s="slide-in-right slide-in-left slide-out-right slide-out-left",l=u.currentStep<t?"left":"right",d=u.currentStep<t?"right":"left";e(p[u.currentStep].selector).removeClass(s).addClass("slide-out-".concat(l)),e(p[t].selector).show().removeClass(s).addClass("slide-in-".concat(d))}u.currentStep=t,setTimeout((function(){if(y(),!u.firstFocus&&"disabled"===a.introduction.enabled)return u.firstFocus=!0;p[u.currentStep].firstFocus&&e(p[u.currentStep].firstFocus).focus()}),200)},init:function(){var t,a;p.forEach((function(t){void 0!==t.setup&&t.setup(),e(t.selector).css("position","absolute")})),o.on("click",(function(e){e.preventDefault(),u.forward()})),r.on("click",(function(e){e.preventDefault(),u.back()})),e(".step-tracker").on("click",(function(t){t.preventDefault(),u.goToStep(parseInt(e(t.target).attr("data-step")))})),t=function(t){!1===l?e(".form-footer").css("transition","margin-top 0.2s ease"):e(".form-footer").css("transition",""),e(".form-footer").css("margin-top","".concat(t,"px"))},a=0,window.requestAnimationFrame((function i(){var n=e(p[u.currentStep].selector);a!==e(n).outerHeight()&&(t(e(n).outerHeight()),a=e(n).outerHeight()),window.requestAnimationFrame(i)})),e(".give-fee-recovery-donors-choice").parent().hasClass("give-form")&&e("#give_checkout_user_info").after(e(".give-fee-recovery-donors-choice")),u.goToStep(Give.fn.getParameterByName("showDonationProcessingError")||Give.fn.getParameterByName("showFailedDonationError")?2:0)},back:function(){var e=0!==u.currentStep?u.currentStep-1:0;u.goToStep(e),u.currentStep=e},forward:function(){var e=null!==u.currentStep?u.currentStep+1:1;u.goToStep(e),u.currentStep=e}},p=[{id:"introduction",title:null,selector:".give-section.introduction",label:a.introduction.donate_label,showErrors:!1,tabOrder:[".introduction .advance-btn",".step-tracker"]},{id:"choose-amount",title:a.payment_amount.header_label,selector:".give-section.choose-amount",label:a.payment_amount.next_label,showErrors:!1,tabOrder:["select.give-cs-select-currency","input.give-amount-top",".give-donation-levels-wrap button",".give-recurring-period",".give-recurring-donors-choice-period",".give_fee_mode_checkbox",".choose-amount .advance-btn",".step-tracker",".back-btn"],firstFocus:".give-default-level",setup:function(){var t=e(".give-donation-level-btn").length;1===t?e(".give-donation-levels-wrap").attr("style","display: none!important;"):t%2==0&&t<6&&e(".give-donation-levels-wrap").css("grid-template-columns","repeat(2, minmax(0, 1fr))"),e("#give-amount").on("blur",(function(){Give.form.fn.isValidDonationAmount(e("form"))?e(".advance-btn").attr("disabled",!1):e(".advance-btn").attr("disabled",!0)})),e(".give-donation-level-btn").each((function(){if(!e(this).attr("has-tooltip")){var t=e(this).attr("value"),a=e(this).text(),i=window.give_global_vars.currency_sign,n=window.give_global_vars.currency_pos;if("custom"!==t){var o="before"===n?'<div class="currency currency--before">'.concat(i,"</div>").concat(t):"".concat(t,'<div class="currency currency--after">').concat(i,"</div>");e(this).html(o)}if("custom"!==t&&a!==("before"===n?i+t:t+i)){var r=document.createElement("span");r.classList.add("give-tooltip","hint--top","hint--bounce"),a.length<50&&r.classList.add("narrow"),r.style.width="100%",r.setAttribute("aria-label",a.length<50?a:a.substr(0,50)+"..."),e(this).wrap(r),e(this).attr("has-tooltip",!0)}}}))}},{id:"payment",title:a.payment_information.header_label,label:a.payment_information.checkout_label,selector:".give-section.payment",showErrors:!0,tabOrder:[".payment input, .payment a, .payment button, .payment select, .payment multiselect, .payment textarea, .payment .button",".give-submit",".step-tracker",".back-btn"],firstFocus:"#give-first",setup:function(){e(".give-section.payment").on("click",".give-cancel-login, .give-checkout-register-cancel",x),e(".give-section.payment").on("click touchend",'input[name="give_login_submit"]',(function(){e('input[name="give_login_submit"] + .give-loading-animation').removeClass("give-loading-animation").addClass("sequoia-loader spinning")})),window.give_global_vars.purchase_loading="",e(".give_error").each((function(){f(e(this))})),k({container:"#give-anonymous-donation-wrap label",label:"#give-anonymous-donation-wrap label",input:"#give-anonymous-donation"}),k({container:".give-recurring-donors-choice",label:".give-recurring-donors-choice label",input:'input[name="give-recurring-period"]'}),k({container:".give-fee-recovery-donors-choice",label:".give-fee-message-label-text",input:'input[name="give_fee_mode_checkbox"]'}),k({container:".give-activecampaign-fieldset",label:".give-activecampaign-optin-label",input:".give-activecampaign-optin-input"}),k({container:".give-mailchimp-fieldset",label:".give-mc-message-text",input:'input[name="give_mailchimp_signup"]'}),k({container:".give-constant-contact-fieldset",label:".give-constant-contact-fieldset span",input:'input[name="give_constant_contact_signup"]'}),k({container:"#give_terms_agreement",label:"#give_terms_agreement label",input:'input[name="give_agree_to_terms"]'}),e("body.give-form-templates").on("click touchend",'form.give-form input[name="give-purchase"].give-submit',(function(){e("#give-purchase-button + .give-loading-animation").removeClass("give-loading-animation").addClass("sequoia-loader"),e("form").get(0).checkValidity()&&e(".sequoia-loader").addClass("spinning")})),e("body.give-form-templates").on("click touchend","#give_error_invalid_donation_maximum",(function(){u.goToStep(1)})),e("body.give-form-templates").on("click touchend","#give_error_invalid_donation_amount",(function(){u.goToStep(1)})),e("#give-gateway-radio-list li").each((function(){var t;switch(e("input",this).val()){case"manual":t="fas fa-tools";break;case"offline":t="fas fa-wallet";break;case"paypal":t="fab fa-paypal";break;case"stripe":case"stripe_checkout":t="far fa-credit-card";break;case"stripe_sepa":case"stripe_ach":case"stripe_ideal":case"stripe_becs":t="fas fa-university";break;case"paypalpro_payflow":case"paypal-commerce":t="far fa-credit-card";break;case"stripe_google_pay":t="fab fa-google";break;case"stripe_apple_pay":t="fab fa-apple";break;default:t="fas fa-hand-holding-heart"}e(this).append('<i class="'.concat(t,'"></i>'))})),v(),_(),new window.MutationObserver((function(t){t.forEach((function(t){if(t.addedNodes)for(var a=0;a<t.addedNodes.length;a++){var i=t.addedNodes[a];if(e(i).find(".give_error").length>0&&(f(e(i).find(".give_error")),C()),e(i).children().hasClass("give_errors")&&(e(i).parent().hasClass("donation-errors")||e(i).children(".give_errors").each((function(){f(e(this))})),C()),e(i).hasClass("give_errors")&&!e(i).parent().hasClass("donation-errors")&&(f(e(i)),e(".sequoia-loader").removeClass("spinning"),C()),"give_tributes_address_state"===e(i).attr("id")){var n=e(i).attr("placeholder");e(i).prepend("<option selected disabled>".concat(n,"</option>"))}if("give_tributes_address_state"===e(i).attr("name")&&e(i).attr("class").includes("give-input")&&e(i).attr("placeholder",e(i).siblings("label").text().trim()),e(i).attr("id")&&e(i).attr("id").includes("give-checkout-login-register")&&g(),e(i).prop("tagName")&&"select"===e(i).prop("tagName").toLowerCase()){var o=e(i).attr("placeholder");o&&e(i).prepend('<option value="" disabled selected>'.concat(o,"</option>"))}}}))})).observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1})}}];function f(t){e(t).parent().hasClass("give-stripe-payment-request-button")||(0===e(".donation-errors").length&&e(".payment").prepend('<div class="donation-errors"></div>'),setTimeout((function(){void 0===n()(e(".donation-errors").html())||e(".donation-errors").html().includes(e(t).html())?e(t).remove():e(t).appendTo(".donation-errors")}),1))}function g(){var t=function(t){e(t.target).is("input")&&(e(t.target).hasClass("give-disabled")||e(t.target).closest("label").toggleClass("checked"))};e('[id*="give-register-account-fields"]').off("click",t).on("click",t)}function v(){e("#give-ffm-section").off("click",m).on("click",m),e("#give-ffm-section input").each((function(){switch(e(this).prop("type")){case"checkbox":e(this).prop("checked")?e(this).parent().addClass("checked"):e(this).parent().removeClass("checked");break;case"radio":e(this).prop("checked")?e(this).parent().addClass("selected"):e(this).parent().removeClass("selected")}}))}function m(t){if(e(t.target).is("input"))switch(e(t.target).prop("type")){case"checkbox":e(t.target).closest("label").toggleClass("checked");break;case"radio":e(t.target).closest("label").addClass("selected"),e(t.target).parent().siblings().removeClass("selected")}}function h(){0===e("#donate-fieldset").length&&e(".give-section.payment").append('<fieldset id="donate-fieldset"></fieldset>');[".give-constant-contact-fieldset",".give-activecampaign-fieldset",".give-mailchimp-fieldset","#give_terms_agreement",".give-donation-submit"].forEach((function(t){0===e("#donate-fieldset  ".concat(t)).length||e("#donate-fieldset  ".concat(t)).html()!==e("#give_purchase_form_wrap  ".concat(t)).html()&&void 0!==e("#give_purchase_form_wrap  ".concat(t)).html()?(e("#donate-fieldset  ".concat(t)).remove(),e("#donate-fieldset").append(e("#give_purchase_form_wrap ".concat(t)))):e("#give_purchase_form_wrap ".concat(t)).remove()})),e("li.give-gateway-option-selected").after(e("#give_purchase_form_wrap"));var t="gateway-"+e(".give-gateway-option-selected input").attr("value").replace("_","-");e("#give_purchase_form_wrap").attr("class",t)}function b(t,a){e(t).each((function(){if(""!==e(this).html()&&!1===e(this).html().includes('<i class="fas fa-'.concat(a,'"></i>'))){var t="rtl"===e("html").attr("dir")?"padding-right":"padding-left";e(this).prepend('<i class="fas fa-'.concat(a,'"></i>')),e(this).children("input, selector").each((function(){e(this).attr("style",t+": 33px!important;")}))}}))}function _(){b("#give-first-name-wrap","user"),b("#give-email-wrap","envelope"),b("#give-company-wrap","building"),b("#date_field-wrap","calendar-alt"),b("#url_field-wrap","globe"),b("#phone_field-wrap","phone"),b("#give-phone-wrap","phone"),b("#email_field-wrap","envelope")}function y(){e("select, button, input, textarea, multiselect, a").attr("tabindex",-1),p[u.currentStep].tabOrder.forEach((function(t,a){e(t).attr("tabindex",a+1)}))}function w(){var t=document.querySelectorAll('[data-field-type="checkbox"] input'),a=document.querySelectorAll('[data-field-type="radio"] input');Array.from(t).forEach((function(e){var t="#".concat(e.getAttribute("id")),a="label[for=".concat(e.getAttribute("id"),"]");k({container:a,label:a,input:t})})),Array.from(a).forEach((function(t){var a="#".concat(t.getAttribute("id"));!function(t){var a=t.label,i=t.input;!0===e(i).prop("checked")&&e(a).addClass("active");e(document).on("click",a,(function(t){"INPUT"!==t.target.nodeName&&(e(t.target.parentElement).find("label").not(t.target).removeClass("active"),e(t.target).toggleClass("active"))}))}({label:"label[for=".concat(t.getAttribute("id"),"]"),input:a})}))}function k(t){var a=t.container,i=t.label,n=t.input;!0===e(n).prop("checked")&&e(a).addClass("active"),e(document).on("click",i,(function(t){"INPUT"!==t.target.nodeName&&e(a).toggleClass("active")}))}function x(){e("#give_error_must_log_in").remove()}function S(){e('select option[selected="selected"][value=""]').length>0&&e('select option[selected="selected"][value=""]').each((function(){e(this).parent().siblings("label").length&&(e(this).text(e(this).parent().siblings("label").text().replace("*","").trim()),e(this).attr("disabled",!0))}))}function C(){"parentIFrame"in window&&window.parentIFrame.sendMessage({action:"giveScrollIframeInToView"})}u.init(),s.length&&"none"!==s.css("display")?(h(),e(document).on("give_gateway_loaded",(function(){setTimeout(y,200),h(),w(),g(),v(),_(),S(),e("#give_purchase_form_wrap").slideDown(200,(function(){l=!1}))})),e(document).on("Give:onPreGatewayLoad",(function(){l=!0,e("#give_purchase_form_wrap").slideUp(200)})),e(document).on("Give:onPreGatewayLoad",(function(){var t=["give_error_test_mode"];e(".give_errors, .give_notices, .give_error").each((function(){t.includes(e(this).attr("id"))||e(this).slideUp(200,(function(){e(this).remove()}))}))}))):e("#give_purchase_form_wrap").addClass("give-single-gateway-wrap"),e(document).on("give_gateway_loaded",(function(t,a,i){2===u.currentStep&&e(".give-form-templates").css("min-height","");var n=e("#".concat(i));if(n.parent().hasClass("give-embed-form")){var o={action:"give_cancel_login",form_id:n.find('[name="give-form-id"]').val()};e.post(Give.fn.getGlobalVar("ajaxurl"),o,(function(t){var a=n.find("[id^=give-checkout-login-register]");a.length&&t.fields.includes("give_checkout_user_info")&&n.find("#give_checkout_user_info").remove(),a.replaceWith(e.parseJSON(t.fields)),a.css({display:"block"}),n.find(".give-submit-button-wrap").show()})).done((function(){window.give_fl_trigger(),_()}))}})),w(),S(),g(),v(),_(),Array.from(document.querySelectorAll('#give_checkout_user_info input[type="text"]')).filter((function(e){return!e.required})).map((function(e){e.placeholder+=t.optionalLabel}))}(jQuery),document.addEventListener("readystatechange",(function(e){if("complete"===e.target.readyState){var t=document.querySelectorAll('[data-field-type="checkbox"] input'),a=document.querySelectorAll('[data-field-type="radio"] input'),i=function(e){e.checked?e.parentElement.classList.add("active"):e.parentElement.classList.remove("active")};t.forEach(i),a.forEach(i)}}))}});