<!-- pads all sides, mostly seen in Club1 page (Figma) -->
<template>
  <div class="w-full h-screen px-10 space-y-5 bg-dark-800">
    <BackgroundSection>
      <header>
        <h5 class="text-white mb-2">เกี่ยวกับชมรม</h5>
      </header>
      <text-body1 class="text-grey-light">
        สองสามีภรรยาติดโควิด ขี่จยยไปรพ.แห่งหนึ่งให้ช่วยรักษา แต่รพ.บอกเตียงเต็ม จึงขับรถกลับบ้าน ระหว่างทาง
        อ่อนเพลียมากจนไปต่อไม่ไหว จึงจอดรถที่สน.พระโขนง นอนรอความช่วยเหลือ
        เบื้องต้นอาสาร่วมกตัญญู ตรวจเชื้อโควิดให้ พบว่า ฝ่ายหญิงขึ้น 2 ขีด มีไข้สูง อ่อนเพลีย และค่าออกซิเจนต่ำกว่าปกติ ฝ่ายชายมีอาการ
        อ่อนเพลีย ตรวจเชื้อแล้วขึ้น 2 ขีดเช่นกัน ขณะนี้กำลังประสานขอความช่วยเหลือ
        Update: ล่าสุด ศูนย์เอราวัณ มารับตัวแล้วครับ ฝ่ายชายไป รพ.กล้วยน้ำไท ฝ่ายหญิงไปจุดพักคอยเขตบางนา
      </text-body1>
    </BackgroundSection>
    <BackgroundSection>
      <input
        v-model="name"
        placeholder="Enter your name"
        class="bg-purple-300 placeholder-light-50 rounded p-2 w-full"
      />
      <h1 class="text-white overflow-hidden">{{ name }}</h1>
    </BackgroundSection>
  </div>
</template>

<script setup lang="ts">
const name = ref('');
</script>