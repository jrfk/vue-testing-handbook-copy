<template>
    <div>
        <span v-if="isAdmin">管理者権限を実行する</span>
        <span v-else>権限がありません</span>
        <button>
            {{ msg }}
        </button>
    </div>
</template>

<script>
    export default {
        name: "SubmitButton.vue",

        props: {
            msg:{
                type: String,
                required:true
            },
            isAdmin:{
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    button{
        background: #FFFFFF 0% 0% no-repeat padding-box;
        border: 1px solid #000000;
        border-radius: 4px;
        opacity: 1;
    }

</style>