module.exports=function(e){var n={keyword:"abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async nameof ascending descending from get group into join let orderby partial select set value var where yield",literal:"null false true"},i={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},a=e.inherit(i,{illegal:/\n/}),s={className:"subst",begin:"{",end:"}",keywords:n},t=e.inherit(s,{illegal:/\n/}),r={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:"{{"},{begin:"}}"},e.BACKSLASH_ESCAPE,t]},l={className:"string",begin:/\$@"/,end:'"',contains:[{begin:"{{"},{begin:"}}"},{begin:'""'},s]},c=e.inherit(l,{illegal:/\n/,contains:[{begin:"{{"},{begin:"}}"},{begin:'""'},t]});s.contains=[l,r,i,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE],t.contains=[c,r,a,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,e.inherit(e.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];var o={variants:[l,r,i,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},E=e.IDENT_RE+"(<"+e.IDENT_RE+">)?(\\[\\])?";return{aliases:["csharp"],keywords:n,illegal:/::/,contains:[e.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"<!--|-->"},{begin:"</?",end:">"}]}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{"meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"}},o,e.C_NUMBER_MODE,{beginKeywords:"class interface",end:/[{;=]/,illegal:/[^\s:]/,contains:[e.TITLE_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",end:/[{;=]/,illegal:/[^\s:]/,contains:[e.inherit(e.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"new return throw await",relevance:0},{className:"function",begin:"("+E+"\\s+)+"+e.IDENT_RE+"\\s*\\(",returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:n,contains:[{begin:e.IDENT_RE+"\\s*\\(",returnBegin:!0,contains:[e.TITLE_MODE],relevance:0},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,relevance:0,contains:[o,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}]}};