# Nuxt3 dev memo

## set up

```
$ npx nuxi init app-name
```

### start dev server
```
$ yarn dev
```
これで一旦Nuxt3環境は出来上がり

## edit pages

``` app.vue
<NuxtWelcome /> → <NuxtPage />
```
Vue.jsでいうRouter-Vue的なもの

そのあとは`pages/`にvueファイルを追加していくことで自動的にルーティング設定がされていく。

## 