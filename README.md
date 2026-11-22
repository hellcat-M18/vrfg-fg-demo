# VRFG フレーム生成デモ

ブラウザだけで動く動画のフレーム補間（フレーム生成）のデモです。動画を選ぶと、全フレームを生成して 2x / 4x の動画にし、
元の動画と左右に並べて比べられます。

- デコード・生成・エンコードはすべて、開いた端末のブラウザの中（WebCodecs と WebGPU）で行います。動画はどこにも送信されません。
- 必要なもの：WebGPU と WebCodecs が使えるブラウザ（Chrome / Edge 121 以降）。
- 対応形式：MP4 / MOV（断片化 MP4 を含む）、WebM / MKV、連番画像。コーデックは H.264・HEVC・AV1・VP9・VP8（HEVC はブラウザと GPU が対応している場合のみ）。

## モデル

| モデル | 中身 |
|---|---|
| SPIRE post_gamma（既定） | 共有ピラミッド型の最新補間モデル（δ 後に共有 γ で 1 回仕上げ＋前フレームの flow を引き継ぐ temporal＋止まった箇所の規則つき） |
| SPIRE | 共有ピラミッド型の旧版補間モデル（temporal＋止まった箇所の規則つき） |
| vi_disrule | VRFG の補間モデル（DIS による動き推定と小型 U-Net、止まった箇所の規則つき） |
| RIFE 4.25 lite | 比較用。Practical-RIFE の重み（MIT、THIRD_PARTY_NOTICES.md） |

このリポジトリは、別のリポジトリから `tools/pages.mjs` で書き出したビルド結果です。
