import pptxgen from "pptxgenjs";

// 1. 创建一个新的演示文稿
let pres = new pptxgen();

// 2. 添加一个新的幻灯片
let slide = pres.addSlide();

// 设置幻灯片标题
slide.addText(
  "Team 1 - Idea #1 - AI MultiModal to processing invoice, expensify files",
  {
    x: 0.5,
    y: 0.1,
    w: "90%",
    h: 0.5,
    fontSize: 18,
    bold: true,
    align: pres.AlignH.center,
  },
);

// 添加矩形区域和标题
const sections = [
  { text: "WHAT IS THE IDEA ?", x: 0.5, y: 1, w: 4.5, h: 1, fill: "E6007A" },
  { text: "BUSINESS SPONSORS", x: 5.2, y: 1, w: 4.5, h: 1, fill: "007E7A" },
  { text: "Scenarios/场景", x: 10, y: 1, w: 4.5, h: 1, fill: "8CC63F" },
  { text: "WHY?", x: 0.5, y: 3, w: 4.5, h: 1, fill: "1A446D" },
  { text: "EXPECTED OUTCOMES", x: 5.2, y: 3, w: 4.5, h: 1, fill: "808080" },
  { text: "ROI", x: 10, y: 3, w: 4.5, h: 1, fill: "E68A00" },
  { text: "TECHNOLOGY", x: 0.5, y: 5, w: 4.5, h: 1, fill: "E6007A" },
  { text: "Long Term Investment", x: 10, y: 5, w: 4.5, h: 1, fill: "6B4F91" },
];

sections.forEach((section) => {
  slide.addShape(pres.ShapeType.rect, {
    x: section.x,
    y: section.y,
    w: section.w,
    h: section.h,
    fill: { color: section.fill },
  });
  slide.addText(section.text, {
    x: section.x,
    y: section.y,
    w: section.w,
    h: section.h,
    fontSize: 14,
    bold: true,
    color: "ffffff",
    align: pres.AlignH.center,
    valign: pres.AlignV.middle,
  });
});

// 添加商务发起人图像和文字
// slide.addImage({ path: "path_to_image.jpg", x: 5.2, y: 2.1, w: 1.5, h: 1.5 });
slide.addText("Jessie Jie Xia\nCIO", {
  x: 6.8,
  y: 2.1,
  w: 2.5,
  h: 1.5,
  fontSize: 14,
  align: pres.AlignH.left,
  valign: pres.AlignV.middle,
});

// 添加占位符圆点
const placeholders = [
  { x: 0.7, y: 4 },
  { x: 5.4, y: 4 },
  { x: 10.2, y: 4 },
  { x: 0.7, y: 6 },
  { x: 10.2, y: 6 },
];

placeholders.forEach((placeholder) => {
  slide.addText("•", { x: placeholder.x, y: placeholder.y, fontSize: 12 });
});

// 添加长远投资的文本
slide.addText("High/Medium/Low", { x: 10.2, y: 6, fontSize: 12 });

// 4. 保存演示文稿
pres.writeFile({ fileName: "Team_Idea_Presentation.pptx" });
