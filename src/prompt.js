export const generatePrompt = (requirements) => {
  return `Help me to write a PPT, here is my requirement:
'''
${requirements}
'''

Then convert the PPT content into a json string that implements the following Schema:
'''
interface SlideSchema {
  title: string;
  pages: SlidePage[];
}

type SlidePage = ContentPage | ListPage;

interface ContentPage {
  title: string;
  subtitle: string;
  content: string; // around 150 words
}

interface ListPage {
  title: string;
  subtitle: string;
  content: string; // around 50 words
  list: string[5];
}
'''`;
};
