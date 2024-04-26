import { defineComponent } from 'vue'

export interface ModalState {
  componentName: string
  isModalActive: boolean
  modalData: null | any
}

export interface Components {
  [key: string]: ReturnType<typeof defineComponent>
}
