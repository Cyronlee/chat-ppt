import pptxgen from "pptxgenjs";

export const generatePPT = (data) => {
  let pres = new pptxgen();

  generatePage1(pres, data);

  data.pages.forEach((pageData) => {
    if (pageData.list) {
      generateListPage(pres, pageData);
    } else {
      generateContentPage(pres, pageData);
    }
  });

  generateEndingPage(pres);

  pres.writeFile({ fileName: `chatppt-${Date.now()}.pptx` });
};

const generatePage1 = (pres, data) => {
  let page1 = pres.addSlide();

  // 设置幻灯片标题
  page1.background = { color: "003D4F" };

  // 添加大标题文本框
  page1.addText(data?.title || "Thoughtworks \n" + "presentation deck\n", {
    x: 0.5,
    y: "45%",
    w: 9,
    h: 1,
    fontFace: "Bitter",
    fontSize: 44,
    bold: true,
    color: "FFFFFF",
  });

  page1.addImage({
    path: "/twlogo.png",
    x: 0.5,
    y: "90%",
    w: 2.1,
    h: 0.3,
  });
};

const generateContentPage = (pres, pageData) => {
  let contentPage = pres.addSlide();

  // Add title
  contentPage.addText(pageData?.title || "add title for content slide", {
    x: 0.5,
    y: 0.5,
    w: "90%",
    h: 1,
    fontFace: "Bitter",
    fontSize: 24,
    bold: true,
    color: "000000",
  });

  // Add subtitle
  contentPage.addText(pageData?.subtitle || "add subtitle", {
    x: 0.5,
    y: 1.0,
    w: "90%",
    h: 0.5,
    fontFace: "Inter",
    fontSize: 16,
    bold: true,
    color: "000000",
  });

  // Add main text block
  contentPage.addText(pageData?.content || "main content", {
    x: 0.5,
    y: 1.5,
    w: "90%",
    fontFace: "Inter",
    fontSize: 16,
    color: "000000",
  });
};

const generateListPage = (pres, pageData) => {
  let listPage = pres.addSlide();

  // Define colors used
  let colors = [
    "#F28E8E",
    "#665490",
    "#DAA03D",
    "#2D6F75",
    "#73BFC1",
    "#499F3A",
  ];

  // Add title
  listPage.addText(pageData?.title || "add title for content slide", {
    x: 0.5,
    y: 0.5,
    w: "50%",
    h: 1,
    fontFace: "Bitter",
    fontSize: 24,
    bold: true,
    color: "000000",
  });

  // Add subtitle
  listPage.addText(pageData?.subtitle || "add subtitle", {
    x: 0.5,
    y: 1.0,
    w: "50%",
    h: 0.5,
    fontFace: "Inter",
    fontSize: 16,
    color: "000000",
  });

  // Add main text block
  listPage.addText(pageData?.content || "main content", {
    x: 0.5,
    y: 1.5,
    w: "50%",
    h: 1.5,
    fontFace: "Inter",
    fontSize: 16,
    color: "000000",
  });

  // Add icon and text blocks
  let icons = ["🌐", "⚑", "🌐", "⚑", "🌐"];
  for (let i = 0; i < icons.length; i++) {
    let y = 20 * i;
    listPage.addText(icons[i], {
      x: 5.5,
      y: `${y}%`,
      w: 0.5,
      // h: 0.5,
      h: "20%",
      fontFace: "Inter",
      fontSize: 24,
      color: "FFFFFF",
      fill: { color: colors[i] },
      align: "center",
      valign: "middle",
    });
    listPage.addText(
      pageData?.list[i] ||
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      {
        x: 6.0,
        y: `${y}%`,
        w: 4.0,
        // h: 0.5,
        h: "20%",
        fontFace: "Inter",
        fontSize: 13,
        color: "000000",
        fill: { color: "F0F0F0" },
      },
    );
  }
};

const generateEndingPage = (pres) => {
  let page1 = pres.addSlide();

  // 设置幻灯片标题
  page1.background = { color: "003D4F" };

  // 添加大标题文本框
  page1.addText("Thank you for your time!", {
    x: 0.5,
    y: "45%",
    w: 9,
    h: 1,
    fontFace: "Bitter",
    fontSize: 44,
    bold: true,
    color: "FFFFFF",
  });
};
