import { v4 } from 'uuid'

class Visitor {
  private readonly id: string
  private ip: string
  private nickname: string

  private constructor (id: string, ip: string, nickname: string) {
    this.id = id
    this.ip = ip
    this.nickname = nickname
  }

  public static create (nickname: string, ip: string): Visitor {
    const id = v4()
    const visitor = new Visitor(id, ip, nickname)
    return visitor
  }
}

export default Visitor
