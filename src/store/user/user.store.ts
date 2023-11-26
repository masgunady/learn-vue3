import { reactive } from "vue"

export interface IUser {
    id: number
    name: string
    email: string
}

interface IStateUser {
    list: {
        data: IUser[]
        isLoading: boolean
        isError: boolean
    },
    detail: {
        data: IUser | null
        isLoading: boolean
        isError: boolean
    }
}

export const state = reactive<IStateUser>({
    list: {
        data: [],
        isError: false,
        isLoading: false
    },
    detail: {
        data: null,
        isError: false,
        isLoading: false,
    }
})

export const actions = {
    listUserPending: () => {
        state.list.isLoading = true
    },
    listUSerError: () => {
        state.list.isError = true
    },
    listUserFulfilled: (data: IUser[]) => {
        state.list = {
            data,
            isError: false,
            isLoading: false
        }
    },
    detailUserPending: () => {
        state.list.isLoading = true
    },
    detailUSerError: () => {
        state.list.isError = true
    },
    detailUserFulfilled: (data: IUser) => {
        state.detail = {
            data,
            isError: false,
            isLoading: false
        }
    }
}