import{c as s,i as e,j as r,k as a,m as o,p as n}from"/physicsmyst/build/_shared/chunk-RMYRWJKG.js";var p=s((u,i)=>{e();r();a();n();o();i.exports=t;t.displayName="mermaid";t.aliases=[];function t(l){l.languages.mermaid={comment:{pattern:/%%.*/,greedy:!0},style:{pattern:/^([ \t]*(?:classDef|linkStyle|style)[ \t]+[\w$-]+[ \t]+)\w.*[^\s;]/m,lookbehind:!0,inside:{property:/\b\w[\w-]*(?=[ \t]*:)/,operator:/:/,punctuation:/,/}},"inter-arrow-label":{pattern:/([^<>ox.=-])(?:-[-.]|==)(?![<>ox.=-])[ \t]*(?:"[^"\r\n]*"|[^\s".=-](?:[^\r\n.=-]*[^\s.=-])?)[ \t]*(?:\.+->?|--+[->]|==+[=>])(?![<>ox.=-])/,lookbehind:!0,greedy:!0,inside:{arrow:{pattern:/(?:\.+->?|--+[->]|==+[=>])$/,alias:"operator"},label:{pattern:/^([\s\S]{2}[ \t]*)\S(?:[\s\S]*\S)?/,lookbehind:!0,alias:"property"},"arrow-head":{pattern:/^\S+/,alias:["arrow","operator"]}}},arrow:[{pattern:/(^|[^{}|o.-])[|}][|o](?:--|\.\.)[|o][|{](?![{}|o.-])/,lookbehind:!0,alias:"operator"},{pattern:/(^|[^<>ox.=-])(?:[<ox](?:==+|--+|-\.*-)[>ox]?|(?:==+|--+|-\.*-)[>ox]|===+|---+|-\.+-)(?![<>ox.=-])/,lookbehind:!0,alias:"operator"},{pattern:/(^|[^<>()x-])(?:--?(?:>>|[x>)])(?![<>()x])|(?:<<|[x<(])--?(?!-))/,lookbehind:!0,alias:"operator"},{pattern:/(^|[^<>|*o.-])(?:[*o]--|--[*o]|<\|?(?:--|\.\.)|(?:--|\.\.)\|?>|--|\.\.)(?![<>|*o.-])/,lookbehind:!0,alias:"operator"}],label:{pattern:/(^|[^|<])\|(?:[^\r\n"|]|"[^"\r\n]*")+\|/,lookbehind:!0,greedy:!0,alias:"property"},text:{pattern:/(?:[(\[{]+|\b>)(?:[^\r\n"()\[\]{}]|"[^"\r\n]*")+(?:[)\]}]+|>)/,alias:"string"},string:{pattern:/"[^"\r\n]*"/,greedy:!0},annotation:{pattern:/<<(?:abstract|choice|enumeration|fork|interface|join|service)>>|\[\[(?:choice|fork|join)\]\]/i,alias:"important"},keyword:[{pattern:/(^[ \t]*)(?:action|callback|class|classDef|classDiagram|click|direction|erDiagram|flowchart|gantt|gitGraph|graph|journey|link|linkStyle|pie|requirementDiagram|sequenceDiagram|stateDiagram|stateDiagram-v2|style|subgraph)(?![\w$-])/m,lookbehind:!0,greedy:!0},{pattern:/(^[ \t]*)(?:activate|alt|and|as|autonumber|deactivate|else|end(?:[ \t]+note)?|loop|opt|par|participant|rect|state|note[ \t]+(?:over|(?:left|right)[ \t]+of))(?![\w$-])/im,lookbehind:!0,greedy:!0}],entity:/#[a-z0-9]+;/,operator:{pattern:/(\w[ \t]*)&(?=[ \t]*\w)|:::|:/,lookbehind:!0},punctuation:/[(){};]/}}});export{p as a};
