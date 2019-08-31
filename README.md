# Simple MD Shell

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## githubをそのままCMSとして使いたい

Reactでmarkdownを表示するだけの静的コンテンツビューワ。  
シンプルにgithubをCMSとして使おうというコンセプト。 

~~Githubビューワは目指しておらず、固定リポジトリでブログ的な運用がしたい。~~  
未認証アクセス数の制限（60/h/IP）があるためGithub認証を導入したほうが良さそうだが、  
そこまでやるなら簡易的なGithubビューワ程度は目指すかもしれない。

[アプリ本体はどこかにデプロイしっぱなしで](https://shogotsuneto.github.io/simple-md-shell/)、  
[コンテンツを専用リポジトリにプッシュ](https://github.com/shogotsuneto/md-contents)

## 技術的な？

パースやらなんやらにはremark。
当初はremarkのプラグインの [remark-aozora-ruby](https://github.com/shogotsuneto/remark-aozora-ruby) のデバッグを兼ねていた。

### Rehype を使わない理由

remark-react や remark-rehype + rehype-react をなぜ使わないのかというと、青空文庫コンテンツの表示でbreak直後の全角スペースが取り除かれてしまったから（hAST時点で）。  
あとは諸々の勉強も兼ねて。

## 今後
- スタイルをもっとかっちょよく、差し替えも容易に。  
- ~~コンテンツリポジトリ内のファイルを取得して目次を生成。~~  
- ~~URLのパスから静的に？リポジトリ内の特定コンテンツにアクセスできるように。~~  
- Github認証
