<template>
    <div v-if="loading">
        Data is loading...
    </div>
    <div v-else>
        <BookablesListItem v-for="(bookable, index) in bookables" :key="index" :item-title="bookable.title" :item-content="bookable.content" :price="1000"></BookablesListItem>
    </div>
</template>

<script>
import BookablesListItem from './BookablesListItem'
export default {
    components: {
        BookablesListItem
    },
    data() {
        return {
            bookables: null,
            loading: false
        }
    },
    created() {
        this.loading = true;
        console.log('created')
        setTimeout(() => {

            this.bookables = [{
                title: 'cheap villa',
                content: 'a very cheap villa'
            },
            {
                title: 'a mediam villa',
                content: 'a medium price villa'
            }];
            this.loading = false;
        }, 2000);


    },
    mounted() {
        console.log('mounted')
    }
}
</script>
