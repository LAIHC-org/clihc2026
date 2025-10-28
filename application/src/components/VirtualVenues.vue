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
        <div class="container mt-5" id="specialThanks">
            <div class="row">
                <div class="col-lg-3">
                    <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                        <h3>{{ $t("home.virtual_venues") }}</h3>
                        <p class="text-secondary font-weight-normal pe-3">
                            {{ $t("home.virtual_venues_message") }}
                        </p>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="row">                      

                        <SponsorItem>
                            <template #image>
                                <img src="/assets/img/logos/itson.png" alt="" class="img-fluid shadow rounded-3">
                            </template>
                            <template #image-shadow>
                                <div class="colored-shadow"
                                    style="background-image: url(&quot;./assets/img/logos/itson.png&quot;);">
                                </div>
                            </template>                                
                            <template #name>
                                <a href="https://itson.mx/Paginas/index.aspx" class="uline">Instituto Tecnológico de Sonora</a>
                            </template>
                        </SponsorItem> 

                        <SponsorItem>
                            <template #image>
                                <img src="/assets/img/logos/uabc.png" alt="" class="img-fluid shadow rounded-3">
                            </template>
                            <template #image-shadow>
                                <div class="colored-shadow"
                                    style="background-image: url(&quot;./assets/img/logos/uabc.png&quot;);">
                                </div>
                            </template>                                
                            <template #name>
                                <a href="https://www.uabc.mx/" class="uline">Universidad Autónoma de Baja California</a>
                            </template>
                        </SponsorItem>

                        <SponsorItem>
                            <template #image>
                                <img src="/assets/img/logos/uaslp.png" alt="" class="img-fluid shadow rounded-3">
                            </template>
                            <template #image-shadow>
                                <div class="colored-shadow"
                                    style="background-image: url(&quot;./assets/img/logos/uaslp.png&quot;);">
                                </div>
                            </template>                                
                            <template #name>
                                <a href="https://www.uaslp.mx/" class="uline">Universidad Autónoma de San Luis Potosí</a>
                            </template>
                        </SponsorItem>

                        <SponsorItem>
                            <template #image>
                                <img src="/assets/img/logos/umsnh.png" alt="" class="img-fluid shadow rounded-3">
                            </template>
                            <template #image-shadow>
                                <div class="colored-shadow"
                                    style="background-image: url(&quot;./assets/img/logos/umsnh.png&quot;);">
                                </div>
                            </template>                                
                            <template #name>
                                <a href="https://www.umich.mx/" class="uline">Universidad Michoacana de San Nicolás de Hidalgo</a>
                            </template>
                        </SponsorItem>

                        <SponsorItem>
                            <template #image>
                                <img src="/assets/img/logos/unca.png" alt="" class="img-fluid shadow rounded-3">
                            </template>
                            <template #image-shadow>
                                <div class="colored-shadow"
                                    style="background-image: url(&quot;./assets/img/logos/unca.png&quot;);">
                                </div>
                            </template> 
                            <template #name>
                                <a href="https://www.unca.edu.mx/" class="uline">Universidad de la Cañada</a>
                            </template>
                        </SponsorItem>

                        <SponsorItem>
                            <template #image>
                                <img src="/assets/img/logos/upp.png" alt="" class="img-fluid shadow rounded-3">
                            </template>
                            <template #image-shadow>
                                <div class="colored-shadow"
                                    style="background-image: url(&quot;./assets/img/logos/upp.png&quot;);">
                                </div>
                            </template>                                
                            <template #name>
                                <a href="https://www.uppuebla.edu.mx/" class="uline">Universidad Politécnica de Puebla</a>
                            </template>
                        </SponsorItem>                        

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>