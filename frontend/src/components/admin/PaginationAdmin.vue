<template>
    <div class="pagination">
        <b-pagination v-model="currentPage" :total-rows="totalItems" :per-page="itemsPerPage" @change="pageChanged"
            align="center"></b-pagination>
    </div>
</template>

<script>
export default {
    props: {
        totalItems: {
            type: Number,
            required: true
        },
        itemsPerPage: {
            type: Number,
            default: 10
        }
    },
    data() {
        return {
            currentPage: 1
        };
    },
    methods: {
        pageChanged(page) {
            this.currentPage = page;
            this.$emit('page-changed', page);
        }
    }
};
</script>

<style scoped>
.pagination {
    margin: 20px 0;
}
</style>