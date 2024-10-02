/**
 * Bài 2 (2 điểm): Viết hàm kiểm tra 1 số:
Hàm checkNumber(n) nhận vào số n thực hiện yêu cầu sau:

Trả về "Invalid" nếu n không phải là số hợp lệ. Trả về "Không chia hết" cho tất cả các trường hợp khác. (0.5đ)
Trả về "Chia hết cho 3" nếu n chia hết cho 3. Trả về "Chia hết cho 5" nếu n chia hết cho 5. (0.5đ)
Trả về "Chia hết cho cả 3 số 3, 5 và 15" nếu n chia hết cho cả 3 số 3, 5 và 15. (0.5đ)
Kết quả kỳ vọng:

console.log(checkNumber(15)); // "Chia hết cho cả 3 số: 3, 5 và 15"
console.log(checkNumber(9)); // "Chia hết cho 3"
console.log(checkNumber(10)); // "Chia hết cho 5"
console.log("15"); // "Invalid"
console.log(11); // "Không chia hết"
 */

function checkNumber(n) {

        if (n % 15 === 0) {
            console.log("Chia hết cho cả 3 số: 3, 5, 15");
        } else if (n % 5 === 0 && typeof n === number){
            console.log("Chia hết cho 5");
        } else if (n % 3 === 0 && typeof n === number) {
            console.log("Chia hết cho 3");
        } else {
            console.log("Không chia hết");
        }
}
checkNumber(30);
