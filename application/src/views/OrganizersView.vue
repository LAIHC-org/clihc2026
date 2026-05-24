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
  },
  methods: {
    doctorateTitle(gender) {
      if (this.$i18n.locale === 'en') {
        return 'Dr.'
      }

      return gender === 'f' ? 'Dra.' : 'Dr.'
    },
    masterTitle(gender) {
      if (this.$i18n.locale === 'en') {
        return 'M.Sc.'
      }

      if (this.$i18n.locale === 'es') {
        return gender === 'f' ? 'Mtra.' : 'Mtro.'
      }

      if (this.$i18n.locale === 'pt') {
        return gender === 'f' ? 'Ma.' : 'Me.'
      }

      return 'M.Sc.'
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

    <BreadcrumbsNav />

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
                                                <img src="/assets/img/people/jean.png" alt="Jean"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/jean.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('m') }} Jean Clemisson Santos Rosa
                                        </template>
                                        <template #institution>
                                            Centro Universitário Maurício de Nassau de Aracaju (UNINASSAU), BR
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/gilton.png" alt="Gilton"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/gilton.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('m') }} Gilton José Ferreira da Silva
                                        </template>
                                        <template #institution>
                                            Universidade Federal de Sergipe (UFS), BR
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
                                <h3>{{ $t("organizers.full_papers_cahirs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.full_papers_cahirs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/adrianaDamian.png" alt="Adriana Damian"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/adrianaDamian.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('f') }} Adriana Lopes Damian
                                        </template>
                                        <template #institution>
                                            Instituto de Pesquisas Eldorado, BR
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/liz.jpg" alt="Liz"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/liz.jpg&quot;);"></div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('f') }} Lizbeth Escobedo
                                        </template>
                                        <template #institution>
                                            Dalhousie University, CA
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
                                                <img src="/assets/img/people/napoliana.jpg" alt="Napoliana"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/napoliana.jpg&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('f') }} Napoliana Souza
                                        </template>
                                        <template #institution>
                                            Universidade do Estado do Amapá (UEAP), BR
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/sanely.jpg" alt="Sanely"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/sanely.jpg&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('f') }} Laura Sanely Gaytán Lugo
                                        </template>
                                        <template #institution>
                                            Universidad de Colima (UCOL), MX
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
                                                <img src="/assets/img/people/danielDomingos.jpg" alt="Daniel Domingos"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/danielDomingos.jpg&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('m') }} Daniel Domingos Alves
                                        </template>
                                        <template #institution>
                                            Instituto Federal de Mato Grosso (IFMT), BR
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/jpOurcade.jpg" alt="Jp Ourcade"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/jpOurcade.jpg&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('m') }} Juan Pablo Hourcade
                                        </template>
                                        <template #institution>
                                            University of Iowa (UIOWA), US
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
                                <h3>{{ $t("organizers.short_papers_cahirs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.short_papers_cahirs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/valeria.jpg" alt="Valeria"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/valeria.jpg&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('f') }} Valéria Argôlo Rosa de Queiroz
                                        </template>
                                        <template #institution>
                                            Universidade Estadual do Sudoeste da Bahia (UESB), BR
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/marioMoreno.png" alt="Placeholder portrait"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/marioMoreno.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('m') }} Mario A. Moreno Rocha
                                        </template>
                                        <template #institution>
                                            Universidad Tecnológica de la Mixteca (UTM), MX
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
                                                <img src="/assets/img/people/lidianyCerqueira.png" alt="Lidiany Cerqueira Santos"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/lidianyCerqueira.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('f') }} Lidiany Cerqueira Santos
                                        </template>
                                        <template #institution>
                                            Universidade Federal de Sergipe (UFS), BR
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/cams.png" alt="Placeholder portrait"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/cams.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ masterTitle('m') }} Carlos Alberto Martínez-Sandoval
                                        </template>
                                        <template #institution>
                                            Universidad Tecnológica de la Mixteca (UTM), MX
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
                                                <img src="/assets/img/people/robertoPereira.png" alt="Placeholder portrait"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/robertoPereira.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('m') }} Roberto Pereira
                                        </template>
                                        <template #institution>
                                            UFPR, BR    
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/claudiaLopez.png" alt="Claudia Lopez"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/claudiaLopez.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('f') }} Claudia López Moncada
                                        </template>
                                        <template #institution>
                                            Universidad Técnica Federico Santa María (UTFSM), CL
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
                                <h3>{{ $t("organizers.diversity_and_inclusion_chairs_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.diversity_and_inclusion_chairs_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/diegoZabot.png" alt="Diego Zabot"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/diegoZabot.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('m') }} Diego Zabot
                                        </template>
                                        <template #institution>
                                            Universidade Federal da Bahia (UFBA), BR
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/dani.png" alt="Daniela Cardoso"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/dani.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ masterTitle('f') }} Daniela Cardoso Tavares
                                        </template>
                                        <template #institution>
                                            Universidade Federal do Rio de Janeiro (UFRJ), BR
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
                                <h3>{{ $t("organizers.volunteer_students_chair_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.volunteer_students_chair_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/sergioSantana.jpg" alt="Sergio Santana"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/sergioSantana.jpg&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ masterTitle('m') }} Sergio Santana
                                        </template>
                                        <template #institution>
                                            Centro Universitário Maurício de Nassau de Aracaju (UNINASSAU), BR
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt="Placeholder portrait"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('f') }} Cassia Regina D Antonio Rocha da Silva
                                        </template>
                                        <template #institution>
                                            Universidade Tiradentes (UNIT), BR
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt="Placeholder portrait"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Bruno Alves Reis Nascimento
                                        </template>
                                        <template #institution>
                                            Faculdade de Administração, Negócios e Saúde de Sergipe (Fanese), BR
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
                <!--
                <div class="container mt-4 px-5 mt-6" id="registration-chairs">
                    <div class="row">
                        <div class="col-xl-3">
                            <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                                <h3>{{ $t("organizers.atalaia_title") }}</h3>
                                <p class="text-secondary font-weight-normal pe-3">
                                    {{ $t("organizers.atalaia_description") }}
                                </p>
                            </div>
                        </div>

                        <div class="col-xl-9">
                            <div class="row">
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt="Placeholder portrait"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('m') }} Ecivaldo Matos
                                        </template>
                                        <template #institution>
                                            Universidade de São Paulo (USP), BR
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt="Placeholder portrait"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('m') }} Gilson Pereira dos Santos Júnior
                                        </template>
                                        <template #institution>
                                            Instituto Federal de Sergipe (IFS), BR
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
                -->

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
                                                <img src="/assets/img/people/ludmilla.png" alt="Placeholder portrait"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/ludmilla.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('f') }} Ludmilla Fernandes Oliveira Galvão
                                        </template>
                                        <template #institution>
                                            Universidade Federal de Mato Grosso, BR
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
                                                <img src="/assets/img/people/mike.png" alt="Mike"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/mike.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ masterTitle('m') }} Miguel A. Rodríguez-Ortiz
                                        </template>
                                        <template #institution>
                                            Universidad de Colima (UCOL), MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/MatheusAlves.png" alt="Placeholder portrait"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            Matheus Alves
                                        </template>
                                        <template #institution>
                                            Universidade Federal de Sergipe (UFS), BR
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
                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/victorAraujo.png" alt="Placeholder portrait"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/victorAraujo.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('m') }} Victor Flávio de Andrade Araújo
                                        </template>
                                        <template #institution>
                                            Universidade Tiradentes (UNIT), BR
                                        </template>
                                        <template #email>
                                            
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/nophoto.png" alt="Placeholder portrait"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/nophoto.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('m') }} Igor Libertador Silva
                                        </template>
                                        <template #institution>
                                            Universidade Tiradentes (UNIT), BR
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
                                                <img src="/assets/img/people/soraia.png" alt="Soraia"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/soraia.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('f') }} Soraia S. Prietch
                                        </template>
                                        <template #institution>
                                            Universidade Federal de Rondonópolis, BR<br>
                                            Benemérita Universidad Autónoma de Puebla, MX
                                        </template>
                                        <template #email>
                                        </template>
                                    </OrganizerItem>
                                </div>

                                <div class="col-md-4 ms-auto mt-md-0 mt-4">
                                    <OrganizerItem>
                                        <template #image>
                                            <div class="d-block blur-shadow-image">
                                                <img src="/assets/img/people/pedroReynolds.png" alt="Placeholder portrait"
                                                    class="img-fluid shadow rounded-3">
                                            </div>
                                            <div class="colored-shadow"
                                                style="background-image: url(&quot;/assets/img/people/pedroReynolds.png&quot;);">
                                            </div>
                                        </template>
                                        <template #name>
                                            {{ doctorateTitle('m') }} Pedro Reynolds-Cuellar
                                        </template>
                                        <template #institution>
                                            Massachusetts Institute of Technology (MIT), US
                                        </template>
                                        <template #email>
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
                    
                    <h3 class="h4">{{ $t("accepted_papers.full_papers") }}</h3>
                    <ul class="program-committee-list list-unstyled mt-3">
                        <li><div class="fw-bold">Ana Cristina Bicharra Garcia</div><div class="text-muted">Universidade Federal do Estado do Rio de Janeiro, Brazil</div></li>
                        <li><div class="fw-bold">Ana Grasielle Dionísio Corrêa</div><div class="text-muted">Universidade Presbiteriana Mackenzie, Brazil</div></li>
                        <li><div class="fw-bold">Andre Pimenta Freire</div><div class="text-muted">Universidade Federal de Lavras, Brazil</div></li>
                        <li><div class="fw-bold">Anna Beatriz Marques</div><div class="text-muted">Universidade Federal do Ceará, Brazil</div></li>
                        <li><div class="fw-bold">Bruna Diirr</div><div class="text-muted">Universidade Federal do Estado do Rio de Janeiro, Brazil</div></li>
                        <li><div class="fw-bold">Carlos H. Morimoto</div><div class="text-muted">Universidade de São Paulo, Brazil</div></li>
                        <li><div class="fw-bold">Caroline Queiroz Santos</div><div class="text-muted">Universidade Federal dos Vales do Jequitinhonha e Mucuri, Brazil</div></li>
                        <li><div class="fw-bold">Ingrid Teixeira Monteiro</div><div class="text-muted">Universidade Federal do Ceará, Brazil</div></li>
                        <li><div class="fw-bold">Ismar Frango Silveira</div><div class="text-muted">Universidade Presbiteriana Mackenzie, Brazil</div></li>
                        <li><div class="fw-bold">Kamila Rodrigues</div><div class="text-muted">Universidade de São Paulo, Brazil</div></li>
                        <li><div class="fw-bold">Leander Cordeiro de Oliveira</div><div class="text-muted">Universidade Tecnológica Federal do Paraná, Brazil</div></li>
                        <li><div class="fw-bold">Leandro Guedes</div><div class="text-muted">Instituto Federal de Mato Grosso do Sul, Brazil</div></li>
                        <li><div class="fw-bold">Leticia Machado</div><div class="text-muted">Universidade Federal do Rio Grande do Sul, Brazil</div></li>
                        <li><div class="fw-bold">Luã Marcelo Muriana</div><div class="text-muted">Universidade Estadual de Campinas, Brazil</div></li>
                        <li><div class="fw-bold">Lucineide Rodrigues da Silva</div><div class="text-muted">Universidade Federal de Mato Grosso do Sul, Brazil</div></li>
                        <li><div class="fw-bold">Maria Lucia Bento Villela</div><div class="text-muted">Universidade Federal de Viçosa, Brazil</div></li>
                        <li><div class="fw-bold">María Victoria Kubo</div><div class="text-muted">Universidad Autónoma de Baja California, Mexico</div></li>
                        <li><div class="fw-bold">Mayara Costa Figueiredo</div><div class="text-muted">Universidade Federal do Pará, Brazil</div></li>
                        <li><div class="fw-bold">Maylon Macedo</div><div class="text-muted">IFSP, Campus Itapetininga, Brazil</div></li>
                        <li><div class="fw-bold">Milene Silveira</div><div class="text-muted">Pontifícia Universidade Católica do Rio Grande do Sul, Brazil</div></li>
                        <li><div class="fw-bold">Monica Perusquia Hernandez</div><div class="text-muted">Nara Institute of Science and Technology, Japan</div></li>
                        <li><div class="fw-bold">Mónica Carreño-León</div><div class="text-muted">Universidad Autónoma de Baja California Sur, Mexico</div></li>
                        <li><div class="fw-bold">Rodrigo Oliveira Zacarias</div><div class="text-muted">Universidade Federal Fluminense, Brazil</div></li>
                        <li><div class="fw-bold">Sara Wolf</div><div class="text-muted">Psychological Ergonomics, University of Würzburg (JMU), Germany</div></li>
                        <li><div class="fw-bold">Suéllen Martinelli</div><div class="text-muted">Instituto Federal de Educação, Ciência e Tecnologia de São Paulo, Brazil</div></li>
                        <li><div class="fw-bold">Taciana Pontual Falcão</div><div class="text-muted">Universidade Federal Rural de Pernambuco, Brazil</div></li>
                        <li><div class="fw-bold">Thais H. C. Castro</div><div class="text-muted">Universidade Federal do Amazonas, Brazil</div></li>
                        <li><div class="fw-bold">Valéria Farinazzo Martins</div><div class="text-muted">Universidade Presbiteriana Mackenzie, Brazil</div></li>
                        <li><div class="fw-bold">Vania Paula Almeida Neris</div><div class="text-muted">Universidade Federal de São Carlos, Brazil</div></li>
                        <li><div class="fw-bold">Walter Nakamura</div><div class="text-muted">Universidade Tecnológica Federal do Paraná, Brazil</div></li>
                        <li><div class="fw-bold">Willian Garcias Assuncao</div><div class="text-muted">Universidade Federal de São Carlos, Brazil</div></li>
                        <li><div class="fw-bold">Wilson Sarmiento</div><div class="text-muted">Universidad Militar Nueva Granada, Colombia</div></li>
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

<style scoped>
.program-committee-list li {
    break-inside: avoid;
    margin-bottom: 1rem;
}

@media (min-width: 768px) {
    .program-committee-list {
        column-count: 2;
        column-gap: 2rem;
    }
}
</style>
