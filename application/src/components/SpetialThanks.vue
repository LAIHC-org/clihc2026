<script>
import Tr from '@/i18n/translation'
import SponsorItem from '@/components/SponsorItem.vue'

export default {
    components: {
        SponsorItem
    },    
    setup() {
        return { Tr }
    }
}
</script>
<template>
    <section>
        <!--
        <div class="container mt-2" id="supporters">
            <div class="row">
                <div class="col-lg-3">
                    <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                        <h3>Supported by</h3>
                        <p class="text-secondary font-weight-normal pe-3">
                            This conference is made thanks to the support of the following institutions
                        </p>
                    </div>
                </div>
                
                <div class="col-lg-9">
                    <div class="row">
                        <div class="container postion-relative z-index-2 position-relative">
                            <div class="row">
                                <div class="col-lg-12 ms-auto">
                                    <div class="card shadow-lg">
                                        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/sigchi.jpg" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/sigchi.jpg&quot;);">
                                            </div>
                                        </div>
                                        <div class="card-body text-center">
                                            SIGCHI. Special Interest Group for Computer-Human Interaction
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        -->
        <div class="container mt-5" id="specialThanks">
            <div class="row">
                <div class="col-lg-3">
                    <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                        <h3>{{ $t("home.sponsors") }}</h3>
                        <p class="text-secondary font-weight-normal pe-3">
                            {{ $t("home.sponsors_message") }}
                        </p>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="row">                      

                        <SponsorItem>
                            <template #image>
                                <img src="/assets/img/sponsors/skye.png" alt="" class="img-fluid shadow rounded-3">
                            </template>
                            <template #image-shadow>
                                <div class="colored-shadow"
                                    style="background-image: url(&quot;./assets/img/sponsors/skye.png&quot;);">
                                </div>
                            </template>                                
                            <template #name>
                                <a class="uline" href="https://en.skye.group/">Skye Group</a>
                            </template>
                        </SponsorItem> 

                        <SponsorItem>
                            <template #image>
                                <img src="/assets/img/sponsors/sperientia.png" alt="" class="img-fluid shadow rounded-3">
                            </template>
                            <template #image-shadow>
                                <div class="colored-shadow"
                                    style="background-image: url(&quot;./assets/img/sponsors/sperientia.png&quot;);">
                                </div>
                            </template>                                
                            <template #name>
                                <a class="uline" href="https://www.sperientia.com/">Sperientia [studio+lab] <sup>&#174;</sup></a>
                            </template>
                        </SponsorItem>

                        <SponsorItem>
                            <template #image>
                                <img src="/assets/img/sponsors/cocktail.png" alt="" class="img-fluid shadow rounded-3">
                            </template>
                            <template #image-shadow>
                                <div class="colored-shadow"
                                    style="background-image: url(&quot;./assets/img/sponsors/cocktail.png&quot;);">
                                </div>
                            </template>                                
                            <template #name>
                                <a class="uline" href="https://the-cocktail.com/">The Cocktail</a>
                            </template>
                        </SponsorItem>                        

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>