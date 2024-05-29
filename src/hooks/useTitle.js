import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() =>{
        document.title = `${title}-Note Book` ;

    },[title])

  return (
    null
  )
}

export default useTitle
