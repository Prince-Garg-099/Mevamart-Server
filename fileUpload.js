const { createDirectories } = require('./createDirectory')


exports.singleFileUpload = async (path, file) => {
    return new Promise(async (resolve, reject) => {
        await createDirectories(path);

        file.mv(path, (err) => {
            if (err) {
                reject(false);
            } else {
                resolve(true);
            }
        });
    })
}