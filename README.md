# Simple MD Shell

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## githubをそのままCMSとして使いたい

Reactでmarkdownを表示するだけの静的コンテンツビューワ。  
シンプルにgithubをCMSとして使おうというコンセプトがあるのみ。ただし現状は取得ページ固定。  

Githubビューワは目指しておらず、固定リポジトリでブログ的な運用がしたい。  

[アプリ本体はどこかにデプロイしっぱなしで、](https://shogotsuneto.github.io/simple-md-shell/)  
[コンテンツを専用リポジトリにプッシュ](https://github.com/shogotsuneto/md-contents)

## 技術的な？

パースやらなんやらにはremark, remark-rehype, rehype-react あたり。  
remarkのプラグインの [remark-aozora-ruby](https://github.com/shogotsuneto/remark-aozora-ruby) のデバッグを兼ねていた。

## 今後
- スタイルをもっとかっちょよく、差し替えも容易に。  
- コンテンツリポジトリ内のファイルを取得して目次を生成。  
- URLのパスから静的に？リポジトリ内の特定コンテンツにアクセスできるように。  