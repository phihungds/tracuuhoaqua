function tracuu() {
    let tenqua = document.getElementById("tenqua").value
    switch (tenqua) {
        case "Ổi":
        case "Dưa Hấu":
            document.getElementById("hienthi").innerText = "20.000 VNĐ/kg"
        break
        case "Táo":
        case "Xoài":
            document.getElementById("hienthi").innerText = "30.000 VNĐ/kg"
        break
        case "Cam":
        case "Chôm Chôm":
            document.getElementById("hienthi").innerText = "40.000 VNĐ/kg"
        break
        case "Măng Cụt":
            document.getElementById("hienthi").innerText = "50.000 VNĐ/kg"
        break
        default :
            document.getElementById("hienthi").innerText = "Không tìm thấy quả này"
    }
}