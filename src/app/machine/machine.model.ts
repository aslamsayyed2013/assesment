export interface Response{
  status:string,
  data:string[]
}

export interface MachineResponse{
  status:string,
  data:Machine[]
}

export interface Machine{
  time:string,
  machine:string,
  data: Detail[]
}

export interface Detail{
  key:string,
  value:number
}
