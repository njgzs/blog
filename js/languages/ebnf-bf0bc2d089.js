module.exports=function(a){var e=a.COMMENT(/\(\*/,/\*\)/),n={className:"attribute",begin:/^[ ]*[a-zA-Z][a-zA-Z-]*([\s-]+[a-zA-Z][a-zA-Z]*)*/},t={className:"meta",begin:/\?.*\?/},i={begin:/=/,end:/;/,contains:[e,t,a.APOS_STRING_MODE,a.QUOTE_STRING_MODE]};return{illegal:/\S/,contains:[e,n,i]}};