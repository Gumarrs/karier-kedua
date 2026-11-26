import type { Config } from "tailwindcss";
export default { content:["./app/**/*.tsx","./components/**/*.tsx"],
theme:{extend:{colors:{navy:{DEFAULT:"#101D2B",800:"#142536",700:"#182A3A"},ivory:{DEFAULT:"#F5F2EA",200:"#EAE5DA"},gold:{DEFAULT:"#B99558",light:"#D5B777",dark:"#A98242"}},
fontFamily:{serif:["Georgia","serif"],sans:["system-ui","sans-serif"]}}},plugins:[]} satisfies Config;
