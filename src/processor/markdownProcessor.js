import unified from 'unified'
import parse from 'remark-parse'
import sectionize from 'remark-sectionize'
import remarkBreaks from 'remark-breaks'
import remarkAozoraRuby from 'remark-aozora-ruby'

export default unified()
  .use(parse)
  .use(remarkAozoraRuby)
  .use(remarkBreaks)
  .use(sectionize)
  .freeze()