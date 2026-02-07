<script>
export default {
    props: {
        venue: {
            type: String,
            default: null,
            validator(value) {
                return (
                    value === null ||
                    value === undefined ||
                    value === "brazil" ||
                    value === "mexico"
                );
            },
        },
    },
    computed: {
        venueLabel() {
            if (!this.venue) {
                return "";
            }
            return this.$t(`labels.venue_${this.venue}`);
        },
    },
};
</script>

<template>
    <div class="row">
        <div class="row justify-content-center my-sm-1">
            <div class="col-lg-12 mx-auto">
                <div class="row py-lg-3 py-1">
                    <div class="col-lg-4 col-md-5 position-relative">
                        <div class="card shadow-lg">
                            <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                                <div class="d-block blur-shadow-image">
                                    <slot name="image"></slot>
                                </div>
                                <slot name="image-shadow"></slot>
                                <div
                                    v-if="venueLabel"
                                    class="card-ribbon"
                                    :class="`card-ribbon--${venue}`"
                                >
                                    <span class="card-ribbon__text">{{ venueLabel }}</span>
                                </div>
                            </div>
                            <div class="card-body">
                                <h2 class="mt-3 h4">
                                    <slot name="name"></slot>
                                </h2>
                            </div>
                        </div>                        
                    </div>
                    <div class="col-lg-8 col-md-7 z-index-2 position-relative px-md-2 px-sm-5 mt-sm-0 mt-4">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
