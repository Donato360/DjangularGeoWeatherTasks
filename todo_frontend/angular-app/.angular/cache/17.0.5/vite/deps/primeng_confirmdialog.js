import {
  CheckIcon
} from "./chunk-5VKHA4QJ.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-5KF6U6VD.js";
import "./chunk-WC4BR7V4.js";
import {
  TimesIcon
} from "./chunk-PBTSNOQF.js";
import {
  Ripple,
  RippleModule
} from "./chunk-227WQ6XS.js";
import {
  DomHandler
} from "./chunk-3SQF7L7O.js";
import "./chunk-MGVRYEIB.js";
import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-EHESWTXC.js";
import {
  ConfirmEventType,
  ConfirmationService,
  Footer,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  UniqueComponentId,
  zindexutils
} from "./chunk-WWZ6JMK3.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-BWY5BSXV.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-YADDX5AH.js";

// node_modules/primeng/fesm2022/primeng-confirmdialog.mjs
var _c0 = ["content"];
function ConfirmDialog_div_0_div_1_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ConfirmDialog_div_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtemplate(1, ConfirmDialog_div_0_div_1_div_1_ng_container_1_Template, 1, 0, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.headerTemplate);
  }
}
function ConfirmDialog_div_0_div_1_div_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(4);
    ɵɵproperty("id", ctx_r12.getAriaLabelledBy());
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r12.option("header"));
  }
}
var _c1 = () => ({
  "p-dialog-header-icon p-dialog-header-close p-link": true
});
function ConfirmDialog_div_0_div_1_div_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 17);
    ɵɵlistener("click", function ConfirmDialog_div_0_div_1_div_2_button_3_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r14 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r14.close($event));
    })("keydown.enter", function ConfirmDialog_div_0_div_1_div_2_button_3_Template_button_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r16 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r16.close($event));
    });
    ɵɵelement(1, "TimesIcon");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ɵɵpureFunction0(2, _c1));
    ɵɵattribute("aria-label", ctx_r13.closeAriaLabel);
  }
}
function ConfirmDialog_div_0_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtemplate(1, ConfirmDialog_div_0_div_1_div_2_span_1_Template, 2, 2, "span", 13);
    ɵɵelementStart(2, "div", 14);
    ɵɵtemplate(3, ConfirmDialog_div_0_div_1_div_2_button_3_Template, 2, 3, "button", 15);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.option("header"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r3.closable);
  }
}
function ConfirmDialog_div_0_div_1_i_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 1);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r5.option("icon"));
    ɵɵproperty("ngClass", "p-confirm-dialog-icon");
  }
}
function ConfirmDialog_div_0_div_1_ng_container_6_1_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_div_0_div_1_ng_container_6_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfirmDialog_div_0_div_1_ng_container_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_div_0_div_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfirmDialog_div_0_div_1_ng_container_6_1_Template, 1, 0, null, 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r6.iconTemplate);
  }
}
function ConfirmDialog_div_0_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵproperty("innerHTML", ctx_r7.option("message"), ɵɵsanitizeHtml);
  }
}
function ConfirmDialog_div_0_div_1_ng_container_8_1_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_div_0_div_1_ng_container_8_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfirmDialog_div_0_div_1_ng_container_8_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_div_0_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfirmDialog_div_0_div_1_ng_container_8_1_Template, 1, 0, null, 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r8.messageTemplate);
  }
}
function ConfirmDialog_div_0_div_1_div_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ConfirmDialog_div_0_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵprojection(1);
    ɵɵtemplate(2, ConfirmDialog_div_0_div_1_div_9_ng_container_2_Template, 1, 0, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r9.footerTemplate);
  }
}
function ConfirmDialog_div_0_div_1_div_10_button_1_ng_container_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r26 = ɵɵnextContext(6);
    ɵɵclassMap(ctx_r26.option("rejectIcon"));
  }
}
function ConfirmDialog_div_0_div_1_div_10_button_1_ng_container_1_TimesIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon", 25);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-button-icon-left");
  }
}
function ConfirmDialog_div_0_div_1_div_10_button_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfirmDialog_div_0_div_1_div_10_button_1_ng_container_1_i_1_Template, 1, 2, "i", 23)(2, ConfirmDialog_div_0_div_1_div_10_button_1_ng_container_1_TimesIcon_2_Template, 1, 1, "TimesIcon", 24);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r24 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r24.option("rejectIcon"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r24.option("rejectIcon"));
  }
}
function ConfirmDialog_div_0_div_1_div_10_button_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_div_0_div_1_div_10_button_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfirmDialog_div_0_div_1_div_10_button_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_div_0_div_1_div_10_button_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 26);
    ɵɵtemplate(1, ConfirmDialog_div_0_div_1_div_10_button_1_span_2_1_Template, 1, 0, null, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r25 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r25.rejectIconTemplate);
  }
}
function ConfirmDialog_div_0_div_1_div_10_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 21);
    ɵɵlistener("click", function ConfirmDialog_div_0_div_1_div_10_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r31);
      const ctx_r30 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r30.reject());
    });
    ɵɵtemplate(1, ConfirmDialog_div_0_div_1_div_10_button_1_ng_container_1_Template, 3, 2, "ng-container", 8)(2, ConfirmDialog_div_0_div_1_div_10_button_1_span_2_Template, 2, 1, "span", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r22 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r22.option("rejectButtonStyleClass"));
    ɵɵproperty("label", ctx_r22.rejectButtonLabel)("ngClass", "p-confirm-dialog-reject");
    ɵɵattribute("aria-label", ctx_r22.rejectAriaLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r22.rejectIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r22.rejectIconTemplate);
  }
}
function ConfirmDialog_div_0_div_1_div_10_button_2_ng_container_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r34 = ɵɵnextContext(6);
    ɵɵclassMap(ctx_r34.option("acceptIcon"));
  }
}
function ConfirmDialog_div_0_div_1_div_10_button_2_ng_container_1_CheckIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon", 25);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-button-icon-left");
  }
}
function ConfirmDialog_div_0_div_1_div_10_button_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ConfirmDialog_div_0_div_1_div_10_button_2_ng_container_1_i_1_Template, 1, 2, "i", 23)(2, ConfirmDialog_div_0_div_1_div_10_button_2_ng_container_1_CheckIcon_2_Template, 1, 1, "CheckIcon", 24);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r32 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r32.option("acceptIcon"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r32.option("acceptIcon"));
  }
}
function ConfirmDialog_div_0_div_1_div_10_button_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function ConfirmDialog_div_0_div_1_div_10_button_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ConfirmDialog_div_0_div_1_div_10_button_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ConfirmDialog_div_0_div_1_div_10_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 26);
    ɵɵtemplate(1, ConfirmDialog_div_0_div_1_div_10_button_2_span_2_1_Template, 1, 0, null, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r33 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r33.acceptIconTemplate);
  }
}
function ConfirmDialog_div_0_div_1_div_10_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 21);
    ɵɵlistener("click", function ConfirmDialog_div_0_div_1_div_10_button_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r39);
      const ctx_r38 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r38.accept());
    });
    ɵɵtemplate(1, ConfirmDialog_div_0_div_1_div_10_button_2_ng_container_1_Template, 3, 2, "ng-container", 8)(2, ConfirmDialog_div_0_div_1_div_10_button_2_span_2_Template, 2, 1, "span", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r23 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r23.option("acceptButtonStyleClass"));
    ɵɵproperty("label", ctx_r23.acceptButtonLabel)("ngClass", "p-confirm-dialog-accept");
    ɵɵattribute("aria-label", ctx_r23.acceptAriaLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r23.acceptIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r23.acceptIconTemplate);
  }
}
function ConfirmDialog_div_0_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 19);
    ɵɵtemplate(1, ConfirmDialog_div_0_div_1_div_10_button_1_Template, 3, 7, "button", 20)(2, ConfirmDialog_div_0_div_1_div_10_button_2_Template, 3, 7, "button", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r10.option("rejectVisible"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r10.option("acceptVisible"));
  }
}
var _c2 = (a1) => ({
  "p-dialog p-confirm-dialog p-component": true,
  "p-dialog-rtl": a1
});
var _c3 = (a0, a1) => ({
  transform: a0,
  transition: a1
});
var _c4 = (a1) => ({
  value: "visible",
  params: a1
});
function ConfirmDialog_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵlistener("@animation.start", function ConfirmDialog_div_0_div_1_Template_div_animation_animation_start_0_listener($event) {
      ɵɵrestoreView(_r41);
      const ctx_r40 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r40.onAnimationStart($event));
    })("@animation.done", function ConfirmDialog_div_0_div_1_Template_div_animation_animation_done_0_listener($event) {
      ɵɵrestoreView(_r41);
      const ctx_r42 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r42.onAnimationEnd($event));
    });
    ɵɵtemplate(1, ConfirmDialog_div_0_div_1_div_1_Template, 2, 1, "div", 4)(2, ConfirmDialog_div_0_div_1_div_2_Template, 4, 2, "div", 4);
    ɵɵelementStart(3, "div", 5, 6);
    ɵɵtemplate(5, ConfirmDialog_div_0_div_1_i_5_Template, 1, 3, "i", 7)(6, ConfirmDialog_div_0_div_1_ng_container_6_Template, 2, 1, "ng-container", 8)(7, ConfirmDialog_div_0_div_1_span_7_Template, 1, 1, "span", 9)(8, ConfirmDialog_div_0_div_1_ng_container_8_Template, 2, 1, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵtemplate(9, ConfirmDialog_div_0_div_1_div_9_Template, 3, 1, "div", 10)(10, ConfirmDialog_div_0_div_1_div_10_Template, 3, 2, "div", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction1(15, _c2, ctx_r1.rtl))("ngStyle", ctx_r1.style)("@animation", ɵɵpureFunction1(20, _c4, ɵɵpureFunction2(17, _c3, ctx_r1.transformOptions, ctx_r1.transitionOptions)));
    ɵɵattribute("aria-labelledby", ctx_r1.getAriaLabelledBy())("aria-modal", true);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.headerTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.headerTemplate);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !ctx_r1.iconTemplate && ctx_r1.option("icon"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.iconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.messageTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.messageTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.footer || ctx_r1.footerTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.footer && !ctx_r1.footerTemplate);
  }
}
function ConfirmDialog_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, ConfirmDialog_div_0_div_1_Template, 11, 22, "div", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.maskStyleClass);
    ɵɵproperty("ngClass", ctx_r0.getMaskClass());
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.visible);
  }
}
var _c5 = [[["p-footer"]]];
var _c6 = ["p-footer"];
var showAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{transition}}", style({
  transform: "none",
  opacity: 1
}))]);
var hideAnimation = animation([animate("{{transition}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var ConfirmDialog = class _ConfirmDialog {
  el;
  renderer;
  confirmationService;
  zone;
  cd;
  config;
  document;
  /**
   * Title text of the dialog.
   * @group Props
   */
  header;
  /**
   * Icon to display next to message.
   * @group Props
   */
  icon;
  /**
   * Message of the confirmation.
   * @group Props
   */
  message;
  /**
   * Inline style of the element.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
    this.cd.markForCheck();
  }
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Specify the CSS class(es) for styling the mask element
   * @group Props
   */
  maskStyleClass;
  /**
   * Icon of the accept button.
   * @group Props
   */
  acceptIcon;
  /**
   * Label of the accept button.
   * @group Props
   */
  acceptLabel;
  /**
   * Defines a string that labels the close button for accessibility.
   * @group Props
   */
  closeAriaLabel;
  /**
   * Defines a string that labels the accept button for accessibility.
   * @group Props
   */
  acceptAriaLabel;
  /**
   * Visibility of the accept button.
   * @group Props
   */
  acceptVisible = true;
  /**
   * Icon of the reject button.
   * @group Props
   */
  rejectIcon;
  /**
   * Label of the reject button.
   * @group Props
   */
  rejectLabel;
  /**
   * Defines a string that labels the reject button for accessibility.
   * @group Props
   */
  rejectAriaLabel;
  /**
   * Visibility of the reject button.
   * @group Props
   */
  rejectVisible = true;
  /**
   * Style class of the accept button.
   * @group Props
   */
  acceptButtonStyleClass;
  /**
   * Style class of the reject button.
   * @group Props
   */
  rejectButtonStyleClass;
  /**
   * Specifies if pressing escape key should hide the dialog.
   * @group Props
   */
  closeOnEscape = true;
  /**
   * Specifies if clicking the modal background should hide the dialog.
   * @group Props
   */
  dismissableMask;
  /**
   * Determines whether scrolling behavior should be blocked within the component.
   * @group Props
   */
  blockScroll = true;
  /**
   * When enabled dialog is displayed in RTL direction.
   * @group Props
   */
  rtl = false;
  /**
   * Adds a close icon to the header to hide the dialog.
   * @group Props
   */
  closable = true;
  /**
   *  Target element to attach the dialog, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Optional key to match the key of confirm object, necessary to use when component tree has multiple confirm dialogs.
   * @group Props
   */
  key;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * When enabled, can only focus on elements inside the confirm dialog.
   * @group Props
   */
  focusTrap = true;
  /**
   * Element to receive the focus when the dialog gets visible.
   * @group Props
   */
  defaultFocus = "accept";
  /**
   * Object literal to define widths per screen size.
   * @group Props
   */
  breakpoints;
  /**
   * Current visible state as a boolean.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
    this.cd.markForCheck();
  }
  /**
   *  Allows getting the position of the component.
   * @group Props
   */
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    switch (value) {
      case "top-left":
      case "bottom-left":
      case "left":
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;
      case "top-right":
      case "bottom-right":
      case "right":
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;
      case "bottom":
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;
      case "top":
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;
      default:
        this.transformOptions = "scale(0.7)";
        break;
    }
  }
  /**
   * Callback to invoke when dialog is hidden.
   * @param {ConfirmEventType} enum - Custom confirm event.
   * @group Emits
   */
  onHide = new EventEmitter();
  footer;
  contentViewChild;
  templates;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "message":
          this.messageTemplate = item.template;
          break;
        case "icon":
          this.iconTemplate = item.template;
          break;
        case "rejecticon":
          this.rejectIconTemplate = item.template;
          break;
        case "accepticon":
          this.acceptIconTemplate = item.template;
          break;
      }
    });
  }
  headerTemplate;
  footerTemplate;
  rejectIconTemplate;
  acceptIconTemplate;
  messageTemplate;
  iconTemplate;
  confirmation;
  _visible;
  _style;
  maskVisible;
  documentEscapeListener;
  container;
  wrapper;
  contentContainer;
  subscription;
  maskClickListener;
  preWidth;
  _position = "center";
  transformOptions = "scale(0.7)";
  styleElement;
  id = UniqueComponentId();
  confirmationOptions;
  translationSubscription;
  constructor(el, renderer, confirmationService, zone, cd, config, document) {
    this.el = el;
    this.renderer = renderer;
    this.confirmationService = confirmationService;
    this.zone = zone;
    this.cd = cd;
    this.config = config;
    this.document = document;
    this.subscription = this.confirmationService.requireConfirmation$.subscribe((confirmation) => {
      if (!confirmation) {
        this.hide();
        return;
      }
      if (confirmation.key === this.key) {
        this.confirmation = confirmation;
        this.confirmationOptions = {
          message: this.confirmation.message || this.message,
          icon: this.confirmation.icon || this.icon,
          header: this.confirmation.header || this.header,
          rejectVisible: this.confirmation.rejectVisible == null ? this.rejectVisible : this.confirmation.rejectVisible,
          acceptVisible: this.confirmation.acceptVisible == null ? this.acceptVisible : this.confirmation.acceptVisible,
          acceptLabel: this.confirmation.acceptLabel || this.acceptLabel,
          rejectLabel: this.confirmation.rejectLabel || this.rejectLabel,
          acceptIcon: this.confirmation.acceptIcon || this.acceptIcon,
          rejectIcon: this.confirmation.rejectIcon || this.rejectIcon,
          acceptButtonStyleClass: this.confirmation.acceptButtonStyleClass || this.acceptButtonStyleClass,
          rejectButtonStyleClass: this.confirmation.rejectButtonStyleClass || this.rejectButtonStyleClass,
          defaultFocus: this.confirmation.defaultFocus || this.defaultFocus,
          blockScroll: this.confirmation.blockScroll === false || this.confirmation.blockScroll === true ? this.confirmation.blockScroll : this.blockScroll,
          closeOnEscape: this.confirmation.closeOnEscape === false || this.confirmation.closeOnEscape === true ? this.confirmation.closeOnEscape : this.closeOnEscape,
          dismissableMask: this.confirmation.dismissableMask === false || this.confirmation.dismissableMask === true ? this.confirmation.dismissableMask : this.dismissableMask
        };
        if (this.confirmation.accept) {
          this.confirmation.acceptEvent = new EventEmitter();
          this.confirmation.acceptEvent.subscribe(this.confirmation.accept);
        }
        if (this.confirmation.reject) {
          this.confirmation.rejectEvent = new EventEmitter();
          this.confirmation.rejectEvent.subscribe(this.confirmation.reject);
        }
        this.visible = true;
      }
    });
  }
  ngOnInit() {
    if (this.breakpoints) {
      this.createStyle();
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      if (this.visible) {
        this.cd.markForCheck();
      }
    });
  }
  getAriaLabelledBy() {
    return this.header !== null ? UniqueComponentId() + "_header" : null;
  }
  option(name) {
    const source = this.confirmationOptions || this;
    if (source.hasOwnProperty(name)) {
      return source[name];
    }
    return void 0;
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.container = event.element;
        this.wrapper = this.container?.parentElement;
        this.contentContainer = DomHandler.findSingle(this.container, ".p-dialog-content");
        this.container?.setAttribute(this.id, "");
        this.appendContainer();
        this.moveOnTop();
        this.bindGlobalListeners();
        this.enableModality();
        const element = this.getElementToFocus();
        if (element) {
          element.focus();
        }
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.onOverlayHide();
        break;
    }
  }
  getElementToFocus() {
    switch (this.option("defaultFocus")) {
      case "accept":
        return DomHandler.findSingle(this.container, ".p-confirm-dialog-accept");
      case "reject":
        return DomHandler.findSingle(this.container, ".p-confirm-dialog-reject");
      case "close":
        return DomHandler.findSingle(this.container, ".p-dialog-header-close");
      case "none":
        return null;
      default:
        return DomHandler.findSingle(this.container, ".p-confirm-dialog-accept");
    }
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body")
        this.document.body.appendChild(this.wrapper);
      else
        DomHandler.appendChild(this.wrapper, this.appendTo);
    }
  }
  restoreAppend() {
    if (this.wrapper && this.appendTo) {
      this.el.nativeElement.appendChild(this.wrapper);
    }
  }
  enableModality() {
    if (this.option("blockScroll")) {
      DomHandler.addClass(this.document.body, "p-overflow-hidden");
    }
    if (this.option("dismissableMask")) {
      this.maskClickListener = this.renderer.listen(this.wrapper, "mousedown", (event) => {
        if (this.wrapper && this.wrapper.isSameNode(event.target)) {
          this.close(event);
        }
      });
    }
  }
  disableModality() {
    this.maskVisible = false;
    if (this.option("blockScroll")) {
      DomHandler.removeClass(this.document.body, "p-overflow-hidden");
    }
    if (this.dismissableMask) {
      this.unbindMaskClickListener();
    }
    if (this.container && !this.cd["destroyed"]) {
      this.cd.detectChanges();
    }
  }
  createStyle() {
    if (!this.styleElement) {
      this.styleElement = this.document.createElement("style");
      this.styleElement.type = "text/css";
      this.document.head.appendChild(this.styleElement);
      let innerHTML = "";
      for (let breakpoint in this.breakpoints) {
        innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-dialog[${this.id}] {
                            width: ${this.breakpoints[breakpoint]} !important;
                        }
                    }
                `;
      }
      this.styleElement.innerHTML = innerHTML;
    }
  }
  close(event) {
    if (this.confirmation?.rejectEvent) {
      this.confirmation.rejectEvent.emit(ConfirmEventType.CANCEL);
    }
    this.hide(ConfirmEventType.CANCEL);
    event.preventDefault();
  }
  hide(type) {
    this.onHide.emit(type);
    this.visible = false;
    this.confirmation = null;
    this.confirmationOptions = null;
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("modal", this.container, this.baseZIndex + this.config.zIndex.modal);
      this.wrapper.style.zIndex = String(parseInt(this.container.style.zIndex, 10) - 1);
    }
  }
  getMaskClass() {
    let maskClass = {
      "p-dialog-mask p-component-overlay": true,
      "p-dialog-mask-scrollblocker": this.blockScroll
    };
    maskClass[this.getPositionClass().toString()] = true;
    return maskClass;
  }
  getPositionClass() {
    const positions = ["left", "right", "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"];
    const pos = positions.find((item) => item === this.position);
    return pos ? `p-dialog-${pos}` : "";
  }
  bindGlobalListeners() {
    if (this.option("closeOnEscape") && this.closable || this.focusTrap && !this.documentEscapeListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentEscapeListener = this.renderer.listen(documentTarget, "keydown", (event) => {
        if (event.which == 27 && this.option("closeOnEscape") && this.closable) {
          if (parseInt(this.container.style.zIndex) === zindexutils.get(this.container) && this.visible) {
            this.close(event);
          }
        }
        if (event.which === 9 && this.focusTrap) {
          event.preventDefault();
          let focusableElements = DomHandler.getFocusableElements(this.container);
          if (focusableElements && focusableElements.length > 0) {
            if (!focusableElements[0].ownerDocument.activeElement) {
              focusableElements[0].focus();
            } else {
              let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
              if (event.shiftKey) {
                if (focusedIndex == -1 || focusedIndex === 0)
                  focusableElements[focusableElements.length - 1].focus();
                else
                  focusableElements[focusedIndex - 1].focus();
              } else {
                if (focusedIndex == -1 || focusedIndex === focusableElements.length - 1)
                  focusableElements[0].focus();
                else
                  focusableElements[focusedIndex + 1].focus();
              }
            }
          }
        }
      });
    }
  }
  unbindGlobalListeners() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  onOverlayHide() {
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.disableModality();
    this.unbindGlobalListeners();
    this.container = null;
  }
  destroyStyle() {
    if (this.styleElement) {
      this.document.head.removeChild(this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    this.restoreAppend();
    this.onOverlayHide();
    this.subscription.unsubscribe();
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    this.destroyStyle();
  }
  accept() {
    if (this.confirmation && this.confirmation.acceptEvent) {
      this.confirmation.acceptEvent.emit();
    }
    this.hide(ConfirmEventType.ACCEPT);
  }
  reject() {
    if (this.confirmation && this.confirmation.rejectEvent) {
      this.confirmation.rejectEvent.emit(ConfirmEventType.REJECT);
    }
    this.hide(ConfirmEventType.REJECT);
  }
  get acceptButtonLabel() {
    return this.option("acceptLabel") || this.config.getTranslation(TranslationKeys.ACCEPT);
  }
  get rejectButtonLabel() {
    return this.option("rejectLabel") || this.config.getTranslation(TranslationKeys.REJECT);
  }
  static ɵfac = function ConfirmDialog_Factory(t) {
    return new (t || _ConfirmDialog)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ConfirmationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(DOCUMENT));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ConfirmDialog,
    selectors: [["p-confirmDialog"]],
    contentQueries: function ConfirmDialog_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, Footer, 5);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footer = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function ConfirmDialog_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      header: "header",
      icon: "icon",
      message: "message",
      style: "style",
      styleClass: "styleClass",
      maskStyleClass: "maskStyleClass",
      acceptIcon: "acceptIcon",
      acceptLabel: "acceptLabel",
      closeAriaLabel: "closeAriaLabel",
      acceptAriaLabel: "acceptAriaLabel",
      acceptVisible: "acceptVisible",
      rejectIcon: "rejectIcon",
      rejectLabel: "rejectLabel",
      rejectAriaLabel: "rejectAriaLabel",
      rejectVisible: "rejectVisible",
      acceptButtonStyleClass: "acceptButtonStyleClass",
      rejectButtonStyleClass: "rejectButtonStyleClass",
      closeOnEscape: "closeOnEscape",
      dismissableMask: "dismissableMask",
      blockScroll: "blockScroll",
      rtl: "rtl",
      closable: "closable",
      appendTo: "appendTo",
      key: "key",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      transitionOptions: "transitionOptions",
      focusTrap: "focusTrap",
      defaultFocus: "defaultFocus",
      breakpoints: "breakpoints",
      visible: "visible",
      position: "position"
    },
    outputs: {
      onHide: "onHide"
    },
    ngContentSelectors: _c6,
    decls: 1,
    vars: 1,
    consts: [[3, "class", "ngClass", 4, "ngIf"], [3, "ngClass"], ["role", "alertdialog", 3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["role", "alertdialog", 3, "ngClass", "ngStyle"], ["class", "p-dialog-header", 4, "ngIf"], [1, "p-dialog-content"], ["content", ""], [3, "ngClass", "class", 4, "ngIf"], [4, "ngIf"], ["class", "p-confirm-dialog-message", 3, "innerHTML", 4, "ngIf"], ["class", "p-dialog-footer", 4, "ngIf"], [1, "p-dialog-header"], [4, "ngTemplateOutlet"], ["class", "p-dialog-title", 3, "id", 4, "ngIf"], [1, "p-dialog-header-icons"], ["type", "button", "role", "button", 3, "ngClass", "click", "keydown.enter", 4, "ngIf"], [1, "p-dialog-title", 3, "id"], ["type", "button", "role", "button", 3, "ngClass", "click", "keydown.enter"], [1, "p-confirm-dialog-message", 3, "innerHTML"], [1, "p-dialog-footer"], ["type", "button", "pRipple", "", "pButton", "", 3, "label", "ngClass", "class", "click", 4, "ngIf"], ["type", "button", "pRipple", "", "pButton", "", 3, "label", "ngClass", "click"], ["class", "p-button-icon-left", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-button-icon-left"]],
    template: function ConfirmDialog_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c5);
        ɵɵtemplate(0, ConfirmDialog_div_0_Template, 2, 4, "div", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.maskVisible);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, ButtonDirective, Ripple, TimesIcon, CheckIcon],
    styles: ["@layer primeng{.p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialog, [{
    type: Component,
    args: [{
      selector: "p-confirmDialog",
      template: `
        <div [class]="maskStyleClass" [ngClass]="getMaskClass()" *ngIf="maskVisible">
            <div
                [ngClass]="{ 'p-dialog p-confirm-dialog p-component': true, 'p-dialog-rtl': rtl }"
                [ngStyle]="style"
                [class]="styleClass"
                [@animation]="{ value: 'visible', params: { transform: transformOptions, transition: transitionOptions } }"
                (@animation.start)="onAnimationStart($event)"
                (@animation.done)="onAnimationEnd($event)"
                role="alertdialog"
                *ngIf="visible"
                [attr.aria-labelledby]="getAriaLabelledBy()"
                [attr.aria-modal]="true"
            >
                <div class="p-dialog-header" *ngIf="headerTemplate">
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                </div>
                <div class="p-dialog-header" *ngIf="!headerTemplate">
                    <span class="p-dialog-title" [id]="getAriaLabelledBy()" *ngIf="option('header')">{{ option('header') }}</span>
                    <div class="p-dialog-header-icons">
                        <button *ngIf="closable" type="button" role="button" [attr.aria-label]="closeAriaLabel" [ngClass]="{ 'p-dialog-header-icon p-dialog-header-close p-link': true }" (click)="close($event)" (keydown.enter)="close($event)">
                            <TimesIcon />
                        </button>
                    </div>
                </div>
                <div #content class="p-dialog-content">
                    <i [ngClass]="'p-confirm-dialog-icon'" [class]="option('icon')" *ngIf="!iconTemplate && option('icon')"></i>
                    <ng-container *ngIf="iconTemplate">
                        <ng-template *ngTemplateOutlet="iconTemplate"></ng-template>
                    </ng-container>
                    <span class="p-confirm-dialog-message" *ngIf="!messageTemplate" [innerHTML]="option('message')"></span>
                    <ng-container *ngIf="messageTemplate">
                        <ng-template *ngTemplateOutlet="messageTemplate"></ng-template>
                    </ng-container>
                </div>
                <div class="p-dialog-footer" *ngIf="footer || footerTemplate">
                    <ng-content select="p-footer"></ng-content>
                    <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                </div>
                <div class="p-dialog-footer" *ngIf="!footer && !footerTemplate">
                    <button
                        type="button"
                        pRipple
                        pButton
                        [label]="rejectButtonLabel"
                        (click)="reject()"
                        [ngClass]="'p-confirm-dialog-reject'"
                        [class]="option('rejectButtonStyleClass')"
                        *ngIf="option('rejectVisible')"
                        [attr.aria-label]="rejectAriaLabel"
                    >
                        <ng-container *ngIf="!rejectIconTemplate">
                            <i *ngIf="option('rejectIcon')" [class]="option('rejectIcon')"></i>
                            <TimesIcon *ngIf="!option('rejectIcon')" [styleClass]="'p-button-icon-left'" />
                        </ng-container>
                        <span *ngIf="rejectIconTemplate" class="p-button-icon-left">
                            <ng-template *ngTemplateOutlet="rejectIconTemplate"></ng-template>
                        </span>
                    </button>
                    <button
                        type="button"
                        pRipple
                        pButton
                        [label]="acceptButtonLabel"
                        (click)="accept()"
                        [ngClass]="'p-confirm-dialog-accept'"
                        [class]="option('acceptButtonStyleClass')"
                        *ngIf="option('acceptVisible')"
                        [attr.aria-label]="acceptAriaLabel"
                    >
                        <ng-container *ngIf="!acceptIconTemplate">
                            <i *ngIf="option('acceptIcon')" [class]="option('acceptIcon')"></i>
                            <CheckIcon *ngIf="!option('acceptIcon')" [styleClass]="'p-button-icon-left'" />
                        </ng-container>
                        <span *ngIf="acceptIconTemplate" class="p-button-icon-left">
                            <ng-template *ngTemplateOutlet="acceptIconTemplate"></ng-template>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    `,
      animations: [trigger("animation", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translateZ(0)}.p-dialog-maximized{transition:none;transform:none;width:100vw!important;height:100vh!important;top:0!important;left:0!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ConfirmationService
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    header: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    message: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    maskStyleClass: [{
      type: Input
    }],
    acceptIcon: [{
      type: Input
    }],
    acceptLabel: [{
      type: Input
    }],
    closeAriaLabel: [{
      type: Input
    }],
    acceptAriaLabel: [{
      type: Input
    }],
    acceptVisible: [{
      type: Input
    }],
    rejectIcon: [{
      type: Input
    }],
    rejectLabel: [{
      type: Input
    }],
    rejectAriaLabel: [{
      type: Input
    }],
    rejectVisible: [{
      type: Input
    }],
    acceptButtonStyleClass: [{
      type: Input
    }],
    rejectButtonStyleClass: [{
      type: Input
    }],
    closeOnEscape: [{
      type: Input
    }],
    dismissableMask: [{
      type: Input
    }],
    blockScroll: [{
      type: Input
    }],
    rtl: [{
      type: Input
    }],
    closable: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    key: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    focusTrap: [{
      type: Input
    }],
    defaultFocus: [{
      type: Input
    }],
    breakpoints: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    onHide: [{
      type: Output
    }],
    footer: [{
      type: ContentChild,
      args: [Footer]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ConfirmDialogModule = class _ConfirmDialogModule {
  static ɵfac = function ConfirmDialogModule_Factory(t) {
    return new (t || _ConfirmDialogModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ConfirmDialogModule,
    declarations: [ConfirmDialog],
    imports: [CommonModule, ButtonModule, RippleModule, TimesIcon, CheckIcon],
    exports: [ConfirmDialog, ButtonModule, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, ButtonModule, RippleModule, TimesIcon, CheckIcon, ButtonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ButtonModule, RippleModule, TimesIcon, CheckIcon],
      exports: [ConfirmDialog, ButtonModule, SharedModule],
      declarations: [ConfirmDialog]
    }]
  }], null, null);
})();
export {
  ConfirmDialog,
  ConfirmDialogModule
};
//# sourceMappingURL=primeng_confirmdialog.js.map
