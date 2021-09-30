export const IfStatement = (arg: any) => {
    if (arg) return arg
}

export const RenderLogic = (arg1: any, arg2: any) => arg1 ? arg1 : arg2

export const StateLogic = (state: any, setState: any) => !state ? setState(true) : setState(false)