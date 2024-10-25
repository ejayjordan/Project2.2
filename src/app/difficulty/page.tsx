'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
let Names: any[] = [" "]
let difficulty: number

export default function Home() {
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

  const [selectedDifficulty, setSelectedDifficulty] = React.useState([" ", " "]);

  function handleDifficultyClick(){
    data[3] = difficulty

    for(let i=0; i<10; i++){
        test = String(i)
        if(data[String(i)]["time"] != 0){
            data[String(i)]["time"]=data[i]["time"]-1
        }
    }

    for(let i=0; i<10; i++){
        if(data[String(i)]["understood"] == 10){
            data[String(i)]["time"] = 1
        }
        if(data[String(i)]["understood"] == 50){
            data[String(i)]["time"] = 5
        }
        if(data[String(i)]["understood"] == 100){
            data[String(i)]["time"] = 10
        }
    }








        if(data != null){
        selectedDifficulty[3] = data[3]["understood"]
        selectedDifficulty[4] = data[4]["time"]

        setSelectedDifficulty(selectedDifficulty)
        router.refresh()
        }}

  return (
    <div>
      <h1>Select Difficulty</h1>
      <button id="Easy" onClick={handleDifficultyClick} />
      <button id="Medium" onClick={handleDifficultyClick} />
      <button id="Hard" onClick={handleDifficultyClick} />

      <p>Selected Difficulty: {selectedDifficulty}</p>
    </div>
  );
}