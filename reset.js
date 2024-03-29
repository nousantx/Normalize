/*!
 *
 * CSS reseter in JS by nousantx
 *
 * copyright (c) normalize.css by necolas
 *
 */

let type_add_resetter = {
  // Must add
  bdr: ["border"],
  "max-width": ["maxWidth"],
  "min-width": ["minWidth"],
  "max-height": ["maxHeight"],
  "min-height": ["minHeight"],
  py: ["paddingTop", "paddingBottom"],
  px: ["paddingLeft", "paddingRight"],
  "bdr-top": ["borderTop"],
  "bdr-bottom": ["borderBottom"],
  "line-offset": ["outlineOffsite"],
  "-web-adjust-text": ["-webkit-text-size-adjust"],
  "-web-appear": ["-webkit-appearance"],
};

let tui_reset = {
  html: "lh-1.5 -web-adjust-text-100%",
  body: "m-0",
  main: "dis-block",
  h1: "fs-2em mv-0.67em mh-0",
  hr: "box-sizing-[tx_content-box] h-0 over-visible",
  a: "bg-transparent",
  small: "fs-80%",
  sub: "b--0.25em",
  sup: "b--0.5em",
  img: "bs-none",
  fieldset: "ph-0.75em pt-0.35em pb-0.625em",
  legend:
    "box-sizing-[tx_border-box] tc-inherit dis-table w-mx-100% p-0 white-space-normal",
  progress: "v-align-baseline",
  textarea: "over-auto",
  details: "dis-block",
  summary: "dis-[tx_list-item]",
  template: "dis-none",
  "[hidden]": "dis-none",
  "abbr[title]": "bdr-bottom-none td-underline",
  "button, input": "tn-none",
  'button,[type="button"],[type="reset"],[type="submit"]': "-web-appear-button",
  "button,input,optgroup,select,textarea": "family-inherit fs-100% lh-1.5 m-0",
  "sub,sup": "fs-75% lh-0 post-relative v-align-baseline",
  "b,strong": "fw-bolder",
  "pre,code,kbd,samp": "family-monospace fs-1em",
  '[type="checkbox"],[type="radio"]': "box-sizing-[tx_border-box] p-0",
  '[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button':
    "h-auto",
  '[type="search"]::-webkit-search-decoration': "-web-appear-none",
  '[type="search"]': "-web-appear-textfield line-offset--2px",
};

defineProps(type_add_resetter);
makeStyles(tui_reset);
tenoxui();
