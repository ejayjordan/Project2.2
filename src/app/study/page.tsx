'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
let dataDisplay = [" ", " ", " "]
let Names: any[] = [" "]

function Study() {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter()

  useEffect(() => {
    fetch('/cards.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  if(data != null){
    Names = Object.getOwnPropertyNames(data)
  }

  const [displayData, setDisplayData] = React.useState([" ", " ", " "]);

  function returnData(num: number){
    if(data != null){
    dataDisplay[1] = data[Names [num] ]["prompt"]
    dataDisplay[2] = data[Names [num] ]["answer"]
    dataDisplay[3] = data[Names [num]]["understood"]

    setDisplayData(dataDisplay)
    router.refresh()
  }}

  return (
    <>
    <p>This is the study page. This will show all cards in the database and the percent understood.</p>

    <div>
        <button onClick={() => returnData(0)}>{Names[0]}</button>
        <button onClick={() => returnData(1)}>{Names[1]}</button>
        <button onClick={() => returnData(2)}>{Names[2]}</button>
        <button onClick={() => returnData(3)}>{Names[3]}</button>
        <button onClick={() => returnData(4)}>{Names[4]}</button>
        <button onClick={() => returnData(5)}>{Names[5]}</button>
        <button onClick={() => returnData(6)}>{Names[6]}</button>
        <button onClick={() => returnData(7)}>{Names[7]}</button>
        <button onClick={() => returnData(8)}>{Names[8]}</button>
        <button onClick={() => returnData(9)}>{Names[9]}</button>
      </div>

    <div>
      <p>Prompt: {displayData[1]}</p>
      <p>Answer: {displayData[2]}</p>
      <p>Amount Understood: {dataDisplay[3]}</p>
      </div>
    </>
  );
}
export default Study