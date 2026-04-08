<template>
    <div class="card shadow-lg organizer-card h-100">
        <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1 organizer-img-wrapper">
            <slot name="image"></slot>
        </div>
        <div class="card-body d-flex flex-column">
            <h4 class="mt-3">                
                <slot name="name"></slot>
            </h4>
            <p class="mb-0">
                <slot name="institution"></slot>
                <br>
                <slot name="email"></slot>
            </p>
        </div>
    </div>
</template>

<style scoped>
.organizer-card .organizer-img-wrapper img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
}
</style>
