<!-- pads all sides, mostly seen in Club1 page (Figma) -->
<template>
  <div class="w-full h-screen px-10 space-y-5 pt-20 bg-dark-300">
    <BackgroundSection theme="SilpVat">
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
    <BackgroundSection theme="Pat">
      <input
        v-model="name"
        placeholder="Enter your name"
        class="bg-transparent border-1 border-black placeholder-light-50 rounded p-2 w-full text-white"
      />
      <h1 class="text-white overflow-hidden">{{ name }}</h1>
    </BackgroundSection>
    <BackgroundSection theme="Vichagarn">
      <text-body1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est repellat quos aut reiciendis modi et praesentium aperiam similique amet quaerat nostrum adipisci ad quibusdam ratione deleniti quas, magnam dolor quasi impedit ipsum accusantium! Minima quod maxime quaerat labore ipsa omnis id asperiores! Fuga fugit ut nisi assumenda libero iusto enim hic, ipsum, culpa quo magni sapiente cumque quia voluptate in ullam amet itaque. Perspiciatis dolores corporis mollitia cumque impedit tenetur fuga natus voluptatem explicabo nisi incidunt autem pariatur praesentium ipsam totam, vitae velit reiciendis quibusdam eveniet saepe doloremque repellendus sapiente. Labore, eligendi exercitationem cumque recusandae sequi unde quis sit!</text-body1>
    </BackgroundSection>
    <BackgroundSection theme="Gera">
      <text-body1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est repellat quos aut reiciendis modi et praesentium aperiam similique amet quaerat nostrum adipisci ad quibusdam ratione deleniti quas, magnam dolor quasi impedit ipsum accusantium! Minima quod maxime quaerat labore ipsa omnis id asperiores! Fuga fugit ut nisi assumenda libero iusto enim hic, ipsum, culpa quo magni sapiente cumque quia voluptate in ullam amet itaque. Perspiciatis dolores corporis mollitia cumque impedit tenetur fuga natus voluptatem explicabo nisi incidunt autem pariatur praesentium ipsam totam, vitae velit reiciendis quibusdam eveniet saepe doloremque repellendus sapiente. Labore, eligendi exercitationem cumque recusandae sequi unde quis sit!</text-body1>
    </BackgroundSection>
    <BackgroundSection theme="Other">
      <text-body1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est repellat quos aut reiciendis modi et praesentium aperiam similique amet quaerat nostrum adipisci ad quibusdam ratione deleniti quas, magnam dolor quasi impedit ipsum accusantium! Minima quod maxime quaerat labore ipsa omnis id asperiores! Fuga fugit ut nisi assumenda libero iusto enim hic, ipsum, culpa quo magni sapiente cumque quia voluptate in ullam amet itaque. Perspiciatis dolores corporis mollitia cumque impedit tenetur fuga natus voluptatem explicabo nisi incidunt autem pariatur praesentium ipsam totam, vitae velit reiciendis quibusdam eveniet saepe doloremque repellendus sapiente. Labore, eligendi exercitationem cumque recusandae sequi unde quis sit!</text-body1>
    </BackgroundSection>
  </div>
</template>

<script setup lang="ts">
const name = ref('');
</script>