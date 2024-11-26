import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/EventBanner.css";
import "../styles/Registration.css";

const events = [
    {
      id: 1,
      title: "Đêm Nhạc Giao Lưu",
      location: "N2T1",
      datetime: "19h00 - 15/11/2023",
      ticketLeft: "150/400",
      description:
        "Đêm nhạc giao lưu tại N2T1 sẽ là sự kiện âm nhạc đáng mong đợi cho những người yêu thích những giai điệu nhẹ nhàng, ấm áp. Chương trình được tổ chức với mục đích kết nối các nghệ sĩ trẻ với khán giả qua những ca khúc nổi tiếng. Những bài hát được chọn lựa kỹ lưỡng, bao gồm các bản ballad, pop và những ca khúc trữ tình sẽ mang lại một không gian thưởng thức nghệ thuật sâu lắng. Ngoài các tiết mục đơn ca, chương trình còn có các tiết mục song ca và trình diễn nhạc cụ truyền thống. Khán giả sẽ có cơ hội giao lưu, trò chuyện với các nghệ sĩ và nghe những câu chuyện thú vị về hành trình âm nhạc của họ. Sự kiện này cũng là dịp để khán giả gặp gỡ những người có cùng sở thích, cùng nhau chia sẻ và thưởng thức nghệ thuật trong không gian thoải mái, thân mật. Đừng bỏ lỡ cơ hội tận hưởng một đêm nhạc đầy cảm xúc tại N2T1.",
    },
    {
      id: 2,
      title: "Triển Lãm Nghệ Thuật Đương Đại",
      location: "Trịnh Công Sơn",
      datetime: "09h00 - 20/11/2023",
      ticketLeft: "100/300",
      description:
        "Triển lãm nghệ thuật đương đại tại Trịnh Công Sơn mang đến một góc nhìn mới mẻ về nghệ thuật hiện đại qua các tác phẩm của những nghệ sĩ trẻ đầy sáng tạo. Sự kiện bao gồm nhiều tác phẩm hội họa, điêu khắc, và sắp đặt, thể hiện sự giao thoa giữa truyền thống và hiện đại trong nghệ thuật Việt Nam. Những tác phẩm này không chỉ đơn thuần là những bức tranh hay tượng, mà còn chứa đựng những câu chuyện, suy nghĩ và cảm xúc của người nghệ sĩ. Triển lãm còn có các buổi nói chuyện với các nghệ sĩ, nơi khán giả có thể trực tiếp đặt câu hỏi và lắng nghe những chia sẻ về quá trình sáng tác của họ. Đây là cơ hội để người yêu nghệ thuật mở rộng tầm nhìn, tìm hiểu thêm về những xu hướng nghệ thuật mới, cũng như cảm nhận được sự đa dạng và phong phú của nghệ thuật đương đại Việt Nam. Sự kiện này hứa hẹn mang đến một trải nghiệm thú vị và khó quên cho tất cả mọi người.",
    },
    {
      id: 3,
      title: "Ngày Hội Sách",
      location: "N2T1",
      datetime: "10h00 - 01/12/2023",
      ticketLeft: "180/500",
      description:
        "Ngày hội sách tại N2T1 là sự kiện dành cho những người yêu sách và muốn khám phá kho tàng tri thức. Hàng trăm đầu sách đa dạng thể loại sẽ được trưng bày và bán với giá ưu đãi, từ các tác phẩm văn học kinh điển đến sách khoa học, kỹ năng sống và sách thiếu nhi. Sự kiện còn có các buổi tọa đàm với sự tham gia của các tác giả nổi tiếng, nơi độc giả có thể lắng nghe chia sẻ về quá trình sáng tác và những câu chuyện phía sau các tác phẩm. Ngoài ra, các hoạt động như giao lưu với tác giả, ký tặng sách, và các trò chơi giải đố về sách cũng được tổ chức để tạo ra không gian vui tươi, tương tác. Đây không chỉ là nơi mua bán sách, mà còn là không gian để mọi người cùng nhau chia sẻ niềm đam mê đọc sách và khám phá những giá trị văn hóa quý báu. Một cơ hội tuyệt vời để tìm kiếm những cuốn sách hay và làm giàu thêm vốn tri thức của bản thân.",
    },
    {
      id: 4,
      title: "Hội Thảo Khởi Nghiệp",
      location: "Trịnh Công Sơn",
      datetime: "14h00 - 05/12/2023",
      ticketLeft: "60/200",
      description:
        "Hội thảo khởi nghiệp tại Trịnh Công Sơn là nơi quy tụ các chuyên gia, nhà đầu tư và những người có khát khao khởi nghiệp đến để học hỏi và chia sẻ kinh nghiệm. Hội thảo sẽ diễn ra trong 4 tiếng với các phiên thảo luận xoay quanh các chủ đề như xây dựng ý tưởng kinh doanh, kỹ năng thuyết phục nhà đầu tư, và cách duy trì sự phát triển bền vững cho doanh nghiệp khởi nghiệp. Các diễn giả đều là những người có kinh nghiệm thực tiễn trong lĩnh vực khởi nghiệp, sẽ chia sẻ những câu chuyện thành công cũng như những bài học quý báu trong quá trình khởi nghiệp. Bên cạnh đó, hội thảo còn có các hoạt động networking giúp người tham dự mở rộng mối quan hệ với các nhà đầu tư và những người cùng chí hướng. Đây là cơ hội để học hỏi, lắng nghe và tìm kiếm nguồn cảm hứng mới cho hành trình khởi nghiệp của mình. Hội thảo hứa hẹn sẽ mang lại những thông tin hữu ích và giá trị cho các bạn trẻ đam mê kinh doanh.",
    },
    {
      id: 5,
      title: "Festival Ẩm Thực Đường Phố",
      location: "N2T1",
      datetime: "16h00 - 12/12/2023",
      ticketLeft: "120/400",
      description:
        "Festival Ẩm Thực Đường Phố tại N2T1 là cơ hội tuyệt vời để khám phá những món ăn đường phố đặc trưng của các vùng miền trên khắp đất nước. Với hơn 50 gian hàng ẩm thực đa dạng, sự kiện sẽ mang đến cho thực khách những món ăn đặc sản như phở, bánh mì, bánh xèo, chè, và rất nhiều món ăn độc đáo khác. Các đầu bếp tài năng sẽ trực tiếp chế biến món ăn tại chỗ, mang đến những trải nghiệm ẩm thực hấp dẫn và mới lạ. Ngoài việc thưởng thức các món ăn ngon, khách tham gia còn có thể tham gia các trò chơi dân gian, các cuộc thi nấu ăn và giao lưu với những người yêu ẩm thực. Bầu không khí sôi động với các màn biểu diễn âm nhạc và nghệ thuật đường phố sẽ làm cho festival trở nên sinh động hơn. Đây là sự kiện không thể bỏ lỡ cho những ai muốn tìm hiểu và thưởng thức sự phong phú của văn hóa ẩm thực Việt Nam trong một không gian thân thiện và gần gũi.",
    },
    {
      id: 6,
      title: "Đêm Chiếu Phim Ngoài Trời",
      location: "Trịnh Công Sơn",
      datetime: "18h30 - 20/12/2023",
      ticketLeft: "80/250",
      description:
        "Đêm chiếu phim ngoài trời tại Trịnh Công Sơn là một trải nghiệm điện ảnh độc đáo dành cho những người yêu phim. Sự kiện sẽ chiếu các bộ phim kinh điển của điện ảnh thế giới như 'Casablanca', 'The Godfather' và 'La La Land' dưới bầu trời đêm. Với không gian mở, khán giả có thể mang theo chăn, ghế ngồi, hoặc thậm chí là những chiếc gối mềm mại để thưởng thức phim một cách thoải mái nhất. Màn hình lớn và hệ thống âm thanh chất lượng cao sẽ mang đến cho người xem những trải nghiệm phim ảnh chân thực. Trước mỗi suất chiếu, sẽ có phần giới thiệu ngắn về bộ phim và các câu chuyện hậu trường thú vị. Đây là cơ hội tuyệt vời để cùng bạn bè và gia đình thưởng thức những bộ phim hay trong không gian tự nhiên, thư giãn. Đêm chiếu phim ngoài trời không chỉ là dịp để xem phim mà còn là cơ hội để gắn kết mọi người qua những câu chuyện điện ảnh, tạo nên những kỷ niệm đáng nhớ.",
    },
];

const Registration = ({ eventId }) => {
  // Retrieve the specific event using the provided eventId
  const event = events.find((e) => e.id === parseInt(eventId, 10));

  if (!event) {
    return <div>Event not found</div>;
  }

  const { location, datetime, ticketLeft } = event;
  const tickets = ticketLeft.split("/");
  const remainingTickets = parseInt(tickets[0], 10);
  const totalTickets = parseInt(tickets[1], 10);
  const isSoldOut = remainingTickets === 0;

  return (
    <div className="registration-container">
      <p>
        <strong>Địa điểm:</strong> {location}
      </p>
      <p>
        <strong>Thời gian:</strong> {datetime}
      </p>
      <p>
        <strong>Vé còn lại:</strong> {remainingTickets}/{totalTickets}
      </p>
      {isSoldOut ? (
        <p className="sold-out">Hết hạn</p>
      ) : (
        <button className="register-button">Đăng ký</button>
      )}
    </div>
  );
};

const EventBanner = ({ eventId, isTop }) => {
    // Retrieve the specific event using the provided eventId
    const event = events.find((e) => e.id === parseInt(eventId, 10));
  
    if (!event) {
      return <div>Event not found</div>;
    }
  
    return (
      <div
        className={`event-banner ${isTop ? "top-banner" : "description-banner"}`}
      >
        {isTop ? (
          <div
            className="event-banner-image"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
            }}
          >
            <h1 style={{ marginRight: "25em" }} className="event-banner-title">
              {event.title}
            </h1>
            <Registration eventId={eventId} />
          </div>
        ) : (
          <div className="event-banner-description">
            <p style={{ fontSize: "20px" }}>{event.description}</p>
          </div>
        )}
      </div>
    );
};

const DetailedEvent = ({ eventId }) => {
    return (
      <div className="detailed-event-page">
        <div>
          <Navbar />
          <EventBanner eventId={eventId} isTop={true} />
  
          <EventBanner eventId={eventId} isTop={false} />
        </div>
        <Footer />
      </div>
    );
};

export default DetailedEvent;
