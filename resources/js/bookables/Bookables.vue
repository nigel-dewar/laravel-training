<template>
    <div v-if="bookables !== null">
        <BookablesListItem v-for="bookable in bookables" :key="bookable.title" :item-title="bookable.title" :item-content="bookable.content" :price="1000"></BookablesListItem>
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
            bookables: null
        }
    },
    created() {
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
        }, 2000);


    },
    mounted() {
        console.log('mounted')
    }
}
</script>
