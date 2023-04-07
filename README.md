# 引用箱
## サービス概要
『引用箱（いんようばこ）』というサービスは、「未知の書籍と出会うきっかけとして、既読した人による書籍の引用から、気になる書籍を探したいが、引用が集まっている場所がない」という問題を解決してくれる、読書が好きな人向けの引用共有サービスです。

ユーザーは書籍の引用を記録することができ、Kindleの共有機能とは違って、自分以外の人の引用記録も見ることができる点が特徴です。

## 実際の画面
- TOPページ

（画像WIP）


## 技術スタック
- Ruby 3.1.2
- Rails 7.0.4.2
- Slim 4.1.0
- Devise 4.9.0
- Rucocop 1.48.0
- ERB-Lint 0.3.1
- Slim-Lint 0.24.0
- jsbundling-rails 1.1.1
  - esbuild 0.17.11
- Tailwind CSS 3.3.1
  - daisyUI 2.51.5
- Node.js 18.12.1
- React 18.2.0
  - TypeScript 4.9.5
- ESLint 2.0.0
- Prettier 2.8.4
- Hotwire
  - Turbo 1.4.0
  - Stimulus 1.2.1
- RSpec 6.0.1
  - Factory_bot 6.2.1
- PostgreSQL
- GitHub Actions
- Docker
- Fly.io

☆ReactとHotwireの両方を使っています。

## ローカルでの環境構築手順
### セットアップ
```
git clone https://github.com/lef237/quotelist.git
bin/setup
yarn
```

### 起動コマンド
```
bin/dev
```

### Lint
```
bin/lint
```

### Test
```
bin/rspec
```
