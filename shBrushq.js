/**
 *	Author: Simon Garland
 */
SyntaxHighlighter.brushes.q = function()
{
  var keywords = 'in within like bin binr ss if do while exec ' +
    'select insert update delete avg last sum prd min max ' +
    'wsum wavg div xexp abs sqrt log exp sin asin ' +
    'cos acos tan atan exit getenv setenv from by';

  var functions = 'aj aj0 all and any asc asof attr avgs ceiling ' +
    'cols cor count cov cross csv cut deltas desc dev ' +
    'differ distinct each ej enlist eval except fby fills first ' +
    'fkeys flip floor get group gtime hclose hcount hdel hopen ' +
    'hsym iasc idesc ij inter inv key keys lj ljf ' +
    'load lower lsq ltime ltrim mavg maxs mcount md5 mdev ' +
    'med meta mins mmax mmin mmu mod msum neg next ' +
    'not null or over parse peach pj prds prev prior ' +
    'rand rank ratios raze read0 read1 reciprocal reverse rload rotate ' +
    'rsave rtrim save scan set show signum ssr string sublist ' +
    'sums sv system tables til trim type uj ungroup union ' +
    'upper upsert value var view views vs where wj wj1 ' +
    'ww xasc xbar xcol xcols xdesc xgroup xkey xlog xprev ' +
    'xrank';

  var types = 'guid boolean byte short int long real float char symbol ' +
    'month date datetime time minute second timestamp timespan ' +
    'year month week mm dd ' +
    'hh minute second mm ss uu';

  this.regexList = [
  { regex: /^\/[\t ]*\S+.*|[\t ]+\/.*$/gm,                        css: 'comments' },   // single-line comment
  { regex: /^\/[\t ]*[\r\n]([^\\]|[\r\n])*(^\\[\t ]*[\r\n])*/gm,  css: 'comments' },   // multi-line comment 
  { regex: /\b([\d]+[a-zA-Z]{0,2}(\.[\d]+[m]?)?|0x[a-f0-9]+)\b/gi,css: 'constants' },  // numbers
  { regex: /`[a-zA-Z0-9:.]*/g,                                    css: 'color1' },     // symbol
  { regex: /\.z\.[a-z][a-z]/g,                                    css: 'color2' },     // .z.XX
  { regex: SyntaxHighlighter.regexLib.doubleQuotedString,         css: 'string'},
  { regex: /[0-9]{4}\.[0-9]{2}\.[0-9]{2}[TD]?/gm,                 css: 'constants' },  // date
  { regex: /(0D)?[0-9]{2}:[0-9]{2}(:[0-9]{2})?(\.[0-9]{3,})?/gm,  css: 'constants' },  // time
  { regex: new RegExp(this.getKeywords(keywords), 'gm'),          css: 'keyword' },    // q keywords
  { regex: new RegExp(this.getKeywords(functions), 'gm'),         css: 'functions' },  // q functions
  { regex: new RegExp(this.getKeywords(types), 'gm'),             css: 'preprocessor' }// q types
  ];
}

SyntaxHighlighter.brushes.q.prototype	= new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.q.aliases = ['q', 'kdb+', 'kdb', 'kdbplus', 'kx'];

