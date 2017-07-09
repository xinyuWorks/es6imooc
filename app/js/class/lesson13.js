{
  let ajax=()=>{
    console.log('执行');
    let def=new Promise(function(resolve,reject){
      resolve();
    });
    return def;


  }
  ajax().then(function(){
    console.log('one');
  }).then(function(){
    console.log('two');
  });
}
{
  let ajax = (value)=>{
    return new Promise(function(resolve,reject){
      if(value>5){
        resolve();
      }else{
        throw new Error('hello world is error ');
      }
    });
  }
  ajax(10).then(function(){

    console.log('not has error');
  }).catch(function(error){
    console.info(error);
  })
}
{
  let loadImgs=(src)=>{
    return new Promise((resolve,reject)=>{
        let img =document.createElement('img');
        img.src=src;
        img.onload=()=>{
          resolve(img);
        }
        img.onerror=(err)=>{
          reject(err);
        }
    });
  }
  let shwoImgs=(imgs)=>{
    imgs.forEach((img)=>{
      document.body.appendChild(img);
    })

  }
  Promise.all([loadImgs('http://img.ph.126.net/ocT0cPlMSiTs2BgbZ8bHFw==/631348372762626203.jpg'),loadImgs('http://img.ph.126.net/ocT0cPlMSiTs2BgbZ8bHFw==/631348372762626203.jpg'),loadImgs('http://img.ph.126.net/ocT0cPlMSiTs2BgbZ8bHFw==/631348372762626203.jpg')]).then(shwoImgs);

}
{
  let loadImgs=(src)=>{
    return new Promise((resolve,reject)=>{
        let img =document.createElement('img');
        img.src=src;
        img.onload=()=>{
          resolve(img);
        }
        img.onerror=(err)=>{
          reject(err);
        }
    });
  }
  let shwoImgs=(imgs)=>{

      document.body.appendChild(imgs);


  }
  Promise.race([loadImgs('http://img.ph.126.net/ocT0cPlMSiTs2BgbZ8bHFw==/631348372762626203.jpg'),loadImgs('http://img.ph.126.net/ocT0cPlMSiTs2BgbZ8bHFw==/631348372762626203.jpg'),loadImgs('http://img.ph.126.net/ocT0cPlMSiTs2BgbZ8bHFw==/631348372762626203.jpg')]).then(function(value){
     shwoImgs(value);
  });

}
