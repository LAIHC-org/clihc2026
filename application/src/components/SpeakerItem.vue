<template>
    <div class="col-lg-4 mt-lg-0 mt-4"> <!-- ms-auto -->
        <div class="card shadow-lg">
            <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                <div class="d-block blur-shadow-image">
                   <slot name="image"></slot>
                </div>
                <slot name="image-shadow"></slot>
            </div>
            <div class="card-body">
                <h4 class="mt-3">
                    <slot name="name"></slot>
                </h4>
                <p>
                    <slot></slot>
                </p>
            </div>
        </div>
    </div>
</template>