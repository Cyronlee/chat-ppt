export const generatePrompt = (requirements) => {
  return `帮我写一个PPT，我的需求如下：
  
'''
${requirements}
'''

然后将PPT内容转换为实现下方Schema的json字符串

'''
interface Schema {
  page1: {
    title: string; // 5-20字
  };
  page2: {
    title: string; // 5-20字
    subtitle: string; // 5-20字
    content: string; // 20-100字
    list: string[5]; // 5-20字
  }; 
}
'''`;
};
