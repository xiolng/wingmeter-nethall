export const verificationTime = (callback) =>{
  let time = 60
  let setTime = ()=>{
    if(time >= 1){
      setTimeout(()=>{
        time -= 1
        callback(time)
        setTime()
      },1000)
    }
  }
  setTime()
  if (time <= 0) setTime = null
}