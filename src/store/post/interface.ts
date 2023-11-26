export interface IPost {
    id?: number
    userId: number
    title: string
    body: string
}

export interface IPostState {
    list: {
        data: IPost[]
        isLoading: boolean
        isError: boolean
    },
    detail: {
        data: IPost | null
        isLoading: boolean
        isError: boolean
    }
}