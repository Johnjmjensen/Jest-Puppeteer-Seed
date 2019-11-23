module.exports = {
  launch: {
    headless: true,
    //slowMo: 500, //causes jest to time out
    devtools: false,
    dumpio:false,
    "bail": true,
    args: [
      '--incognito',
      '--disable-dev-shm-usage'
    ],
    }
  
}
