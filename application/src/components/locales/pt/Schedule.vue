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
                        Segunda-feira, 30 de outubro de 2023
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#tuesday' })" class="uline">
                        Terça-feira, 31 de outubro de 2023
                    </RouterLink>
                </div>
            </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">
                    <RouterLink :to="Tr.i18nRoute({ name: 'schedule', hash: '#wednesday' })" class="uline">
                        Quarta-feira, 1 de novembro de 2023
                    </RouterLink>
                </div>
            </div>
        </li>
    </ol>
    
    <h2 id="monday" class="text-primary text-gradient text-center py-4">Segunda-feira, 30 de outubro de 2023</h2>

    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Horário (CST) </th>
                <th scope="col" colspan="2">Evento</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="col" colspan="3" class="text-center text-primary text-gradient">Local: Edificio Carolino, Centro</th>
            </tr>            
            <tr>
                <th scope="row">09:00 - 09:30 hrs</th>
                <td colspan="2">
                    <div>
                        Registro + Apresentação Cultural (Músicos)
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">09:30 - 10:00 hrs</th>
                <td colspan="2">
                    <div>
                        Inauguração
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">10:00 - 11:00 hrs</th>
                <td colspan="2">
                    <p>
                        Palestra com <strong>Claudia Lopez</strong> "Towards inter-disciplinary approaches to re-imagine AI"<br>
                        <strong>Federico Santa María Technical University (UTFSM), Chile</strong>
                    </p>
                    <!--
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#claudiaLopez"
                        role="button" aria-expanded="false" aria-controls="claudiaLopez">Resumo</a>
                    <div class="collapse" id="claudiaLopez">
                        <div class="card card-body">
                            <p>
                                Resumo
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
                        Intervalo para Café
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">11:00 - 12:30 hrs</th>
                <td colspan="2">
                    <p>
                        Palestra com <strong>Phillipe Palanque </strong> "Past, Present and Future in Modeling User Tasks"<br>
                        <strong>University of Toulouse 3, France</strong>
                    </p>
                    <!--
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#phillipePalenque"
                        role="button" aria-expanded="false" aria-controls="phillipePalenque">Resumo</a>
                    <div class="collapse" id="phillipePalenque">
                        <div class="card card-body">
                            <p>
                                Resumo
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
                        Tour Carolino
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">13:30 - 14:00 hrs</th>
                <td colspan="2">
                    <div>
                        Intervalo para Almoço
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">15:00 - 18:00 hrs</th>
                <td>
                    <strong class="text-center text-primary text-gradient">Local: DCyTIC 2, BUAP</strong><br>
                    <strong>Workshops e Tutoriais</strong>
                    <ul>
                        <li>Data Storytelling: Revolutionising Human-Data Interaction or Just Passing Hype?, Roberto Martínez <strong>(Sala 1)</strong></li>
                        <li>Planning and Conducting Heuristic Evaluations with DUXAIT-NG <strong>(Sala 2)</strong></li>
                        <li>Exploring cultural data from UNESCO using semantic technologies <strong>(Sala 3)</strong></li>
                        <li>Applications of Instance-Based Learning Theory: Using the SpeedyIBL Library to Construct Computational Models <strong>(Sala 4)</strong></li>
                    </ul>
                </td>
                <td>
                    <strong class="text-center text-primary text-gradient">Local: Posgrado</strong><br>
                    <strong>Pôsteres</strong>
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
                        <strong>Painel Tudo Muda</strong>
                        <ul>
                            <li>Desafios e Oportunidades em HCI na América Latina <strong>(Edifício San Jerónimo, sala a ser definida)</strong></li>
                        </ul>
                    </div>
                </td>
            </tr>                          
        </tbody>
    </table>

    <h2 id="tuesday" class="text-primary text-gradient text-center py-4"> Terça-feira, 31 de outubro de 2023</h2>
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Horário (CST) </th>
                <th scope="col" colspan="2">Event</th>                
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="col" colspan="3" class="text-center text-primary text-gradient">Local: Facultad de la FCC (Auditorio FCC)</th>
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
                    Palestra com <strong>Marisol Wong</strong> "Hacia un Mundo de Muchos Mundos en IHC"
                    <br><strong>Escuela Superior Politécnica del Litoral, Ecuador</strong>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#marisolWong" role="button"
                        aria-expanded="false" aria-controls="marisolWong">Resumo</a>
                    <div class="collapse" id="marisolWong">
                        <div class="card card-body">
                            <p>
                                O campo da HCI há muito tempo reconheceu uma lacuna sócio-técnica que complica o design de tecnologias que possam atender de forma sustentável às necessidades sociais. Em resposta, um crescente corpo de pesquisa defende o design baseado em ativos, uma abordagem que busca construir sobre o que as pessoas e a comunidade já têm. A ênfase em posicionar as forças no centro do processo, em vez de necessidades, pode complicar as decisões dos designers sobre quais atividades promover, como conduzi-las e que resultados esperar. Nesta palestra, exploro minha jornada ao tentar aplicar uma abordagem baseada em ativos ao design, começando com pais latinos nos EUA para reinventar tecnologias que permitam que os pais se envolvam na educação de seus filhos, depois trabalhando com diferentes comunidades em Guayaquil que buscam na tecnologia uma forma de inovar e sustentar seu trabalho e, finalmente, com outros pesquisadores latino-americanos de HCI que tentam tornar visíveis as forças que a região traz para HCI como disciplina globalizada. Em particular, exploro os problemas e implicações de se concentrar em ativos como base para o design, proponho o design centrado na capacidade como uma alternativa mais realista do que o design baseado em ativos e discuto os compromissos metodológicos e mudanças de perspectiva em torno do trabalho, do papel da tecnologia e da transformação que essa abordagem requer.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">10:30 - 11:00 hrs</th>
                <td  colspan="2">
                    Intervalo para Café
                </td>
            </tr>
            <tr>
                <th scope="row">11:00 - 12:00 hrs</th>
                <td  colspan="2">
                    <p>
                        Palestra com <strong>Roberto Martínez</strong> "Putting the 'I' in AI: Human-Centred Approaches in
                        Education"
                        <br><strong>Monash University, Australia</strong>
                    </p>
                    <a class="btn bg-gradient-primary btn-round" data-bs-toggle="collapse" href="#robertoMartinez"
                        role="button" aria-expanded="false" aria-controls="robertoMartinez">Resumo</a>
                    <div class="collapse" id="robertoMartinez">
                        <div class="card card-body">
                            <p>
                                Conforme experimentamos uma segunda onda de inovações em Inteligência Artificial (IA), desenvolvedores de tecnologia em vários setores estão se unindo para criar ferramentas e metodologias revolucionárias. Na educação, uma série de novas ferramentas foi lançada em um tempo notavelmente curto, desafiando práticas convencionais de avaliação e remodelando como os estudantes demonstram a criação de conhecimento. No entanto, na pressa de abraçar o futuro, é crucial manter os fatores humanos no cerne desses esforços. Esta conferência explorará a importância de um enfoque de design centrado no ser humano na integração da IA na educação. Um enfoque centrado no ser humano para o design de inovações em IA não apenas tem o potencial de melhorar os resultados de aprendizado, mas também de reconhecer, respeitar e projetar para os atributos únicos da cognição e da emoção humanas. Este empreendimento é um esforço multidisciplinar que entrelaça de maneira contínua fundamentos da Interação Humano-Computador, do design, da teoria educacional e da ciência de dados. Apresentarei um estudo de caso autêntico que ilustra o profundo impacto de mesclar a experiência humana com a inteligência artificial. Este estudo gira em torno de um projeto de análise de aprendizado multimodal no qual educadores e outros interessados na educação colaboraram no design de uma infraestrutura de captura de dados para apoiar a colaboração presencial. Neste projeto, vários sensores, incluindo sensores de posicionamento, pulseiras fisiológicas, dispositivos de áudio e vídeo, foram utilizados para monitorar grupos de estudantes de enfermagem. O objetivo principal era co-projetar interfaces que ampliam as práticas reflexivas e exploram como a IA pode ser usada para apoiar a educação com integridade.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">12:00 - 14:00 hrs</th>
                <td>
                    <strong class="text-center text-primary text-gradient">Local: Auditorio FCC</strong><br>
                    Sessões de Apresentação de Trabalhos
                    <p>
                        <strong>Educação, Inclusão e Acessibilidade</strong>
                        <ul>
                            <li>Dashboard design for Key Performance Indicators visualization of STEAM government initiatives: A case study</li>
                            <li>Didactic Alternative based on Augmented Reality for teaching Mazatec Language</li>
                            <li>Interactive floor´s impact on gross motor abilities in Mexican children with learning and language disabilities</li>
                            <li>A Serious Game prototype aimed at rescuing the Ixcatecan language using the Design Thinking methodology</li>
                            <li>Design of a software prototype for listening comprehension of the Ixcatecan language</li>
                            <li>Measurement of efficiency parameters from the application of STEM Maker teaching: A practical case</li>
                        </ul>

                        <strong>Adoção e Avaliação de Tecnologia</strong>
                        <ul>
                            <li>A Multilevel Methodology to Assess the Quality of Machine Translators to Brazilian Sign Languages</li>
                            <li>LA USABILIDAD EN UN SISTEMA DE SEGURIDAD DE MEZCLA DE CRIPTOGRAFIA Y HARDWARE</li>
                        </ul>
                    </p>
                </td>
                <td>
                    <strong class="text-center text-primary text-gradient">Local: Posgrado</strong><br>
                    Sessões de Apresentação de Trabalhos 2
                    <p>
                        <strong>Dados</strong>
                        <ul>
                            <li>Considerações de Design para Visualização de Dados Sociais em Mapas Web</li>
                            <li>Personal Data Comics: A Data Storytelling Approach Supporting Personal Data Literacy</li>
                        </ul>

                        <strong>Negócios, Comércio Eletrônico e Gerenciamento de Projetos</strong>
                        <ul>
                            <li>The Perceived Influence of E-Shopping Cues on Customers' Buying Decisions</li>
                            <li>Redefining e-commerce engagement: exploring the demographic impact of WhatsApp chatbots in the Mexican market</li>
                            <li>DoTA: DesignOps Teams Assessment em equipes ágeis de desenvolvimento de software em empresa do setor financeiro                        </li>
                        </ul>

                        <strong>Comunicação, Emoções e Interações Sociais</strong>
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
                        Intervalo para Almoço
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">15:00 - 17:00 hrs</th>
                <td>
                    <strong class="text-center text-primary text-gradient">Local: Auditorio FCC</strong><br>
                    Sessões de Apresentação de Trabalhos 3
                    <p>
                        <strong>Educação, Inclusão e Acessibilidade</strong>
                        <ul>
                            <li>Determinando a importância de critérios de acessibilidade para recursos digitais voltados para pessoas com autismo por crowdsourcing</li>
                            <li>Designing a sign language training platform for hearing healthcare personnel</li>
                            <li>Codesigning a Spanish literacy platform for deaf children</li>
                        </ul>

                        <strong>Adoção e Avaliação de Tecnologia</strong>
                        <ul>
                            <li>Exploring Acceptance Factors of a Technology for Textual Production among Deaf Users: A UTAUT2-Based Studya</li>
                            <li>Applying Heuristic Evaluation with Different Evaluator Profiles: A Comparative Study Between Novice and Expert Specialists</li>
                        </ul>

                        <strong>Comunicação, Emoções e Interações Sociais</strong>
                        <ul>
                            <li>Hybrid Models for Facial Emotion Recognition in Children</li>
                            <li>Virtual Reality Environment for Surgical Skills Practice for Medical Students</li>
                            <li>A CASE Tool for the Socially-Aware Persuasive System Design toward enhancing the Human Behavior</li>
                        </ul>
                    </p>
                </td>
                <td>
                    <p>
                        <strong class="text-center text-primary text-gradient">Local: Posgrado</strong><br>
                        <strong>Colóquio Doutoral (Local a ser determinado)</strong>
                        <ul>
                            <li>Development of a Multimodal Model for Emotions Recognition in Drivers Using Convolutional Neural Networks</li>
                            <li>Multimodal Emotion Recognition Model Using AI With the Aim of Addressing Gender-Based Violence</li>
                            <li>Desarrollo de un Sistema de Seguridad Automotriz para la Detección de Peatones Mediante la Fusión de Información de la Cámara de Reversa y Sensores de Proximidad Usando Redes Neuronales Convolucionales Profundas</li>
                            <li>Bidirectional communication of emotions between a young user with autism and their assistance dog.</li>
                            <li>Prototype proposal for an interactive container aimed at primary school children aged 6 to 8 years old to promote plastic collection and sorting.</li>
                            <li>Design of a Mobile Application Prototype Focused on Physical Activity Management in University Students to Compensate for the Effects of ADHD</li>
                        </ul>

                        <strong>SDC (Local a ser determinado)</strong>
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
                        Jantar de Gala
                    </p>
                </td>
            </tr>
        </tbody>
    </table>

    <h2 id="wednesday" class="text-primary text-gradient text-center py-4">Quarta-feira, 1 de novembro de 2023</h2>
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Horário (CST) </th>
                <th scope="col">Event</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="col" colspan="3" class="text-center text-primary text-gradient">Local: Tec de Monterrey, Campus Puebla</th>
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
                    <p>Abertura do Dia da Indústria</p>
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
                                Nesta palestra, exploraremos o papel fundamental do design em contextos organizacionais onde seu valor não era totalmente reconhecido. A compreensão do contexto fortalece nosso trabalho como designers, permitindo-nos impulsionar a co-criação de valor com os diversos atores do sistema e, consequentemente, facilitar a incorporação do co-design nas operações e práticas de uma companhia aérea.
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
                        aria-expanded="false" aria-controls="remediosMendez">Resumo</a>
                    <div class="collapse" id="remediosMendez">
                        <div class="card card-body">
                            <p>
                                Uma breve história de como mudar o mundo falando com gentileza.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">11:40 - 12:00 hrs</th>
                <td>
                    <p>
                        Intervalo para Café
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
                        aria-expanded="false" aria-controls="servatic">Resumo</a>
                    <div class="collapse" id="servatic">
                        <div class="card card-body">
                            <p>
                                O papel de um Designer de Produto está presente nas empresas durante as fases de desenvolvimento de produtos digitais. Colaborar com outros interessados é um fator-chave para adicionar valor ao design do produto. Não podemos nos tornar especialistas em tudo, mas podemos colaborar para gerar soluções abrangentes!
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
                        aria-expanded="false" aria-controls="theCocktail">Resumo</a>
                    <div class="collapse" id="theCocktail">
                        <div class="card card-body">
                            <p>
                                Nesta palestra, exploraremos de maneira didática as implicações de HCI através da ótica da economia comportamental para entender como as expectativas humanas, os vieses e os processos cognitivos estão evoluindo em uma era em que pode não haver necessariamente humanos por trás do conteúdo e das interações digitais.
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">13:20 - 14:00 hrs</th>
                <td>
                    <p>
                        Painel de Perguntas e Respostas
                    </p>
                </td>
            </tr>
            <tr>
                <th scope="row">14:00 - 14:10 hrs</th>
                <td>
                    <p>
                        Encerramento do Dia da Indústria
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

    <h3 class="text-primary text-gradient text-center py-4">Workshops</h3>

    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col" class="w-25">Horário (CST) </th>
                <th scope="col">Event</th>
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
                <th scope="col" colspan="3" class="text-center text-primary text-gradient">Local a ser determinado - Tec de Monterrey, Campus Puebla</th>
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
                        aria-expanded="false" aria-controls="skyeGroup">Resumo</a>
                    <div class="collapse" id="skyeGroup">
                        <div class="card card-body">
                            <p>
                                Nesta palestra-workshop, abordaremos os princípios de inovação por meio do design estratégico, revisando especialmente as bases e fundamentos do design do futuro para entender como isso pode nos ajudar a prospectar e projetar soluções a longo prazo.
                            </p>
                        </div>
                    </div>
                </td>                
            </tr>
            <tr>
                <th scope="col" colspan="3" class="text-center text-primary text-gradient">Local a ser determinado - Tec de Monterrey, Campus Puebla</th>
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
                        aria-expanded="false" aria-controls="sperientia">Resumo</a>
                    <div class="collapse" id="sperientia">
                        <div class="card card-body">
                            <p>
                                Este workshop é projetado para estudantes interessados em criar produtos e serviços, bem como implementar o design centrado no ser humano. Apresentaremos uma metodologia que nos permite compreender as necessidades das pessoas desde o início. Ao identificar Jobs to Be Done, podemos melhor satisfazer essas necessidades, encontrar oportunidades de inovação e disrupção no mercado.
                            </p>
                        </div>
                    </div>
                </td>                
            </tr>
        </tbody>
    </table>    
        
</template>