const fse = require('fs-extra');

module.exports = async (srcDir, destDir) => {
  try {
    await fse.copy(srcDir, destDir);
  } catch (error) {
    console.log(error);
  }
}