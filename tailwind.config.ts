import type { Config } from "tailwindcss";
export default { content:["./app/**/*.tsx","./components/**/*.tsx"],
theme:{extend:{colors:{navy:{DEFAULT:"#142B4A",800:"#1D3A5F",700:"#264A75"},ivory:{DEFAULT:"#FAF8F3",200:"#F1ECE0"},gold:{DEFAULT:"#F4B942",light:"#F8CF72",dark:"#B7861A"},sun:"#F4B942",coral:"#F17C69",teal:"#58B9B0",lav:"#A99AE8",sky:"#8EC9F0",sage:"#A9C6A5"},
fontFamily:{serif:["var(--font-display)","Georgia","serif"],sans:["var(--font-body)","system-ui","sans-serif"]}}},plugins:[]} satisfies Config;
