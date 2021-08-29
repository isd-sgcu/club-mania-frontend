<template>
  <div class="w-full h-screen bg-dark-900">
    <div class="bg-dark-800 pt-20 text-center h-screen w-[1000px] mx-auto">
      <Gallery :club-name="'Hi'" :images="images" />
    </div>
  </div>
</template>

<script setup lang="ts">

const images = [
  { url: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg' },
  { url: 'https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg' },
  { url: 'https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg' },
]
</script>
