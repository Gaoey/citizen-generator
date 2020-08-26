```
1. มั่วตัวเลขอะไรมาก้ได้จำนวน 12 ตัว โดยมีกฎอยู่ว่า ตัวแรกห้ามเป็นเลข 0 หรือ 9 เช่น 189353534573
2. เอาเลข 12 หลักจากข้อแรกมาคูณกับเลขประจำหลักของมัน แล้วเอามารวมกัน เช่นจากตัวอย่างก็คือ (1*13) + (8*12) + (9*11) + (3*10) + (5*9) + (3*8) + (5*7) + (3*6) + (4*5) + (5*4) + (7*3) + (3*2) ได้ 427
3. นำผลลัพธ์จากข้อที่แล้วมา mod หรือหารเอาเศษด้วย 11 เช่น จากตัวอย่างจะได้ 413 mod 11 = 9
4. นำ 11 ไปลบกับผลลัพธ์จากข้อที่แล้ว จะได้เลขหลักที่ 13 เช่นของเราคือ 9 ได้ 11-9 = 2
```

function random12() {
  let result = ""
  for (i = 1; i <= 12; i++) {
    result += `${Math.floor((Math.random() * 10))}`
  }
  return result
}

function citizenHashing(numb = random12()) {
  let result = 0
  let index = numb.length + 1
  for (i = 0; i <= 11; i++) {
    result += parseInt(numb[i]) * index
    index -= 1
  }
  let sum = 11 - (result % 11)
  return numb + sum
}

console.log(citizenHashing())