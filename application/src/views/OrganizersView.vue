<script setup>
    import TheHeader from '@/components/Header.vue';
    import OrganizerItem from '@/components/OrganizerItem.vue';
    import Tr from '@/i18n/translation'
</script>

<script>
export default {
  setup() {
    return {
      Tr
    }
  }
}
</script>

<template>
    <TheHeader>
        <template #page-name>
            {{ $t("organizers.title") }}
        </template>
    </TheHeader>

    <section>
        <div class="container">
            <div class="row">
                <div class="row justify-content-center my-3">
                    <div class="col-lg-8">
                        <ol class="list-group list-group-numbered mb-4">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">
                                        <RouterLink :to="Tr.i18nRoute({ name: 'organizers', hash: '#general-committee'})" class="uline">
                                            {{ $t("organizers.general_committee_link") }}
                                        </RouterLink>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">
                                        <RouterLink :to="Tr.i18nRoute({ name: 'organizers', hash: '#program-committee'})" class="uline">
                                            {{ $t("organizers.program_committee_link") }}
                                        </RouterLink>                                            
                                    </div>
                                </div>
                            </li>
                        </ol>

                        <p>
                            {{ $t("organizers.intro") }}
                        </p>
                        <h2 id="general-committee" class="text-primary text-gradient text-center py-4">{{ $t("organizers.general_committee_title") }}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="container">
        <div class="row">
            <div class="col-lg-12 mx-auto">

                <div class="container mt-4 px-5 mt-6" id="program-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.conference_chairs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.conference_chairs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/marisol.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/marisol.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Marisol Wong-Villacres
                                        </template>
                                        <template #institution>
                                            ESPOL, EC
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/juan.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/juan.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Juan Manuel González Calleros
                                        </template>
                                        <template #institution>
                                            BUAP, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="program-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.local_chairs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.local_chairs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/josefina.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/josefina.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Josefina Guerrero García
                                        </template>
                                        <template #institution>
                                            BUAP, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/ivan.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/ivan.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Iván Olmos Pineda
                                        </template>
                                        <template #institution>
                                            BUAP, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="graduate-consortium-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.program_chairs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.program_chairs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/pablo.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/pablo.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Pablo Torres
                                        </template>
                                        <template #institution>
                                            UTPL, EC
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/vanessa.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/vanessa.png&quot;);"></div>
                                        </template>
                                        <template #name>
                                            Vanessa Agredo Delgado
                                        </template>
                                        <template #institution>
                                            UNICOMFACAUCA, CO
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="registration-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.student_design_competition_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.student_design_competition_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/christian.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/christian.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Christian Sturm
                                        </template>
                                        <template #institution>
                                            DE
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/iyubanit.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/iyubanit.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Iyubanit Rodriguez
                                        </template>
                                        <template #institution>
                                            CR
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="registration-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.graduate_colloquium_chairs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.graduate_colloquium_chairs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/huizilopoztli.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/huizilopoztli.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Huizilopoztli Luna Garcia
                                        </template>
                                        <template #institution>
                                            UAZ, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/carolina.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/carolina.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Carolina Fuentes
                                        </template>
                                        <template #institution>
                                            Cardiff University, UK
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="publicity-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.workshops_and_tutorials_chairs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.workshops_and_tutorials_chairs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/cesar.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/cesar.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            César Collazos
                                        </template>
                                        <template #institution>
                                            U. Cauca, CO
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/luciana.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/luciana.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Luciana Sá Brito
                                        </template>
                                        <template #institution>
                                            Universidade Federal do Rio de Janeiro, Brasil
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="publicity-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.posters_chairs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.posters_chairs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/jaime.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/jaime.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Jaime Muñoz Arteaga
                                        </template>
                                        <template #institution>
                                            Universidad Autónoma de Aguascalientes, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/adriana.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/adriana.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Adriana Iñiguez
                                        </template>
                                        <template #institution>
                                            Universidad de Guadalajara, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>                

                <div class="container mt-4 px-5 mt-6" id="accesibility-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.publicity_chair_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.publicity_chair_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 mx-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/fernando.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/fernando.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Juan Fernando Maestre 
                                        </template>
                                        <template #institution>
                                            Ecuador - U. Minnesota
                                        </template>
                                        <template #email>
                                            
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="publicity-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.web_chairs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.web_chairs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/mike.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/mike.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Miguel A. Rodríguez Ortiz
                                        </template>
                                        <template #institution>
                                            Universidad de Colima, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/arlem.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/arlem.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Arlem Castillo Avila
                                        </template>
                                        <template #institution>
                                            BUAP, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="accesibility-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.volunteer_students_chair_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.volunteer_students_chair_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 mx-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/alfredo.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/alfredo.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Alfredo García Suárez
                                        </template>
                                        <template #institution>
                                            BUAP, MX
                                        </template>
                                        <template #email>
                                            
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="publicity-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.acccessibility_chairs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.acccessibility_chairs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/selene.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/selene.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Alba Selene Leon Arenas
                                        </template>
                                        <template #institution>
                                            MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>
                                                                
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/mike.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/mike.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Miguel A. Rodríguez Ortiz
                                        </template>
                                        <template #institution>
                                            Universidad de Colima, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5 mt-6" id="accesibility-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.industry_session_chair_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.industry_session_chair_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 mx-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/victor.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/victor.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Victor Manuel García Luna
                                        </template>
                                        <template #institution>
                                            UXPA, MX
                                        </template>
                                        <template #email>
                                            
                                        </template>
                                    </OrganizerItem>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-4 px-5" id="general-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.steering_committee_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.steering_committee_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row p-0">

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/sanely.jpg" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/sanely.jpg&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Laura Sanely Gaytán Lugo
                                        </template>
                                        <template #institution>
                                            Universidad de Colima, MX
                                        </template>
                                        <template #email>
                                            <!--<a class="uline" href="mailto:tpc.2022@mexihc.org">tpc.2022@mexihc.org</a>-->
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/yasmin.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/yasmin.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Yazmín Magallanes
                                        </template>
                                        <template #institution>
                                            UXPA, MX
                                        </template>
                                        <template #email>
                                            <!--<a class="uline" href="mailto:tpc.2022@mexihc.org">tpc.2022@mexihc.org</a>-->
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/soraia.png" alt=""
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;./assets/img/people/soraia.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Soraia Prietch
                                        </template>
                                        <template #institution>
                                            U. Federal de Rondonópolis, BR
                                        </template>
                                        <template #email>
                                            <!--<a class="uline" href="mailto:tpc.2022@mexihc.org">tpc.2022@mexihc.org</a>-->
                                        </template>
                                    </OrganizerItem>
                                </div>  

                            </div>                            
                        </div>
                    </div>
                    <p class="mt-5">
                        <RouterLink :to="Tr.i18nRoute({ name: 'organizers', hash: '#top'})" class="uline">
                            {{ $t("nav.back_to_top") }}
                        </RouterLink>                    
                    </p>
                    <hr>
                </div>                
            </div>
        </div>
    </section>
    <section class="container">
        <div class="row">
            <div class="row justify-content-center my-3">
                <div class="col-lg-8">
                    <h2 id="program-committee" class="text-primary text-gradient text-center py-4 mt-5">
                        {{ $t("organizers.program_committee_title") }}
                    </h2>
                    
                    <h3 class="h4">{{ $t("accepted_papers.student_design_competition") }}</h3>
                    <ul>
                        <li>Ana Gabriela Sanchez Reyna, Universidad Autónoma de Zacatecas, México</li>
                        <li>Cesar A. Collazos, Universidad del Cauca, Colombia</li>
                        <li>Jorge A. Morgan Benita, Universidad Autónoma de Zacatecas, México</li>
                        <li>Huizilopoztli Luna-García, Universidad Autónoma de Zacatecas, México</li>
                        <li>Libertad Aguilar, Universidad Autónoma de Aguascalientes, Mexico</li>
                        <li>Javier Tibau, Escuela Superior Politécnica del Litoral, Ecuador</li>
                    </ul>

                    <h3 class="h4">{{ $t("accepted_papers.workshops_and_tutorials") }}</h3>
                    <ul>
                        <li>Gustavo Constain</li>
                        <li>Wilson Sarmiento, Universidad Militar Nueva Granada, Colombia</li>
                        <li>Freddy Paz, Pontificia Pontificia Universidad Católica del Perú, Peru</li>
                        <li>Diego Torres, Universidad Nacional de La Plata, Argentina</li>
                        <li>Valeria Farinazzo, Universidade Presbiteriana Mackenzie, Brasil</li>
                        <li>Andres Rodriguez, Universidad Nacional de La Plata, Argentina</li>
                        <li>Jaime Muñoz, Universidad Autónoma de Aguascalientes, México </li>
                        <li>Patricia Paderewski, Universidad de Granada, España</li>
                    </ul>
                    
                    <h3 class="h4">{{ $t("accepted_papers.posters") }}</h3>
                    <ul>
                        <li>María Libertad Aguilar Carlos, Universidad Autónoma de Aguascalientes, México</li>
                        <li>Julio César Enriquez, Universidad Autónoma de Aguascalientes, México</li>
                        <li>José Eder Guzmán Mendoza, Universidad Autónoma de Aguascalientes, México</li>
                        <li>Victor Hugo Menéndez Domínguez, Universidad Autónoma de Yucatán, México</li>
                        <li>Jaime Muñoz-Arteaga, Universidad Autónoma de Aguascalientes, México</li>
                        <li>Humberto Muñoz Bautista</li>
                        <li>Miguel Angel Ortiz Esparza</li>
                        <li>Pablo Torres Torres Carrion, Universidad Técnica Particular de Loja, Ecuador</li>
                        <li>César Eduardo Velazquez Amador, Universidad Autónoma de Aguascalientes, México</li>
                    </ul>

                    <h3 class="h4">{{ $t("accepted_papers.full_and_short_papers") }}</h3>
                    <ul>
                        <li>Yuska Aguiar, Universidadade Federal Da Paraíba, Brazil</li>
                        <li>Adriana Alvarado Garcia, IBM</li>
                        <li>Teresita De Jesús Álvarez, Universidad Autónoma de Baja California Sur, México</li>
                        <li>Eráclito Argolo, Universidade Federal do Maranhão, Brazil</li>
                        <li>Luis Rodrigo Barba Guamas, Universidad Técnica Particular de Loja, Ecuador</li>
                        <li>Helton Biscaro, Universidade de São Paulo, Brazil</li>
                        <li>Luciana Borges, Universidade Federal de Mato Grosso, Brazil</li>
                        <li>Luciana Brito, Universidade Federal do Rio de Janeiro, Brasil</li>
                        <li>Héctor Miguel Camarillo-Abad, Universidad de las Américas Puebla, Mexico</li>
                        <li>Karina Caro, Universidad Autónoma de Baja California, México</li>
                        <li>Julio César Ponce, Universidad Autónoma de Aguascalientes, México</li>
                        <li>Joelma Choma, Universidade Federal de São Carlos, Brazil</li>
                        <li>Cesar Collazos, Universidad del Cauca, Colombia</li>
                        <li>Heitor Costa, Universidade Federal de Lavras, Brazil</li>
                        <li>Dagoberto Cruz-Sandoval, University of California San Diego, United States</li>
                        <li>Ana C. M. T. G. de Oliveira, FATEC Ipiranga, Brasil</li>
                        <li>Juan Domínguez, Universidad Autónoma del Carmen, México</li>
                        <li>Victor Domínguez, Universidad Autónoma de Yucatán, Mexico </li>
                        <li>Nestor Duque, Universidad Nacional de Colombia, Colombia</li>
                        <li>Silvia Fajardo-Flores, Universidad de Colima, México</li>
                        <li>Mayara Figueiredo, University of California Irvine, USA</li>
                        <li>Karina Figueroa, Universidad MIchoacana, Mexico</li>
                        <li>André Freire, Universidade Federal de Lavras, Brazil</li>
                        <li>Ludmilla Galvao, Universidade Federal do Paraná, Brazil</li>
                        <li>Maria Elena García Diaz, Universidad Nacional de Asunción, Paraguay</li>
                        <li>Cléber Gimenez Corrêa, Universidad Tecnológica Federal de Paraná, Brazil</li>
                        <li>Yosly Caridad Hernández Bieliukas, Universidad Central de Venezuela, Venezuela</li>
                        <li>Huizilopoztli Luna-García, Universidad Autónoma de Zacatecas, México</li>
                        <li>Cristiano Maciel, Universidade Federal de Mato Grosso, Brazil</li>
                        <li>Gerardo Matturro, Universidad ORT Uruguay, Uruguay</li>
                        <li>Marcelo Medeiros Eler, Universidade de São Paulo, Brazil</li>
                        <li>Victoria Meza, Universidad Autónoma de Baja California, México</li>
                        <li>Carlos Hitoshi Morimoto, Universidade de São Paulo, Brazil</li>
                        <li>Regina Motz, Universidad de la Republica, Uruguay</li>
                        <li>Ricardo Nakamura, Universidade de São Paulo, Brazil</li>
                        <li>Fátima Nunes, Universidade de São Paulo, Brazil</li>
                        <li>Claudia Perez-Lezama, Tec de Monterrey, Mexico</li>
                        <li>Monica Perusquía-Hernández, NARA Institute of Science and Technology, Japan</li>
                        <li>Luis Roberto Ramos Aguiar, Universidad Autónoma de Aguascalientes, México</li>
                        <li>Pedro Reynolds-Cuéllar, MIT, USA</li>
                        <li>Kamila Rodrigues, Universidade de São Paulo, Brazil</li>
                        <li>Germania Rodriguez, Universidad Técnica Particular de Loja, Ecuador</li>
                        <li>Daniel José Salas Alvarez, Universidad De Córdoba, Colombia</li>
                        <li>Wilson Javier Sarmiento, Universidad Militar Nueva Granada, Colombia</li>
                        <li>Lucineide Silva, Universidade Federal de Mato Grosso do Sul, Brazil</li>
                        <li>Antonio Silva Sprock, Universidad Central de Venezuela, Venezuela</li>
                        <li>Leandro Soares Guedes, Università della Svizzera italiana, Switzerland</li>
                        <li>Terezinha Souza, Universidade Federal de Mato Grosso, Brazil</li>
                        <li>Fernando Urgiles, Universidad Politécnica Salesiana, Ecuador</li>
                        <li>Rodrigo Zacarias, Universidade Federal do Estado do Rio de Janeiro, Brazil</li>
                        <li>David Rivas, Escuela Superior Politécnica del Ejército, Ecuador</li>
                    </ul>
                <p>
                    <RouterLink :to="Tr.i18nRoute({ name: 'organizers', hash: '#top'})" class="uline">
                        {{ $t("nav.back_to_top") }}
                    </RouterLink>                    
                </p>
            </div>

        </div>
    </div>
</section></template>