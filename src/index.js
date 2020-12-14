import p5 from "p5";
let bg,
  font,
  margin,
  gap,
  fontsize = 13;
let txtDate = "",
  txtName = "",
  txtContent = "";
let ukuranGambar = "";
let fonts = [
  {
    index: 0,
    name: "Tulisan tegak spasi",
    file: "HandwritingCR-2.ttf",
  },
  {
    index: 1,
    name: "Tulisan tebal berjarak",
    file: "GloriaHallelujah-Regular.ttf",
  },
  {
    index: 2,
    name: "tulisan hitam lebar",
    file: "MyHandsareHoldingYou.ttf",
  },
  {
    index: 3,
    name: "tulisan rapat",
    file: "ShadowsIntoLight-Regular.ttf",
  },
  {
    index: 3,
    name: "tulisan sambung",
    file: "DancingScript-VariableFont_wght.ttf",
  },
];
let backgroundImg = [
  {
    index: 0,
    name: "Double Folio",
    file: "g4.jpg",
  },
  {
    index: 1,
    name: "Kertas Binder",
    file: "g1.jpg",
  },
  {
    index: 2,
    name: "kertas bukubiasa",
    file: "g2.jpg",
  },
  {
    index: 3,
    name: "kertas binder A5",
    file: "g3.jpg",
  },
  {
    index: 4,
    name: "kertas bingkai pink",
    file: "g6.jpg",
  },
  {
    index: 5,
    name: "kertas bingkai bunga",
    file: "g7.png",
  },
  {
    index: 6,
    name: "kertas alert",
    file: "g8.jpg",
  },
  {
    index: 7,
    name: "kertas style A5",
    file: "g9.png",
  },
  {
    index: 8,
    name: "kertas surat cinta",
    file: "g12.jpg",
  },
  {
    index: 9,
    name: "kertas binder A4",
    file: "g18.png",
  },
];
let getFontIndex = () => {
  let fontIndex = localStorage.getItem("fontIndex");
  if (fontIndex) {
    return fonts[fontIndex];
  }
  return fonts[0];
};
// gambar
let getFileImage = () => {
  let imgIndex = localStorage.getItem("bookIndex");
  if (imgIndex) {
    return backgroundImg[imgIndex];
  }
  return backgroundImg[0];
};
function setup() {
  // ukuran asli gambar 300x441
  createCanvas(175 * 2, 247 * 2);
  bg = loadImage("/img/" + getFileImage().file);
  font = loadFont("/fonts/" + getFontIndex().file);
  textFont(font);
  textSize(fontsize);
}
function draw() {
  if (bg.width === 331) {
    background(bg);
    margin = 10.5;
    fill(0, 0, 0, 900);
    translate(margin - 8, margin * 3);
    text(txtName, 0, 0);
    text(txtDate, 242, 0);
    translate(0, margin + 7);
    text(txtContent, 0, 1.5, 350 /*, 800 */);
  } else if (bg.width === 1896) {
    background(bg);
    margin = 10.5;
    fill(0, 0, 0, 900);
    translate(margin - 8, margin * 3);
    text(txtName, 60, 25);
    text(txtDate, 200, 25);
    translate(0, margin + 7);
    text(txtContent, 80, 30, 230 /*, 800 */);
  } else if (bg.width === 904) {
    background(bg);
    margin = 10.5;
    fill(0, 0, 0, 900);
    translate(margin - 8, margin * 3);
    text(txtName, 40, 0);
    text(txtDate, 242, 0);
    translate(0, margin + 7);
    text(txtContent, 30, 5, 300 /*, 800 */);
  } else if (bg.width === 1238) {
    background(bg);
    margin = 10.5;
    fill(0, 0, 0, 900);
    translate(margin - 8, margin * 3);
    text(txtName, 5, 0);
    text(txtDate, 245, 5);
    translate(0, margin + 7);
    text(txtContent, 28, 10, 300 /*, 800 */);
  } else if (bg.width === 640) {
    background(bg);
    margin = 10.5;
    fill(0, 0, 0, 900);
    translate(margin - 8, margin * 3);
    text(txtName, 63, 25);
    text(txtDate, 200, 25);
    translate(0, margin + 7);
    text(txtContent, 70, 30, 190 /*, 800 */);
  } else if (bg.width === 801) {
    background(bg);
    margin = 10.5;
    fill(0, 0, 0, 900);
    translate(margin - 8, margin * 3);
    text(txtName, 60, 25);
    text(txtDate, 242, 25);
    translate(0, margin + 7);
    text(txtContent, 70, 30, 250 /*, 800 */);
  } else if (bg.width === 802) {
    background(bg);
    margin = 10.5;
    fill(0, 0, 0, 900);
    translate(margin - 8, margin * 3);
    text(txtName, 65, 70);
    text(txtDate, 180, 70);
    translate(0, margin + 7);
    text(txtContent, 90, 80, 170 /*, 800 */);
  } else if (bg.width === 900) {
    background(bg);
    margin = 10.5;
    fill(0, 0, 0, 900);
    translate(margin - 8, margin * 3);
    text(txtName, 90, 60);
    text(txtDate, 190, 60);
    translate(0, margin + 7);
    text(txtContent, 95, 60, 200 /*, 800 */);
  } else if (bg.width === 960) {
    background(bg);
    margin = 10.5;
    fill(0, 0, 0, 900);
    translate(margin - 8, margin * 3);
    text(txtName, 100, 25);
    text(txtDate, 200, 25);
    translate(0, margin + 7);
    text(txtContent, 120, 30, 160 /*, 800 */);
  } else {
    background(bg);
    margin = 10.5;
    fill(0, 0, 0, 900);
    translate(margin - 8, margin * 3);
    text(txtName, 85, 25);
    text(txtDate, 242, 25);
    translate(0, margin + 7);
    text(txtContent, 100, 30, 160 /*, 800 */);
  }
}
