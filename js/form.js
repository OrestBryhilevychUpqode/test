// // (function ($, window, document, undefined) {
// //     'use strict';

// //     const refs = {};

// //     $(document).ready(function ($) {
// //         setTimeout(addNeedClass, 1000);
// //         setTimeout(choicesInit, 1001);
// //     });

// //     function addNeedClass() {
// //         // add to cta
// //         refs.formCTA = document.querySelector('.js-cta-form .hbspt-form-wrap');

// //         // select cta
// //         refs.selectCTA = refs.formCTA.querySelector(
// //             "select[name$='hey__i_m_looking_to']"
// //         );
// //         refs.selectCTA.id = 'slp-form-select-cta';

// //         // email cta
// //         refs.emailInputCTA = refs.formCTA.querySelector('input[type="email"]');
// //         refs.emailInputCTA.id = 'slp-form-email-cta';

// //         // text cta
// //         refs.textareaCTA = refs.formCTA.querySelector('textarea');
// //         refs.textareaCTA.id = 'slp-form-textarea-cta';

// //         // submit cta
// //         refs.submitCTA = refs.formCTA.querySelector('input[type="submit"]');
// //         refs.submitCTA.classList.add('submit-contact-us');
// //         refs.submitCTA.id = 'slp-form-submit-cta';
// //     }

// //     function choicesInit() {
// //         if ($('.js-cta-form .hbspt-form-wrap').length) {
// //             const choices = new Choices('#slp-form-select-cta', {
// //                 searchEnabled: false,
// //                 itemSelectText: '',
// //                 shouldSort: false,
// //             });
// //         }

// //         removePlaceholderFirst();

// //         contactUsTextArreaCTA();

// //         disableEnableSumbitBtn();
// //     }

// //     function removePlaceholderFirst() {
// //         const firstPlaceholder = document.querySelectorAll(
// //             '.choices__inner .choices__item'
// //         );

// //         if (firstPlaceholder.length > 0) {
// //             for (const item of firstPlaceholder) {
// //                 item.textContent = '';
// //             }
// //         }
// //     }

// //     function contactUsTextArreaCTA() {
// //         let wrapperHeight = 0;

// //         if ($(window).width() <= 576) {
// //             wrapperHeight = $('.hbspt-form-wrap').height();
// //         }

// //         $('.hbspt-form-wrap #slp-form-textarea-cta').on('focus', function (e) {
// //             if ($(window).width() > 576) {
// //                 $('.hbspt-form-wrap #slp-form-textarea-cta').css({
// //                     height: '338px',
// //                     'overflow-y': 'scroll',
// //                 });
// //             }

// //             if ($(window).width() <= 576) {
// //                 $('.hbspt-form-wrap #slp-form-textarea-cta').css({
// //                     height: '259px',
// //                     'overflow-y': 'scroll',
// //                 });
// //             }
// //         });

// //         $('.hbspt-form-wrap #slp-form-textarea-cta').on('blur', function (e) {
// //             if ($(window).width() > 1024 && e.target.value.length == 0) {
// //                 $('.hbspt-form-wrap #slp-form-textarea-cta').css({
// //                     height: '68px',
// //                     'overflow-y': 'hidden',
// //                 });
// //             } else if (
// //                 $(window).width() > 576 &&
// //                 $(window).width() <= 1024 &&
// //                 e.target.value.length == 0
// //             ) {
// //                 $('.hbspt-form-wrap #slp-form-textarea-cta').css({
// //                     height: '60px',
// //                     'overflow-y': 'hidden',
// //                 });
// //             } else if ($(window).width() > 576 && e.target.value.length > 1) {
// //                 $('.hbspt-form-wrap #slp-form-textarea-cta').css({
// //                     height: '338px',
// //                 });
// //             } else if ($(window).width() <= 576 && e.target.value.length == 0) {
// //                 let wrapperHeight = $('.hbspt-form-wrap').height(),
// //                     wrapperNewHeight = wrapperHeight - 151;
// //                 $('.hbspt-form-wrap #slp-form-textarea-cta').css({
// //                     height: '57px',
// //                     'overflow-y': 'hidden',
// //                 });
// //             } else if ($(window).width() <= 576 && e.target.value.length > 1) {
// //                 $('.hbspt-form-wrap #slp-form-textarea-cta').css({
// //                     height: '259px',
// //                 });
// //             }
// //         });
// //     }

// //     function disableEnableSumbitBtn() {
// //         const EMAIL_REGEXP =
// //             /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

// //         function validateEmail(value) {
// //             return EMAIL_REGEXP.test(value);
// //         }

// //         let cta_emailIsValid = false;
// //         let cta_messageIsValid = false;

// //         $("input[type='submit']").addClass('disable--btn');

// //         function updateFormEnabledCTA() {
// //             if (verifySelectCTA() && cta_emailIsValid && cta_messageIsValid) {
// //                 $('#slp-form-submit-cta').removeClass('disable--btn');
// //             } else {
// //                 $('#slp-form-submit-cta').addClass('disable--btn');
// //             }
// //         }

// //         function verifySelectCTA() {
// //             if ($('#slp-form-select-cta').val() !== '') {
// //                 return true;
// //             } else {
// //                 return false;
// //             }
// //         }

// //         $('#slp-form-select-cta').change(updateFormEnabledCTA);

// //         $('#slp-form-email-cta').on('input', function (e) {
// //             if (validateEmail(e.target.value)) {
// //                 cta_emailIsValid = true;
// //                 updateFormEnabledCTA();
// //             } else {
// //                 cta_emailIsValid = false;
// //                 updateFormEnabledCTA();
// //             }
// //         });

// //         $('#slp-form-textarea-cta').on('input', function (e) {
// //             if (e.target.value !== '') {
// //                 cta_messageIsValid = true;
// //                 updateFormEnabledCTA();
// //             } else {
// //                 cta_messageIsValid = false;
// //                 updateFormEnabledCTA();
// //             }
// //         });
// //     }

//     // $('.submit-contact-us').on('click', function () {
//     //     $('.wpcf7-response-output').hide();
//     //     setTimeout(() => {
//     //         if ($('.wpcf7-form.sent').length) {
//     //             $('.hbspt-form-wrap-content').hide();
//     //             $('.hbspt-form-wrap-heading').show();
//     //             $('.wpcf7-response-output').show();
//     //         }
//     //     }, 1500);
//     // });
// })(jQuery, window, document);
