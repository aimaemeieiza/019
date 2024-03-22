import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/A019.jpeg" />
        <Title title="ประวัติส่วนตัว">

          <p>ชื่อ เจษฏาพร ขุนเณร</p>
          <p>ชื่อเล่น อิ่ม</p>
          <p>อายุ 20 ปี</p>
          <p>วันเกิด {moment("2003/05/06").format("D MMM YYYY")}</p>
        </Title>

        <Title title="ช่องทางติดต่อ">
          <p>TEL  088-749-7133</p>
          <p>Line aimkhunnen</p> 
          <p>Facebook Aim</p> 
          <p>Instagram a.jsdp</p> 
          <p>E-mail Jetsadapornza43@gmail.com</p> 
        </Title>
      </div>

      <div className="rightPort">
      <Title title="การศึกษา">
          <p>กำลังศึกษา ปริญญาตรีชั้นปีที่ 3 ที่ มหาวิทยาลัยราชภัฎสวนสุนนันทา คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ </p>
        </Title>

        <Title title="เกรดเฉลี่ย">
          <p>GPA เกรดเฉลี่ยสะสม 3.75</p>
        </Title>

        <Title title="ประสบการณ์และคุณสมบัติ">
          <p> 1.ทำโปรเจคเรื่องการศึกษาและพัฒนาเว็บเพื่อให้ความรู้
 เกี่ยวกับการออกแบบที่ถูกต้องและการศึกษาการเกิด
 ก๊าซเรือนกระจกจากการใช้ไฟฟ้า</p>
          <p>2.เว็บไซต์ให้ความรู้การออกแบบเว็บไซต์และสามารถ
 คำนวณก๊าซเรือนกระจกจากการใช้ไฟฟ้า</p>

        </Title>
      </div>
    </main>
  )
}

export default App
