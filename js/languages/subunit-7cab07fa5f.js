module.exports=function(s){var e={className:"string",begin:"\\[\n(multipart)?",end:"\\]\n"},n={className:"string",begin:"\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}.\\d+Z"},i={className:"string",begin:"(\\+|-)\\d+"},t={className:"keyword",relevance:10,variants:[{begin:"^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?"},{begin:"^progress(:?)(\\s+)?(pop|push)?"},{begin:"^tags:"},{begin:"^time:"}]};return{case_insensitive:!0,contains:[e,n,i,t]}};