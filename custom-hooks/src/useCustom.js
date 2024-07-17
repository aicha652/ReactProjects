import {useEffect, useState} from "react"

export default function UseCustom(url) {
    const[x, setX] = useState([])
    useEffect(()=>{
        fetch(url)
          .then(response => response.json())
          .then(json => setX(json))
    })
    return([x])
}