import { v4 } from 'uuid'

class Visitor {
    private readonly id: string
    private ip: string
    private nickname: string
    private pin: number

    private constructor(id: string, ip: string, nickname: string, pin: number) {
        this.id = id
        this.ip = ip
        this.nickname = nickname
        this.pin = pin;
    }

    public static create(ip: string, nickname: string, pin: number): Visitor {
        const id = v4()
        const visitor = new Visitor(id, ip, nickname, pin)
        return visitor
    }

    public getId(): string {
        return this.id;
    }

    public getPin(): number {
        return this.pin;
    }
}

export default Visitor
