import { GradeData } from './types';

export const SYSTEM_INSTRUCTION = `
Bạn là một gia sư Khoa học Tự nhiên (KHTN) thân thiện, thông thái và kiên nhẫn dành cho học sinh trung học cơ sở (lớp 6 đến lớp 9) tại Việt Nam.
Nhiệm vụ của bạn là giúp học sinh hiểu các khái niệm Vật lý, Hóa học, Sinh học và Trái đất.

Quy tắc ứng xử:
1. Sử dụng ngôn ngữ Tiếng Việt chuẩn mực, dễ hiểu, phù hợp lứa tuổi học sinh.
2. Giải thích các khái niệm phức tạp bằng các ví dụ thực tế gần gũi.
3. Khi học sinh hỏi bài tập, hãy gợi ý phương pháp giải thay vì đưa ngay đáp án cuối cùng.
4. Luôn khuyến khích tinh thần tự học và tò mò khám phá.
5. Sử dụng định dạng Markdown (in đậm, danh sách) để câu trả lời rõ ràng, dễ đọc.
6. Nếu câu hỏi không thuộc phạm vi khoa học tự nhiên, hãy lịch sự từ chối và hướng học sinh quay lại bài học.
`;

export const CURRICULUM_DATA: GradeData[] = [
  {
    id: 6,
    title: "Lớp 6",
    description: "Chương trình KHTN 6 - Kết nối tri thức với cuộc sống.",
    color: "bg-blue-500",
    icon: "🌱",
    chapters: [
      {
        id: "c6-1",
        title: "Chương I: Mở đầu về KHTN",
        lessons: [
          {
            id: "l6-1",
            title: "Bài 1: Giới thiệu về Khoa học tự nhiên",
            description: "Khái niệm, vai trò của KHTN trong đời sống.",
            content: `<h3>1. Khái niệm Khoa học tự nhiên</h3>
            <p>Khoa học tự nhiên (KHTN) nghiên cứu các sự vật, hiện tượng của thế giới tự nhiên và ảnh hưởng của chúng đến cuộc sống con người.</p>
            <p>Các lĩnh vực chính của KHTN bao gồm:</p>
            <ul>
                <li><strong>Vật lí học:</strong> Nghiên cứu về vật chất, năng lượng và sự vận động của chúng.</li>
                <li><strong>Hoá học:</strong> Nghiên cứu về chất và sự biến đổi của chúng.</li>
                <li><strong>Sinh học:</strong> Hay sinh vật học, nghiên cứu về các vật sống.</li>
                <li><strong>Thiên văn học:</strong> Nghiên cứu về vũ trụ (các hành tinh, ngôi sao,...).</li>
                <li><strong>Khoa học Trái Đất:</strong> Nghiên cứu về Trái Đất và bầu khí quyển.</li>
            </ul>
            
            <h3>2. Vật sống và vật không sống</h3>
            <p>Thế giới tự nhiên bao gồm vật sống và vật không sống:</p>
            <ul>
                <li><strong>Vật sống:</strong> Có các đặc trưng như trao đổi chất và chuyển hoá năng lượng, sinh trưởng và phát triển, vận động, cảm ứng, sinh sản. Ví dụ: con người, cây lúa, vi khuẩn.</li>
                <li><strong>Vật không sống:</strong> Không có các đặc trưng của sự sống. Ví dụ: hòn đá, cái bàn, nước.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
            exercises: [
              {
                id: "ex6-1-1",
                type: "MULTIPLE_CHOICE",
                question: "Lĩnh vực nào sau đây nghiên cứu về các vật sống?",
                options: [
                  { id: "opt1", text: "Vật lí học", isCorrect: false },
                  { id: "opt2", text: "Hóa học", isCorrect: false },
                  { id: "opt3", text: "Sinh học", isCorrect: true },
                  { id: "opt4", text: "Thiên văn học", isCorrect: false }
                ],
                explanation: "Sinh học (hay sinh vật học) là lĩnh vực nghiên cứu về các vật sống."
              },
              {
                id: "ex6-1-2",
                type: "TRUE_FALSE",
                question: "Khoa học tự nhiên chỉ nghiên cứu về các vật thể nhân tạo do con người làm ra.",
                correctAnswer: false,
                explanation: "Sai. Khoa học tự nhiên nghiên cứu các sự vật, hiện tượng của thế giới tự nhiên."
              },
              {
                id: "ex6-1-3",
                type: "SHORT_ANSWER",
                question: "Đâu là lĩnh vực nghiên cứu về Trái Đất và bầu khí quyển?",
                correctAnswer: "Khoa học Trái Đất",
                explanation: "Khoa học Trái Đất là lĩnh vực nghiên cứu về Trái Đất và bầu khí quyển."
              },
              {
                id: "ex6-1-4",
                type: "ESSAY",
                question: "Hãy lấy 3 ví dụ về vật sống và 3 ví dụ về vật không sống xung quanh em.",
                explanation: "Gợi ý: Vật sống (con mèo, cây phượng, bạn bè...); Vật không sống (hòn đá, cái ghế, quyển sách...)."
              }
            ]
          },
          {
            id: "l6-2",
            title: "Bài 2: An toàn trong phòng thực hành",
            description: "Quy định an toàn và các ký hiệu cảnh báo.",
            content: `<h3>1. Một số kí hiệu cảnh báo</h3>
            <p>Để đảm bảo an toàn, phòng thực hành thường có các biển báo:</p>
            <ul>
                <li><strong>Chất dễ cháy:</strong> Tránh gần nguồn lửa.</li>
                <li><strong>Chất độc:</strong> Không ngửi, nếm, tránh tiếp xúc trực tiếp.</li>
                <li><strong>Chất ăn mòn:</strong> Gây bỏng da, hỏng đồ vật.</li>
                <li><strong>Nguồn điện nguy hiểm:</strong> Cẩn thận điện giật.</li>
                <li><strong>Dụng cụ sắc nhọn, thủy tinh dễ vỡ.</strong></li>
            </ul>

            <h3>2. Quy định an toàn</h3>
            <p>Khi vào phòng thực hành cần tuân thủ:</p>
            <ul>
                <li>Mặc trang phục gọn gàng, đeo kính bảo hộ, găng tay, khẩu trang khi cần thiết.</li>
                <li>Chỉ tiến hành thí nghiệm khi có hướng dẫn của giáo viên.</li>
                <li>Không ăn uống, đùa nghịch, chạy nhảy trong phòng thực hành.</li>
                <li>Biết cách sử dụng các thiết bị chữa cháy và sơ cứu cơ bản.</li>
                <li>Sau khi thực hành: thu gom chất thải đúng nơi quy định, rửa sạch tay và dụng cụ.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-3",
            title: "Bài 3: Sử dụng kính lúp",
            description: "Cấu tạo và cách dùng kính lúp để quan sát vật nhỏ.",
            content: `<h3>1. Cấu tạo kính lúp</h3>
            <p>Kính lúp gồm một tấm kính lồi (dày ở giữa, mỏng ở mép), được bảo vệ bởi khung và có tay cầm.</p>
            <p>Kính lúp có khả năng phóng to ảnh của vật từ <strong>3 đến 20 lần</strong>.</p>

            <h3>2. Cách sử dụng</h3>
            <ul>
                <li>Cầm kính lúp và để mặt kính sát vật mẫu cần quan sát.</li>
                <li>Từ từ dịch chuyển kính ra xa vật cho đến khi nhìn thấy vật rõ nét.</li>
            </ul>

            <h3>3. Bảo quản</h3>
            <ul>
                <li>Lau chùi, vệ sinh kính thường xuyên bằng khăn mềm.</li>
                <li>Sử dụng nước sạch hoặc nước rửa kính chuyên dụng.</li>
                <li>Không để mặt kính tiếp xúc với vật nhám, bẩn để tránh trầy xước.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1589812893630-9b369dc7247a?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-4",
            title: "Bài 4: Sử dụng kính hiển vi quang học",
            description: "Quan sát các vật rất nhỏ không thấy bằng mắt thường.",
            content: `<h3>1. Cấu tạo kính hiển vi quang học</h3>
            <p>Kính hiển vi quang học có thể phóng to ảnh của vật từ <strong>40 đến 3000 lần</strong>. Cấu tạo gồm:</p>
            <ul>
                <li><strong>Hệ thống phóng đại:</strong> Gồm thị kính (nơi mắt nhìn vào) và vật kính (gần vật mẫu).</li>
                <li><strong>Hệ thống chiếu sáng:</strong> Đèn hoặc gương phản chiếu ánh sáng.</li>
                <li><strong>Hệ thống điều chỉnh:</strong> Ốc to (chỉnh thô) và ốc nhỏ (chỉnh tinh).</li>
                <li><strong>Bàn kính:</strong> Nơi đặt tiêu bản.</li>
            </ul>

            <h3>2. Cách sử dụng</h3>
            <ul>
                <li><strong>Bước 1:</strong> Chọn vật kính thích hợp (10x, 40x...).</li>
                <li><strong>Bước 2:</strong> Điều chỉnh ánh sáng cho phù hợp.</li>
                <li><strong>Bước 3:</strong> Đặt tiêu bản lên bàn kính, kẹp giữ cố định.</li>
                <li><strong>Bước 4:</strong> Mắt nhìn từ ngoài, vặn ốc to hạ vật kính xuống sát tiêu bản (tránh chạm vỡ).</li>
                <li><strong>Bước 5:</strong> Mắt nhìn vào thị kính, vặn ốc to đưa vật kính lên từ từ đến khi thấy ảnh. Vặn ốc nhỏ để ảnh rõ nét nhất.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1581093196277-9f608ee2d480?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-5",
            title: "Bài 5: Đo chiều dài",
            description: "Đơn vị, dụng cụ và cách đo chiều dài.",
            content: `<h3>1. Đơn vị đo độ dài</h3>
            <p>Đơn vị đo độ dài cơ bản trong hệ đơn vị đo lường hợp pháp của nước ta là <strong>mét</strong> (kí hiệu: $m$).</p>
            <p>Các ước số và bội số thường dùng: milimét ($mm$), xentimét ($cm$), đềximét ($dm$), kilômét ($km$).</p>
            <p>$$1 m = 10 dm = 100 cm = 1000 mm$$</p>
            <p>$$1 km = 1000 m$$</p>

            <h3>2. Dụng cụ đo</h3>
            <p>Dụng cụ đo chiều dài là thước. Có nhiều loại thước: thước thẳng, thước dây, thước cuộn, thước kẹp.</p>
            <ul>
                <li><strong>GHĐ (Giới hạn đo):</strong> Độ dài lớn nhất ghi trên thước.</li>
                <li><strong>ĐCNN (Độ chia nhỏ nhất):</strong> Độ dài giữa hai vạch chia liên tiếp trên thước.</li>
            </ul>

            <h3>3. Cách đo chiều dài</h3>
            <ul>
                <li>Ước lượng độ dài cần đo để chọn thước có GHĐ và ĐCNN phù hợp.</li>
                <li>Đặt thước dọc theo độ dài cần đo, vạch số 0 ngang với một đầu của vật.</li>
                <li>Đặt mắt nhìn theo hướng vuông góc với cạnh thước ở đầu kia của vật.</li>
                <li>Đọc và ghi kết quả đo theo vạch chia gần nhất với đầu kia của vật.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1598528827722-e67c8227b6b0?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-6",
            title: "Bài 6: Đo khối lượng",
            description: "Đơn vị, dụng cụ và cách đo khối lượng.",
            content: `<h3>1. Đơn vị đo khối lượng</h3>
            <p>Khối lượng là số đo lượng chất của một vật. Đơn vị cơ bản là <strong>kilôgam</strong> (kí hiệu: $kg$).</p>
            <p>Các đơn vị khác: miligam ($mg$), gam ($g$), héctôgam (lạng), yến, tạ, tấn ($t$).</p>
            <p>$$1 kg = 1000 g$$</p>
            <p>$$1 tấn = 1000 kg$$</p>

            <h3>2. Dụng cụ đo</h3>
            <p>Dụng cụ đo khối lượng là <strong>cân</strong>. Các loại cân thông dụng: cân đồng hồ, cân điện tử, cân y tế, cân Rô-béc-van.</p>

            <h3>3. Cách đo khối lượng (với cân đồng hồ)</h3>
            <ul>
                <li>Ước lượng khối lượng vật để chọn cân phù hợp.</li>
                <li>Vặn ốc điều chỉnh để kim cân chỉ đúng vạch số 0.</li>
                <li>Đặt vật lên đĩa cân.</li>
                <li>Mắt nhìn vuông góc với vạch chia trên mặt cân ở đầu kim cân.</li>
                <li>Đọc và ghi kết quả theo vạch chia gần nhất.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-7",
            title: "Bài 7: Đo thời gian",
            description: "Đơn vị và dụng cụ đo thời gian.",
            content: `<h3>1. Đơn vị đo thời gian</h3>
            <p>Đơn vị đo thời gian cơ bản là <strong>giây</strong> (kí hiệu: $s$).</p>
            <p>Các đơn vị khác: phút ($min$), giờ ($h$), ngày, tuần, tháng, năm.</p>
            <p>$$1 phút = 60 giây$$</p>
            <p>$$1 giờ = 60 phút = 3600 giây$$</p>

            <h3>2. Dụng cụ đo</h3>
            <p>Dụng cụ đo thời gian là <strong>đồng hồ</strong>. Các loại đồng hồ: đồng hồ treo tường, đồng hồ đeo tay, đồng hồ bấm giây, đồng hồ cát.</p>

            <h3>3. Cách đo thời gian</h3>
            <ul>
                <li>Ước lượng khoảng thời gian cần đo để chọn đồng hồ phù hợp.</li>
                <li>Hiệu chỉnh đồng hồ về vạch số 0 (đối với đồng hồ bấm giây cơ học) hoặc reset về 0 (đồng hồ điện tử).</li>
                <li>Bấm nút Start (bắt đầu) khi sự kiện bắt đầu và nút Stop (dừng) khi sự kiện kết thúc.</li>
                <li>Đọc và ghi kết quả.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-8",
            title: "Bài 8: Đo nhiệt độ",
            description: "Thang nhiệt độ Celsius và dụng cụ đo.",
            content: `<h3>1. Nhiệt độ và thang đo</h3>
            <p>Nhiệt độ là số đo độ "nóng", "lạnh" của một vật. Vật nóng hơn có nhiệt độ cao hơn.</p>
            <p>Đơn vị đo nhiệt độ thường dùng ở Việt Nam là <strong>độ C</strong> (Celsius, kí hiệu: $^\circ C$).</p>
            <ul>
                <li>Nhiệt độ nước đá đang tan: $0^\circ C$.</li>
                <li>Nhiệt độ hơi nước đang sôi: $100^\circ C$.</li>
            </ul>
            <p>Ngoài ra còn có thang nhiệt độ Fahrenheit ($^\circ F$) và Kelvin ($K$).</p>

            <h3>2. Dụng cụ đo</h3>
            <p>Dụng cụ đo nhiệt độ là <strong>nhiệt kế</strong>. Có nhiều loại: nhiệt kế thủy ngân, nhiệt kế rượu, nhiệt kế điện tử, nhiệt kế hồng ngoại.</p>

            <h3>3. Cách đo nhiệt độ cơ thể (nhiệt kế thủy ngân/rượu)</h3>
            <ul>
                <li>Chọn nhiệt kế phù hợp. Kiểm tra xem cột chất lỏng đã tụt xuống dưới vạch thấp nhất chưa (nếu chưa thì vẩy nhẹ).</li>
                <li>Đặt bầu nhiệt kế vào nách (hoặc miệng), kẹp chặt tay lại.</li>
                <li>Chờ khoảng vài phút rồi lấy ra đọc kết quả.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1623944893587-b952b31a2386?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        id: "c6-2",
        title: "Chương II: Chất quanh ta",
        lessons: [
          {
            id: "l6-9",
            title: "Bài 9: Sự đa dạng của chất",
            description: "Vật thể tự nhiên, vật thể nhân tạo, vật sống, vật không sống.",
            content: `<h3>1. Chất và vật thể</h3>
            <p><strong>Vật thể:</strong> Là những gì tồn tại xung quanh ta hoặc trong không gian. Mọi vật thể đều được tạo nên từ <strong>chất</strong>.</p>
            <ul>
                <li><strong>Vật thể tự nhiên:</strong> Có sẵn trong tự nhiên (núi, sông, cây cối, con người, khí quyển).</li>
                <li><strong>Vật thể nhân tạo:</strong> Do con người tạo ra (xe đạp, ngôi nhà, quần áo, bút bi).</li>
            </ul>
            <p>Phân loại theo sự sống:</p>
            <ul>
                <li><strong>Vật sống (vật hữu sinh):</strong> Có các đặc trưng sống (trao đổi chất, lớn lên...).</li>
                <li><strong>Vật không sống (vật vô sinh):</strong> Không có các đặc trưng sống.</li>
            </ul>

            <h3>2. Tính chất của chất</h3>
            <p>Mỗi chất có những tính chất nhất định:</p>
            <ul>
                <li><strong>Tính chất vật lí:</strong> Trạng thái (rắn, lỏng, khí), màu, mùi, vị, tính tan, nhiệt độ nóng chảy, nhiệt độ sôi, tính dẫn điện, dẫn nhiệt...</li>
                <li><strong>Tính chất hoá học:</strong> Khả năng biến đổi thành chất khác (khả năng cháy, bị phân hủy, bị gỉ...).</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-10",
            title: "Bài 10: Các thể của chất và sự chuyển thể",
            description: "Rắn, lỏng, khí và sự chuyển đổi qua lại.",
            content: `<h3>1. Ba thể của chất</h3>
            <p>Chất thường tồn tại ở 3 thể (trạng thái): Rắn, Lỏng, Khí (Hơi).</p>
            <table class="w-full border-collapse border border-slate-300 mb-4">
              <thead>
                <tr class="bg-blue-100">
                  <th class="border border-slate-300 p-2">Thể</th>
                  <th class="border border-slate-300 p-2">Đặc điểm</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-slate-300 p-2 font-bold">Rắn</td>
                  <td class="border border-slate-300 p-2">Có hình dạng và thể tích xác định. Các hạt liên kết chặt chẽ.</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 p-2 font-bold">Lỏng</td>
                  <td class="border border-slate-300 p-2">Có thể tích xác định nhưng hình dạng phụ thuộc bình chứa. Các hạt trượt lên nhau.</td>
                </tr>
                <tr>
                  <td class="border border-slate-300 p-2 font-bold">Khí</td>
                  <td class="border border-slate-300 p-2">Không có hình dạng và thể tích xác định, dễ bị nén. Các hạt chuyển động tự do.</td>
                </tr>
              </tbody>
            </table>

            <h3>2. Sự chuyển thể</h3>
            <ul>
                <li><strong>Nóng chảy:</strong> Chuyển từ thể rắn sang thể lỏng. (VD: Đá tan thành nước).</li>
                <li><strong>Đông đặc:</strong> Chuyển từ thể lỏng sang thể rắn. (VD: Nước đông thành đá).</li>
                <li><strong>Bay hơi:</strong> Chuyển từ thể lỏng sang thể khí (xảy ra ở mặt thoáng).</li>
                <li><strong>Sôi:</strong> Quá trình bay hơi xảy ra cả ở trong lòng và trên mặt thoáng chất lỏng.</li>
                <li><strong>Ngưng tụ:</strong> Chuyển từ thể khí sang thể lỏng. (VD: Hơi nước ngưng tụ thành giọt).</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-11",
            title: "Bài 11: Oxygen. Không khí",
            description: "Tính chất của Oxygen và thành phần không khí.",
            content: `<h3>1. Oxygen</h3>
            <ul>
                <li>Ở điều kiện thường, oxygen là chất khí không màu, không mùi, không vị, nặng hơn không khí, ít tan trong nước.</li>
                <li><strong>Vai trò:</strong> Duy trì sự hô hấp (sự sống) và sự cháy.</li>
            </ul>

            <h3>2. Thành phần của không khí</h3>
            <p>Không khí là một hỗn hợp khí, thành phần theo thể tích khoảng:</p>
            <ul>
                <li><strong>$78\\%$ Nitrogen (Nitơ)</strong></li>
                <li><strong>$21\\%$ Oxygen (Oxi)</strong></li>
                <li><strong>$1\\%$ Các khí khác:</strong> Carbon dioxide ($CO_2$), hơi nước, khí hiếm, bụi...</li>
            </ul>

            <h3>3. Bảo vệ môi trường không khí</h3>
            <p>Ô nhiễm không khí gây hại cho sức khỏe và môi trường. Cần bảo vệ bằng cách:</p>
            <ul>
                <li>Trồng nhiều cây xanh.</li>
                <li>Xử lý khí thải nhà máy, phương tiện giao thông.</li>
                <li>Không đốt rác bừa bãi.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        id: "c6-3",
        title: "Chương III: Vật liệu, Nguyên liệu, Nhiên liệu...",
        lessons: [
          {
            id: "l6-12",
            title: "Bài 12: Một số vật liệu",
            description: "Kim loại, nhựa, gỗ, cao su, thủy tinh...",
            content: `<h3>1. Vật liệu là gì?</h3>
            <p>Vật liệu là chất hoặc hỗn hợp một số chất được con người dùng để làm ra các vật thể (sản phẩm) phục vụ cuộc sống.</p>
            
            <h3>2. Tính chất và ứng dụng</h3>
            <table class="w-full border-collapse border border-slate-300">
                <tr class="bg-blue-100"><th class="border p-2">Vật liệu</th><th class="border p-2">Tính chất nổi bật</th><th class="border p-2">Ứng dụng</th></tr>
                <tr><td class="border p-2">Kim loại</td><td class="border p-2">Dẫn điện, nhiệt tốt, bền, có ánh kim</td><td class="border p-2">Dây điện, khung xe, nồi nấu</td></tr>
                <tr><td class="border p-2">Nhựa</td><td class="border p-2">Nhẹ, cách điện, nhiệt, dễ tạo hình</td><td class="border p-2">Vỏ dây điện, ống nước, đồ dùng</td></tr>
                <tr><td class="border p-2">Thủy tinh</td><td class="border p-2">Trong suốt, không gỉ, dễ vỡ</td><td class="border p-2">Cửa kính, chai lọ</td></tr>
                <tr><td class="border p-2">Cao su</td><td class="border p-2">Đàn hồi, cách điện, cách âm</td><td class="border p-2">Lốp xe, đệm, dây chun</td></tr>
            </table>

            <h3>3. Quy tắc 3R</h3>
            <p>Để sử dụng vật liệu tiết kiệm và bảo vệ môi trường, ta áp dụng quy tắc 3R:</p>
            <ul>
                <li><strong>Reduce (Giảm thiểu):</strong> Hạn chế sử dụng vật liệu không phân hủy.</li>
                <li><strong>Reuse (Tái sử dụng):</strong> Dùng lại các sản phẩm còn dùng được.</li>
                <li><strong>Recycle (Tái chế):</strong> Biến rác thải thành sản phẩm mới.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1510936111840-65e151ad71bb?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-13",
            title: "Bài 13: Một số nguyên liệu",
            description: "Đá vôi, quặng...",
            content: `<h3>1. Nguyên liệu</h3>
            <p>Nguyên liệu là vật liệu tự nhiên chưa qua xử lý, được dùng làm đầu vào cho các quá trình sản xuất.</p>
            <p>Ví dụ: Mía (sản xuất đường), Đá vôi (sản xuất xi măng), Quặng (sản xuất kim loại).</p>

            <h3>2. Một số nguyên liệu phổ biến</h3>
            <ul>
                <li><strong>Đá vôi:</strong> Thành phần chính là Calcium carbonate ($CaCO_3$). Dùng để nung vôi, sản xuất xi măng, làm đường. Đá vôi sủi bọt khi gặp axit.</li>
                <li><strong>Quặng:</strong> Là loại đất đá chứa kim loại. Ví dụ: Quặng bauxite (sản xuất nhôm), quặng hematite (sản xuất sắt).</li>
            </ul>

            <h3>3. Khai thác bền vững</h3>
            <p>Nguyên liệu khoáng sản là tài nguyên không tái tạo. Cần khai thác an toàn, tiết kiệm và bảo vệ môi trường.</p>`,
            imageUrl: "https://images.unsplash.com/photo-1618218168350-6e7c8115209f?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-14",
            title: "Bài 14: Một số nhiên liệu",
            description: "Than, xăng, dầu, khí đốt.",
            content: `<h3>1. Nhiên liệu là gì?</h3>
            <p>Nhiên liệu (chất đốt) là những chất khi cháy toả nhiệt và phát sáng. Ví dụ: than, củi, xăng, dầu, khí gas.</p>

            <h3>2. Phân loại nhiên liệu</h3>
            <ul>
                <li><strong>Nhiên liệu rắn:</strong> Than đá, gỗ, củi.</li>
                <li><strong>Nhiên liệu lỏng:</strong> Xăng, dầu, cồn.</li>
                <li><strong>Nhiên liệu khí:</strong> Khí thiên nhiên, khí mỏ dầu, biogas.</li>
            </ul>

            <h3>3. Sử dụng nhiên liệu và an ninh năng lượng</h3>
            <p>Nhiên liệu hóa thạch (than, dầu mỏ) là tài nguyên không tái tạo và gây ô nhiễm khi đốt cháy ($CO_2$).</p>
            <p><strong>Giải pháp:</strong></p>
            <ul>
                <li>Cung cấp đủ oxygen để nhiên liệu cháy hoàn toàn (tăng hiệu suất).</li>
                <li>Ưu tiên sử dụng năng lượng sạch, tái tạo.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1524316270928-12d937000732?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-15",
            title: "Bài 15: Một số lương thực, thực phẩm",
            description: "Vai trò của lương thực, thực phẩm.",
            content: `<h3>1. Vai trò của lương thực, thực phẩm</h3>
            <p>Cung cấp năng lượng và các chất dinh dưỡng cần thiết cho sự sống và phát triển của cơ thể.</p>
            <ul>
                <li><strong>Lương thực:</strong> Lúa gạo, ngô, khoai, sắn (chứa nhiều tinh bột).</li>
                <li><strong>Thực phẩm:</strong> Thịt, cá, trứng, sữa, rau củ quả.</li>
            </ul>

            <h3>2. Các nhóm chất dinh dưỡng chính</h3>
            <ul>
                <li><strong>Carbohydrate (Chất đường bột):</strong> Cung cấp năng lượng chính (Gạo, bánh mì).</li>
                <li><strong>Protein (Chất đạm):</strong> Xây dựng cơ thể, tạo tế bào mới (Thịt, cá, đậu).</li>
                <li><strong>Lipid (Chất béo):</strong> Dự trữ năng lượng, hòa tan vitamin (Dầu ăn, mỡ).</li>
                <li><strong>Vitamin và Khoáng chất:</strong> Tăng sức đề kháng, hỗ trợ chuyển hóa (Rau xanh, trái cây).</li>
            </ul>

            <h3>3. Bảo quản thực phẩm</h3>
            <p>Để tránh ôi thiu do vi khuẩn và nấm mốc, cần bảo quản: đông lạnh, sấy khô, hút chân không, muối chua, làm mứt.</p>`,
            imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        id: "c6-4",
        title: "Chương IV: Hỗn hợp & Tách chất",
        lessons: [
          {
            id: "l6-16",
            title: "Bài 16: Hỗn hợp các chất",
            description: "Hỗn hợp đồng nhất và không đồng nhất.",
            content: `<h3>1. Chất tinh khiết và Hỗn hợp</h3>
            <ul>
                <li><strong>Chất tinh khiết:</strong> Chỉ gồm một chất duy nhất, có tính chất nhất định. (VD: Nước cất, muối ăn tinh khiết).</li>
                <li><strong>Hỗn hợp:</strong> Hai hay nhiều chất trộn lẫn vào nhau. Tính chất thay đổi tùy thành phần. (VD: Nước đường, nước bột sắn).</li>
            </ul>

            <h3>2. Phân loại hỗn hợp</h3>
            <ul>
                <li><strong>Hỗn hợp đồng nhất (Dung dịch):</strong> Các chất phân bố đều, không phân biệt được ranh giới.
                    <br><em>Dung dịch = Chất tan + Dung môi.</em> (VD: Nước muối).</li>
                <li><strong>Hỗn hợp không đồng nhất:</strong>
                    <ul>
                        <li><strong>Huyền phù:</strong> Các hạt chất rắn lơ lửng trong chất lỏng (VD: Nước phù sa).</li>
                        <li><strong>Nhũ tương:</strong> Các giọt chất lỏng lơ lửng trong một chất lỏng khác (VD: Sữa, hỗn hợp dầu ăn và nước).</li>
                    </ul>
                </li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1627932644652-32b03332c027?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-17",
            title: "Bài 17: Tách chất khỏi hỗn hợp",
            description: "Lọc, cô cạn, chiết.",
            content: `<h3>Nguyên tắc tách chất</h3>
            <p>Dựa vào sự khác nhau về tính chất vật lý của các chất (kích thước hạt, độ tan, nhiệt độ sôi, khối lượng riêng...) để tách chúng ra khỏi hỗn hợp.</p>

            <h3>Các phương pháp thông dụng</h3>
            <ul>
                <li><strong>Lắng, gạn, lọc:</strong> Tách chất rắn không tan ra khỏi chất lỏng. 
                    <br><em>Ví dụ:</em> Lọc nước bằng bông, dùng phin cà phê.</li>
                <li><strong>Cô cạn:</strong> Tách chất rắn tan ra khỏi dung dịch (làm bay hơi dung môi).
                    <br><em>Ví dụ:</em> Làm muối từ nước biển.</li>
                <li><strong>Chiết:</strong> Tách hai chất lỏng không tan vào nhau (phân lớp).
                    <br><em>Ví dụ:</em> Tách dầu ăn ra khỏi nước bằng phễu chiết.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        id: "c6-5",
        title: "Chương V: Tế bào",
        lessons: [
          {
            id: "l6-18",
            title: "Bài 18: Tế bào – Đơn vị cơ bản của sự sống",
            description: "Khái niệm tế bào.",
            content: `<h3>1. Khái niệm tế bào</h3>
            <p>Tế bào là đơn vị cấu trúc và chức năng cơ bản của mọi cơ thể sinh vật. Mọi cơ thể sống đều được cấu tạo từ tế bào.</p>

            <h3>2. Hình dạng và kích thước</h3>
            <ul>
                <li><strong>Hình dạng:</strong> Đa dạng (hình cầu, hình đĩa, hình sao, hình sợi, hình thoi...). Ví dụ: Tế bào hồng cầu hình đĩa, tế bào thần kinh hình sao.</li>
                <li><strong>Kích thước:</strong> Phần lớn rất nhỏ, phải quan sát bằng kính hiển vi ($0.5 \\mu m - 100 \\mu m$). Một số ít có thể quan sát bằng mắt thường như tế bào trứng cá, tép bưởi.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1576086476234-1103be98f09f?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-19",
            title: "Bài 19: Cấu tạo và chức năng các thành phần",
            description: "Màng, chất tế bào, nhân/vùng nhân.",
            content: `<h3>1. Các thành phần chính của tế bào</h3>
            <ul>
                <li><strong>Màng tế bào:</strong> Bao bọc tế bào, bảo vệ và kiểm soát các chất ra vào tế bào.</li>
                <li><strong>Chất tế bào:</strong> Dịch keo lỏng, là nơi diễn ra các hoạt động sống của tế bào.</li>
                <li><strong>Nhân (hoặc vùng nhân):</strong> Chứa vật chất di truyền, là trung tâm điều khiển mọi hoạt động sống của tế bào.</li>
            </ul>

            <h3>2. Phân loại tế bào</h3>
            <ul>
                <li><strong>Tế bào nhân sơ (Vi khuẩn):</strong> Chưa có màng nhân bao bọc vật chất di truyền (chỉ có vùng nhân), không có các bào quan có màng.</li>
                <li><strong>Tế bào nhân thực (Động vật, Thực vật):</strong> Có nhân hoàn chỉnh được bao bọc bởi màng nhân.
                    <br><em>Lưu ý:</em> Tế bào thực vật có thêm <strong>thành tế bào</strong> (giúp tế bào cứng cáp) và <strong>lục lạp</strong> (chứa diệp lục để quang hợp).</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-20",
            title: "Bài 20: Sự lớn lên và sinh sản của tế bào",
            description: "Quá trình phân chia tế bào.",
            content: `<h3>1. Sự lớn lên của tế bào</h3>
            <p>Tế bào lấy các chất dinh dưỡng từ môi trường, tổng hợp thành chất của mình để tăng kích thước và khối lượng.</p>

            <h3>2. Sự sinh sản (Phân chia tế bào)</h3>
            <p>Khi tế bào lớn đến một kích thước nhất định, nó sẽ thực hiện quá trình phân chia:</p>
            <ul>
                <li>Từ 1 tế bào mẹ $\\rightarrow$ 2 tế bào con.</li>
                <li>Số tế bào con tạo thành sau $n$ lần phân chia từ 1 tế bào ban đầu là $2^n$.</li>
            </ul>

            <h3>3. Ý nghĩa</h3>
            <p>Giúp cơ thể sinh vật lớn lên và thay thế các tế bào bị già, chết hoặc tổn thương.</p>`,
            imageUrl: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-21",
            title: "Bài 21: Thực hành quan sát tế bào",
            description: "Quan sát tế bào thực vật, động vật.",
            content: `<h3>1. Quan sát tế bào biểu bì hành tây (Thực vật)</h3>
            <ul>
                <li>Tách một lớp biểu bì mỏng từ vảy hành.</li>
                <li>Đặt lên lam kính, nhỏ một giọt nước, đậy lamen lại.</li>
                <li>Quan sát dưới kính hiển vi: Các tế bào hình đa giác, xếp sát nhau như những viên gạch, có vách ngăn rõ ràng.</li>
            </ul>

            <h3>2. Quan sát tế bào trứng cá (Động vật)</h3>
            <p>Dùng kim mũi mác khoắng nhẹ trứng cá, quan sát bằng kính lúp hoặc kính hiển vi soi nổi. Tế bào hình cầu.</p>`,
            imageUrl: "https://images.unsplash.com/photo-1596576629990-2856402377c0?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        id: "c6-6",
        title: "Chương VI: Từ tế bào đến cơ thể",
        lessons: [
          { id: "l6-22", title: "Bài 22: Cơ thể sinh vật", description: "Cơ thể đơn bào và đa bào.", content: "<h3>1. Cơ thể đơn bào</h3><p>Cơ thể chỉ được cấu tạo từ <strong>một tế bào</strong>. Tế bào đó thực hiện tất cả các chức năng sống (tiêu hóa, hô hấp, bài tiết, sinh sản...).<br>Ví dụ: Vi khuẩn, trùng roi, trùng giày, tảo lục đơn bào.</p><h3>2. Cơ thể đa bào</h3><p>Cơ thể được cấu tạo từ <strong>nhiều tế bào</strong>. Các tế bào chuyên hóa, phối hợp với nhau để thực hiện các chức năng sống.<br>Ví dụ: Cây phượng, con hổ, con người.</p>", imageUrl: "https://images.unsplash.com/photo-1590487057089-a2928392095f?auto=format&fit=crop&w=800&q=80" },
          { id: "l6-23", title: "Bài 23: Tổ chức cơ thể đa bào", description: "Tế bào -> Mô -> Cơ quan -> Hệ cơ quan -> Cơ thể.", content: "<h3>Các cấp độ tổ chức trong cơ thể đa bào</h3><p>Cơ thể đa bào được tổ chức theo thứ tự từ thấp đến cao:</p><div class='highlight-box'><strong>Tế bào $\\rightarrow$ Mô $\\rightarrow$ Cơ quan $\\rightarrow$ Hệ cơ quan $\\rightarrow$ Cơ thể</strong></div><ul><li><strong>Mô:</strong> Tập hợp các tế bào giống nhau cùng thực hiện một chức năng (VD: Mô cơ, mô dẫn).</li><li><strong>Cơ quan:</strong> Tập hợp nhiều mô cùng thực hiện một chức năng (VD: Dạ dày, lá cây).</li><li><strong>Hệ cơ quan:</strong> Tập hợp nhiều cơ quan cùng phối hợp hoạt động (VD: Hệ tiêu hóa, hệ chồi).</li><li><strong>Cơ thể:</strong> Tập hợp các hệ cơ quan hoạt động thống nhất.</li></ul>", imageUrl: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=800&q=80" },
          { id: "l6-24", title: "Bài 24: Thực hành quan sát cơ thể đơn bào, đa bào", description: "Quan sát trùng giày, tảo, cây xanh...", content: "<h3>Nội dung thực hành</h3><ul><li>Quan sát cơ thể đơn bào: Làm tiêu bản nước ao/hồ ngâm rơm cỏ để quan sát trùng giày, trùng roi dưới kính hiển vi.</li><li>Quan sát cơ thể đa bào: Quan sát cây cà chua (rễ, thân, lá), quan sát mô hình cấu tạo cơ thể người để nhận biết các cơ quan và hệ cơ quan.</li></ul>", imageUrl: "https://images.unsplash.com/photo-1516213824169-b3a693c04225?auto=format&fit=crop&w=800&q=80" }
        ]
      },
      {
        id: "c6-7",
        title: "Chương VII: Đa dạng thế giới sống",
        lessons: [
          { id: "l6-25", title: "Bài 25: Hệ thống phân loại sinh vật", description: "5 giới sinh vật.", content: "<h3>1. Các bậc phân loại</h3><p>Từ thấp đến cao: <strong>Loài $\\rightarrow$ Chi (Giống) $\\rightarrow$ Họ $\\rightarrow$ Bộ $\\rightarrow$ Lớp $\\rightarrow$ Ngành $\\rightarrow$ Giới</strong>. Loài là bậc phân loại cơ bản nhất.</p><h3>2. Năm giới sinh vật</h3><p>Thế giới sống được chia thành 5 giới:</p><ol><li><strong>Giới Khởi sinh:</strong> Vi khuẩn (Tế bào nhân sơ, kích thước nhỏ).</li><li><strong>Giới Nguyên sinh:</strong> Tảo, trùng roi (Nhân thực, đơn bào hoặc đa bào đơn giản).</li><li><strong>Giới Nấm:</strong> Nấm men, nấm mốc, nấm lớn (Nhân thực, dị dưỡng, thành tế bào chitin).</li><li><strong>Giới Thực vật:</strong> Rêu, dương xỉ, hạt trần, hạt kín (Nhân thực, đa bào, tự dưỡng, thành tế bào cellulose).</li><li><strong>Giới Động vật:</strong> (Nhân thực, đa bào, dị dưỡng, có khả năng di chuyển).</li></ol>", imageUrl: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=800&q=80" },
          { id: "l6-26", title: "Bài 26: Khóa lưỡng phân", description: "Cách xây dựng khóa lưỡng phân.", content: "<h3>Khóa lưỡng phân là gì?</h3><p>Là phương pháp dùng để phân loại sinh vật dựa trên một cặp đặc điểm đối lập để chia sinh vật thành hai nhóm. Quá trình này lặp lại cho đến khi xác định được từng loài cụ thể.</p><h3>Cách xây dựng</h3><p>Bước 1: Xác định các đặc điểm đặc trưng của mỗi sinh vật.<br>Bước 2: Chọn một cặp đặc điểm đối lập để phân chia thành 2 nhóm.<br>Bước 3: Tiếp tục phân chia các nhóm nhỏ cho đến khi mỗi nhóm chỉ còn 1 sinh vật.</p>", imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80" },
          { id: "l6-27", title: "Bài 27: Vi khuẩn", description: "Đặc điểm và vai trò của vi khuẩn.", content: "<h3>1. Đặc điểm</h3><p>Vi khuẩn là sinh vật đơn bào, nhân sơ, kích thước rất nhỏ. Hình dạng đa dạng: hình cầu (tụ cầu), hình que (trực khuẩn), hình xoắn (xoắn khuẩn).</p><h3>2. Vai trò</h3><ul><li><strong>Có lợi:</strong> Phân giải xác động thực vật làm sạch môi trường, dùng trong chế biến thực phẩm (sữa chua, dưa muối), sản xuất thuốc kháng sinh, phân bón.</li><li><strong>Có hại:</strong> Gây bệnh cho người, động vật, thực vật; làm hỏng thức ăn.</li></ul>", imageUrl: "https://images.unsplash.com/photo-1584036561566-b93a90a6314f?auto=format&fit=crop&w=800&q=80" },
          { id: "l6-28", title: "Bài 28: Thực hành làm sữa chua", description: "Ứng dụng của vi khuẩn lên men.", content: "<h3>Nguyên lý</h3><p>Sử dụng vi khuẩn Lactic để lên men, chuyển hóa đường trong sữa thành Acid Lactic, làm sữa đông tụ và có vị chua dịu.</p><h3>Lưu ý</h3><p>Cần duy trì nhiệt độ ủ ấm khoảng 40-50 độ C để vi khuẩn phát triển tốt nhất.</p>", imageUrl: "https://images.unsplash.com/photo-1562166424-699684742cfd?auto=format&fit=crop&w=800&q=80" },
          { id: "l6-29", title: "Bài 29: Virus", description: "Cấu tạo và tác hại của Virus.", content: "<h3>1. Đặc điểm của Virus</h3><p>Kích thước siêu hiển vi (nhỏ hơn vi khuẩn), <strong>chưa có cấu tạo tế bào</strong>. Chỉ gồm vỏ protein và lõi vật chất di truyền.</p><h3>2. Lối sống</h3><p>Sống <strong>ký sinh bắt buộc</strong> trong tế bào vật chủ. Khi ra khỏi tế bào vật chủ, virus tồn tại như vật không sống.</p><h3>3. Bệnh do virus</h3><p>HIV/AIDS, cúm, sốt xuất huyết, dại, COVID-19... Phòng bệnh chủ yếu bằng <strong>vaccine</strong>.</p>", imageUrl: "https://images.unsplash.com/photo-1584448377263-0948942a7732?auto=format&fit=crop&w=800&q=80" },
          { id: "l6-30", title: "Bài 30: Nguyên sinh vật", description: "Trùng roi, trùng giày...", content: "<h3>1. Đặc điểm</h3><p>Là sinh vật có nhân thực, cơ thể đơn bào hoặc đa bào đơn giản, kích thước nhỏ.</p><h3>2. Đại diện</h3><ul><li><strong>Tảo (Tảo lục, tảo silic):</strong> Tự dưỡng, sống dưới nước.</li><li><strong>Động vật nguyên sinh (Trùng roi, trùng giày, trùng biến hình):</strong> Dị dưỡng, có khả năng di chuyển.</li></ul><h3>3. Vai trò</h3><p>Làm thức ăn cho động vật thủy sinh. Một số gây bệnh nguy hiểm (trùng sốt rét, trùng kiết lị).</p>", imageUrl: "https://images.unsplash.com/photo-1629899320875-c99df3d27464?auto=format&fit=crop&w=800&q=80" },
          { id: "l6-31", title: "Bài 31: Thực hành quan sát nguyên sinh vật", description: "Quan sát dưới kính hiển vi.", content: "Lấy một giọt nước ao/hồ (chỗ có váng xanh) nhỏ lên lam kính để quan sát sự di chuyển của trùng roi, trùng giày dưới kính hiển vi.", imageUrl: "https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?auto=format&fit=crop&w=800&q=80" },
          { id: "l6-32", title: "Bài 32: Nấm", description: "Đặc điểm và vai trò của Nấm.", content: "<h3>1. Đặc điểm</h3><p>Sinh vật nhân thực, có thành tế bào, không có lục lạp (không quang hợp được), sống dị dưỡng (hoại sinh hoặc ký sinh).</p><h3>2. Phân loại</h3><ul><li><strong>Nấm đơn bào:</strong> Nấm men.</li><li><strong>Nấm đa bào:</strong> Nấm mốc, nấm rơm, nấm linh chi, nấm hương.</li></ul><h3>3. Vai trò</h3><p>Làm thực phẩm, làm thuốc, phân giải chất hữu cơ. Tuy nhiên, một số nấm gây độc hoặc gây bệnh nấm da.</p>", imageUrl: "https://images.unsplash.com/photo-1508269796033-c793ba24949a?auto=format&fit=crop&w=800&q=80" },
          { id: "l6-33", title: "Bài 33: Thực hành quan sát nấm", description: "Quan sát nấm mốc và nấm quả.", content: "Quan sát mốc bánh mì (dạng sợi) bằng kính lúp. Quan sát cấu tạo cây nấm rơm gồm: mũ nấm, các phiến nấm (dưới mũ), cuống nấm và sợi nấm.", imageUrl: "https://images.unsplash.com/photo-1625932599023-46c2436d4df9?auto=format&fit=crop&w=800&q=80" },
          { id: "l6-34", title: "Bài 34: Thực vật", description: "Các nhóm thực vật chính.", content: "<h3>Phân loại thực vật</h3><ul><li><strong>Rêu:</strong> Chưa có mạch dẫn, chưa có rễ chính thức. Sinh sản bằng bào tử. Sống nơi ẩm ướt.</li><li><strong>Dương xỉ:</strong> Đã có mạch dẫn, có rễ, thân, lá thật. Sinh sản bằng bào tử. Lá non thường cuộn tròn.</li><li><strong>Hạt trần (Thông):</strong> Có mạch dẫn, sinh sản bằng hạt. Hạt nằm lộ trên các lá noãn (nón). Chưa có hoa và quả.</li><li><strong>Hạt kín:</strong> Có mạch dẫn, có hoa và quả. Hạt được bảo vệ trong quả. Là nhóm thực vật tiến hóa và đa dạng nhất.</li></ul>", imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80" },
          { id: "l6-35", title: "Bài 35: Thực hành quan sát thực vật", description: "Phân biệt các nhóm thực vật.", content: "Quan sát mẫu vật thật hoặc tranh ảnh để phân biệt các đặc điểm đặc trưng của Rêu, Dương xỉ, Thông, và Cây có hoa.", imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80" },
          { id: "l6-36", title: "Bài 36: Động vật", description: "Động vật không xương sống và có xương sống.", content: "<h3>1. Động vật không xương sống</h3><ul><li>Ruột khoang (Sứa, thủy tức).</li><li>Giun (Giun đất, sán).</li><li>Thân mềm (Ốc, trai, mực).</li><li>Chân khớp (Tôm, cua, nhện, côn trùng) - Nhóm đa dạng nhất.</li></ul><h3>2. Động vật có xương sống</h3><ul><li><strong>Cá:</strong> Hô hấp bằng mang, bơi bằng vây.</li><li><strong>Lưỡng cư (Ếch, nhái):</strong> Sống vừa nước vừa cạn, da trần ẩm ướt.</li><li><strong>Bò sát (Thằn lằn, cá sấu, rùa):</strong> Da khô có vảy sừng, đẻ trứng.</li><li><strong>Chim:</strong> Có lông vũ, chi trước biến đổi thành cánh.</li><li><strong>Thú (Động vật có vú):</strong> Có lông mao, đẻ con và nuôi con bằng sữa mẹ.</li></ul>", imageUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=800&q=80" },
          { id: "l6-37", title: "Bài 37: Thực hành quan sát động vật", description: "Quan sát động vật ngoài thiên nhiên.", content: "Sử dụng ống nhòm, kính lúp quan sát sự di chuyển và tập tính của động vật ở vườn trường hoặc công viên.", imageUrl: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=800&q=80" },
          { id: "l6-38", title: "Bài 38: Đa dạng sinh học", description: "Vai trò và bảo vệ đa dạng sinh học.", content: "<h3>1. Khái niệm</h3><p>Đa dạng sinh học biểu thị sự phong phú về số lượng loài, số lượng cá thể trong loài và môi trường sống.</p><h3>2. Vai trò</h3><p>Cung cấp lương thực, thực phẩm, dược liệu; điều hòa khí hậu, bảo vệ đất và nguồn nước; có giá trị du lịch, nghiên cứu.</p><h3>3. Bảo vệ</h3><p>Nguyên nhân suy giảm: phá rừng, săn bắt, ô nhiễm. Cần bảo vệ rừng, cấm săn bắt động vật quý hiếm, bảo vệ môi trường.</p>", imageUrl: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?auto=format&fit=crop&w=800&q=80" },
          { id: "l6-39", title: "Bài 39: Tìm hiểu sinh vật ngoài thiên nhiên", description: "Hoạt động trải nghiệm.", content: "Làm bộ sưu tập tranh ảnh, mẫu vật về các loài sinh vật tại địa phương. Phân loại chúng vào các nhóm đã học.", imageUrl: "https://images.unsplash.com/photo-1596716093370-1364d994348a?auto=format&fit=crop&w=800&q=80" }
        ]
      },
      {
        id: "c6-8",
        title: "Chương VIII: Lực trong đời sống",
        lessons: [
          {
            id: "l6-40",
            title: "Bài 40: Lực là gì?",
            description: "Khái niệm lực (đẩy, kéo).",
            content: `<h3>1. Khái niệm lực</h3>
            <p>Tác dụng đẩy hoặc kéo của vật này lên vật khác gọi là <strong>lực</strong>.</p>
            <h3>2. Tác dụng của lực</h3>
            <p>Lực có thể làm:</p>
            <ul>
                <li>Thay đổi tốc độ chuyển động (nhanh lên, chậm lại).</li>
                <li>Thay đổi hướng chuyển động.</li>
                <li>Làm biến dạng vật.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-41",
            title: "Bài 41: Biểu diễn lực",
            description: "Độ lớn, phương, chiều.",
            content: `<h3>1. Các đặc trưng của lực</h3>
            <p>Lực được đặc trưng bởi: <strong>Điểm đặt, Phương, Chiều và Độ lớn</strong>.</p>
            <p>Đơn vị lực là <strong>Newton</strong> (kí hiệu: $N$).</p>
            <h3>2. Biểu diễn lực</h3>
            <p>Lực được biểu diễn bằng một mũi tên:</p>
            <ul>
                <li>Gốc mũi tên là điểm đặt của lực.</li>
                <li>Phương và chiều của mũi tên trùng với phương và chiều của lực.</li>
                <li>Độ dài mũi tên biểu thị độ lớn của lực (theo một tỉ lệ xích).</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-42",
            title: "Bài 42: Biến dạng của lò xo",
            description: "Độ dãn của lò xo.",
            content: `<h3>1. Tính đàn hồi</h3>
            <p>Lò xo là vật đàn hồi. Khi chịu tác dụng lực (kéo/nén), nó bị biến dạng. Khi thôi tác dụng, nó trở về hình dạng ban đầu.</p>
            <h3>2. Đặc điểm biến dạng</h3>
            <p>Độ dãn của lò xo treo thẳng đứng tỉ lệ thuận với khối lượng vật treo (trong giới hạn đàn hồi của lò xo).</p>
            <p>$$ \\Delta l = l - l_0 $$</p>
            <p>Trong đó $l_0$ là chiều dài tự nhiên, $l$ là chiều dài khi biến dạng.</p>`,
            imageUrl: "https://images.unsplash.com/photo-1515259972333-662232936729?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-43",
            title: "Bài 43: Trọng lượng, lực hấp dẫn",
            description: "Lực hút của Trái Đất.",
            content: `<h3>1. Lực hấp dẫn</h3>
            <p>Là lực hút giữa các vật có khối lượng. Mọi vật trong vũ trụ đều hút nhau.</p>
            <h3>2. Trọng lực và Trọng lượng</h3>
            <ul>
                <li><strong>Trọng lực:</strong> Là lực hấp dẫn do Trái Đất tác dụng lên vật.</li>
                <li><strong>Trọng lượng ($P$):</strong> Là độ lớn của trọng lực tác dụng lên vật. Đơn vị là Newton ($N$).</li>
            </ul>
            <h3>3. Công thức</h3>
            <p>Trên bề mặt Trái Đất, mối liên hệ giữa trọng lượng và khối lượng là:</p>
            <p>$$ P = 10 \\times m $$</p>
            <p>($m$ tính bằng $kg$, $P$ tính bằng $N$).</p>`,
            imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-44",
            title: "Bài 44: Lực ma sát",
            description: "Ma sát trượt, ma sát nghỉ.",
            content: `<h3>1. Lực ma sát là gì?</h3>
            <p>Lực ma sát là lực tiếp xúc xuất hiện ở bề mặt tiếp xúc giữa hai vật, cản trở chuyển động của vật này trên bề mặt vật kia.</p>
            <h3>2. Các loại ma sát</h3>
            <ul>
                <li><strong>Ma sát trượt:</strong> Xuất hiện khi vật trượt trên bề mặt vật khác (VD: phanh xe).</li>
                <li><strong>Ma sát lăn:</strong> Xuất hiện khi vật lăn trên bề mặt vật khác (VD: bánh xe lăn). Ma sát lăn nhỏ hơn ma sát trượt.</li>
                <li><strong>Ma sát nghỉ:</strong> Giữ cho vật đứng yên khi có lực tác dụng nhưng chưa đủ làm vật chuyển động.</li>
            </ul>
            <h3>3. Tác dụng</h3>
            <p>Ma sát có thể có hại (làm mòn chi tiết máy) hoặc có lợi (giúp ta cầm nắm, đi lại được).</p>`,
            imageUrl: "https://images.unsplash.com/photo-1597762699478-434b971a64d1?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-45",
            title: "Bài 45: Lực cản của nước",
            description: "Lực cản môi trường lỏng.",
            content: `<h3>Lực cản của nước</h3>
            <p>Khi một vật chuyển động trong nước (hoặc không khí), nước sẽ tác dụng một lực cản ngược chiều chuyển động, làm vật chuyển động chậm lại.</p>
            <p>Độ lớn lực cản phụ thuộc vào hình dạng của vật. Hình dạng khí động học (thuôn nhọn ở đầu) giúp giảm lực cản (VD: hình dạng con cá, tàu ngầm).</p>`,
            imageUrl: "https://images.unsplash.com/photo-1582967788606-a171f1080ca8?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        id: "c6-9",
        title: "Chương IX: Năng lượng",
        lessons: [
          {
            id: "l6-46",
            title: "Bài 46: Năng lượng và sự truyền năng lượng",
            description: "Khái niệm năng lượng.",
            content: `<h3>1. Năng lượng</h3>
            <p>Mọi hoạt động đều cần năng lượng. Năng lượng đặc trưng cho khả năng tác dụng lực.</p>
            <p>Đơn vị năng lượng trong hệ SI là <strong>Joule</strong> (kí hiệu: $J$).</p>
            <h3>2. Sự truyền năng lượng</h3>
            <p>Năng lượng có thể truyền từ vật này sang vật khác thông qua:</p>
            <ul>
                <li>Tác dụng lực (thực hiện công).</li>
                <li>Truyền nhiệt.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-47",
            title: "Bài 47: Một số dạng năng lượng",
            description: "Động năng, thế năng, nhiệt năng...",
            content: `<h3>Các dạng năng lượng thường gặp</h3>
            <ul>
                <li><strong>Động năng:</strong> Năng lượng vật có được do chuyển động (xe đang chạy).</li>
                <li><strong>Thế năng hấp dẫn:</strong> Năng lượng vật có được do ở độ cao so với mặt đất (quả táo trên cây).</li>
                <li><strong>Hóa năng:</strong> Năng lượng lưu trữ trong các liên kết hóa học (pin, xăng dầu, thức ăn).</li>
                <li><strong>Điện năng:</strong> Năng lượng của dòng điện.</li>
                <li><strong>Nhiệt năng:</strong> Năng lượng nhiệt (lửa, lò sưởi).</li>
                <li><strong>Quang năng:</strong> Năng lượng ánh sáng (Mặt Trời, bóng đèn).</li>
                <li><strong>Năng lượng âm:</strong> Năng lượng của sóng âm.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1413882353314-73389f63b6fd?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-48",
            title: "Bài 48: Sự chuyển hóa năng lượng",
            description: "Định luật bảo toàn năng lượng.",
            content: `<h3>1. Sự chuyển hóa</h3>
            <p>Năng lượng có thể chuyển từ dạng này sang dạng khác. Ví dụ: Khi bật quạt điện, điện năng chuyển hóa thành cơ năng (động năng) và một phần nhiệt năng.</p>
            <h3>2. Định luật bảo toàn năng lượng</h3>
            <p><em>"Năng lượng không tự sinh ra hoặc tự mất đi, nó chỉ chuyển từ dạng này sang dạng khác hoặc truyền từ vật này sang vật khác."</em></p>`,
            imageUrl: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-49",
            title: "Bài 49: Năng lượng hao phí",
            description: "Năng lượng hữu ích và hao phí.",
            content: `<h3>Năng lượng hữu ích và hao phí</h3>
            <p>Khi sử dụng năng lượng vào một mục đích nào đó, luôn có một phần năng lượng là hữu ích và một phần là hao phí.</p>
            <ul>
                <li><strong>Năng lượng hữu ích:</strong> Phần năng lượng phục vụ đúng mục đích (VD: Ánh sáng từ bóng đèn).</li>
                <li><strong>Năng lượng hao phí:</strong> Phần năng lượng không phục vụ mục đích chính, thường biến thành nhiệt năng tỏa ra môi trường (VD: Nhiệt tỏa ra từ bóng đèn).</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-50",
            title: "Bài 50: Năng lượng tái tạo",
            description: "Điện gió, điện mặt trời...",
            content: `<h3>1. Năng lượng tái tạo</h3>
            <p>Là nguồn năng lượng có sẵn trong thiên nhiên, liên tục được bổ sung, được coi là vô tận. Ví dụ: Năng lượng Mặt Trời, năng lượng gió, năng lượng nước, năng lượng sinh khối, địa nhiệt.</p>
            <h3>2. Năng lượng không tái tạo</h3>
            <p>Mất hàng triệu năm để hình thành, sẽ bị cạn kiệt nếu khai thác quá mức. Ví dụ: Than đá, dầu mỏ, khí đốt (nhiên liệu hóa thạch).</p>`,
            imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-51",
            title: "Bài 51: Tiết kiệm năng lượng",
            description: "Biện pháp tiết kiệm.",
            content: `<h3>Tại sao phải tiết kiệm năng lượng?</h3>
            <p>Tiết kiệm năng lượng giúp bảo vệ tài nguyên thiên nhiên, giảm ô nhiễm môi trường và tiết kiệm chi phí.</p>
            <h3>Một số biện pháp</h3>
            <ul>
                <li>Tắt các thiết bị điện khi không sử dụng.</li>
                <li>Sử dụng các thiết bị tiết kiệm điện (đèn LED).</li>
                <li>Tận dụng ánh sáng và gió tự nhiên.</li>
                <li>Sử dụng phương tiện công cộng hoặc xe đạp.</li>
            </ul>`,
            imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&w=800&q=80"
          }
        ]
      },
      {
        id: "c6-10",
        title: "Chương X: Trái Đất và bầu trời",
        lessons: [
          {
            id: "l6-52",
            title: "Bài 52: Chuyển động nhìn thấy của Mặt Trời",
            description: "Mọc đằng Đông, lặn đằng Tây.",
            content: `<h3>Chuyển động của Mặt Trời</h3>
            <p>Hằng ngày, ta thấy Mặt Trời mọc ở hướng Đông, di chuyển trên bầu trời và lặn ở hướng Tây.</p>
            <p><strong>Giải thích:</strong> Đây là chuyển động nhìn thấy (chuyển động giả). Thực tế là do Trái Đất tự quay quanh trục của nó theo chiều từ <strong>Tây sang Đông</strong>, nên ta thấy Mặt Trời di chuyển ngược lại.</p>`,
            imageUrl: "https://images.unsplash.com/photo-1529753253655-470be9a42781?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-53",
            title: "Bài 53: Mặt Trăng",
            description: "Các pha của Mặt Trăng.",
            content: `<h3>1. Đặc điểm</h3>
            <p>Mặt Trăng là vệ tinh tự nhiên duy nhất của Trái Đất. Mặt Trăng không tự phát sáng, chúng ta nhìn thấy nó là do nó phản chiếu ánh sáng từ Mặt Trời.</p>
            <h3>2. Các pha của Mặt Trăng</h3>
            <p>Hình dạng Mặt Trăng mà ta nhìn thấy thay đổi theo chu kỳ tháng (Trăng tròn, Trăng khuyết, Không trăng). Nguyên nhân là do vị trí tương đối giữa Mặt Trời, Trái Đất và Mặt Trăng thay đổi khi Mặt Trăng quay quanh Trái Đất.</p>`,
            imageUrl: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-54",
            title: "Bài 54: Hệ Mặt Trời",
            description: "8 hành tinh trong hệ.",
            content: `<h3>Cấu trúc Hệ Mặt Trời (Thái Dương Hệ)</h3>
            <p>Hệ Mặt Trời bao gồm Mặt Trời ở trung tâm và các thiên thể chuyển động xung quanh.</p>
            <p>Có 8 hành tinh quay quanh Mặt Trời theo thứ tự từ trong ra ngoài:</p>
            <ol>
                <li><strong>Thủy tinh</strong> (Mercury)</li>
                <li><strong>Kim tinh</strong> (Venus)</li>
                <li><strong>Trái Đất</strong> (Earth)</li>
                <li><strong>Hỏa tinh</strong> (Mars)</li>
                <li><strong>Mộc tinh</strong> (Jupiter)</li>
                <li><strong>Thổ tinh</strong> (Saturn)</li>
                <li><strong>Thiên Vương tinh</strong> (Uranus)</li>
                <li><strong>Hải Vương tinh</strong> (Neptune)</li>
            </ol>`,
            imageUrl: "https://images.unsplash.com/photo-1614730341194-75c60740a270?auto=format&fit=crop&w=800&q=80"
          },
          {
            id: "l6-55",
            title: "Bài 55: Ngân Hà",
            description: "Dải Ngân Hà (Milky Way).",
            content: `<h3>Ngân Hà (Milky Way)</h3>
            <p>Ngân Hà là một tập hợp hàng trăm tỉ ngôi sao, khí và bụi. Hệ Mặt Trời của chúng ta nằm ở rìa của một cánh tay xoắn ốc của Ngân Hà.</p>
            <p>Nhìn từ Trái Đất, Ngân Hà trông giống như một dải sáng mờ vắt ngang bầu trời đêm (Sông Ngân).</p>`,
            imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80"
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Lớp 7",
    description: "Nguyên tử, Phân tử, Tốc độ, Âm thanh, Ánh sáng.",
    color: "bg-emerald-500",
    icon: "atom",
    chapters: [
      {
        id: "c7-1",
        title: "Chất và sự biến đổi",
        lessons: [
          {
            id: "l7-1-1",
            title: "Nguyên tử",
            description: "Cấu tạo cơ bản của vật chất.",
            content: "Nguyên tử là hạt vô cùng nhỏ, trung hòa về điện. Cấu tạo gồm: \n- **Hạt nhân**: Mang điện tích dương (gồm proton và neutron).\n- **Vỏ nguyên tử**: Gồm các electron mang điện tích âm chuyển động xung quanh hạt nhân.",
            imageUrl: "https://picsum.photos/800/400?random=5"
          }
        ]
      },
      {
        id: "c7-2",
        title: "Năng lượng và sự biến đổi",
        lessons: [
          {
            id: "l7-2-1",
            title: "Tốc độ chuyển động",
            description: "Khái niệm và công thức tính tốc độ.",
            content: "Tốc độ cho biết mức độ nhanh hay chậm của chuyển động. \n\nCông thức: $$ v = \\frac{s}{t} $$\nTrong đó:\n- $v$: Tốc độ\n- $s$: Quãng đường đi được\n- $t$: Thời gian đi hết quãng đường đó.",
            imageUrl: "https://picsum.photos/800/400?random=6"
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Lớp 8",
    description: "Phản ứng hóa học, Lực, Nhiệt, Cơ thể người.",
    color: "bg-indigo-500",
    icon: "dna",
    chapters: [
      {
        id: "c8-1",
        title: "Phản ứng hóa học",
        lessons: [
          {
            id: "l8-1-1",
            title: "Biến đổi vật lý và hóa học",
            description: "Phân biệt sự khác nhau giữa hai quá trình.",
            content: "- **Biến đổi vật lý**: Chất biến đổi về trạng thái, hình dạng nhưng vẫn giữ nguyên tính chất chất ban đầu (ví dụ: nước đá tan chảy).\n- **Biến đổi hóa học**: Chất biến đổi tạo ra chất mới (ví dụ: sắt bị gỉ, đốt cháy than).",
            imageUrl: "https://picsum.photos/800/400?random=7"
          }
        ]
      },
      {
        id: "c8-2",
        title: "Cơ thể người",
        lessons: [
          {
            id: "l8-2-1",
            title: "Hệ vận động",
            description: "Cấu tạo bộ xương và hệ cơ.",
            content: "Hệ vận động gồm bộ xương và hệ cơ. \n- **Bộ xương**: Tạo khung, bảo vệ nội quan, là chỗ bám cho cơ.\n- **Hệ cơ**: Co dãn giúp xương cử động.",
            imageUrl: "https://picsum.photos/800/400?random=8"
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Lớp 9",
    description: "Quang học, Điện từ, Di truyền và Tiến hóa.",
    color: "bg-rose-500",
    icon: "⚡",
    chapters: [
      {
        id: "c9-1",
        title: "Năng lượng và sự biến đổi",
        lessons: [
          {
            id: "l9-1-1",
            title: "Định luật Ohm",
            description: "Mối liên hệ giữa cường độ dòng điện, hiệu điện thế và điện trở.",
            content: "Cường độ dòng điện chạy qua dây dẫn tỉ lệ thuận với hiệu điện thế đặt vào hai đầu dây và tỉ lệ nghịch với điện trở của dây.\n\nCông thức: $$ I = \\frac{U}{R} $$",
            imageUrl: "https://picsum.photos/800/400?random=9"
          }
        ]
      },
      {
        id: "c9-2",
        title: "Di truyền học",
        lessons: [
          {
            id: "l9-2-1",
            title: "Nhiễm sắc thể",
            description: "Cấu trúc và chức năng của NST.",
            content: "Nhiễm sắc thể (NST) là cấu trúc nằm trong nhân tế bào, bắt màu thuốc nhuộm kiềm tính. NST chứa DNA, là vật chất di truyền ở cấp độ tế bào.",
            imageUrl: "https://picsum.photos/800/400?random=10"
          }
        ]
      }
    ]
  }
];
