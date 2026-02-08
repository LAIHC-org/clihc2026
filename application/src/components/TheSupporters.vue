<script>
import Tr from "@/i18n/translation";
import SponsorItem from "@/components/SponsorItem.vue";

export default {
    components: {
        SponsorItem,
    },
    setup() {
        return { Tr };
    },
};
</script>
<template>
    <section>
        <div class="container mt-2" id="supporters">
            <div class="row">
                <div class="col-lg-3">
                    <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                        <h3>{{ $t("home.supporters") }}</h3>
                        <p class="text-secondary font-weight-normal pe-3">
                            {{ $t("home.supporters_message") }}
                        </p>
                    </div>
                </div>

                <div class="col-lg-9">
                    <div class="row">

                        <SponsorItem venue="brazil">
                            <template #image>
                                <img
                                    src="/assets/img/sponsors/sbc_br.png"
                                    alt="Sociedade Brasileira de Computação"
                                    class="img-fluid shadow rounded-3"
                                />
                            </template>
                            <template #image-shadow>
                                <div
                                    class="colored-shadow"
                                    style="
                                        background-image: url('/assets/img/sponsors/sbc_br.png');
                                    "
                                ></div>
                            </template>
                            <template #name>
                                <a class="uline" href="https://www.sbc.org.br/"
                                    >Sociedade Brasileira de Computação</a
                                >
                            </template>
                        </SponsorItem>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>
