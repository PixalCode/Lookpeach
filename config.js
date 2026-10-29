// ตั้งค่าเว็บวันเกิด — แก้ไฟล์นี้ไฟล์เดียวก็เปลี่ยนรูปและข้อความได้
const CONFIG = {
  // ใส่ URL ของ Discord webhook เพื่อให้คำขอพรเด้งเข้าช่อง Discord (เว้นว่างไว้ = ไม่ส่ง)
  webhookUrl: 'https://discord.com/api/webhooks/1565398822908334120/MkXYn1RuEthhytzu-09l29nm59rBhYy_RJVq9UHBJ_OF7cX6V354vazUJMgIH2drxJBC',

  // ใส่ชื่อไฟล์เพลงที่อยู่โฟลเดอร์เดียวกับ index.html เช่น 'birthday.mp3'
  // เว้นว่างไว้เพื่อใช้เพลงบรรเลงเดิม
  musicUrl: '',

  // โพลารอยด์บนหน้าสุดท้าย (เพิ่มกี่ใบก็ได้ แค่เพิ่มบรรทัดใหม่)
  //   src     = รูปหน้า (ใส่ไฟล์รูปไว้ในโฟลเดอร์ images/)
  //   back    = รูปด้านหลังตอนพลิกการ์ดในจอใหญ่ (ไม่ใส่ก็ได้)
  //   caption = ข้อความใต้รูป
  polaroids: [
    {src:'images/photo-1.jpg', back:'images/art-1.jpg', caption:'ทุกมุมก็น่ารัก'},
    {src:'images/photo-2.jpg', back:'images/art-2.jpg', caption:'ทุกมุมก็น่ารัก'},
    {src:'images/photo-3.jpg', back:'images/art-3.jpg', caption:'ทุกมุมก็น่ารัก'},
    {src:'images/photo-4.jpg', back:'images/art-4.jpg', caption:'ทุกมุมก็น่ารัก'},
    {src:'images/photo-5.jpg', back:'images/art-5.jpg', caption:'ทุกมุมก็น่ารัก'},
    {src:'images/photo-6.jpg', back:'images/art-6.jpg', caption:'ทุกมุมก็น่ารัก'},
    {src:'images/photo-7.jpg', back:'images/art-7.jpg', caption:'ทุกมุมก็น่ารัก'},
    {src:'images/photo-8.jpg', back:'images/art-8.jpg', caption:'ทุกมุมก็น่ารัก'},
    {src:'images/photo-9.jpg', back:'images/art-9.jpg', caption:'ทุกมุมก็น่ารัก'},
    {src:'images/photo-10.jpg', back:'images/art-10.jpg', caption:'ทุกมุมก็น่ารัก'},
    {src:'images/photo-11.jpg', back:'images/art-11.jpg', caption:'ทุกมุมก็น่ารัก'},
    {src:'images/photo-12.jpg', back:'images/art-12.jpg', caption:'ทุกมุมก็น่ารัก'},

  ],

  // การ์ดในซองอวยพร — ใบแรกอยู่ตรงกลาง ใบที่เหลือเรียงล้อมรอบ (แนะนำรวม 7 ใบ)
  cards: [
    {img:'images/card-1.jpg', title:'มี๊แอน', text:'HBD  นะจ๊ะลูกสาวคนสวยของมี้ขอให้หนูมีความสุขในทุกๆวันสุขภาพแข็งแรง รวยๆๆนะจ๊ะ 🎂🥳🎉'},
    {img:'images/card-2.jpg', title:'พี่บูม', text:'ขอให้แข็งแรง มีความสุขกับสิ่งที่คิดและทำ ไม่ประมาทกับชีวิต ❤️'},
    {img:'images/card-3.jpg', title:'มายเดียร์', text:'Happy birthday to P ่ LookPeach 🎂🍑ขอให้อ้วนพีชมีสุขภาพร่างกายแข็งแรง มีเวลาพักผ่อนเยอะๆ ดีใจที่ได้รู้จักกัน แลกเปลี่ยนความสุขและมอบกำลังใจกันแบบนี้นานๆเลย ไม่มีฝนตกในใจมีแต่รอยยิ้มที่สดใสในทุกวันน้าา รักมากๆจุ้บๆ 💚✨'},
    {img:'images/card-4.jpg', title:'เดียร์', text:'สุขสันต์วันเกิดนะค้าบพี่ลูกพีช ขอให้มีความสุขมากๆ สุขภาพแข็งแรง และสมหวังในทุกสิ่งที่ตั้งใจไว้ค้าบ'},
    {img:'images/card-5.jpg', title:'เวย์', text:'ขอให้ทุกๆ วันของพี่พีชเต็มไปด้วยเรื่องราวดีๆ สุขภาพแข็งแรง และประสบความสำเร็จในทุกก้าวเดินครับ'},
    {img:'images/card-6.jpg', title:'นนท์นี่', text:'สุขสันต์วันเกิดนะครับพี่สาวขอปีนี้เป็นปีที่ดีสิ่งที่พี่สาวตั้งเป้าหมายขอสำเร็จนะครับ'},
    {img:'images/card-7.jpg', title:'บิว', text:'HBD นะครับพี่ลูกพีชสุขภาพร่างกายและจิตใจแข็งแรงนะครับพี่ อยู่พูดคุยไปด้วยกันนานๆกับเหล่า 7 ตัวจี๊ดและมี๊ นะพี่ ปีต่อๆไปผมจะอยู่กวนทีนพี่ต่อไปนะครับ🙏🎉🎊'},
  ],
};
