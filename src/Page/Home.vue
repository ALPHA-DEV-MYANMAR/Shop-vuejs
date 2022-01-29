<template>
  <div>
    <Master>
        <div class="container m-top">

          <div class="row">
            <div class="col-12">
              <CarouselBS></CarouselBS>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <Categories></Categories>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <PreviewProduct></PreviewProduct>
            </div>
          </div>

        </div>
    </Master>
  </div>
</template>

<script>
import Master from "../layout/Master";
import CarouselBS from "../Component/CarouselBS";
import Categories from "../Component/Categories";
import PreviewProduct from "../Component/PreviewProduct";
export default {
  components: {PreviewProduct, Categories, CarouselBS, Master },
  name: "Home",
};
</script>