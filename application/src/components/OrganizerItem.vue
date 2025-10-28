<template>
    <div class="card shadow-lg">
        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
            <slot name="image"></slot>
        </div>
        <div class="card-body">
            <h4 class="mt-3">                
                <slot name="name"></slot>
            </h4>
            <p>
                <!--Universidad Michoacana de San Nicolás de Hidalgo-->
                <slot name="institution"></slot>
                <br>
                <slot name="email"></slot>
                <!--<a class="uline" href="mailto:web.2022@mexihc.org">interactivity.2022@mexihc.org</a>-->
            </p>
        </div>
    </div>
</template>    