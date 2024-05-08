const key = "dochub-history"
export function setStorage() {
  const data = JSON.parse(localStorage.getItem(key));
  const val = JSON.stringify(window.location.href)
  if(data){ 
    !data.find(e=>e===val) && JSON.stringify(localStorage.setItem(key,JSON.stringify([...data,val])))
  } 
  else{
    localStorage.setItem(key,JSON.stringify([val]))
  } 
}

export function getStorage(){
  return [...new Set(JSON.parse(localStorage.getItem(key)))]
}