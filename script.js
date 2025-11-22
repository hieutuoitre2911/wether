
    /* * Hàm upDate(previewPic)
     * Input: previewPic - chính là thẻ <img> mà người dùng đang di chuột vào
     */
    function upDate(previewPic) {
       
        console.log("Đang di chuột vào ảnh:", previewPic.alt);

       
        var imageDiv = document.getElementById('image');

        // 3. Thay đổi nội dung chữ của khung lớn thành thuộc tính 'alt' của ảnh nhỏ
        imageDiv.innerHTML = previewPic.alt;

        // 4. Thay đổi ảnh nền.
        // Cú pháp CSS là: background-image: url('link_anh.jpg');
        // Nên trong JS cần nối chuỗi cẩn thận
        imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    }

    /*
     * Hàm unDo()
     * Được gọi khi chuột rời khỏi ảnh
     */
    function unDo() {
       
        var imageDiv = document.getElementById('image');

        
        imageDiv.style.backgroundImage = "url('')";

        
        imageDiv.innerHTML = "Hover over an image below to display here.";
    }
