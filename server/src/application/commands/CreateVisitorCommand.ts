import Visitor from '../../domain/entities/visitor';

class CreateVisitorCommands{

    private readonly id: string;
    private readonly ip: string;
    private readonly nickname: string;

    public constructor(id: string, ip: string, nickname:string) {
        this.id = id;
        this.ip = ip;
        this.nickname = nickname;
    }
    public getId(): string {
        return this.id;
    }
    public getIp(): string {
        return this.ip;
    }
    public getNickname(): string {
        return this.nickname;
    }
}
export default CreateVisitorCommands;