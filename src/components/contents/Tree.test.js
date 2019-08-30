import React from 'react'
import renderer from 'react-test-renderer'

import Tree from './Tree'
import processor from '../../processor/markdownProcessor'

const headers = `
# Header1
## Header2
### Header3
#### Header4
##### Header5
###### Header6
`

const paragraphs = `
paragraph 1

paragraph 2
`

const breaks = `
paragraph  
should break  
should break
`

const ruby = `
振仮名《ふりがな》のテスト。
`

const table = `
| foo | bar | baz |
| :-- | :-: |  -   |
| qux | ｜quux《nested》 | corge |
`

const codeblock = [
  '```js',
  'const md2React = mdText =>',
  '  processor',
  '    .run(processor.parse(mdText))',
  '    .then(node => renderer.create(<Tree node={node} />).toJSON())',
  '```'
].join('\n')

const md2React = mdText =>
  processor
    .run(processor.parse(mdText))
    .then(node => renderer.create(<Tree node={node} />).toJSON())

test('it renders headers', () => {
  md2React(headers).then(tree => expect(tree).toMatchSnapshot())
})

test('it renders paragraphs', () => {
  md2React(paragraphs).then(tree => expect(tree).toMatchSnapshot())
})

test('it renders breaks', () => {
  md2React(breaks).then(tree => expect(tree).toMatchSnapshot())
})

test('it renders ruby', () => {
  md2React(ruby).then(tree => expect(tree).toMatchSnapshot())
})

test('it renders table', () => {
  md2React(table).then(tree => expect(tree).toMatchSnapshot())
})

test('it renders codeblock', () => {
  md2React(codeblock).then(tree => expect(tree).toMatchSnapshot())
})
