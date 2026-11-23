# VRFG フレーム生成デモ

ブラウザだけで動く動画のフレーム補間（フレーム生成）のデモです。動画を選ぶと、全フレームを生成して 2x / 4x の動画にし、
元の動画と左右に並べて比べられます。

- デコード・生成・エンコードはすべて、開いた端末のブラウザの中（WebCodecs と WebGPU）で行います。動画はどこにも送信されません。
- 必要なもの：WebGPU と WebCodecs が使えるブラウザ（Chrome / Edge 121 以降）。
- 対応形式：MP4 / MOV（断片化 MP4 を含む）、WebM / MKV、連番画像。コーデックは H.264・HEVC・AV1・VP9・VP8（HEVC はブラウザと GPU が対応している場合のみ）。

## モデル

| モデル | 中身 |
|---|---|
| SPIRE g8h4 W8A8（既定・超軽量） | 演算量 −64%（7,744 重み）・全層 8-bit 量子化学習の高速モデル（post_gamma＋snorm8＋temporal＋OOB 片側ブレンド＋止まった箇所の規則） |
| SPIRE post_gamma W8A8（高精度） | 全層 8-bit 量子化学習版の高精度モデル（post_gamma＋snorm8＋temporal＋OOB 片側ブレンド＋止まった箇所の規則） |
| SPIRE post_gamma（fp32） | 共有ピラミッド型の fp32 版（δ 後に共有 γ で 1 回仕上げ＋temporal＋止まった箇所の規則） |
| SPIRE | 共有ピラミッド型の旧版補間モデル（temporal＋止まった箇所の規則つき） |
| vi_disrule | VRFG の補間モデル（DIS による動き推定と小型 U-Net、止まった箇所の規則つき） |
| RIFE 4.25 lite | 比較用。Practical-RIFE の重み（MIT、THIRD_PARTY_NOTICES.md） |

このリポジトリは、別のリポジトリから `tools/pages.mjs` で書き出したビルド結果です。
