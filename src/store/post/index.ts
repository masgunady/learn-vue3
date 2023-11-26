import { defineStore } from 'pinia'
import type { IPost, IPostState } from './interface'
import axios from 'axios'

export const usePostStore = defineStore('post', {
    state: ():IPostState => {
        return {
            list: {
                data: [],
                isError: false,
                isLoading: false
            },
            detail: {
                data: null,
                isError: false,
                isLoading:false
            }
        }
    },

    actions : {
        async getAll() {
            try {
                this.list.isLoading = true
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                this.list.data = response.data
            } catch (error) {
                this.list.isError = true
            } finally {
                this.list.isLoading = false
            }
        },
        async getDetail(postId:string){
            try {
                this.detail.isLoading = true
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts/"+postId)
                this.detail.data = response.data
            } catch (error) {
                this.detail.isError = true
            } finally {
                this.detail.isLoading = false
            }
        }
        ,
        async create(payload: IPost) {
            return await axios.post('https://jsonplaceholder.typicode.com/posts', payload)
        }
    },
    getters: {
        filterPost(state: IPostState){
            return (search: string) => 
            state.list.data.filter((item) => 
            item.title.toLowerCase().includes(search.toLowerCase()))
        },
        totalPost(state: IPostState) {
            return state.list.data.length *2
            
        }
    }
})