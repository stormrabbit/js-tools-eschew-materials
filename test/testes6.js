import {
  writeFilePlus,
  readFilePlus,
  insertFilePlus
} from '../src/fsTools';
import {
  parseURL
} from '../src/txtTools';
const readTest = async () => {
  console.log('start');
  try {
    await writeFilePlus('text.txt', 'hello world!fuck the world!');
    const txt = await readFilePlus('text.txt');
    console.log('txt==>', txt);
    await insertFilePlus('text.txt', 'Let us ', 'hello world!'); 
    const txt2 = await readFilePlus('text.txt');
    console.log('text==>', txt2);
  } catch (error) {
    console.log('error==>', error);
  }
}

const txtTest = () => {
  // const url =  `http://my.erp.sina.com.cn/index.php/per_info`;
  const url = `https://weibo.com/stormrabbit/home?wvr=5`;

  const urlObj = parseURL(url);
  console.log(urlObj);
}

// readTest();
txtTest();