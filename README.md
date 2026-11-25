# SPIRE フレーム生成デモ

ブラウザだけで動く動画のフレーム補間（フレーム生成）のデモです。動画を選ぶと、ブラウザの動画プレイヤーで再生しながら、
WebGPU でその場で 2x / 4x に補間して表示します（同じ処理の拡張機能を YouTube でも使っています）。元の映像と左右に並べて比べられます。

- 再生はブラウザの動画プレイヤー、生成は開いた端末の GPU（WebGPU）で行います。動画はどこにも送信されません。
- 必要なもの：WebGPU が使えるブラウザ（Chrome / Edge 121 以降）。動画の形式・コーデックは、そのブラウザで再生できるものなら使えます。

## モデル

| モデル | 中身 |
|---|---|
| SPIRE pass4＋ps2（既定・最新） | 1.0（g8h4 W8A8）の本体に、段の間で受け渡す特徴（4ch）と学習した拡大（PixelShuffle 2×2）を足して 100k 学習 |
| SPIRE 1.2 | g8h4 W8A8 の後ろに元の解像度の補正段（S2D 12ch、flow と mask の差）を足したもの |
| SPIRE 1.1 | g8h4 W8A8 の後ろに 2 段 U-Net の補正段を足したもの |
| SPIRE g8h4 W8A8（超軽量） | 演算量 −64%（7,744 重み）・全層 8-bit 量子化学習の高速モデル（post_gamma＋snorm8＋temporal＋OOB 片側ブレンド＋止まった箇所の規則） |
| SPIRE post_gamma W8A8（高精度） | 全層 8-bit 量子化学習版の高精度モデル（post_gamma＋snorm8＋temporal＋OOB 片側ブレンド＋止まった箇所の規則） |
| SPIRE post_gamma（fp32） | 共有ピラミッド型の fp32 版（δ 後に共有 γ で 1 回仕上げ＋temporal＋止まった箇所の規則） |
| SPIRE | 共有ピラミッド型の旧版補間モデル（temporal＋止まった箇所の規則つき） |
| vi_disrule | VRFG の補間モデル（DIS による動き推定と小型 U-Net、止まった箇所の規則つき） |
| RIFE 4.25 lite | 比較用。Practical-RIFE の重み（MIT、THIRD_PARTY_NOTICES.md） |

このリポジトリは、別のリポジトリから `tools/pages.mjs` で書き出したビルド結果です。
