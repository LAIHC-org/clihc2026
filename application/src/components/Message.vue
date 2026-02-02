<template>
    <div class="alert alert-warning col-md-8 m-auto" role="alert">
        <p>{{ $t('message.attention') }}</p>
        <p v-html="$t('message.deadline')"></p>
    </div>
</template>