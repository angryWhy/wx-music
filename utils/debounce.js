export function debounce (fn,delay){
    let timer = null
    return ()=>{
        if(timer!=null){
            clearTimeout(timer)
        }
        timer=setTimeout(()=>{
            fn.call(this)
            timer = null
        },delay)
    }
}