import { guide } from "./guide";

import type { HopeThemeSidebarArrayConfig } from "vuepress-theme-hope";

export const miniapp: HopeThemeSidebarArrayConfig = [
  "README.md",
  {
    text: "小程序教程",
    icon: "creative",
    prefix: "guide/",
    children: guide,
  },
  {
    text: "开发者工具",
    icon: "tool",
    prefix: "tools/",
    children: ["README.md", "interface.md", "debug.md", "npm.md", "audit.md"],
  },
  {
    text: "小程序框架",
    icon: "frame",
    prefix: "framework/",
    children: [
      "README.md",
      "simple-debug.md",
      "tag-list.md",
      "page.md",
      "demo.md",
    ],
  },
  "qr-code.md",
];