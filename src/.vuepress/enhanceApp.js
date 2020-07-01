import MarkdownIt from "markdown-it";
import lazySrc from "./lazySrc.js";
import VRuntimeTemplate from "v-runtime-template";

export default ({ Vue }) => {
  Vue.directive("lazy-src", lazySrc);
  Vue.component("v-runtime-template", VRuntimeTemplate);
  Vue.mixin({
    methods: {
      md: string => {
        const md = new MarkdownIt({ html: true, linkify: true });
        return `<div>${md.render(string)}</div>`;
      }
    }
  });
};
