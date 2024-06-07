import { CurrenrUserIntarface } from "src/app/shared/types/currentUserInterface"
import { BackendErrorsInterface } from "../../shared/types/BackendErrors.interface"

export interface AuthStateInterface {
    isSubmitting : boolean
    currentUser : CurrenrUserIntarface | null | undefined
    isLoading : boolean
    validationErrors : BackendErrorsInterface | null 
} 