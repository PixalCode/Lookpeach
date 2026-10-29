// ตั้งค่าเว็บวันเกิด — แก้ไฟล์นี้ไฟล์เดียวก็เปลี่ยนรูปและข้อความได้
const CONFIG = {
  // ใส่ URL ของ Discord webhook เพื่อให้คำขอพรเด้งเข้าช่อง Discord (เว้นว่างไว้ = ไม่ส่ง)
  webhookUrl: '',

  // โพลารอยด์บนหน้าสุดท้าย (เพิ่มกี่ใบก็ได้ แค่เพิ่มบรรทัดใหม่)
  //   src     = รูปหน้า (ใส่ไฟล์รูปไว้ในโฟลเดอร์ images/)
  //   back    = รูปด้านหลังตอนพลิกการ์ดในจอใหญ่ (ไม่ใส่ก็ได้)
  //   caption = ข้อความใต้รูป
  polaroids: [
    {src:'images/photo-1.jpg', back:'images/art-1.jpg', caption:'ทุกมุมก็น่ารัก'},
    {src:'images/photo-2.jpg', back:'images/art-2.jpg', caption:'ยิ้มนี้ขอเก็บไว้นาน ๆ'},
    {src:'images/photo-3.jpg', back:'images/art-3.jpg', caption:'วันธรรมดาที่กลายเป็นวันดี'},
    {src:'images/photo-4.jpg', back:'images/art-4.jpg', caption:'สไตล์นี้ไม่มีใครเหมือน'},
    {src:'images/photo-5.jpg', back:'images/art-5.jpg', caption:'ชอบตอนที่เธอเป็นตัวเอง'},
    {src:'images/photo-6.jpg', back:'images/art-6.jpg', caption:'ขอบคุณที่เป็นคนพิเศษ'},
  ],

  // การ์ดในซองอวยพร — ใบแรกอยู่ตรงกลาง ใบที่เหลือเรียงล้อมรอบ (แนะนำรวม 7 ใบ)
  cards: [
    {img:'images/photo-1.jpg', title:'สุขสันต์วันเกิด', text:'ขอให้ปีนี้เป็นปีที่ใจดีกับเธอ มีรอยยิ้มทุกวัน'},
    {img:'images/art-1.jpg', title:'โชคดี', text:'ขอให้เจอแต่เรื่องดี ๆ โชคดีตลอดทั้งปี'},
    {img:'images/art-2.jpg', title:'สุขภาพดี', text:'ขอให้แข็งแรง นอนหลับสบาย ใจเบาทุกวัน'},
    {img:'images/art-3.jpg', title:'สมหวัง', text:'ขอให้ได้ทำทุกอย่างที่อยากทำ และสมหวังทุกเรื่อง'},
    {img:'images/art-4.jpg', title:'สนุก', text:'ขอให้มีเสียงหัวเราะและวันสนุก ๆ เยอะ ๆ'},
    {img:'images/art-5.jpg', title:'อบอุ่น', text:'ขอให้มีคนที่รักและห่วงใยอยู่รอบตัวเสมอ'},
    {img:'images/art-6.jpg', title:'ขอบคุณ', text:'ขอบคุณที่เป็นคนพิเศษของเรานะ'},
  ],
};
