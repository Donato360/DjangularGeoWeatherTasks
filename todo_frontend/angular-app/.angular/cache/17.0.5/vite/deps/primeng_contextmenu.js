import {
  AngleRightIcon
} from "./chunk-AWUT5HOK.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-2VH47W73.js";
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
  style,
  transition,
  trigger
} from "./chunk-EHESWTXC.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-W4372NEM.js";
import "./chunk-NHXXYOX4.js";
import "./chunk-NOYAALQX.js";
import {
  ObjectUtils,
  OverlayService,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  UniqueComponentId,
  zindexutils
} from "./chunk-WWZ6JMK3.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-BWY5BSXV.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  __spreadProps,
  __spreadValues,
  effect,
  forwardRef,
  setClassMetadata,
  signal,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-YADDX5AH.js";

// node_modules/primeng/fesm2022/primeng-contextmenu.mjs
var _c0 = ["sublist"];
function ContextMenuSub_ul_0_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 6);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext().$implicit;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵstyleMap(ctx_r5.getItemProp(processedItem_r3, "style"));
    ɵɵproperty("ngClass", ctx_r5.getSeparatorItemClass(processedItem_r3));
    ɵɵattribute("id", ctx_r5.getItemId(processedItem_r3))("data-pc-section", "separator");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r14.getItemProp(processedItem_r3, "icon"))("ngStyle", ctx_r14.getItemProp(processedItem_r3, "iconStyle"));
    ɵɵattribute("data-pc-section", "icon")("aria-hidden", true)("tabindex", -1);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r15.getItemLabel(processedItem_r3), " ");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r16.getItemLabel(processedItem_r3), ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "label");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r18.getItemProp(processedItem_r3, "badgeStyleClass"));
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r18.getItemProp(processedItem_r3, "badge"));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 25);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
  if (rf & 2) {
    ɵɵproperty("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_AngleRightIcon_1_Template, 1, 3, "AngleRightIcon", 23)(2, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_2_Template, 1, 2, null, 24);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(6);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r19.contextMenu.submenuIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r19.contextMenu.submenuIconTemplate);
  }
}
var _c1 = (a1) => ({
  "p-menuitem-link": true,
  "p-disabled": a1
});
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 14);
    ɵɵtemplate(1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_1_Template, 1, 5, "span", 15)(2, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_2_Template, 2, 2, "span", 16)(3, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_template_3_Template, 1, 2, "ng-template", null, 17, ɵɵtemplateRefExtractor)(5, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_span_5_Template, 2, 2, "span", 18)(6, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_ng_container_6_Template, 3, 2, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r17 = ɵɵreference(4);
    const processedItem_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵproperty("target", ctx_r12.getItemProp(processedItem_r3, "target"))("ngClass", ɵɵpureFunction1(12, _c1, ctx_r12.getItemProp(processedItem_r3, "disabled")));
    ɵɵattribute("href", ctx_r12.getItemProp(processedItem_r3, "url"), ɵɵsanitizeUrl)("aria-hidden", true)("data-automationid", ctx_r12.getItemProp(processedItem_r3, "automationId"))("data-pc-section", "action")("tabindex", -1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r12.getItemProp(processedItem_r3, "icon"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r12.getItemProp(processedItem_r3, "escape"))("ngIfElse", _r17);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r12.getItemProp(processedItem_r3, "badge"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r12.isItemGroup(processedItem_r3));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r28 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r28.getItemProp(processedItem_r3, "icon"))("ngStyle", ctx_r28.getItemProp(processedItem_r3, "iconStyle"));
    ɵɵattribute("data-pc-section", "icon")("aria-hidden", true)("tabindex", -1);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r29 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r29.getItemLabel(processedItem_r3), " ");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r30 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r30.getItemLabel(processedItem_r3), ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "label");
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r32 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r32.getItemProp(processedItem_r3, "badgeStyleClass"));
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r32.getItemProp(processedItem_r3, "badge"));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_AngleRightIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 25);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
  if (rf & 2) {
    ɵɵproperty("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_AngleRightIcon_1_Template, 1, 3, "AngleRightIcon", 23)(2, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_2_Template, 1, 2, null, 24);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r33 = ɵɵnextContext(6);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r33.contextMenu.submenuIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r33.contextMenu.submenuIconTemplate);
  }
}
var _c2 = () => ({
  exact: false
});
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 26);
    ɵɵtemplate(1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_1_Template, 1, 5, "span", 15)(2, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_2_Template, 2, 2, "span", 16)(3, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_template_3_Template, 1, 2, "ng-template", null, 17, ɵɵtemplateRefExtractor)(5, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_span_5_Template, 2, 2, "span", 18)(6, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_ng_container_6_Template, 3, 2, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r31 = ɵɵreference(4);
    const processedItem_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵproperty("routerLink", ctx_r13.getItemProp(processedItem_r3, "routerLink"))("queryParams", ctx_r13.getItemProp(processedItem_r3, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r13.getItemProp(processedItem_r3, "routerLinkActiveOptions") || ɵɵpureFunction0(21, _c2))("target", ctx_r13.getItemProp(processedItem_r3, "target"))("ngClass", ɵɵpureFunction1(22, _c1, ctx_r13.getItemProp(processedItem_r3, "disabled")))("fragment", ctx_r13.getItemProp(processedItem_r3, "fragment"))("queryParamsHandling", ctx_r13.getItemProp(processedItem_r3, "queryParamsHandling"))("preserveFragment", ctx_r13.getItemProp(processedItem_r3, "preserveFragment"))("skipLocationChange", ctx_r13.getItemProp(processedItem_r3, "skipLocationChange"))("replaceUrl", ctx_r13.getItemProp(processedItem_r3, "replaceUrl"))("state", ctx_r13.getItemProp(processedItem_r3, "state"));
    ɵɵattribute("data-automationid", ctx_r13.getItemProp(processedItem_r3, "automationId"))("tabindex", -1)("aria-hidden", true)("data-pc-section", "action");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r13.getItemProp(processedItem_r3, "icon"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r13.getItemProp(processedItem_r3, "escape"))("ngIfElse", _r31);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r13.getItemProp(processedItem_r3, "badge"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r13.isItemGroup(processedItem_r3));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_1_Template, 7, 14, "a", 12)(2, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_a_2_Template, 7, 24, "a", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r9.getItemProp(processedItem_r3, "routerLink"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.getItemProp(processedItem_r3, "routerLink"));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var _c3 = (a0) => ({
  $implicit: a0
});
function ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_1_Template, 1, 0, null, 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r10.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, processedItem_r3.item));
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_p_contextMenuSub_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-contextMenuSub", 28);
    ɵɵlistener("itemClick", function ContextMenuSub_ul_0_ng_template_2_li_1_p_contextMenuSub_5_Template_p_contextMenuSub_itemClick_0_listener($event) {
      ɵɵrestoreView(_r47);
      const ctx_r46 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r46.itemClick.emit($event));
    })("itemMouseEnter", function ContextMenuSub_ul_0_ng_template_2_li_1_p_contextMenuSub_5_Template_p_contextMenuSub_itemMouseEnter_0_listener($event) {
      ɵɵrestoreView(_r47);
      const ctx_r48 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r48.onItemMouseEnter($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵproperty("items", processedItem_r3.items)("itemTemplate", ctx_r11.itemTemplate)("menuId", ctx_r11.menuId)("visible", ctx_r11.isItemActive(processedItem_r3) && ctx_r11.isItemGroup(processedItem_r3))("activeItemPath", ctx_r11.activeItemPath)("focusedItemId", ctx_r11.focusedItemId)("level", ctx_r11.level + 1);
  }
}
function ContextMenuSub_ul_0_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 7, 8)(2, "div", 9);
    ɵɵlistener("click", function ContextMenuSub_ul_0_ng_template_2_li_1_Template_div_click_2_listener($event) {
      ɵɵrestoreView(_r52);
      const processedItem_r3 = ɵɵnextContext().$implicit;
      const ctx_r50 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r50.onItemClick($event, processedItem_r3));
    })("mouseenter", function ContextMenuSub_ul_0_ng_template_2_li_1_Template_div_mouseenter_2_listener($event) {
      ɵɵrestoreView(_r52);
      const processedItem_r3 = ɵɵnextContext().$implicit;
      const ctx_r53 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r53.onItemMouseEnter({
        $event,
        processedItem: processedItem_r3
      }));
    });
    ɵɵtemplate(3, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_3_Template, 3, 2, "ng-container", 10)(4, ContextMenuSub_ul_0_ng_template_2_li_1_ng_container_4_Template, 2, 4, "ng-container", 10);
    ɵɵelementEnd();
    ɵɵtemplate(5, ContextMenuSub_ul_0_ng_template_2_li_1_p_contextMenuSub_5_Template, 1, 7, "p-contextMenuSub", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r55 = ɵɵnextContext();
    const processedItem_r3 = ctx_r55.$implicit;
    const index_r4 = ctx_r55.index;
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r6.getItemProp(processedItem_r3, "styleClass"));
    ɵɵproperty("ngStyle", ctx_r6.getItemProp(processedItem_r3, "style"))("ngClass", ctx_r6.getItemClass(processedItem_r3))("tooltipOptions", ctx_r6.getItemProp(processedItem_r3, "tooltipOptions"));
    ɵɵattribute("id", ctx_r6.getItemId(processedItem_r3))("data-pc-section", "menuitem")("data-p-highlight", ctx_r6.isItemActive(processedItem_r3))("data-p-focused", ctx_r6.isItemFocused(processedItem_r3))("data-p-disabled", ctx_r6.isItemDisabled(processedItem_r3))("aria-label", ctx_r6.getItemLabel(processedItem_r3))("aria-disabled", ctx_r6.isItemDisabled(processedItem_r3) || void 0)("aria-haspopup", ctx_r6.isItemGroup(processedItem_r3) && !ctx_r6.getItemProp(processedItem_r3, "to") ? "menu" : void 0)("aria-expanded", ctx_r6.isItemGroup(processedItem_r3) ? ctx_r6.isItemActive(processedItem_r3) : void 0)("aria-level", ctx_r6.level + 1)("aria-setsize", ctx_r6.getAriaSetSize())("aria-posinset", ctx_r6.getAriaPosInset(index_r4));
    ɵɵadvance(2);
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r6.itemTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.itemTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.isItemVisible(processedItem_r3) && ctx_r6.isItemGroup(processedItem_r3));
  }
}
function ContextMenuSub_ul_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ContextMenuSub_ul_0_ng_template_2_li_0_Template, 1, 5, "li", 4)(1, ContextMenuSub_ul_0_ng_template_2_li_1_Template, 6, 21, "li", 5);
  }
  if (rf & 2) {
    const processedItem_r3 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r3) && ctx_r2.getItemProp(processedItem_r3, "separator"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.isItemVisible(processedItem_r3) && !ctx_r2.getItemProp(processedItem_r3, "separator"));
  }
}
var _c4 = (a0, a1) => ({
  "p-submenu-list": a0,
  "p-contextmenu-root-list": a1
});
function ContextMenuSub_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 1, 2);
    ɵɵlistener("@overlayAnimation.start", function ContextMenuSub_ul_0_Template_ul_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r57);
      const _r1 = ɵɵreference(1);
      const ctx_r56 = ɵɵnextContext();
      return ɵɵresetView(ctx_r56.onEnter($event, _r1));
    })("keydown", function ContextMenuSub_ul_0_Template_ul_keydown_0_listener($event) {
      ɵɵrestoreView(_r57);
      const ctx_r58 = ɵɵnextContext();
      return ɵɵresetView(ctx_r58.menuKeydown.emit($event));
    })("focus", function ContextMenuSub_ul_0_Template_ul_focus_0_listener($event) {
      ɵɵrestoreView(_r57);
      const ctx_r59 = ɵɵnextContext();
      return ɵɵresetView(ctx_r59.menuFocus.emit($event));
    })("blur", function ContextMenuSub_ul_0_Template_ul_blur_0_listener($event) {
      ɵɵrestoreView(_r57);
      const ctx_r60 = ɵɵnextContext();
      return ɵɵresetView(ctx_r60.menuBlur.emit($event));
    });
    ɵɵtemplate(2, ContextMenuSub_ul_0_ng_template_2_Template, 2, 2, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(10, _c4, !ctx_r0.root, ctx_r0.root))("@overlayAnimation", ctx_r0.visible)("tabindex", ctx_r0.tabindex);
    ɵɵattribute("id", ctx_r0.menuId + "_list")("aria-label", ctx_r0.ariaLabel)("aria-labelledBy", ctx_r0.ariaLabelledBy)("aria-activedescendant", ctx_r0.focusedItemId)("aria-orientation", "vertical")("data-pc-section", "menu");
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r0.items);
  }
}
var _c5 = ["rootmenu"];
var _c6 = ["container"];
var _c7 = () => ({
  "p-contextmenu p-component": true,
  "p-contextmenu-overlay": true
});
var _c8 = () => ({
  value: "visible"
});
function ContextMenu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1, 2);
    ɵɵlistener("@overlayAnimation.start", function ContextMenu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function ContextMenu_div_0_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.onOverlayAnimationEnd($event));
    });
    ɵɵelementStart(2, "p-contextMenuSub", 3, 4);
    ɵɵlistener("itemClick", function ContextMenu_div_0_Template_p_contextMenuSub_itemClick_2_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r6 = ɵɵnextContext();
      return ɵɵresetView(ctx_r6.onItemClick($event));
    })("menuFocus", function ContextMenu_div_0_Template_p_contextMenuSub_menuFocus_2_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.onMenuFocus($event));
    })("menuBlur", function ContextMenu_div_0_Template_p_contextMenuSub_menuBlur_2_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.onMenuBlur($event));
    })("menuKeydown", function ContextMenu_div_0_Template_p_contextMenuSub_menuKeydown_2_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.onKeyDown($event));
    })("itemMouseEnter", function ContextMenu_div_0_Template_p_contextMenuSub_itemMouseEnter_2_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.onItemMouseEnter($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction0(20, _c7))("ngStyle", ctx_r0.style)("@overlayAnimation", ɵɵpureFunction0(21, _c8));
    ɵɵattribute("data-pc-section", "root")("data-pc-name", "contextmenu")("id", ctx_r0.id);
    ɵɵadvance(2);
    ɵɵproperty("root", true)("items", ctx_r0.processedItems)("itemTemplate", ctx_r0.itemTemplate)("menuId", ctx_r0.id)("tabindex", !ctx_r0.disabled ? ctx_r0.tabindex : -1)("ariaLabel", ctx_r0.ariaLabel)("ariaLabelledBy", ctx_r0.ariaLabelledBy)("baseZIndex", ctx_r0.baseZIndex)("autoZIndex", ctx_r0.autoZIndex)("visible", ctx_r0.submenuVisible())("focusedItemId", ctx_r0.focused ? ctx_r0.focusedItemId : void 0)("activeItemPath", ctx_r0.activeItemPath());
  }
}
var ContextMenuSub = class _ContextMenuSub {
  document;
  el;
  renderer;
  cd;
  contextMenu;
  ref;
  visible = false;
  items;
  itemTemplate;
  root = false;
  autoZIndex = true;
  baseZIndex = 0;
  popup;
  menuId;
  ariaLabel;
  ariaLabelledBy;
  level = 0;
  focusedItemId;
  activeItemPath;
  tabindex = 0;
  itemClick = new EventEmitter();
  itemMouseEnter = new EventEmitter();
  menuFocus = new EventEmitter();
  menuBlur = new EventEmitter();
  menuKeydown = new EventEmitter();
  sublistViewChild;
  constructor(document, el, renderer, cd, contextMenu, ref) {
    this.document = document;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.contextMenu = contextMenu;
    this.ref = ref;
  }
  getItemProp(processedItem, name, params = null) {
    return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : void 0;
  }
  getItemId(processedItem) {
    return processedItem.item && processedItem.item?.id ? processedItem.item.id : `${this.menuId}_${processedItem.key}`;
  }
  getItemKey(processedItem) {
    return this.getItemId(processedItem);
  }
  getItemClass(processedItem) {
    return __spreadProps(__spreadValues({}, this.getItemProp(processedItem, "class")), {
      "p-menuitem": true,
      "p-highlight": this.isItemActive(processedItem),
      "p-menuitem-active": this.isItemActive(processedItem),
      "p-focus": this.isItemFocused(processedItem),
      "p-disabled": this.isItemDisabled(processedItem)
    });
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  getSeparatorItemClass(processedItem) {
    return __spreadProps(__spreadValues({}, this.getItemProp(processedItem, "class")), {
      "p-menuitem-separator": true
    });
  }
  getAriaSetSize() {
    return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, "separator")).length;
  }
  getAriaPosInset(index) {
    return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, "separator")).length + 1;
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemActive(processedItem) {
    if (this.activeItemPath) {
      return this.activeItemPath.some((path) => path.key === processedItem.key);
    }
  }
  isItemDisabled(processedItem) {
    return this.getItemProp(processedItem, "disabled");
  }
  isItemFocused(processedItem) {
    return this.focusedItemId === this.getItemId(processedItem);
  }
  isItemGroup(processedItem) {
    return ObjectUtils.isNotEmpty(processedItem.items);
  }
  onItemMouseEnter(param) {
    const {
      event,
      processedItem
    } = param;
    this.itemMouseEnter.emit({
      originalEvent: event,
      processedItem
    });
  }
  onItemClick(event, processedItem) {
    this.getItemProp(processedItem, "command", {
      originalEvent: event,
      item: processedItem.item
    });
    this.itemClick.emit({
      originalEvent: event,
      processedItem,
      isFocus: true
    });
  }
  onEnter(event, sublist) {
    if (event.fromState === "void" && event.toState) {
      const sublist2 = event.element;
      this.position(sublist2);
    }
  }
  position(sublist) {
    const parentItem = sublist.parentElement.parentElement;
    const containerOffset = DomHandler.getOffset(sublist.parentElement.parentElement);
    const viewport = DomHandler.getViewport();
    const sublistWidth = sublist.offsetParent ? sublist.offsetWidth : DomHandler.getHiddenElementOuterWidth(sublist);
    const itemOuterWidth = DomHandler.getOuterWidth(parentItem.children[0]);
    sublist.style.top = "0px";
    if (parseInt(containerOffset.left, 10) + itemOuterWidth + sublistWidth > viewport.width - DomHandler.calculateScrollbarWidth()) {
      sublist.style.left = -1 * sublistWidth + "px";
    } else {
      sublist.style.left = itemOuterWidth + "px";
    }
  }
  static ɵfac = function ContextMenuSub_Factory(t) {
    return new (t || _ContextMenuSub)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(forwardRef(() => ContextMenu)), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ContextMenuSub,
    selectors: [["p-contextMenuSub"]],
    viewQuery: function ContextMenuSub_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sublistViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      visible: "visible",
      items: "items",
      itemTemplate: "itemTemplate",
      root: "root",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      popup: "popup",
      menuId: "menuId",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      level: "level",
      focusedItemId: "focusedItemId",
      activeItemPath: "activeItemPath",
      tabindex: "tabindex"
    },
    outputs: {
      itemClick: "itemClick",
      itemMouseEnter: "itemMouseEnter",
      menuFocus: "menuFocus",
      menuBlur: "menuBlur",
      menuKeydown: "menuKeydown"
    },
    decls: 1,
    vars: 1,
    consts: [["role", "menu", 3, "ngClass", "tabindex", "keydown", "focus", "blur", 4, "ngIf"], ["role", "menu", 3, "ngClass", "tabindex", "keydown", "focus", "blur"], ["sublist", ""], ["ngFor", "", 3, "ngForOf"], ["role", "separator", 3, "style", "ngClass", 4, "ngIf"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "class", "tooltipOptions", 4, "ngIf"], ["role", "separator", 3, "ngClass"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "tooltipOptions"], ["listItem", ""], [1, "p-menuitem-content", 3, "click", "mouseenter"], [4, "ngIf"], [3, "items", "itemTemplate", "menuId", "visible", "activeItemPath", "focusedItemId", "level", "itemClick", "itemMouseEnter", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "items", "itemTemplate", "menuId", "visible", "activeItemPath", "focusedItemId", "level", "itemClick", "itemMouseEnter"]],
    template: function ContextMenuSub_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, ContextMenuSub_ul_0_Template, 3, 13, "ul", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.root ? true : ctx.visible);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Ripple, Tooltip, AngleRightIcon, _ContextMenuSub],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0
      })]), transition(":leave", [style({
        opacity: 0
      })])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuSub, [{
    type: Component,
    args: [{
      selector: "p-contextMenuSub",
      template: `
        <ul
            *ngIf="root ? true : visible"
            #sublist
            role="menu"
            [ngClass]="{ 'p-submenu-list': !root, 'p-contextmenu-root-list': root }"
            [@overlayAnimation]="visible"
            (@overlayAnimation.start)="onEnter($event, sublist)"
            [attr.id]="menuId + '_list'"
            [tabindex]="tabindex"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledBy]="ariaLabelledBy"
            [attr.aria-activedescendant]="focusedItemId"
            [attr.aria-orientation]="'vertical'"
            [attr.data-pc-section]="'menu'"
            (keydown)="menuKeydown.emit($event)"
            (focus)="menuFocus.emit($event)"
            (blur)="menuBlur.emit($event)"
        >
            <ng-template ngFor let-processedItem [ngForOf]="items" let-index="index">
                <li
                    *ngIf="isItemVisible(processedItem) && getItemProp(processedItem, 'separator')"
                    [attr.id]="getItemId(processedItem)"
                    [style]="getItemProp(processedItem, 'style')"
                    [ngClass]="getSeparatorItemClass(processedItem)"
                    role="separator"
                    [attr.data-pc-section]="'separator'"
                ></li>
                <li
                    #listItem
                    *ngIf="isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')"
                    role="menuitem"
                    [attr.id]="getItemId(processedItem)"
                    [attr.data-pc-section]="'menuitem'"
                    [attr.data-p-highlight]="isItemActive(processedItem)"
                    [attr.data-p-focused]="isItemFocused(processedItem)"
                    [attr.data-p-disabled]="isItemDisabled(processedItem)"
                    [attr.aria-label]="getItemLabel(processedItem)"
                    [attr.aria-disabled]="isItemDisabled(processedItem) || undefined"
                    [attr.aria-haspopup]="isItemGroup(processedItem) && !getItemProp(processedItem, 'to') ? 'menu' : undefined"
                    [attr.aria-expanded]="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                    [attr.aria-level]="level + 1"
                    [attr.aria-setsize]="getAriaSetSize()"
                    [attr.aria-posinset]="getAriaPosInset(index)"
                    [ngStyle]="getItemProp(processedItem, 'style')"
                    [ngClass]="getItemClass(processedItem)"
                    [class]="getItemProp(processedItem, 'styleClass')"
                    pTooltip
                    [tooltipOptions]="getItemProp(processedItem, 'tooltipOptions')"
                >
                    <div [attr.data-pc-section]="'content'" class="p-menuitem-content" (click)="onItemClick($event, processedItem)" (mouseenter)="onItemMouseEnter({$event, processedItem})">
                        <ng-container *ngIf="!itemTemplate">
                            <a
                                *ngIf="!getItemProp(processedItem, 'routerLink')"
                                [attr.href]="getItemProp(processedItem, 'url')"
                                [attr.aria-hidden]="true"
                                [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                                [attr.data-pc-section]="'action'"
                                [target]="getItemProp(processedItem, 'target')"
                                [ngClass]="{ 'p-menuitem-link': true, 'p-disabled': getItemProp(processedItem, 'disabled') }"
                                [attr.tabindex]="-1"
                                pRipple
                            >
                                <span
                                    *ngIf="getItemProp(processedItem, 'icon')"
                                    class="p-menuitem-icon"
                                    [ngClass]="getItemProp(processedItem, 'icon')"
                                    [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                    [attr.data-pc-section]="'icon'"
                                    [attr.aria-hidden]="true"
                                    [attr.tabindex]="-1"
                                >
                                </span>
                                <span *ngIf="getItemProp(processedItem, 'escape'); else htmlLabel" class="p-menuitem-text" [attr.data-pc-section]="'label'">
                                    {{ getItemLabel(processedItem) }}
                                </span>
                                <ng-template #htmlLabel>
                                    <span class="p-menuitem-text" [innerHTML]="getItemLabel(processedItem)" [attr.data-pc-section]="'label'"></span>
                                </ng-template>
                                <span class="p-menuitem-badge" *ngIf="getItemProp(processedItem, 'badge')" [ngClass]="getItemProp(processedItem, 'badgeStyleClass')">{{ getItemProp(processedItem, 'badge') }}</span>

                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <AngleRightIcon *ngIf="!contextMenu.submenuIconTemplate" [styleClass]="'p-submenu-icon'" [attr.data-pc-section]="'submenuicon'" [attr.aria-hidden]="true" />
                                    <ng-template *ngTemplateOutlet="contextMenu.submenuIconTemplate" [attr.data-pc-section]="'submenuicon'" [attr.aria-hidden]="true"></ng-template>
                                </ng-container>
                            </a>
                            <a
                                *ngIf="getItemProp(processedItem, 'routerLink')"
                                [routerLink]="getItemProp(processedItem, 'routerLink')"
                                [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                                [attr.tabindex]="-1"
                                [attr.aria-hidden]="true"
                                [attr.data-pc-section]="'action'"
                                [queryParams]="getItemProp(processedItem, 'queryParams')"
                                [routerLinkActive]="'p-menuitem-link-active'"
                                [routerLinkActiveOptions]="getItemProp(processedItem, 'routerLinkActiveOptions') || { exact: false }"
                                [target]="getItemProp(processedItem, 'target')"
                                [ngClass]="{ 'p-menuitem-link': true, 'p-disabled': getItemProp(processedItem, 'disabled') }"
                                [fragment]="getItemProp(processedItem, 'fragment')"
                                [queryParamsHandling]="getItemProp(processedItem, 'queryParamsHandling')"
                                [preserveFragment]="getItemProp(processedItem, 'preserveFragment')"
                                [skipLocationChange]="getItemProp(processedItem, 'skipLocationChange')"
                                [replaceUrl]="getItemProp(processedItem, 'replaceUrl')"
                                [state]="getItemProp(processedItem, 'state')"
                                pRipple
                            >
                                <span
                                    *ngIf="getItemProp(processedItem, 'icon')"
                                    class="p-menuitem-icon"
                                    [ngClass]="getItemProp(processedItem, 'icon')"
                                    [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                    [attr.data-pc-section]="'icon'"
                                    [attr.aria-hidden]="true"
                                    [attr.tabindex]="-1"
                                >
                                </span>
                                <span *ngIf="getItemProp(processedItem, 'escape'); else htmlLabel" class="p-menuitem-text" [attr.data-pc-section]="'label'">
                                    {{ getItemLabel(processedItem) }}
                                </span>
                                <ng-template #htmlLabel>
                                    <span class="p-menuitem-text" [innerHTML]="getItemLabel(processedItem)" [attr.data-pc-section]="'label'"></span>
                                </ng-template>
                                <span class="p-menuitem-badge" *ngIf="getItemProp(processedItem, 'badge')" [ngClass]="getItemProp(processedItem, 'badgeStyleClass')">{{ getItemProp(processedItem, 'badge') }}</span>

                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <AngleRightIcon *ngIf="!contextMenu.submenuIconTemplate" [styleClass]="'p-submenu-icon'" [attr.data-pc-section]="'submenuicon'" [attr.aria-hidden]="true" />
                                    <ng-template *ngTemplateOutlet="contextMenu.submenuIconTemplate" [attr.data-pc-section]="'submenuicon'" [attr.aria-hidden]="true"></ng-template>
                                </ng-container>
                            </a>
                        </ng-container>
                        <ng-container *ngIf="itemTemplate">
                            <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: processedItem.item }"></ng-template>
                        </ng-container>
                    </div>

                    <p-contextMenuSub
                        *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem)"
                        [items]="processedItem.items"
                        [itemTemplate]="itemTemplate"
                        [menuId]="menuId"
                        [visible]="isItemActive(processedItem) && isItemGroup(processedItem)"
                        [activeItemPath]="activeItemPath"
                        [focusedItemId]="focusedItemId"
                        [level]="level + 1"
                        (itemClick)="itemClick.emit($event)"
                        (itemMouseEnter)="onItemMouseEnter($event)"
                    ></p-contextMenuSub>
                </li>
            </ng-template>
        </ul>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0
      })]), transition(":leave", [style({
        opacity: 0
      })])])],
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: ContextMenu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => ContextMenu)]
    }]
  }, {
    type: ViewContainerRef
  }], {
    visible: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    root: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    popup: [{
      type: Input
    }],
    menuId: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    level: [{
      type: Input
    }],
    focusedItemId: [{
      type: Input
    }],
    activeItemPath: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    itemMouseEnter: [{
      type: Output
    }],
    menuFocus: [{
      type: Output
    }],
    menuBlur: [{
      type: Output
    }],
    menuKeydown: [{
      type: Output
    }],
    sublistViewChild: [{
      type: ViewChild,
      args: ["sublist"]
    }]
  });
})();
var ContextMenu = class _ContextMenu {
  document;
  platformId;
  el;
  renderer;
  cd;
  config;
  overlayService;
  /**
   * An array of menuitems.
   * @group Props
   */
  set model(value) {
    this._model = value;
    this._processedItems = this.createProcessedItems(this._model || []);
  }
  get model() {
    return this._model;
  }
  /**
   * Event for which the menu must be displayed.
   * @group Props
   */
  triggerEvent = "contextmenu";
  /**
   * Local template variable name of the element to attach the context menu.
   * @group Props
   */
  target;
  /**
   * Attaches the menu to document instead of a particular item.
   * @group Props
   */
  global;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element.
   * @group Props
   */
  appendTo;
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
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Callback to invoke when overlay menu is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  templates;
  rootmenu;
  containerViewChild;
  submenuIconTemplate;
  itemTemplate;
  container;
  outsideClickListener;
  resizeListener;
  triggerEventListener;
  documentClickListener;
  documentTriggerListener;
  pageX;
  pageY;
  visible = signal(false);
  relativeAlign;
  window;
  focused = false;
  activeItemPath = signal([]);
  focusedItemInfo = signal({
    index: -1,
    level: 0,
    parentKey: "",
    item: null
  });
  submenuVisible = signal(false);
  searchValue = "";
  searchTimeout;
  _processedItems;
  _model;
  get visibleItems() {
    const processedItem = this.activeItemPath().find((p) => p.key === this.focusedItemInfo().parentKey);
    return processedItem ? processedItem.items : this.processedItems;
  }
  get processedItems() {
    if (!this._processedItems || !this._processedItems.length) {
      this._processedItems = this.createProcessedItems(this.model || []);
    }
    return this._processedItems;
  }
  get focusedItemId() {
    const focusedItem = this.focusedItemInfo();
    return focusedItem.item && focusedItem.item?.id ? focusedItem.item.id : focusedItem.index !== -1 ? `${this.id}${ObjectUtils.isNotEmpty(focusedItem.parentKey) ? "_" + focusedItem.parentKey : ""}_${focusedItem.index}` : null;
  }
  constructor(document, platformId, el, renderer, cd, config, overlayService) {
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.overlayService = overlayService;
    this.window = this.document.defaultView;
    effect(() => {
      const path = this.activeItemPath();
      if (ObjectUtils.isNotEmpty(path)) {
        this.bindGlobalListeners();
      } else if (!this.visible()) {
        this.unbindGlobalListeners();
      }
    });
  }
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
    this.bindTriggerEventListener();
  }
  bindTriggerEventListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.triggerEventListener) {
        if (this.global) {
          this.triggerEventListener = this.renderer.listen(this.document, this.triggerEvent, (event) => {
            this.show(event);
          });
        } else if (this.target) {
          this.triggerEventListener = this.renderer.listen(this.target, this.triggerEvent, (event) => {
            this.show(event);
          });
        }
      }
    }
  }
  bindGlobalListeners() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentClickListener) {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
        this.documentClickListener = this.renderer.listen(documentTarget, "click", (event) => {
          if (this.containerViewChild.nativeElement.offsetParent && this.isOutsideClicked(event) && !event.ctrlKey && event.button !== 2 && this.triggerEvent !== "click") {
            this.hide();
          }
        });
        this.documentTriggerListener = this.renderer.listen(documentTarget, this.triggerEvent, (event) => {
          if (this.containerViewChild.nativeElement.offsetParent && this.isOutsideClicked(event)) {
            this.hide();
          }
        });
      }
      if (!this.resizeListener) {
        this.resizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
          this.hide();
        });
      }
    }
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "submenuicon":
          this.submenuIconTemplate = item.template;
          break;
        case "item":
          this.itemTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  createProcessedItems(items, level = 0, parent = {}, parentKey = "") {
    const processedItems = [];
    items && items.forEach((item, index) => {
      const key = (parentKey !== "" ? parentKey + "_" : "") + index;
      const newItem = {
        item,
        index,
        level,
        key,
        parent,
        parentKey
      };
      newItem["items"] = this.createProcessedItems(item.items, level + 1, newItem, key);
      processedItems.push(newItem);
    });
    return processedItems;
  }
  getItemProp(item, name) {
    return item ? ObjectUtils.getItemValue(item[name]) : void 0;
  }
  getProccessedItemLabel(processedItem) {
    return processedItem ? this.getItemLabel(processedItem.item) : void 0;
  }
  getItemLabel(item) {
    return this.getItemProp(item, "label");
  }
  isProcessedItemGroup(processedItem) {
    return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
  }
  isSelected(processedItem) {
    return this.activeItemPath().some((p) => p.key === processedItem.key);
  }
  isValidSelectedItem(processedItem) {
    return this.isValidItem(processedItem) && this.isSelected(processedItem);
  }
  isValidItem(processedItem) {
    return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item);
  }
  isItemDisabled(item) {
    return this.getItemProp(item, "disabled");
  }
  isItemSeparator(item) {
    return this.getItemProp(item, "separator");
  }
  isItemMatched(processedItem) {
    return this.isValidItem(processedItem) && this.getProccessedItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
  }
  isProccessedItemGroup(processedItem) {
    return processedItem && ObjectUtils.isNotEmpty(processedItem.items);
  }
  onItemClick(event) {
    const {
      processedItem
    } = event;
    const grouped = this.isProcessedItemGroup(processedItem);
    const selected = this.isSelected(processedItem);
    if (selected) {
      const {
        index,
        key,
        level,
        parentKey,
        item
      } = processedItem;
      this.activeItemPath.set(this.activeItemPath().filter((p) => key !== p.key && key.startsWith(p.key)));
      this.focusedItemInfo.set({
        index,
        level,
        parentKey,
        item
      });
      DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
    } else {
      grouped ? this.onItemChange(event) : this.hide();
    }
  }
  onItemMouseEnter(event) {
    this.onItemChange(event);
  }
  onKeyDown(event) {
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event);
        break;
      case "ArrowRight":
        this.onArrowRightKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "PageDown":
      case "PageUp":
      case "Backspace":
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
          this.searchItems(event, event.key);
        }
        break;
    }
  }
  onArrowDownKey(event) {
    const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
    this.changeFocusedItemIndex(event, itemIndex);
    event.preventDefault();
  }
  onArrowRightKey(event) {
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    const grouped = this.isProccessedItemGroup(processedItem);
    if (grouped) {
      this.onItemChange({
        originalEvent: event,
        processedItem
      });
      this.focusedItemInfo.set({
        index: -1,
        parentKey: processedItem.key,
        item: processedItem.item
      });
      this.searchValue = "";
      this.onArrowDownKey(event);
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey) {
      if (this.focusedItemInfo().index !== -1) {
        const processedItem = this.visibleItems[this.focusedItemInfo().index];
        const grouped = this.isProccessedItemGroup(processedItem);
        !grouped && this.onItemChange({
          originalEvent: event,
          processedItem
        });
      }
      this.hide();
      event.preventDefault();
    } else {
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
      this.changeFocusedItemIndex(event, itemIndex);
      event.preventDefault();
    }
  }
  onArrowLeftKey(event) {
    const processedItem = this.visibleItems[this.focusedItemInfo().index];
    const parentItem = this.activeItemPath().find((p) => p.key === processedItem.parentKey);
    const root = ObjectUtils.isEmpty(processedItem.parent);
    if (!root) {
      this.focusedItemInfo.set({
        index: -1,
        parentKey: parentItem ? parentItem.parentKey : "",
        item: processedItem.item
      });
      this.searchValue = "";
      this.onArrowDownKey(event);
    }
    const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== this.focusedItemInfo().parentKey);
    this.activeItemPath.set(activeItemPath);
    event.preventDefault();
  }
  onHomeKey(event) {
    this.changeFocusedItemIndex(event, this.findFirstItemIndex());
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedItemIndex(event, this.findLastItemIndex());
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  onEscapeKey(event) {
    this.hide();
    const processedItem = this.findVisibleItem(this.findFirstFocusedItemIndex());
    const focusedItemInfo = this.focusedItemInfo();
    this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
      index: this.findFirstFocusedItemIndex(),
      item: processedItem.item
    }));
    event.preventDefault();
  }
  onTabKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const grouped = this.isProccessedItemGroup(processedItem);
      !grouped && this.onItemChange({
        originalEvent: event,
        processedItem
      });
    }
    this.hide();
  }
  onEnterKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const element = DomHandler.findSingle(this.rootmenu.el.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
      const anchorElement = element && DomHandler.findSingle(element, 'a[data-pc-section="action"]');
      anchorElement ? anchorElement.click() : element && element.click();
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const grouped = this.isProccessedItemGroup(processedItem);
      if (!grouped) {
        const focusedItemInfo = this.focusedItemInfo();
        this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
          index: this.findFirstFocusedItemIndex()
        }));
      }
    }
    event.preventDefault();
  }
  onItemChange(event) {
    const {
      processedItem,
      isFocus
    } = event;
    if (ObjectUtils.isEmpty(processedItem))
      return;
    const {
      index,
      key,
      level,
      parentKey,
      items
    } = processedItem;
    const grouped = ObjectUtils.isNotEmpty(items);
    const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== parentKey && p.parentKey !== key);
    if (grouped) {
      activeItemPath.push(processedItem);
      this.submenuVisible.set(true);
    }
    this.focusedItemInfo.set({
      index,
      level,
      parentKey,
      item: processedItem.item
    });
    this.activeItemPath.set(activeItemPath);
    isFocus && DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
  }
  onMenuFocus(event) {
    this.focused = true;
    const focusedItemInfo = this.focusedItemInfo().index !== -1 ? this.focusedItemInfo() : {
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    };
    this.focusedItemInfo.set(focusedItemInfo);
  }
  onMenuBlur(event) {
    this.focused = false;
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    });
    this.searchValue = "";
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.container = event.element;
        this.position();
        this.moveOnTop();
        this.appendOverlay();
        this.bindGlobalListeners();
        this.onShow.emit();
        DomHandler.focus(this.rootmenu.sublistViewChild.nativeElement);
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.onOverlayHide();
        break;
    }
  }
  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === "body")
        this.renderer.appendChild(this.document.body, this.containerViewChild.nativeElement);
      else
        DomHandler.appendChild(this.containerViewChild.nativeElement, this.appendTo);
    }
  }
  moveOnTop() {
    if (this.autoZIndex && this.containerViewChild) {
      zindexutils.set("menu", this.containerViewChild.nativeElement, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  onOverlayHide() {
    this.unbindGlobalListeners();
    if (!this.cd.destroyed) {
      this.target = null;
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.container = null;
    this.onHide.emit();
  }
  hide() {
    this.visible.set(false);
    this.activeItemPath.set([]);
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    });
  }
  toggle(event) {
    this.visible() ? this.hide() : this.show(event);
  }
  show(event) {
    this.activeItemPath.set([]);
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    });
    this.pageX = event.pageX;
    this.pageY = event.pageY;
    this.visible() ? this.position() : this.visible.set(true);
    event.stopPropagation();
    event.preventDefault();
  }
  position() {
    let left = this.pageX + 1;
    let top = this.pageY + 1;
    let width = this.containerViewChild.nativeElement.offsetParent ? this.containerViewChild.nativeElement.offsetWidth : DomHandler.getHiddenElementOuterWidth(this.containerViewChild.nativeElement);
    let height = this.containerViewChild.nativeElement.offsetParent ? this.containerViewChild.nativeElement.offsetHeight : DomHandler.getHiddenElementOuterHeight(this.containerViewChild.nativeElement);
    let viewport = DomHandler.getViewport();
    if (left + width - this.document.scrollingElement.scrollLeft > viewport.width) {
      left -= width;
    }
    if (top + height - this.document.scrollingElement.scrollTop > viewport.height) {
      top -= height;
    }
    if (left < this.document.scrollingElement.scrollLeft) {
      left = this.document.scrollingElement.scrollLeft;
    }
    if (top < this.document.scrollingElement.scrollTop) {
      top = this.document.scrollingElement.scrollTop;
    }
    this.containerViewChild.nativeElement.style.left = left + "px";
    this.containerViewChild.nativeElement.style.top = top + "px";
  }
  searchItems(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let itemIndex = -1;
    let matched = false;
    if (this.focusedItemInfo().index !== -1) {
      itemIndex = this.visibleItems.slice(this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem));
      itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem)) : itemIndex + this.focusedItemInfo().index;
    } else {
      itemIndex = this.visibleItems.findIndex((processedItem) => this.isItemMatched(processedItem));
    }
    if (itemIndex !== -1) {
      matched = true;
    }
    if (itemIndex === -1 && this.focusedItemInfo().index === -1) {
      itemIndex = this.findFirstFocusedItemIndex();
    }
    if (itemIndex !== -1) {
      this.changeFocusedItemIndex(event, itemIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  findVisibleItem(index) {
    return ObjectUtils.isNotEmpty(this.visibleItems) ? this.visibleItems[index] : null;
  }
  findLastFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
  }
  findLastItemIndex() {
    return ObjectUtils.findLastIndex(this.visibleItems, (processedItem) => this.isValidItem(processedItem));
  }
  findPrevItemIndex(index) {
    const matchedItemIndex = index > 0 ? ObjectUtils.findLastIndex(this.visibleItems.slice(0, index), (processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex : index;
  }
  findNextItemIndex(index) {
    const matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex((processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
  }
  findFirstFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
  }
  findFirstItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidItem(processedItem));
  }
  findSelectedItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidSelectedItem(processedItem));
  }
  changeFocusedItemIndex(event, index) {
    const processedItem = this.findVisibleItem(index);
    const focusedItemInfo = this.focusedItemInfo();
    if (focusedItemInfo.index !== index) {
      this.focusedItemInfo.set(__spreadProps(__spreadValues({}, focusedItemInfo), {
        index,
        item: processedItem.item
      }));
      this.scrollInView();
    }
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedItemId;
    const element = DomHandler.findSingle(this.rootmenu.el.nativeElement, `li[id="${id}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        this.resizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
          this.hide();
        });
      }
    }
  }
  isOutsideClicked(event) {
    return !(this.containerViewChild.nativeElement.isSameNode(event.target) || this.containerViewChild.nativeElement.contains(event.target));
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  unbindGlobalListeners() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
    if (this.documentTriggerListener) {
      this.documentTriggerListener();
      this.documentTriggerListener = null;
    }
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  unbindTriggerEventListener() {
    if (this.triggerEventListener) {
      this.triggerEventListener();
      this.triggerEventListener = null;
    }
  }
  removeAppendedElements() {
    if (this.appendTo) {
      if (this.appendTo === "body") {
        if (this.containerViewChild) {
          this.renderer.removeChild(this.document.body, this.containerViewChild.nativeElement);
        }
      } else {
        DomHandler.removeChild(this.containerViewChild.nativeElement, this.appendTo);
      }
    }
  }
  ngOnDestroy() {
    this.unbindGlobalListeners();
    this.unbindTriggerEventListener();
    this.removeAppendedElements();
  }
  static ɵfac = function ContextMenu_Factory(t) {
    return new (t || _ContextMenu)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(OverlayService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ContextMenu,
    selectors: [["p-contextMenu"]],
    contentQueries: function ContextMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function ContextMenu_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c5, 5);
        ɵɵviewQuery(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rootmenu = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      model: "model",
      triggerEvent: "triggerEvent",
      target: "target",
      global: "global",
      style: "style",
      styleClass: "styleClass",
      appendTo: "appendTo",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      id: "id",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide"
    },
    decls: 1,
    vars: 1,
    consts: [[3, "ngClass", "class", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["container", ""], [3, "root", "items", "itemTemplate", "menuId", "tabindex", "ariaLabel", "ariaLabelledBy", "baseZIndex", "autoZIndex", "visible", "focusedItemId", "activeItemPath", "itemClick", "menuFocus", "menuBlur", "menuKeydown", "itemMouseEnter"], ["rootmenu", ""]],
    template: function ContextMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, ContextMenu_div_0_Template, 4, 22, "div", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.visible());
      }
    },
    dependencies: [NgClass, NgIf, NgStyle, ContextMenuSub],
    styles: ["@layer primeng{.p-contextmenu{position:absolute}.p-contextmenu ul{margin:0;padding:0;list-style:none}.p-contextmenu .p-submenu-list{position:absolute;min-width:100%;z-index:1}.p-contextmenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-contextmenu .p-menuitem-text{line-height:1}.p-contextmenu .p-menuitem{position:relative}.p-contextmenu .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-contextmenu .p-menuitem-link .p-icon-wrapper{margin-left:auto}}\n"],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0
      }), animate("250ms")]), transition(":leave", [animate(".1s linear", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenu, [{
    type: Component,
    args: [{
      selector: "p-contextMenu",
      template: `
        <div
            #container
            [attr.data-pc-section]="'root'"
            [attr.data-pc-name]="'contextmenu'"
            [attr.id]="id"
            [ngClass]="{ 'p-contextmenu p-component': true, 'p-contextmenu-overlay': true }"
            [class]="styleClass"
            [ngStyle]="style"
            [@overlayAnimation]="{ value: 'visible' }"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
            *ngIf="visible()"
        >
            <p-contextMenuSub
                #rootmenu
                [root]="true"
                [items]="processedItems"
                [itemTemplate]="itemTemplate"
                [menuId]="id"
                [tabindex]="!disabled ? tabindex : -1"
                [ariaLabel]="ariaLabel"
                [ariaLabelledBy]="ariaLabelledBy"
                [baseZIndex]="baseZIndex"
                [autoZIndex]="autoZIndex"
                [visible]="submenuVisible()"
                [focusedItemId]="focused ? focusedItemId : undefined"
                [activeItemPath]="activeItemPath()"
                (itemClick)="onItemClick($event)"
                (menuFocus)="onMenuFocus($event)"
                (menuBlur)="onMenuBlur($event)"
                (menuKeydown)="onKeyDown($event)"
                (itemMouseEnter)="onItemMouseEnter($event)"
            ></p-contextMenuSub>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0
      }), animate("250ms")]), transition(":leave", [animate(".1s linear", style({
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-contextmenu{position:absolute}.p-contextmenu ul{margin:0;padding:0;list-style:none}.p-contextmenu .p-submenu-list{position:absolute;min-width:100%;z-index:1}.p-contextmenu .p-menuitem-link{cursor:pointer;display:flex;align-items:center;text-decoration:none;overflow:hidden;position:relative}.p-contextmenu .p-menuitem-text{line-height:1}.p-contextmenu .p-menuitem{position:relative}.p-contextmenu .p-menuitem-link .p-submenu-icon:not(svg){margin-left:auto}.p-contextmenu .p-menuitem-link .p-icon-wrapper{margin-left:auto}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: PrimeNGConfig
  }, {
    type: OverlayService
  }], {
    model: [{
      type: Input
    }],
    triggerEvent: [{
      type: Input
    }],
    target: [{
      type: Input
    }],
    global: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    rootmenu: [{
      type: ViewChild,
      args: ["rootmenu"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }]
  });
})();
var ContextMenuModule = class _ContextMenuModule {
  static ɵfac = function ContextMenuModule_Factory(t) {
    return new (t || _ContextMenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ContextMenuModule,
    declarations: [ContextMenu, ContextMenuSub],
    imports: [CommonModule, RouterModule, RippleModule, TooltipModule, AngleRightIcon, SharedModule],
    exports: [ContextMenu, RouterModule, TooltipModule, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RouterModule, RippleModule, TooltipModule, AngleRightIcon, SharedModule, RouterModule, TooltipModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, RippleModule, TooltipModule, AngleRightIcon, SharedModule],
      exports: [ContextMenu, RouterModule, TooltipModule, SharedModule],
      declarations: [ContextMenu, ContextMenuSub]
    }]
  }], null, null);
})();
export {
  ContextMenu,
  ContextMenuModule,
  ContextMenuSub
};
//# sourceMappingURL=primeng_contextmenu.js.map
