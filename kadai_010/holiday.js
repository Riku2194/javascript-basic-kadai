const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]
// 配列の要素数を出力
// console.log(holidays.length);

// for文の場合
for (let i = 0; i <= 15; i += 1) {
  console.log(holidays[i]);
 }


// while文の場合
let j = 0; 
while (holidays[j] != null) {
  console.log(holidays[j]);
  j = j + 1
 }
