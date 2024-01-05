# react-drei-1camera-perspective
React+TypescriptなWebアプリで、dreiライブラリを試す。(PerspectiveCamera)

![](https://storage.googleapis.com/zenn-user-upload/60027b934ed0-20240103.png)

# ポイント
## 独自関数コンポーネントの<Rig />について
動作検証用に、Rig関数を作っている。
PerspectiveCameraって、positionにちょっと違う値を入力すると、一体どこに行ったんだ？みたいになってちゃんと動いてるのか全然分からんかったけん。
この関数が動くことで、{x:0, y:3, z:10}の位置に戻るようにした。
```ts:App.tsx
  camera.position.lerp(new THREE.Vector3(0, 3, 10), 0.05)
  camera.lookAt(0, 0, 0)
```

## PerspectiveCameraについて
ここからが、本題。DreiのPerspectiveCameraの値を変更して変化を見ると良くわかる。
今回は[0, -100, 10]を設定したので、視点(カメラ)が下から上に移動したので、舞台が下りてくるような動きが表現できた。


## カメラ位置の初期値について
今回Canvasにもカメラ(視点)位置を設定してて、PerspectiveCameraにも位置を指定しているが、その場合どうもPerspectiveCameraが有効になってそう。たぶんPerspectiveCameraの方が後に動くからじゃないだろうか。
で、Canvasも、PerspectiveCameraにも設定しなかった場合は、[0,0,5]が設定されてそう。

すこし、Camera(視点)の扱いが分かってきた気がする。
