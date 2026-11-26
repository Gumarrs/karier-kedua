import type { Config } from "tailwindcss";
export default { content:["./app/**/*.tsx","./components/**/*.tsx"],
theme:{extend:{colors:{navy:{DEFAULT:"#0F2A5C",800:"#17387A",700:"#1E4590"},ivory:{DEFAULT:"#FFFFFF",200:"#EEF4FF"},gold:{DEFAULT:"#F5A623",light:"#FFC857",dark:"#C77D0A"}},
fontFamily:{serif:["Georgia","serif"],sans:["system-ui","sans-serif"]}}},plugins:[]} satisfies Config;
