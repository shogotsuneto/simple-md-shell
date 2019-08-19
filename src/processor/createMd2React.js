import unified from 'unified'
import parse from 'remark-parse'
import sectionize from 'remark-sectionize'
import remarkBreaks from 'remark-breaks'
import remarkAozoraRuby from 'remark-aozora-ruby'
import remark2rehype from 'remark-rehype'
import sanitize from 'rehype-sanitize'
import rehype2react from 'rehype-react'
import gh from 'hast-util-sanitize/lib/github'

const schema = { ...gh, tagNames: [...gh.tagNames, 'section']}

export default ({ createElement, components }) => (
  unified()
    .use(parse)
    .use(sectionize)
    .use(remarkAozoraRuby)
    .use(remarkBreaks)
    .use(remark2rehype)
    .use(sanitize, schema)
    .use(rehype2react, { createElement, components })
    .freeze()
)