module.exports=function(e){var a={literal:"{ } true false yes no Yes No True False null"},n="[a-zA-Z_][\\w\\-]*",s={className:"attr",variants:[{begin:"^[ \\-]*"+n+":"},{begin:'^[ \\-]*"'+n+'":'},{begin:"^[ \\-]*'"+n+"':"}]},i={className:"template-variable",variants:[{begin:"{{",end:"}}"},{begin:"%{",end:"}"}]},l={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/}],contains:[e.BACKSLASH_ESCAPE,i]};return{case_insensitive:!0,aliases:["yml","YAML","yaml"],contains:[s,{className:"meta",begin:"^---s*$",relevance:10},{className:"string",begin:"[\\|>] *$",returnEnd:!0,contains:l.contains,end:s.variants[0].begin},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!!"+e.UNDERSCORE_IDENT_RE},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"^ *-",relevance:0},l,e.HASH_COMMENT_MODE,e.C_NUMBER_MODE],keywords:a}};