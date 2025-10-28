<script>
import Tr from '@/i18n/translation'

export default {
    setup() {
        return { Tr }
    }
}
</script>

<template>
    <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#monday' })" class="uline">
                        Lunes, 30 de octubre de 2023
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#tuesday' })" class="uline">
                        Martes, 31 de octubre de 2023
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#wednesday' })" class="uline">
                        Miércoles, 1 de noviembre de 2023
                    </RouterLink>
                </div>
            </div>
        </li>
    </ol>
    
    <h2 id="monday" class="text-primary text-gradient text-center py-4">Lunes, 30 de octubre de 2023</h2>

    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Hora (CST)</th>
                <th scope="col" colspan="2">Evento</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="col" colspan="3" class="text-center text-primary text-gradient">Lugar: Edificio Carolino, Centro</th>
            </tr>            
            <tr>
                <th scope="row">09:00 - 09:30 hrs</th>
                <td colspan="2">
                    <div>
                        Registro + Presentación Cultural (Músicos)
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">09:30 - 10:00 hrs</th>
                <td colspan="2">
                    <div>
                        Inauguración
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">10:00 - 11:00 hrs</th>
                <td colspan="2">
                    <p>
                        Conferencia Magistral de <strong>Claudia Lopez</strong> "Towards inter-disciplinary approaches to re-imagine AI"<br>
                        <strong>Federico Santa María Technical University (UTFSM), Chile</strong>
                    </p>
                    <!--
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#claudiaLopez"
                        role="button" aria-expanded="false" aria-controls="claudiaLopez">Resumen</a>
                    <div class="collapse" id="claudiaLopez">
                        <div class="card card-body">
                            <p>
                                Resumen
                            </p>
                        </div>
                    </div>
                    -->
                </td>
            </tr>
            <tr>
                <th scope="row">11:00 - 11:30 hrs</th>
                <td colspan="2">
                    <div>
                        Receso para Café
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">11:00 - 12:30 hrs</th>
                <td colspan="2">
                    <p>
                        Conferencia Magistral de <strong>Phillipe Palanque </strong> "Past, Present and Future in Modeling User Tasks"<br>
                        <strong>University of Toulouse 3, France</strong>
                    </p>
                    <!--
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#phillipePalenque"
                        role="button" aria-expanded="false" aria-controls="phillipePalenque">Resumen</a>
                    <div class="collapse" id="phillipePalenque">
                        <div class="card card-body">
                            <p>
                                Resumen
                            </p>
                        </div>
                    </div>
                    -->
                </td>
            </tr>
            <tr>
                <th scope="row">12:30 - 13:30 hrs</th>
                <td colspan="2">
                    <div>
                        Recorrido Carolino
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">13:30 - 14:00 hrs</th>
                <td colspan="2">
                    <div>
                        Receso para comida
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">15:00 - 18:00 hrs</th>
                <td>
                    <strong class="text-center text-primary text-gradient">Lugar: DCyTIC 2, BUAP</strong><br>
                    <strong>Talleres y Tutoriales</strong>
                    <ul>
                        <li>Data Storytelling: Revolutionising Human-Data Interaction or Just Passing Hype?, Roberto Martínez <strong>(Sala 1)</strong></li>
                        <li>Planning and Conducting Heuristic Evaluations with DUXAIT-NG <strong>(Sala 2)</strong></li>
                        <li>Exploring cultural data from UNESCO using semantic technologies <strong>(Sala 3)</strong></li>
                        <li>Applications of Instance-Based Learning Theory: Using the SpeedyIBL Library to Construct Computational Models <strong>(Sala 4)</strong></li>
                    </ul>
                </td>
                <td>
                    <strong class="text-center text-primary text-gradient">Lugar: Posgrado</strong><br>
                    <strong>Pósteres</strong>
                    <ul>
                        <li>A Guide to Plain Language Data Visualizations: Guidelines for More Understandable Chart Design</li>
                        <li>What do Portuguese-Libras automatic translation application users care about? An analysis of user comments to improve application accessibility by the quality assurance team</li>
                        <li>Learning Interaction User Flow</li>
                        <li>Improving User Experience: Designing an Intuitive and Visually Appealing Interface for University First Contact and Ombudsman Services for the Centro Universitario del Sur</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th scope="row">18:00 - 20:00 hrs</th>
                <td colspan="2">
                    <div>
                        <strong>Panel todo cambia</strong>
                        <ul>
                            <li>Desafíos y Oportunidades en HCI en LATAM <strong>(Edificio San Jerónimo, sala por definir)</strong></li>
                        </ul>
                    </div>
                </td>
            </tr>                          
        </tbody>
    </table>

    <h2 id="tuesday" class="text-primary text-gradient text-center py-4"> Martes, 31 de octubre de 2023</h2>
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Hora (CST)</th>
                <th scope="col" colspan="2">Evento</th>                
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="col" colspan="3" class="text-center text-primary text-gradient">Lugar: Facultad de la FCC (Auditorio FCC)</th>
            </tr>            
            <tr>
                <th scope="row">09:00 - 09:30 hrs</th>
                <td colspan="2">
                    <p>
                        Registro
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">09:30 - 10:30 hrs</th>
                <td colspan="2">
                    <p>
                    Conferencia Magistral de <strong>Marisol Wong</strong> "Hacia un Mundo de Muchos Mundos en IHC"
                    <br><strong>Escuela Superior Politécnica del Litoral, Ecuador</strong>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#marisolWong" role="button"
                        aria-expanded="false" aria-controls="marisolWong">Resumen</a>
                    <div class="collapse" id="marisolWong">
                        <div class="card card-body">
                            <p>
                                El campo de la Interacción Humano-Computadora (HCI) ha reconocido durante mucho tiempo una brecha socio-técnica que complica el diseño de tecnologías que puedan satisfacer de manera sostenible las necesidades sociales. En respuesta, un creciente cuerpo de investigación aboga por el diseño basado en activos, un enfoque que busca construir sobre lo que las personas y la comunidad ya tienen. El énfasis en posicionar fortalezas en lugar de necesidades en el centro del proceso puede complicar las decisiones de los diseñadores sobre qué actividades fomentar, cómo llevarlas a cabo y qué resultados esperar. En esta charla, reflexiono sobre mi trayectoria al intentar aplicar un enfoque basado en activos al diseño, primero al trabajar con padres latinos en los Estados Unidos para reinventar tecnologías que permitan a los padres participar en la educación de sus hijos, luego al trabajar con diferentes comunidades en Guayaquil que buscan en la tecnología una forma de innovar y mantener su trabajo y, finalmente, con otros investigadores de HCI de América Latina que intentan visibilizar las fortalezas que la región aporta a HCI como disciplina globalizada. En particular, exploro los problemas e implicaciones de centrarse en los activos como base para el diseño, propongo el diseño centrado en la capacidad como una alternativa más realista que el diseño basado en activos y discuto los compromisos metodológicos y cambios de perspectiva en torno al trabajo, el papel de la tecnología y la transformación que este enfoque requiere.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">10:30 - 11:00 hrs</th>
                <td  colspan="2">
                    Receso para Café
                </td>
            </tr>
            <tr>
                <th scope="row">11:00 - 12:00 hrs</th>
                <td  colspan="2">
                    <p>
                        Conferencia Magistral de <strong>Roberto Martínez</strong> "Putting the 'I' in AI: Human-Centred Approaches in
                        Education"
                        <br><strong>Monash University, Australia</strong>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#robertoMartinez"
                        role="button" aria-expanded="false" aria-controls="robertoMartinez">Resumen</a>
                    <div class="collapse" id="robertoMartinez">
                        <div class="card card-body">
                            <p>
                                A medida que experimentamos una segunda ola de innovaciones en Inteligencia Artificial (IA), los desarrolladores de tecnología en diversos sectores se están uniendo para crear herramientas y metodologías revolucionarias. En educación, ha surgido una oleada de nuevas herramientas en un tiempo notablemente corto, desafiando prácticas convencionales de evaluación y remodelando cómo los estudiantes demuestran la creación de conocimiento. Sin embargo, en la prisa por abrazar el futuro, es crucial mantener los factores humanos en el núcleo de estos esfuerzos. Esta conferencia explorará la importancia de un enfoque de diseño centrado en el ser humano en la integración de la IA en la educación. Un enfoque centrado en el ser humano para el diseño de innovaciones en IA no solo tiene el potencial de mejorar los resultados del aprendizaje, sino también de reconocer, respetar y diseñar para los atributos únicos de la cognición y la emoción humanas. Este esfuerzo es multidisciplinario, tejiendo de manera fluida fundamentos de la Interacción Humano-Computadora, el diseño, la teoría educativa y la ciencia de datos. Presentaré un estudio de caso auténtico que ilustra el profundo impacto de combinar la experiencia humana con la inteligencia artificial. Este estudio se centra en un proyecto de análisis de aprendizaje multimodal en el que educadores y otros interesados en la educación colaboraron en el diseño de una infraestructura de captura de datos para apoyar la colaboración presencial. En este proyecto, se utilizaron múltiples sensores, incluidos sensores de posicionamiento, pulseras fisiológicas, dispositivos de audio y video, para monitorear grupos de estudiantes de enfermería. El objetivo principal era co-proyectar interfaces que amplificaran las prácticas reflexivas y exploraran cómo la IA puede ser utilizada para respaldar la educación con integridad.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">12:00 - 14:00 hrs</th>
                <td>
                    <strong class="text-center text-primary text-gradient">Lugar: Auditorio FCC</strong><br>
                    Sesiones de Ponencias
                    <p>
                        <strong>Educación, Inclusión y Accesibilidad</strong>
                        <ul>
                            <li>Dashboard design for Key Performance Indicators visualization of STEAM government initiatives: A case study</li>
                            <li>Didactic Alternative based on Augmented Reality for teaching Mazatec Language</li>
                            <li>Interactive floor´s impact on gross motor abilities in Mexican children with learning and language disabilities</li>
                            <li>A Serious Game prototype aimed at rescuing the Ixcatecan language using the Design Thinking methodology</li>
                            <li>Design of a software prototype for listening comprehension of the Ixcatecan language</li>
                            <li>Measurement of efficiency parameters from the application of STEM Maker teaching: A practical case</li>
                        </ul>

                        <strong>Adopción y Evaluación de Tecnología</strong>
                        <ul>
                            <li>A Multilevel Methodology to Assess the Quality of Machine Translators to Brazilian Sign Languages</li>
                            <li>LA USABILIDAD EN UN SISTEMA DE SEGURIDAD DE MEZCLA DE CRIPTOGRAFIA Y HARDWARE</li>
                        </ul>
                    </p>
                </td>
                <td>
                    <strong class="text-center text-primary text-gradient">Lugar: Posgrado</strong><br>
                    Sesiones de Ponencias 2
                    <p>
                        <strong>Datos</strong>
                        <ul>
                            <li>Considerações de Design para Visualização de Dados Sociais em Mapas Web</li>
                            <li>Personal Data Comics: A Data Storytelling Approach Supporting Personal Data Literacy</li>
                        </ul>

                        <strong>Negocios, Comercio Electrónico y Gestión de Proyectos</strong>
                        <ul>
                            <li>The Perceived Influence of E-Shopping Cues on Customers' Buying Decisions</li>
                            <li>Redefining e-commerce engagement: exploring the demographic impact of WhatsApp chatbots in the Mexican market</li>
                            <li>DoTA: DesignOps Teams Assessment em equipes ágeis de desenvolvimento de software em empresa do setor financeiro                        </li>
                        </ul>

                        <strong>Comunicación, Emociones e Interacciones Sociales</strong>
                        <ul>
                            <li>Beyond the Physical and Virtual for a Socioenactive Interaction</li>
                            <li>GenQ: Automated Question Generation to Support Caregivers While Reading Stories with Children</li>
                        </ul>                        
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">14:00 - 15:00 hrs</th>
                <td colspan="2">
                    <p>
                        Receso para comida
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">15:00 - 17:00 hrs</th>
                <td>
                    <strong class="text-center text-primary text-gradient">Lugar: Auditorio FCC</strong><br>
                    Sesiones de Ponencias 3
                    <p>
                        <strong>Educación, Inclusión y Accesibilidad</strong>
                        <ul>
                            <li>Determinando a importância de critérios de acessibilidade para recursos digitais voltados para pessoas com autismo por crowdsourcing</li>
                            <li>Designing a sign language training platform for hearing healthcare personnel</li>
                            <li>Codesigning a Spanish literacy platform for deaf children</li>
                        </ul>

                        <strong>Adopción y Evaluación de Tecnología</strong>
                        <ul>
                            <li>Exploring Acceptance Factors of a Technology for Textual Production among Deaf Users: A UTAUT2-Based Studya</li>
                            <li>Applying Heuristic Evaluation with Different Evaluator Profiles: A Comparative Study Between Novice and Expert Specialists</li>
                        </ul>

                        <strong>Comunicación, Emociones e Interacciones Sociales</strong>
                        <ul>
                            <li>Hybrid Models for Facial Emotion Recognition in Children</li>
                            <li>Virtual Reality Environment for Surgical Skills Practice for Medical Students</li>
                            <li>A CASE Tool for the Socially-Aware Persuasive System Design toward enhancing the Human Behavior</li>
                        </ul>
                    </p>
                </td>
                <td>
                    <p>
                        <strong class="text-center text-primary text-gradient">Lugar: Posgrado</strong><br>
                        <strong>Coloquio Doctoral (Lugar por determinar)</strong>
                        <ul>
                            <li>Development of a Multimodal Model for Emotions Recognition in Drivers Using Convolutional Neural Networks</li>
                            <li>Multimodal Emotion Recognition Model Using AI With the Aim of Addressing Gender-Based Violence</li>
                            <li>Desarrollo de un Sistema de Seguridad Automotriz para la Detección de Peatones Mediante la Fusión de Información de la Cámara de Reversa y Sensores de Proximidad Usando Redes Neuronales Convolucionales Profundas</li>
                            <li>Bidirectional communication of emotions between a young user with autism and their assistance dog.</li>
                            <li>Prototype proposal for an interactive container aimed at primary school children aged 6 to 8 years old to promote plastic collection and sorting.</li>
                            <li>Design of a Mobile Application Prototype Focused on Physical Activity Management in University Students to Compensate for the Effects of ADHD</li>
                        </ul>

                        <strong>SDC (Lugar por determinar)</strong>
                        <ul>
                            <li>CycleWiseT: Promoting Menstrual Health to Transform the Lives of Women and Girls Through Technology</li>
                            <li>piensaRápido: Plataforma Lúdica de Aprendizaje</li>
                            <li>SafeBikers : Diseño basado en Solidaridad para Un Ciclismo Comunitario Seguro en Ecuador</li>
                            <li>AmamantApp: Aplicación móvil para Promover la Donación de Leche Materna</li>
                        </ul>
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">17:00 - 20:00 hrs</th>
                <td colspan="2">
                    <p>
                        -
                    </p>
                </td>
            </tr>

            <tr>
                <th scope="row">20:00 hrs</th>
                <td colspan="2">
                    <p>
                        Cena de Gala
                    </p>
                </td>
            </tr>
        </tbody>
    </table>

    <h2 id="wednesday" class="text-primary text-gradient text-center py-4">Miércoles, 1 de noviembre de 2023</h2>
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Hora (CST)</th>
                <th scope="col">Evento</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="col" colspan="3" class="text-center text-primary text-gradient">Lugar: Tec de Monterrey, Campus Puebla</th>
            </tr>             
            <tr>
                <th scope="row">09:30 - 09:50 hrs</th>
                <td>
                    <p>
                        Registro
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">09:50 - 10:00 hrs</th>
                <td>
                    <p>Apertura del Día de la Industria</p>
                </td>
            </tr>
            <tr>
                <th scope="row">10:00 - 10:45 hrs</th>
                <td>
                    <p>
                        <strong>Co-creación de valor: la actitud que impulsa al diseño</strong><br>
                        Sebastián Valenzuela<br>
                        Head of Design Chapter Sky Airline<br>
                        <span class="fw-bold">Sky Airline</span>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#sebastianValenzuela" role="button"
                        aria-expanded="false" aria-controls="sebastianValenzuela">Resumen</a>
                    <div class="collapse" id="sebastianValenzuela">
                        <div class="card card-body">
                            <p>
                                En esta charla, exploraremos el papel fundamental del diseño en contextos organizacionales donde su valor no se reconocía completamente. Comprender el contexto fortalece nuestro trabajo como diseñadores, permitiéndonos impulsar la co-creación de valor junto a los diversos actores del sistema y, en consecuencia, facilitar la incorporación del co-diseño en las operaciones y prácticas de una aerolínea.
                            </p>
                        </div>
                    </div>                                            
                </td>
            </tr>
            <tr>
                <th scope="row">10:50 - 11:10 hrs</th>
                <td>
                    <p>
                        <strong>Integrando métodos y perspectivas de Interacción Humano- Computadora en el desarrollo responsable de Inteligencia Artificial</strong><br>
                        Adriana Alvarado <br>
                        Research Scientist<br>
                        <span class="fw-bold">IBM</span>
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">11:15 - 11:35 hrs</th>
                <td>
                    <p>
                        <strong>Angustia, fracaso y llanto; la vida después de la escuela</strong><br>
                        Remedios Méndez<br>
                        UX Writer<br>
                        <span class="fw-bold">RGP</span>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#remediosMendez" role="button"
                        aria-expanded="false" aria-controls="remediosMendez">Resumen</a>
                    <div class="collapse" id="remediosMendez">
                        <div class="card card-body">
                            <p>
                                Breve historia de cómo cambiar al mundo hablándole bonito.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">11:40 - 12:00 hrs</th>
                <td>
                    <p>
                        Receso para Café
                    </p>
                </td>
            </tr>            
            <tr>
                <th scope="row">12:05 - 12:25 hrs</th>
                <td>
                    <p>
                        <strong>El journey de un Product Designer: perspectivas del trabajo en equipo en la práctica profesional</strong><br>
                        Griselda Legaria<br>
                        Product Designer<br>
                        <span class="fw-bold">Serbatic</span>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#servatic" role="button"
                        aria-expanded="false" aria-controls="servatic">Resumen</a>
                    <div class="collapse" id="servatic">
                        <div class="card card-body">
                            <p>
                                El rol de Product Designer está presente en las empresas durante las fases del desarrollo de un producto digital. Trabajar de manera colaborativa con otros interesados es un factor clave para aportar valor al diseño del producto. No podemos volvernos expertos en todo, sin embargo, ¡podemos colaborar entre todos para generar soluciones integrales!
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">12:30 - 13:15 hrs</th>
                <td>
                    <p>
                        <strong>Analizando las interacciones humanas en la era de la Inteligencia Artificial</strong><br>
                        Santi Cantalejo / Julio Pedrazuela<br>
                        <span class="fw-bold">The Cocktail</span>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#theCocktail" role="button"
                        aria-expanded="false" aria-controls="theCocktail">Resumen</a>
                    <div class="collapse" id="theCocktail">
                        <div class="card card-body">
                            <p>
                                En esta plática, recorreremos de manera didáctica las implicaciones de HCI, a través de la óptica de behavioural economics, para así explorar cómo evolucionan las expectativas humanas, sesgos y procesos cognitivos, en una era en la que ya no hay, necesariamente, humanos detrás de los contenidos e interacciones digitales.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">13:20 - 14:00 hrs</th>
                <td>
                    <p>
                        Panel de Preguntas y Respuestas
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">14:00 - 14:10 hrs</th>
                <td>
                    <p>
                        Clausura del Día de la Industria
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">14:10 - 14:30 hrs</th>
                <td>
                    <p>
                        Networking
                    </p>
                </td>
            </tr>            
        </tbody>
    </table>

    <h3 class="text-primary text-gradient text-center py-4">Talleres</h3>

    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Hora (CST)</th>
                <th scope="col">Evento</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">9:30 - 10:00 hrs</th>
                <td>
                    <p>
                        Registro
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="col" colspan="3" class="text-center text-primary text-gradient">Sala por determinar - Tec de Monterrey, Campus Puebla</th>
            </tr>            
            <tr>
                <th scope="row">10:00 - 12:00 hrs</th>
                <td>
                    <p>
                        <strong>Diseño de futuros: enfrentando retos globales a través de la innovación</strong><br>
                        Luis Carlos Aceves <br>
                        Business Development & Corporate Affairs Manager<br>
                        <span class="fw-bold">Skye Group</span>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#skyeGroup" role="button"
                        aria-expanded="false" aria-controls="skyeGroup">Resumen</a>
                    <div class="collapse" id="skyeGroup">
                        <div class="card card-body">
                            <p>
                                En esta charla-taller abordaremos los principios para innovar a través del diseño estratégico, particularmente revisaremos las bases y fundamentos del diseño de futuros para comprender cómo nos puede ayudar a prospectar y diseñar soluciones de largo plazo.
                            </p>
                        </div>
                    </div>
                </td>                
            </tr>
            <tr>
                <th scope="col" colspan="3" class="text-center text-primary text-gradient">Sala por determinar - Tec de Monterrey, Campus Puebla</th>
            </tr>            
            <tr>
                <th scope="row">10:00 - 14:00 hrs</th>
                <td>
                    <p>
                        <strong>Introducción a Jobs to be Done: Conecta con las necesidades de las personas usuarias</strong><br>
                        Sarai Prado / Nefer Daniela Romero / Zaira Cuecuecha<br>
                        <span class="fw-bold">Sperientia [Studio + Lab] ®</span>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#sperientia" role="button"
                        aria-expanded="false" aria-controls="sperientia">Resumen</a>
                    <div class="collapse" id="sperientia">
                        <div class="card card-body">
                            <p>
                                Este taller está diseñado para estudiantes que estén interesados en la creación de productos y servicios, así como en la implementación del diseño centrado en las personas, nos introduciremos a una metodología que nos permite entender de raíz las necesidades de las personas. Al identificar los Trabajos por Hacer, somos capaces de satisfacer mejor esas necesidades, encontrar oportunidades de innovación y disrupción en el mercado.
                            </p>
                        </div>
                    </div>
                </td>                
            </tr>
        </tbody>
    </table>    
        
</template>