// Requires the admc/wd client library
// (npm install wd)
// Then paste this into a .js file and run with Node 7.6+

const wd = require('wd');
const driver = wd.promiseChainRemote("localhost", 4723);
const caps = {"platformName":"Android","platformVersion":"8.1","app":"/Volumes/UUI/Projects/FirebasePlayground/app/build/outputs/apk/debug/app-debug.apk","deviceName":"Android Emulator"};

async function main () {
  await driver.init(caps);
  let el1 = await driver.elementById("com.example.rrblanch_incomm.firebaseplayground:id/constraint_layout_btn");
  await el1.click();
  console.log('Clicked!');
  let el2 = await driver.elementById("com.example.rrblanch_incomm.firebaseplayground:id/buy_btn");
  await el2.click();
  console.log('Purchased clicked!');
  await driver.quit();
}

main().catch(console.log);
